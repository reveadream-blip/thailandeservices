import React, { useState, useEffect, useRef } from 'react';

const questions = [
  { key: 'nom', question: 'Quel est votre nom ?', type: 'text' },
  { key: 'prenom', question: 'Quel est votre prénom ?', type: 'text' },
  { key: 'adresse', question: 'Quelle est votre adresse actuelle en Thaïlande ou avez-vous prévu de vous expatrier en Thaïlande ?', type: 'textarea' },
  { key: 'visa', question: 'Quel type de visa avez-vous ou prévoyez-vous ?', type: 'text' },
  { key: 'age', question: 'Quel âge avez-vous ?', type: 'number' },
  { key: 'antecedents', question: 'Avez-vous des antécédents médicaux ? Si oui, veuillez les décrire.', type: 'textarea' },
  // Add more questions as needed
];

const Chatbot: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([]);
  const [isStarted, setIsStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        text: "Bonjour ! Je suis votre assistant virtuel pour les demandes d'assurance en Thaïlande. Appuyez sur 'Commencer' pour démarrer.",
        sender: 'bot',
      },
    ]);

    // Load from localStorage
    const savedAnswers = localStorage.getItem('chatbot_answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    const savedQuestion = localStorage.getItem('chatbot_question');
    if (savedQuestion) {
      setCurrentQuestion(parseInt(savedQuestion));
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isStarted && currentQuestion < questions.length) {
      setMessages(prev => [...prev, { text: questions[currentQuestion].question, sender: 'bot' }]);
    } else if (isStarted && currentQuestion >= questions.length) {
      setMessages(prev => [...prev, { text: 'Merci pour vos réponses. Nous allons traiter votre demande d\'assurance.', sender: 'bot' }]);
      // Send data to backend
      fetch('https://thailandeservices.contact-applimanagement.workers.dev/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      }).catch(console.error);
    }
  }, [currentQuestion, isStarted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newAnswers = { ...answers, [questions[currentQuestion].key]: input };
      setAnswers(newAnswers);
      setMessages(prev => [...prev, { text: input, sender: 'user' }]);
      localStorage.setItem('chatbot_answers', JSON.stringify(newAnswers));
      setInput('');
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      localStorage.setItem('chatbot_question', nextQuestion.toString());
    }
  };

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
                color: msg.sender === 'user' ? '#f8fafc' : '#e2e8f0',
                padding: '10px 12px',
                borderRadius: '16px',
                borderTopLeftRadius: msg.sender === 'user' ? '16px' : '4px',
                borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px',
              }}
            >
              <p style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {!isStarted && (
        <div style={{ padding: '12px', borderTop: '1px solid rgba(148, 163, 184, 0.2)' }}>
          <button
            onClick={() => setIsStarted(true)}
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
        <form onSubmit={handleSubmit} style={{ padding: '12px', borderTop: '1px solid rgba(148, 163, 184, 0.2)', background: '#0f172a' }}>
          {questions[currentQuestion].type === 'textarea' ? (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as any);
                }
              }}
              placeholder="Votre réponse..."
              style={{ width: '100%', padding: '10px', height: '70px', borderRadius: '12px', border: '1px solid rgba(148, 163, 184, 0.3)', background: '#111827', color: '#f8fafc' }}
            />
          ) : (
            <input
              type={questions[currentQuestion].type}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre réponse..."
              style={{ width: '100%', padding: '10px', borderRadius: '12px', border: '1px solid rgba(148, 163, 184, 0.3)', background: '#111827', color: '#f8fafc' }}
            />
          )}
          <button
            type="submit"
            style={{
              marginTop: '10px',
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
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

export default Chatbot;