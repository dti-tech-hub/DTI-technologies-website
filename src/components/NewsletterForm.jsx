import { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateNewsletter } from '../utils/validation.js';
import { simulateSubmit } from '../utils/form.js';
import Icon from './Icon.jsx';

const INITIAL = { email: '' };

export default function NewsletterForm({ idPrefix = 'newsletter' }) {
  const [values, setValues] = useState(INITIAL);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (event) => {
    setValues({ email: event.target.value });
    if (error) setError(null);
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateNewsletter(values.email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');
    try {
      await simulateSubmit({ delay: 900 });
      setStatus('success');
      setValues(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="newsletter__status newsletter__status--success" role="status" aria-live="polite">
        <Icon name="check-circle" size={16} />
        You’re subscribed. Demo only — no data is stored.
      </p>
    );
  }

  return (
    <form className="newsletter" onSubmit={handleSubmit} noValidate>
      <div className="newsletter__form">
        <div className="field" style={{ flex: '1 1 220px' }}>
          <label className="sr-only" htmlFor={`${idPrefix}-email`}>
            Email address
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            className="field__control"
            placeholder="Work email address"
            value={values.email}
            onChange={handleChange}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={error ? `${idPrefix}-error` : undefined}
            autoComplete="email"
          />
        </div>
        <button
          type="submit"
          className="btn btn--primary"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? <span className="btn__spinner" aria-hidden="true" /> : null}
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>

      {error ? (
        <span className="newsletter__status newsletter__status--error" id={`${idPrefix}-error`} role="alert">
          <Icon name="alert" size={15} />
          {error}
        </span>
      ) : null}

      {status === 'error' ? (
        <span className="newsletter__status newsletter__status--error" role="alert">
          <Icon name="alert" size={15} />
          Something went wrong. Please try again.
        </span>
      ) : null}

      <span className="form__note">
        By subscribing you agree to our <Link to="/privacy">Privacy Policy</Link>. Demo form — no data is sent or stored.
      </span>
    </form>
  );
}
