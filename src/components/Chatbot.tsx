import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
  CHATBOT_WEB3FORMS_ACCESS_KEY,
  CONTACT,
  isConfiguredWeb3FormsAccessKey,
} from '../config'
import {
  getChatbotCopy,
  questionForPerson,
  storageKeyForLang,
  type PersonField,
} from '../i18n/chatbot-translations'
import type { Lang } from '../i18n/translations'
import { CHATBOT_OPEN_HASH, OPEN_CHATBOT_EVENT } from '../lib/chatbot-open'
import { parseWeb3FormsSubmitResponse } from '../lib/web3formsSubmit'

/** Sous ce seuil, le panneau démarre réduit (launcher) ; desktop reste ouvert par défaut. */
const MOBILE_MAX_WIDTH = '(max-width: 767px)'

function isMobileChatViewport(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(MOBILE_MAX_WIDTH).matches
}

type FlowPhase =
  | 'choose_household'
  | 'ask_count_many'
  | 'shared_email'
  | 'shared_adresse'
  | 'shared_visa'
  | 'person_fields'
  | 'shared_telephone'
  | 'done'
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

const PERSON_FIELDS: PersonField[] = ['nom', 'prenom', 'age', 'taille', 'poids', 'antecedents']

function personKeys(personIndex: number, field: PersonField): string {
  return `p${personIndex}_${field}`
}

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

function displayNameFromAnswers(
  answers: Record<string, string>,
  nb: number,
  copy: ReturnType<typeof getChatbotCopy>,
): string {
  const prenom = answers[personKeys(0, 'prenom')] ?? ''
  const nom = answers[personKeys(0, 'nom')] ?? ''
  const joined = `${prenom} ${nom}`.trim()
  if (joined) return joined
  if (nb > 1) return copy.displayFallbackMulti(nb)
  return copy.displayFallbackDefault
}

export interface ChatbotProps {
  lang: Lang
}

