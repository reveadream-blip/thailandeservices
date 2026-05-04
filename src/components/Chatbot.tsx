import React, { useEffect, useRef, useState } from 'react'
import { chatbotSubmitUrl } from '../config'

const questions = [
  { key: 'nom', question: 'Quel est votre nom ?', type: 'text' },
  { key: 'prenom', question: 'Quel est votre prénom ?', type: 'text' },
  { key: 'email', question: 'Quelle est votre adresse e-mail pour recevoir les informations ?', type: 'email' },
  {
    key: 'adresse',
    question:
      'Quelle est votre adresse actuelle en Thaïlande ou avez-vous prévu de vous expatrier en Thaïlande ?',
    type: 'textarea',
  },
  { key: 'visa', question: 'Quel type de visa avez-vous ou prévoyez-vous ?', type: 'text' },
  { key: 'age', question: 'Quel âge avez-vous ?', type: 'number' },
  {
    key: 'antecedents',
    question: 'Avez-vous des antécédents médicaux ? Si oui, veuillez les décrire.',
    type: 'textarea',
  },
] as const

const WELCOME =
  "Bonjour ! Je suis votre assistant virtuel pour les demandes d'assurance en Thaïlande. Appuyez sur 'Commencer' pour démarrer."

const Chatbot: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([
    { text: WELCOME, sender: 'bot' },
  ])
  const [isStarted, setIsStarted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedAnswers = localStorage.getItem('chatbot_answers')
    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers) as Record<string, string>)
      } catch {
        /* ignore */
      }
    }
    const savedQuestion = localStorage.getItem('chatbot_question')
    if (savedQuestion != null) {
      const n = parseInt(savedQuestion, 10)
      if (!Number.isNaN(n)) setCurrentQuestion(n)
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleStart = () => {
    setIsStarted(true)
    setMessages((prev) => [...prev, { text: questions[0].question, sender: 'bot' }])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || currentQuestion >= questions.length) return

    const q = questions[currentQuestion]
    const userText = input.trim()
    const newAnswers = { ...answers, [q.key]: userText }

    setMessages((prev) => [...prev, { text: userText, sender: 'user' }])
    setAnswers(newAnswers)
    setInput('')
    localStorage.setItem('chatbot_answers', JSON.stringify(newAnswers))

    const next = currentQuestion + 1
    setCurrentQuestion(next)
    localStorage.setItem('chatbot_question', String(next))

    if (next < questions.length) {
      setMessages((prev) => [...prev, { text: questions[next].question, sender: 'bot' }])
      return
    }

    const apiUrl = chatbotSubmitUrl()
    if (!apiUrl) {
      if (import.meta.env.DEV) {
        console.warn(
          '[Chatbot] Définir PUBLIC_CHATBOT_API_URL dans .env puis sur Cloudflare Pages (URL POST du Worker, ex. https://thailandeservices.<compte>.workers.dev/chatbot).',
        )
      }
      setMessages((prev) => [
        ...prev,
        {
          text: "Merci pour vos réponses ! Nous vous recontactons bientôt. Pour une réponse tout de suite, écrivez-nous sur WhatsApp.",
          sender: 'bot',
        },
      ])
      return
    }

    setIsSending(true)
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAnswers),
      })
      const json = (await res.json()) as { success?: boolean }
      if (res.ok && json.success) {
        setMessages((prev) => [
          ...prev,
          {
            text:
              "✅ Merci pour vos réponses ! Nous avons reçu votre demande d'assurance. Un email de confirmation a été envoyé à " +
              (newAnswers.email ?? '') +
              ' et nous vous contacterons bientôt.',
            sender: 'bot',
          },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          {
            text: "⚠️ Vos réponses sont enregistrées localement, mais l'envoi au serveur a échoué. Merci de réessayer plus tard ou de nous contacter via WhatsApp.",
            sender: 'bot',
          },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ Erreur réseau lors de l'envoi. Merci de réessayer ou de nous contacter via WhatsApp.",
          sender: 'bot',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setInput('')
    setMessages([{ text: WELCOME, sender: 'bot' }])
    setIsStarted(false)
    localStorage.removeItem('chatbot_answers')
    localStorage.removeItem('chatbot_question')
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
      <div style={{ padding: '12px 14px', borderBottom: '1px solid rgba(148, 163, 184, 0.2)' }}>
        <strong>Assistant Assurance</strong>
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
      {isStarted && currentQuestion < questions.length && (
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '12px',
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            background: '#0f172a',
          }}
        >
          {questions[currentQuestion].type === 'textarea' ? (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  void handleSubmit(e as unknown as React.FormEvent)
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
              type={questions[currentQuestion].type}
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
      {isStarted && currentQuestion >= questions.length && (
        <div style={{ padding: '12px', borderTop: '1px solid rgba(148, 163, 184, 0.2)' }}>
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
