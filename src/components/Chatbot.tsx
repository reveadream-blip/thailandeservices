import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  CHATBOT_WEB3FORMS_ACCESS_KEY,
  CONTACT,
  isConfiguredWeb3FormsAccessKey,
} from '../config'

const WELCOME =
  "Bonjour ! Je suis votre assistant virtuel pour les demandes d'assurance en Thaïlande. Appuyez sur 'Commencer' pour démarrer."

const STORAGE_KEY = 'chatbot_v2_state'

type PersonField = 'nom' | 'prenom' | 'age' | 'antecedents'

type FlowPhase =
  | 'choose_household'
  | 'ask_count_many'
  | 'shared_email'
  | 'shared_adresse'
  | 'shared_visa'
  | 'person_fields'
  | 'done'
  /** Clé Web3Forms absente au build (ex. variable non définie sur Cloudflare Pages). */
  | 'missing_key'

type PersistedState = {
  phase: FlowPhase
  nbPersonnes: number
  currentPersonIndex: number
  currentPersonField: PersonField
  answers: Record<string, string>
  messages: Array<{ text: string; sender: 'bot' | 'user' }>
  isStarted: boolean
}

const PERSON_FIELDS: PersonField[] = ['nom', 'prenom', 'age', 'antecedents']

const SHARED_LABELS = {
  email: 'Quelle est votre adresse e-mail pour recevoir les informations ?',
  adresse:
    'Quelle est votre adresse actuelle en Thaïlande ou avez-vous prévu de vous expatrier en Thaïlande ?',
  visa: 'Quel type de visa avez-vous ou prévoyez-vous (pour le foyer / la situation principale) ?',
} as const

function personKeys(personIndex: number, field: PersonField): string {
  return `p${personIndex}_${field}`
}

function questionForPerson(nb: number, personIndex: number, field: PersonField): string {
  const n = personIndex + 1
  const prefix = nb > 1 ? `Personne ${n} sur ${nb} — ` : ''
  switch (field) {
    case 'nom':
      return `${prefix}Quel est le nom de famille ?`
    case 'prenom':
      return `${prefix}Quel est le prénom ?`
    case 'age':
      return `${prefix}Quel âge cette personne a-t-elle ?`
    case 'antecedents':
      return `${prefix}A-t-elle des antécédents médicaux ? Si oui, veuillez les décrire.`
    default:
      return ''
  }
}

/**
 * Clé embarquée au build + repli sur le champ caché du formulaire contact (même page d’accueil),
 * utile si une variable Cloudflare « chatbot » est invalide ou si un vieux bundle JS est en cache.
 */
function readWeb3KeyForChatbot(): string {
  if (typeof window === 'undefined') return CHATBOT_WEB3FORMS_ACCESS_KEY
  if (isConfiguredWeb3FormsAccessKey(CHATBOT_WEB3FORMS_ACCESS_KEY)) {
    return CHATBOT_WEB3FORMS_ACCESS_KEY
  }
  const el = document.querySelector('#contact-form input[name="access_key"]') as HTMLInputElement | null
  const fromDom = el?.value?.trim() ?? ''
  if (isConfiguredWeb3FormsAccessKey(fromDom)) return fromDom
  const meta = document.querySelector('meta[name="web3forms-access-key"]')?.getAttribute('content')?.trim() ?? ''
  if (isConfiguredWeb3FormsAccessKey(meta)) return meta
  return CHATBOT_WEB3FORMS_ACCESS_KEY
}

/** Bloc commun : comment joindre le site + rappel config (détail selon dev / prod). */
function keyMissingActionBlock(): string {
  const adminLine = import.meta.env.DEV
    ? '[Développement] Ajoutez PUBLIC_WEB3FORMS_ACCESS_KEY (ou PUBLIC_CHATBOT_WEB3FORMS_ACCESS_KEY) dans .env, ou sur Cloudflare Pages — le nom doit commencer par PUBLIC_, puis redéployez.'
    : 'Si vous gérez le site : Cloudflare Pages → Settings → Environment variables → ajoutez PUBLIC_WEB3FORMS_ACCESS_KEY (même valeur que Web3Forms), puis relancez un déploiement.'
  return [
    `WhatsApp : ${CONTACT.waMeLink}`,
    '',
    'Formulaire « Contact » en bas de la page.',
    '',
    adminLine,
  ].join('\n')
}