const Chatbot: React.FC<ChatbotProps> = ({ lang }) => {
  const copy = useMemo(() => getChatbotCopy(lang), [lang])
  const storageKey = useMemo(() => storageKeyForLang(lang), [lang])

  const keyMissingActionBlock = useMemo(() => {
    const adminLine = import.meta.env.DEV ? copy.missingKeyAdminDev : copy.missingKeyAdminProd
    return [`WhatsApp : ${CONTACT.waMeLink}`, '', copy.missingKeyContactLine, '', adminLine].join('\n')
  }, [copy])

  const [web3AccessKey, setWeb3AccessKey] = useState(readWeb3KeyForChatbot)
  const [phase, setPhase] = useState<FlowPhase>('choose_household')
  const [nbPersonnes, setNbPersonnes] = useState(1)
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0)
  const [currentPersonField, setCurrentPersonField] = useState<PersonField>('nom')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([
    { text: copy.welcome, sender: 'bot' },
  ])
  const [isStarted, setIsStarted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const answerFieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  const needsTextInput =
    isStarted &&
    (phase === 'ask_count_many' ||
      phase === 'shared_email' ||
      phase === 'shared_adresse' ||
      phase === 'shared_visa' ||
      phase === 'person_fields' ||
      phase === 'shared_telephone')

  useLayoutEffect(() => {
    if (isMobileChatViewport()) setMinimized(true)
  }, [])

  useEffect(() => {
    const open = () => setMinimized(false)
    const onHash = () => {
      if (window.location.hash === CHATBOT_OPEN_HASH) open()
    }
    window.addEventListener(OPEN_CHATBOT_EVENT, open)
    window.addEventListener('hashchange', onHash)
    if (window.location.hash === CHATBOT_OPEN_HASH) open()
    return () => {
      window.removeEventListener(OPEN_CHATBOT_EVENT, open)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

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
    setMessages([{ text: copy.welcome, sender: 'bot' }])
    setPhase('choose_household')
    setNbPersonnes(1)
    setCurrentPersonIndex(0)
    setCurrentPersonField('nom')
    setAnswers({})
    setInput('')
    setIsStarted(false)
    setIsSending(false)
  }, [lang, copy.welcome])

  useEffect(() => {
    const raw = localStorage.getItem(storageKey)
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
  }, [storageKey])

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
    localStorage.setItem(storageKey, JSON.stringify(payload))
  }, [phase, nbPersonnes, currentPersonIndex, currentPersonField, answers, messages, isStarted, storageKey])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, minimized])

  useLayoutEffect(() => {
    if (!needsTextInput || minimized || isSending) return
    answerFieldRef.current?.focus()
  }, [
    needsTextInput,
    phase,
    currentPersonIndex,
    currentPersonField,
    minimized,
    isSending,
    messages.length,
  ])

  const handleStart = () => {
    if (!isConfiguredWeb3FormsAccessKey(web3AccessKey)) {
      setIsStarted(true)
      setPhase('missing_key')
      setMessages((prev) => [...prev, { text: copy.missingKeyStart(keyMissingActionBlock), sender: 'bot' }])
      return
    }
    setIsStarted(true)
    setPhase('choose_household')
    setMessages((prev) => [...prev, { text: copy.householdQuestion, sender: 'bot' }])
  }

  const startSharedQuestions = (n: number, newAnswers: Record<string, string>) => {
    setNbPersonnes(n)
    setPhase('shared_email')
    setMessages((prev) => [
      ...prev,
      { text: n > 1 ? copy.introMulti(n) : copy.introSingle, sender: 'bot' },
      { text: copy.shared.email, sender: 'bot' },
    ])
    setAnswers(newAnswers)
  }

  const handleHouseholdChoice = (choice: 'one' | 'two' | 'three_plus') => {
    if (choice === 'one') {
      setMessages((prev) => [...prev, { text: copy.householdOneUser, sender: 'user' }])
      startSharedQuestions(1, answers)
      return
    }
    if (choice === 'two') {
      setMessages((prev) => [...prev, { text: copy.householdTwoUser, sender: 'user' }])
      startSharedQuestions(2, answers)
      return
    }
    setMessages((prev) => [...prev, { text: copy.householdThreePlusUser, sender: 'user' }])
    setPhase('ask_count_many')
    setMessages((prev) => [...prev, { text: copy.askCountMany, sender: 'bot' }])
  }

  const advancePersonField = (newAnswers: Record<string, string>) => {
    const fieldIdx = PERSON_FIELDS.indexOf(currentPersonField)
    if (fieldIdx < PERSON_FIELDS.length - 1) {
      const nextField = PERSON_FIELDS[fieldIdx + 1]
      setCurrentPersonField(nextField)
      setMessages((prev) => [
        ...prev,
        {
          text: questionForPerson(copy, nbPersonnes, currentPersonIndex, nextField),
          sender: 'bot',
        },
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
        { text: questionForPerson(copy, nbPersonnes, nextPi, 'nom'), sender: 'bot' },
      ])
      setAnswers(newAnswers)
      return
    }
    setPhase('shared_telephone')
    setMessages((prev) => [...prev, { text: copy.shared.telephone, sender: 'bot' }])
    setAnswers(newAnswers)
  }

  const finishWithSubmit = async (newAnswers: Record<string, string>) => {
    setAnswers(newAnswers)
    setPhase('done')

    if (!isConfiguredWeb3FormsAccessKey(web3AccessKey)) {
      setMessages((prev) => [
        ...prev,
        { text: copy.missingKeyAfter(keyMissingActionBlock), sender: 'bot' },
      ])
      window.setTimeout(() => setMinimized(true), 1200)
      return
    }

    setIsSending(true)
    try {
      const fd = new FormData()
      fd.append('access_key', web3AccessKey)
      fd.append('name', displayNameFromAnswers(newAnswers, nbPersonnes, copy))
      fd.append('email', newAnswers.email ?? '')
      fd.append('subject', copy.web3Subject)
      fd.append('from_name', copy.web3FromName)
      fd.append('message', copy.buildMessage(newAnswers, nbPersonnes))

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      })
      const text = await res.text()
      const parsed = parseWeb3FormsSubmitResponse(text)
      if (parsed.success) {
        setMessages((prev) => [...prev, { text: copy.successMessage, sender: 'bot' }])
        window.setTimeout(() => setMinimized(true), 1800)
      } else {
        const parts: string[] = []
        if (parsed.message) parts.push(parsed.message)
        if (!res.ok) parts.push(`HTTP ${res.status}`)
        else if (!parsed.message && text.trim()) parts.push(text.trim().slice(0, 120))
        const detail = parts.length ? ` (${parts.join(', ')})` : ''
        setMessages((prev) => [...prev, { text: copy.submitFailed(detail), sender: 'bot' }])
      }
    } catch {
      setMessages((prev) => [...prev, { text: copy.networkError, sender: 'bot' }])
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
          { text: copy.countMinError, sender: 'bot' },
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
          { text: copy.emailInvalid, sender: 'bot' },
        ])
        setInput('')
        return
      }
      const newAnswers = { ...answers, email: userText }
      setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
      setInput('')
      setPhase('shared_adresse')
      setAnswers(newAnswers)
      setMessages((prev) => [...prev, { text: copy.shared.adresse, sender: 'bot' }])
      return
    }

    if (phase === 'shared_adresse') {
      const newAnswers = { ...answers, adresse: userText }
      setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
      setInput('')
      setPhase('shared_visa')
      setAnswers(newAnswers)
      setMessages((prev) => [...prev, { text: copy.shared.visa, sender: 'bot' }])
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
        { text: questionForPerson(copy, nbPersonnes, 0, 'nom'), sender: 'bot' },
      ])
      return
    }

    if (phase === 'shared_telephone') {
      const digits = userText.replace(/\D/g, '')
      if (userText.trim().length < 6 || digits.length < 6) {
        setMessages((prev) => [
          ...prev,
          { text: userText, sender: 'user' },
          { text: copy.phoneInvalid, sender: 'bot' },
        ])
        setInput('')
        return
      }
      const newAnswers = { ...answers, telephone: userText.trim() }
      setMessages((prev) => [...prev, { text: userText.trim(), sender: 'user' }])
      setInput('')
      void finishWithSubmit(newAnswers)
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
    setMessages([{ text: copy.welcome, sender: 'bot' }])
    setIsStarted(false)
    setMinimized(isMobileChatViewport())
    localStorage.removeItem(storageKey)
    localStorage.removeItem('chatbot_answers')
    localStorage.removeItem('chatbot_question')
  }

  const inputType =
    phase === 'shared_email'
      ? 'email'
      : phase === 'shared_telephone'
        ? 'tel'
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
        className="chatbot-launcher"
        onClick={() => setMinimized(false)}
        aria-expanded={false}
        aria-label={copy.launcherAria}
        style={{
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        <span aria-hidden>💬</span>
        {copy.launcherLabel}
      </button>
    )
  }

  return (
    <div className="chatbot-panel">
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
        <strong style={{ fontSize: '14px' }}>{copy.panelTitle}</strong>
        <button
          type="button"
          onClick={() => setMinimized(true)}
          aria-label={copy.minimizeAria}
          title={copy.minimizeTitle}
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
              <p
                style={{
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  lineHeight: '1.5',
                  color: '#ffffff',
                }}
              >
                {msg.text}
              </p>
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
            {copy.startButton}
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
            {copy.householdOne}
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
            {copy.householdTwo}
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
            {copy.householdThreePlus}
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
              ref={answerFieldRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  formRef.current?.requestSubmit()
                }
              }}
              placeholder={copy.placeholder}
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
              ref={answerFieldRef}
              type={inputType}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={copy.placeholder}
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
            {isSending ? copy.sending : copy.send}
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
            {copy.minimizeWindow}
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
            {copy.restart}
          </button>
        </div>
      )}
    </div>
  )
}

export default Chatbot
