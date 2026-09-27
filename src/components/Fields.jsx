import { forwardRef } from 'react';
import Icon from './Icon.jsx';

function FieldShell({ id, label, required, optional, error, hint, children, className = '' }) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div className={`field ${className}`.trim()}>
      {label ? (
        <label className="field__label" htmlFor={id}>
          {label}
          {required ? (
            <span className="field__required" aria-hidden="true">
              *
            </span>
          ) : null}
          {optional ? <span className="field__optional">(optional)</span> : null}
        </label>
      ) : null}
      {children({ describedBy: [hintId, errorId].filter(Boolean).join(' ') || undefined })}
      {hint ? (
        <span className="field__hint" id={hintId}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="field__error" id={errorId} role="alert">
          <Icon name="alert" size={14} />
          {error}
        </span>
      ) : null}
    </div>
  );
}

export const Input = forwardRef(function Input(
  { id, label, required, optional, error, hint, className, ...rest },
  ref,
) {
  return (
    <FieldShell id={id} label={label} required={required} optional={optional} error={error} hint={hint} className={className}>
      {({ describedBy }) => (
        <input
          ref={ref}
          id={id}
          className="field__control"
          required={required}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
      )}
    </FieldShell>
  );
});

export const Textarea = forwardRef(function Textarea(
  { id, label, required, optional, error, hint, className, ...rest },
  ref,
) {
  return (
    <FieldShell id={id} label={label} required={required} optional={optional} error={error} hint={hint} className={className}>
      {({ describedBy }) => (
        <textarea
          ref={ref}
          id={id}
          className="field__control"
          required={required}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
      )}
    </FieldShell>
  );
});

export const Select = forwardRef(function Select(
  { id, label, required, optional, error, hint, className, children, ...rest },
  ref,
) {
  return (
    <FieldShell id={id} label={label} required={required} optional={optional} error={error} hint={hint} className={className}>
      {({ describedBy }) => (
        <select
          ref={ref}
          id={id}
          className="field__control"
          required={required}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          {...rest}
        >
          {children}
        </select>
      )}
    </FieldShell>
  );
});

export function Checkbox({ id, label, error, ...rest }) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className="field">
      <label className="checkbox" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={errorId}
          {...rest}
        />
        <span>{label}</span>
      </label>
      {error ? (
        <span className="field__error" id={errorId} role="alert">
          <Icon name="alert" size={14} />
          {error}
        </span>
      ) : null}
    </div>
  );
}

export function SearchInput({ id = 'search', label = 'Search', value, onChange, placeholder = 'Search…', onClear }) {
  return (
    <div className="search">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <Icon name="search" size={18} className="search__icon" />
      <input
        id={id}
        type="search"
        className="field__control"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
      />
      {value ? (
        <button type="button" className="search__clear" onClick={onClear} aria-label={`Clear ${label.toLowerCase()}`}>
          <Icon name="close" size={15} />
        </button>
      ) : null}
    </div>
  );
}
