/**
 * Pill-style filter group (portfolio categories, blog categories, etc.).
 * Implemented as a labelled group of toggle buttons for keyboard access.
 */
export default function FilterTabs({ label, options, value, onChange, idPrefix = 'filter' }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          id={`${idPrefix}-${option.replace(/\s+/g, '-').toLowerCase()}`}
          className="filter-chip"
          aria-pressed={value === option}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
