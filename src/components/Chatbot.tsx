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
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'bot' | 'user' }>>([{ text: 'Bonjour ! Je suis votre assistant virtuel pour les demandes d\'assurance en Thaïlande. Je vais vous poser quelques questions pour mieux vous aider.', sender: 'bot' }]);
  const [isStarted, setIsStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '300px', height: '400px', border: '1px solid #ccc', background: 'white', zIndex: 1000 }}>
      <div style={{ height: '350px', overflowY: 'scroll', padding: '10px' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {messages.length > 0 && !isStarted && (
        <div style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
          <button onClick={() => setIsStarted(true)} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>Commencer</button>
        </div>
      )}
      {isStarted && currentQuestion < questions.length && (
        <form onSubmit={handleSubmit} style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
          {questions[currentQuestion].type === 'textarea' ? (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSubmit(e as any); } }}
              placeholder="Votre réponse..."
              style={{ width: '100%', padding: '5px', height: '60px' }}
            />
          ) : (
            <input
              type={questions[currentQuestion].type}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre réponse..."
              style={{ width: '100%', padding: '5px' }}
            />
          )}
          <button type="submit" style={{ marginTop: '5px' }}>Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default Chatbot;