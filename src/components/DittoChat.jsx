import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DittoAvatar from './DittoAvatar.jsx';
import Icon from './Icon.jsx';

const QUICK_ACTIONS = [
  { label: 'Explore Our Services', question: 'What services does DTI Technologies offer?' },
  { label: 'About DTI', question: 'Tell me about DTI Technologies.' },
  { label: 'Our Portfolio', question: 'What is in your portfolio?' },
  { label: 'Contact Us', question: 'How can I contact DTI Technologies?' },
];

const WELCOME =
  "Hi, I'm Ditto 👋\n\nI'm the AI assistant for DTI Technologies.\n\nHow can I help you today?";

export default function DittoChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const send = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setError(false);
    const history = [...messages, { role: 'user', text: trimmed }];
    setMessages(history);
    setInput('');
    setTyping(true);

    try {
      const response = await fetch('/api/ditto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.slice(-12).map((m) => ({
            role: m.role === 'ditto' ? 'assistant' : 'user',
            content: m.text,
          })),
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'Request failed');
      }
      setMessages((current) => [...current, { role: 'ditto', text: data.reply }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'ditto',
          text: "Sorry, I'm having trouble connecting right now. Please try again or contact our team.",
        },
      ]);
      setError(true);
    } finally {
      setTyping(false);
    }
  };

  const quickAction = (action) => {
    send(action.question);
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {!open ? (
        <div className="ditto-hint" aria-hidden="false">
          <strong>Hi! Need help?</strong>
        </div>
      ) : null}

      <button
        type="button"
        className="ditto-launcher"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open Ditto AI Assistant"
        aria-expanded={open}
      >
        <DittoAvatar size={42} />
      </button>

      {open ? (
        <div className="ditto-panel" role="dialog" aria-label="Ditto AI Assistant chat">
          <header className="ditto-panel__header">
            <DittoAvatar size={44} />
            <div className="ditto-panel__identity">
              <strong>Ditto</strong>
              <span>AI Assistant · DTI Technologies</span>
            </div>
            <button
              type="button"
              className="ditto-panel__iconbtn"
              onClick={() => setMessages([])}
              aria-label="Clear conversation"
              title="Clear conversation"
            >
              <Icon name="refresh" size={17} />
            </button>
            <button
              type="button"
              className="ditto-panel__iconbtn"
              onClick={() => setOpen(false)}
              aria-label="Close Ditto chat"
            >
              <span aria-hidden="true" style={{ fontSize: '1.1rem', lineHeight: 1 }}>×</span>
            </button>
          </header>

          <div className="ditto-panel__body" ref={scrollRef}>
            {messages.length === 0 ? (
              <div className="ditto-welcome">
                <DittoAvatar size={56} />
                <p className="ditto-welcome__text">{WELCOME}</p>
                <div className="ditto-quick">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.label}
                      type="button"
                      className="ditto-quick__btn"
                      onClick={() => quickAction(action)}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`ditto-msg ditto-msg--${message.role}`}>
                  {message.role === 'ditto' ? <DittoAvatar size={28} /> : null}
                  <div className="ditto-msg__bubble">
                    {message.text.split('\n').map((line, lineIndex) => (
                      <p key={lineIndex}>{line || ' '}</p>
                    ))}
                    {message.text.includes('/') ? (
                      <Link className="ditto-msg__link" to={message.text.match(/\/[a-z-/]+/)?.[0] ?? '/'}>
                        Open page →
                      </Link>
                    ) : null}
                  </div>
                </div>
              ))
            )}

            {typing ? (
              <div className="ditto-msg ditto-msg--ditto">
                <DittoAvatar size={28} />
                <div className="ditto-msg__bubble ditto-typing" aria-label="Ditto is typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            ) : null}

            {error ? (
              <p className="ditto-error" role="alert">
                Something went wrong. Please try again or contact us at /contact.
              </p>
            ) : null}
          </div>

          <footer className="ditto-panel__input">
            <textarea
              ref={inputRef}
              rows={1}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Message Ditto..."
              aria-label="Message Ditto"
            />
            <button
              type="button"
              className="ditto-send"
              onClick={() => send(input)}
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Icon name="send" size={17} />
            </button>
          </footer>
        </div>
      ) : null}
    </>
  );
}