function missingKeyAtStartText(): string {
  return (
    "L’assistant ne peut pas encore envoyer une demande automatiquement depuis cette version du site.\n\n" + keyMissingActionBlock()
  )
}

function missingKeyAfterFlowText(): string {
  return (
    "Merci pour vos réponses ! Nous n’avons pas pu envoyer le dossier depuis l’assistant.\n\n" + keyMissingActionBlock()
  )
}

function buildChatbotMessage(answers: Record<string, string>, nbPersonnes: number): string {
  const lines: string[] = ["Nouvelle demande d'assurance (chatbot)", '', `Nombre de personnes à assurer : ${nbPersonnes}`, '']

  lines.push('— Coordonnées et situation —')
  lines.push(`Email : ${answers.email ?? ''}`)
  lines.push(`Adresse / expatriation : ${answers.adresse ?? ''}`)
  lines.push(`Visa : ${answers.visa ?? ''}`)
  lines.push('')

  for (let i = 0; i < nbPersonnes; i++) {
    lines.push(`— Personne ${i + 1} —`)
    lines.push(`Nom : ${answers[personKeys(i, 'nom')] ?? ''}`)
    lines.push(`Prénom : ${answers[personKeys(i, 'prenom')] ?? ''}`)
    lines.push(`Âge : ${answers[personKeys(i, 'age')] ?? ''}`)
    lines.push(`Antécédents : ${answers[personKeys(i, 'antecedents')] ?? ''}`)
    lines.push('')
  }

  return lines.join('\n').trimEnd()
}

function displayNameFromAnswers(answers: Record<string, string>, nb: number): string {
  const prenom = answers[personKeys(0, 'prenom')] ?? ''
  const nom = answers[personKeys(0, 'nom')] ?? ''
  const joined = `${prenom} ${nom}`.trim()
  if (joined) return joined
  if (nb > 1) return `Demande ${nb} personnes`
  return 'Chatbot'
}

