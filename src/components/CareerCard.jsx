import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function CareerCard({ job, index = 0, onViewDetails }) {
  return (
    <Reveal delay={index * 80} style={{ height: '100%' }}>
      <article className="card card--hover job-card" style={{ height: '100%' }}>
        <div className="job-card__head">
          <div>
            <div className="card__meta" style={{ marginBottom: '0.6rem' }}>
              <span className="badge badge--accent">{job.department}</span>
              {job.isSample ? <span className="badge badge--demo">Sample listing</span> : null}
            </div>
            <h3 className="job-card__title">{job.title}</h3>
          </div>
          <span className="badge badge--cobalt">{job.type}</span>
        </div>

        <p className="card__text">{job.summary}</p>

        <div className="job-card__meta">
          <span>
            <Icon name="pin" size={15} />
            {job.location}
          </span>
          <span>
            <Icon name="briefcase" size={15} />
            {job.experience}
          </span>
        </div>

        <div className="job-card__actions">
          <button
            type="button"
            className="btn btn--secondary btn--sm"
            onClick={() => onViewDetails(job)}
            aria-label={`View details for ${job.title}`}
          >
            View details
          </button>
        </div>
      </article>
    </Reveal>
  );
}
