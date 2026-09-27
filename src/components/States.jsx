import Icon from './Icon.jsx';
import Button from './Button.jsx';

export function LoadingState({ label = 'Loading content…', count = 3 }) {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">{label}</span>
      <div className="skeleton-grid" aria-hidden="true">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="skeleton skeleton--card" />
        ))}
      </div>
    </div>
  );
}

export function Spinner({ label = 'Loading…' }) {
  return (
    <div
      style={{ display: 'grid', justifyItems: 'center', gap: '0.75rem', padding: '3rem 1rem' }}
      role="status"
      aria-live="polite"
    >
      <span
        className="btn__spinner"
        style={{
          width: 28,
          height: 28,
          borderColor: 'rgba(42, 79, 179, 0.3)',
          borderTopColor: 'var(--color-cobalt)',
        }}
        aria-hidden="true"
      />
      <span className="form__note">{label}</span>
    </div>
  );
}

export function EmptyState({
  icon = 'inbox',
  title = 'Nothing here yet.',
  text = 'There is no content to display right now. Please check back soon.',
  action,
}) {
  return (
    <div className="state-block">
      <span className="state-block__icon">
        <Icon name={icon} size={26} />
      </span>
      <h3 className="state-block__title">{title}</h3>
      <p className="state-block__text">{text}</p>
      {action}
    </div>
  );
}

export function ErrorState({
  title = 'Something went wrong.',
  text = 'Please try again. If the problem continues, contact us and let us know.',
  onRetry,
}) {
  return (
    <div className="state-block state-block--error" role="alert">
      <span className="state-block__icon">
        <Icon name="alert" size={26} />
      </span>
      <h3 className="state-block__title">{title}</h3>
      <p className="state-block__text">{text}</p>
      {onRetry ? (
        <Button variant="secondary" size="sm" icon="refresh" onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  );
}

export function SuccessState({
  title = 'Thank you.',
  text = 'Your message has been received. We will get back to you soon.',
  action,
}) {
  return (
    <div className="state-block state-block--success" role="status" aria-live="polite">
      <svg className="success-check" viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="36" />
        <path d="M25 41.5 35.5 52 56 30" />
      </svg>
      <h3 className="state-block__title">{title}</h3>
      <p className="state-block__text">{text}</p>
      {action}
    </div>
  );
}
