import Modal from './Modal.jsx';
import Icon from './Icon.jsx';

export default function PortfolioModal({ item, onClose }) {
  return (
    <Modal
      open={Boolean(item)}
      onClose={onClose}
      wide
      eyebrow={item ? item.category : ''}
      title={item ? item.title : ''}
      labelledBy="portfolio-modal-title"
    >
      {item ? (
        <>
          <div className="modal__section">
            <p>{item.overview}</p>
          </div>

          <div className="modal__section">
            <h4>Challenge</h4>
            <p>{item.challenge}</p>
          </div>

          <div className="modal__section">
            <h4>Solution</h4>
            <p>{item.solution}</p>
          </div>

          <div className="modal__section">
            <h4>Outcome</h4>
            <p>{item.outcome}</p>
          </div>

          <div className="modal__section">
            <h4>Technologies</h4>
            <div className="pill-list">
              {item.technologies.map((tech) => (
                <span className="badge" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal__section">
            <h4>Key features</h4>
            <ul>
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          {item.isPlaceholder ? (
            <div className="modal__section">
              <div className="notice">
                <Icon name="info" size={18} className="notice__icon" />
                <span>
                  This is placeholder content. Real portfolio items, clients, results, and technologies
                  will replace it once supplied and approved.
                </span>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </Modal>
  );
}