const Chatbot: React.FC = () => {
  const [web3AccessKey, setWeb3AccessKey] = useState(readWeb3KeyForChatbot)
  const [phase, setPhase] = useState<FlowPhase>('choose_household')
  const [nbPersonnes, setNbPersonnes] = useState(1)
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0)
  const [currentPersonField, setCurrentPersonField] = useState<PersonField>('nom')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([
    { text: WELCOME, sender: 'bot' },
  ])
  const [isStarted, setIsStarted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const needsTextInput =
    isStarted &&
    (phase === 'ask_count_many' ||
      phase === 'shared_email' ||
      phase === 'shared_adresse' ||
      phase === 'shared_visa' ||
      phase === 'person_fields')

  useLayoutEffect(() => {
    if (isConfiguredWeb3FormsAccessKey(web3AccessKey)) return
    const el = document.querySelector('#contact-form input[name="access_key"]') as HTMLInputElement | null
    const fromDom = el?.value?.trim() ?? ''
    if (isConfiguredWeb3FormsAccessKey(fromDom)) {
      setWeb3AccessKey(fromDom)
      return
    }
    const meta = document.querySelector('meta[name="web3forms-access-key"]')?.getAttribute('content')?.trim() ?? ''
    if (isConfiguredWeb3FormsAccessKey(meta)) setWeb3AccessKey(meta)
  }, [web3AccessKey])

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    try {
      const s = JSON.parse(raw) as PersistedState
      if (s.messages?.length) setMessages(s.messages)
      if (s.answers && typeof s.answers === 'object') setAnswers(s.answers)
      if (typeof s.isStarted === 'boolean') setIsStarted(s.isStarted)
      if (s.phase) setPhase(s.phase)
      if (typeof s.nbPersonnes === 'number' && s.nbPersonnes >= 1) setNbPersonnes(s.nbPersonnes)
      if (typeof s.currentPersonIndex === 'number') setCurrentPersonIndex(s.currentPersonIndex)
      if (s.currentPersonField) setCurrentPersonField(s.currentPersonField)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (!isStarted) return
    const payload: PersistedState = {
      phase,
      nbPersonnes,
      currentPersonIndex,
      currentPersonField,
      answers,
      messages,
      isStarted,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [phase, nbPersonnes, currentPersonIndex, currentPersonField, answers, messages, isStarted])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, minimized])

  const handleStart = () => {
    if (!isConfiguredWeb3FormsAccessKey(web3AccessKey)) {
      setIsStarted(true)
      setPhase('missing_key')
      setMessages((prev) => [...prev, { text: missingKeyAtStartText(), sender: 'bot' }])
      return
    }
    setIsStarted(true)
    setPhase('choose_household')
    setMessages((prev) => [
      ...prev,
      {
        text: 'Souhaitez-vous une assurance pour une seule personne ou pour plusieurs personnes ?',
        sender: 'bot',
      },
    ])
  }

  const startSharedQuestions = (n: number, newAnswers: Record<string, string>) => {
    setNbPersonnes(n)
    setPhase('shared_email')
    setMessages((prev) => [
      ...prev,
      {
        text:
          n > 1
            ? `Très bien. Nous allons d’abord recueillir l’e-mail, l’adresse et le type de visa (communs au dossier), puis pour chacune des ${n} personnes : nom, prénom, âge et antécédents médicaux.`
            : 'Parfait. Nous allons d’abord recueillir vos coordonnées (e-mail, adresse, visa), puis votre nom, prénom, âge et antécédents médicaux.',
        sender: 'bot',
      },
      { text: SHARED_LABELS.email, sender: 'bot' },
    ])
    setAnswers(newAnswers)
  }

  const handleHouseholdChoice = (choice: 'one' | 'two' | 'three_plus') => {
    if (choice === 'one') {
      setMessages((prev) => [...prev, { text: 'Une seule personne', sender: 'user' }])
      startSharedQuestions(1, answers)
      return
    }
    if (choice === 'two') {
      setMessages((prev) => [...prev, { text: 'Deux personnes', sender: 'user' }])
      startSharedQuestions(2, answers)
      return
    }
    setMessages((prev) => [...prev, { text: 'Trois personnes ou plus', sender: 'user' }])
    setPhase('ask_count_many')
    setMessages((prev) => [
      ...prev,
      {
        text: 'Combien de personnes souhaitez-vous assurer au total ? (indiquez un nombre, minimum 3)',
        sender: 'bot',
      },
    ])
  }

  const advancePersonField = (newAnswers: Record<string, string>) => {
    const fieldIdx = PERSON_FIELDS.indexOf(currentPersonField)
    if (fieldIdx < PERSON_FIELDS.length - 1) {
      const nextField = PERSON_FIELDS[fieldIdx + 1]
      setCurrentPersonField(nextField)
      setMessages((prev) => [
        ...prev,
        { text: questionForPerson(nbPersonnes, currentPersonIndex, nextField), sender: 'bot' },
      ])
      setAnswers(newAnswers)
      return
    }
    if (currentPersonIndex < nbPersonnes - 1) {
      const nextPi = currentPersonIndex + 1
      setCurrentPersonIndex(nextPi)
      setCurrentPersonField('nom')
      setMessages((prev) => [
        ...prev,
        { text: questionForPerson(nbPersonnes, nextPi, 'nom'), sender: 'bot' },
      ])
      setAnswers(newAnswers)
      return
    }
    finishWithSubmit(newAnswers)
  }

  const finishWithSubmit = async (newAnswers: Record<string, string>) => {
    setAnswers(newAnswers)
    setPhase('done')

    if (!isConfiguredWeb3FormsAccessKey(web3AccessKey)) {
      setMessages((prev) => [
        ...prev,
        {
          text: missingKeyAfterFlowText(),
          sender: 'bot',
        },
      ])
      window.setTimeout(() => setMinimized(true), 1200)
      return
    }

    setIsSending(true)
    try {
      const fd = new FormData()
      fd.append('access_key', web3AccessKey)
      fd.append('name', displayNameFromAnswers(newAnswers, nbPersonnes))
      fd.append('email', newAnswers.email ?? '')
      fd.append('subject', "Demande d'assurance — assistant chatbot")
      fd.append('from_name', 'Thailande-services — chatbot assurance')
      fd.append('message', buildChatbotMessage(newAnswers, nbPersonnes))

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      })
      const text = await res.text()
      let json: { success?: boolean; message?: string } = {}
      try {
        json = JSON.parse(text) as { success?: boolean; message?: string }
      } catch {
        /* ignore */
      }
      if (json.success) {
        setMessages((prev) => [
          ...prev,
          {
            text:
              "✅ Merci pour vos réponses ! Nous avons bien reçu votre demande d'assurance. Nous vous contacterons bientôt. Vous pouvez réduire cette fenêtre.",
            sender: 'bot',
          },
        ])
        window.setTimeout(() => setMinimized(true), 1800)
      } else {
        const detail = json.message ? ` (${json.message})` : ''
        setMessages((prev) => [
          ...prev,
          {
            text: `⚠️ L'envoi a échoué.${detail} Merci de réessayer ou de nous écrire sur WhatsApp.`,
            sender: 'bot',
          },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ Erreur réseau. Merci de réessayer ou de nous contacter via WhatsApp.",
          sender: 'bot',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || !needsTextInput) return
    const userText = input.trim()

    if (phase === 'ask_count_many') {
      const n = parseInt(userText, 10)
      if (Number.isNaN(n) || n < 3) {
        setMessages((prev) => [
          ...prev,
          { text: userText, sender: 'user' },
          { text: 'Merci d’indiquer un nombre entier au moins égal à 3.', sender: 'bot' },
        ])
        setInput('')
        return
      }
      setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
      setInput('')
      startSharedQuestions(n, answers)
      return
    }

    if (phase === 'shared_email') {
      if (!userText.includes('@')) {
        setMessages((prev) => [
          ...prev,
          { text: userText, sender: 'user' },
          { text: 'Cette adresse ne semble pas valide. Merci d’indiquer une adresse e-mail correcte.', sender: 'bot' },
        ])
        setInput('')
        return
      }
      const newAnswers = { ...answers, email: userText }
      setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
      setInput('')
      setPhase('shared_adresse')
      setAnswers(newAnswers)
      setMessages((prev) => [...prev, { text: SHARED_LABELS.adresse, sender: 'bot' }])
      return
    }

    if (phase === 'shared_adresse') {
      const newAnswers = { ...answers, adresse: userText }
      setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
      setInput('')
      setPhase('shared_visa')
      setAnswers(newAnswers)
      setMessages((prev) => [...prev, { text: SHARED_LABELS.visa, sender: 'bot' }])
      return
    }

    if (phase === 'shared_visa') {
      const newAnswers = { ...answers, visa: userText }
      setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
      setInput('')
      setPhase('person_fields')
      setCurrentPersonIndex(0)
      setCurrentPersonField('nom')
      setAnswers(newAnswers)
      setMessages((prev) => [
        ...prev,
        { text: questionForPerson(nbPersonnes, 0, 'nom'), sender: 'bot' },
      ])
      return
    }

    if (phase === 'person_fields') {
      const key = personKeys(currentPersonIndex, currentPersonField)
      const newAnswers = { ...answers, [key]: userText }
      setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
      setInput('')
      advancePersonField(newAnswers)
    }
  }

  const handleReset = () => {
    setPhase('choose_household')
    setNbPersonnes(1)
    setCurrentPersonIndex(0)
    setCurrentPersonField('nom')
    setAnswers({})
    setInput('')
    setMessages([{ text: WELCOME, sender: 'bot' }])
    setIsStarted(false)
    setMinimized(false)
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem('chatbot_answers')
    localStorage.removeItem('chatbot_question')
  }

  const inputType =
    phase === 'shared_email'
      ? 'email'
      : phase === 'person_fields' && currentPersonField === 'age'
        ? 'number'
        : 'text'

  const useTextarea =
    phase === 'shared_adresse' ||
    (phase === 'person_fields' && currentPersonField === 'antecedents')

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        aria-expanded={false}
        aria-label="Ouvrir l’assistant assurance"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '12px 18px',
          borderRadius: '999px',
          border: '1px solid rgba(148, 163, 184, 0.35)',
          background: '#0f172a',
          color: '#f8fafc',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 12px 32px rgba(15, 23, 42, 0.35)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span aria-hidden>💬</span>
        Assistant assurance
      </button>
    )
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '320px',
        height: '420px',
        borderRadius: '18px',
        border: '1px solid rgba(15, 23, 42, 0.15)',
        background: '#0f172a',
        color: '#f8fafc',
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.25)',
        zIndex: 1000,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          padding: '10px 12px',
          borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <strong style={{ fontSize: '14px' }}>Assistant Assurance</strong>
        <button
          type="button"
          onClick={() => setMinimized(true)}
          aria-label="Réduire le chat"
          title="Réduire"
          style={{
            flexShrink: 0,
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            border: '1px solid rgba(148, 163, 184, 0.35)',
            background: '#1e293b',
            color: '#f8fafc',
            cursor: 'pointer',
            fontSize: '18px',
            lineHeight: 1,
          }}
        >
          −
        </button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px', background: '#111827' }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                maxWidth: '80%',
                background: msg.sender === 'user' ? '#2563eb' : '#1f2937',
                color: '#ffffff',
                padding: '10px 12px',
                borderRadius: '16px',
                borderTopLeftRadius: msg.sender === 'user' ? '16px' : '4px',
                borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
              }}
            >
              <p style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: '1.5', color: '#ffffff' }}>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {!isStarted && (
        <div style={{ padding: '12px', borderTop: '1px solid rgba(148, 163, 184, 0.2)' }}>
          <button
            type="button"
            onClick={handleStart}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '999px',
              border: 'none',
              background: '#38bdf8',
              color: '#0f172a',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Commencer
          </button>
        </div>
      )}
      {isStarted && phase === 'choose_household' && (
        <div
          style={{
            padding: '12px',
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <button
            type="button"
            onClick={() => handleHouseholdChoice('one')}
            style={{
              padding: '10px 12px',
              borderRadius: '12px',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              background: '#0c4a6e',
              color: '#e0f2fe',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Une seule personne
          </button>
          <button
            type="button"
            onClick={() => handleHouseholdChoice('two')}
            style={{
              padding: '10px 12px',
              borderRadius: '12px',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              background: '#0c4a6e',
              color: '#e0f2fe',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Deux personnes
          </button>
          <button
            type="button"
            onClick={() => handleHouseholdChoice('three_plus')}
            style={{
              padding: '10px 12px',
              borderRadius: '12px',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              background: '#0c4a6e',
              color: '#e0f2fe',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Trois personnes ou plus
          </button>
        </div>
      )}
      {needsTextInput && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            padding: '12px',
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            background: '#0f172a',
          }}
        >
          {useTextarea ? (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  formRef.current?.requestSubmit()
                }
              }}
              placeholder="Votre réponse..."
              disabled={isSending}
              style={{
                width: '100%',
                padding: '10px',
                height: '70px',
                borderRadius: '12px',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                background: '#111827',
                color: '#f8fafc',
              }}
            />
          ) : (
            <input
              type={inputType}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre réponse..."
              disabled={isSending}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '12px',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                background: '#111827',
                color: '#f8fafc',
              }}
            />
          )}
          <button
            type="submit"
            disabled={isSending}
            style={{
              marginTop: '10px',
              width: '100%',
              padding: '10px 12px',
              borderRadius: '999px',
              border: 'none',
              background: '#38bdf8',
              color: '#0f172a',
              fontWeight: '700',
              cursor: isSending ? 'wait' : 'pointer',
              opacity: isSending ? 0.7 : 1,
            }}
          >
            {isSending ? 'Envoi…' : 'Envoyer'}
          </button>
        </form>
      )}
      {isStarted && (phase === 'done' || phase === 'missing_key') && (
        <div style={{ padding: '12px', borderTop: '1px solid rgba(148, 163, 184, 0.2)' }}>
          <button
            type="button"
            onClick={() => setMinimized(true)}
            style={{
              width: '100%',
              padding: '8px 12px',
              marginBottom: '8px',
              borderRadius: '999px',
              border: '1px solid rgba(148, 163, 184, 0.35)',
              background: '#1e293b',
              color: '#f8fafc',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Réduire la fenêtre
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '999px',
              border: 'none',
              background: '#38bdf8',
              color: '#0f172a',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Recommencer
          </button>
        </div>
      )}
    </div>
  )
}

export default Chatbot
