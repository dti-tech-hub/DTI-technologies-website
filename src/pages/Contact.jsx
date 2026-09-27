import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { Input, Select, Textarea } from '../components/Fields.jsx';
import { ErrorState, SuccessState } from '../components/States.jsx';
import { Link } from 'react-router-dom';
import { validateContact } from '../utils/validation.js';
import { simulateSubmit } from '../utils/form.js';
import contactImage from '../assets/contact.jpeg';

const SERVICE_OPTIONS = [
  '',
  'Generative AI',
  'Cyber Security',
  'Data Engineering',
  'Application Development',
  'Data Management',
  'IT Consulting Services',
  'Outsourcing Services',
  'Maintenance Services',
  'Other Services',
];

const SUBJECT_OPTIONS = [
  '',
  'Project inquiry',
  'Partnership / Collaboration',
  'Sales / Pricing question',
  'Technical support',
  'General inquiry',
  'Other',
];

const CONTACT_METHODS = [
  '',
  'Email',
  'Phone',
  'WhatsApp',
];

const INITIAL = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  serviceRequired: '',
  subject: '',
  message: '',
  preferredContact: '',
  consent: false,
};

const journeySteps = [
  {
    number: '01',
    title: 'We listen',
    description: 'Tell us about your challenge, idea, or requirement.',
  },
  {
    number: '02',
    title: 'We understand',
    description: 'We review your requirements and identify the right technology approach.',
  },
  {
    number: '03',
    title: 'We respond',
    description: 'We discuss the next steps and how DTI Technologies can help.',
  },
];

export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (key) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event?.preventDefault?.();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const errorKeys = Object.keys(nextErrors);
    if (errorKeys.length > 0) {
      document.getElementById(`contact-${errorKeys[0]}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      await simulateSubmit({ delay: 1400 });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setValues(INITIAL);
    setErrors({});
    setStatus('idle');
  };

  const whatsappUrl = 'https://wa.me/917013494877';

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with DTI Technologies. We'd love to hear about your project or challenge."
        path="/contact"
      />

      {/* 1. HERO */}
      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div className="container contact-hero__inner">
          <div className="contact-hero__content">
            <Reveal variant="left">
              <span className="eyebrow">Contact us</span>
              <h1 id="contact-hero-heading">Let&apos;s build something valuable.</h1>
              <p className="lead">
                Have a technology challenge, idea, or opportunity? Tell us what you&apos;re working on and let&apos;s start the conversation.
              </p>
              <div className="contact-hero__actions">
                <Button to="#contact-form" size="lg" arrow onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  document.getElementById('contact-fullName')?.focus({ preventScroll: true });
                }}>
                  Start a conversation
                </Button>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
                  <Icon name="message-square" size={20} />
                  <span>WhatsApp us</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="contact-hero__visual">
            <Reveal variant="right">
              <figure className="contact-hero__figure">
                <img
                  src={contactImage}
                  alt="DTI Technologies contact team"
                  loading="eager"
                  width="800"
                  height="600"
                  decoding="async"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. CONTACT AREA */}
      <section className="section contact-area" aria-labelledby="contact-area-heading">
        <div className="container contact-area__grid">
          <div className="contact-area__info">
            <Reveal variant="left">
              <h2>Get in touch</h2>

              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-detail__icon" aria-hidden="true">
                    <Icon name="mail" size={22} />
                  </span>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:dtitechnologies@gmail.com" className="contact-detail__link">
                      dtitechnologies@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail__icon" aria-hidden="true">
                    <Icon name="phone" size={22} />
                  </span>
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+917013494877" className="contact-detail__link">
                      +91 70134 94877
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail__icon" aria-hidden="true">
                    <Icon name="map-pin" size={22} />
                  </span>
                  <div>
                    <h3>Location</h3>
                    <span className="contact-detail__link">Kadapa, Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="contact-whatsapp">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--lg"
                >
                  <Icon name="message-square" size={22} />
                  <span>Chat with us on WhatsApp</span>
                  <Icon name="external-link" size={18} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="contact-area__form-wrapper">
            <Reveal variant="right" delay={100}>
              <div id="contact-form" className="card contact-form-card" style={{ scrollMarginTop: '110px' }}>
                {status === 'success' ? (
                  <SuccessState
                    title="Thank you. Your inquiry has been received."
                    text="This is a frontend demonstration — no data was transmitted or stored. Connect a backend in Phase 2 to receive real inquiries."
                    action={
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button type="button" className="btn btn--primary btn--sm" onClick={handleReset}>
                          Send another message
                        </button>
                        <Link to="/services" className="btn btn--secondary btn--sm">
                          Explore services
                        </Link>
                      </div>
                    }
                  />
                ) : (
                  <form className="form" onSubmit={handleSubmit} noValidate aria-describedby="contact-form-note">
                    <div>
                      <span className="eyebrow">Send us a message</span>
                      <h2>Start a Conversation</h2>
                    </div>

                    <p className="form__note" id="contact-form-note">
                      Fields marked with <span className="field__required">*</span> are required. Demo form —
                      validation runs in your browser only.
                    </p>

                    {status === 'error' ? (
                      <ErrorState
                        text="Something went wrong while submitting. Please try again."
                        onRetry={handleSubmit}
                      />
                    ) : null}

                    <div className="form__row">
                      <Input
                        id="contact-fullName"
                        label="Full Name"
                        required
                        autoComplete="name"
                        value={values.fullName}
                        onChange={update('fullName')}
                        error={errors.fullName}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form__row">
                      <Input
                        id="contact-company"
                        label="Company / Organization"
                        required
                        autoComplete="organization"
                        value={values.company}
                        onChange={update('company')}
                        error={errors.company}
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div className="form__row">
                      <Input
                        id="contact-email"
                        label="Work Email"
                        type="email"
                        required
                        autoComplete="email"
                        value={values.email}
                        onChange={update('email')}
                        error={errors.email}
                        placeholder="john@acme.com"
                      />
                    </div>

                    <div className="form__row">
                      <Input
                        id="contact-phone"
                        label="Phone Number"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={values.phone}
                        onChange={update('phone')}
                        error={errors.phone}
                        placeholder="+91 70134 94877"
                      />
                    </div>

                    <div className="form__row">
                      <Select
                        id="contact-serviceRequired"
                        label="Service Required"
                        required
                        value={values.serviceRequired}
                        onChange={update('serviceRequired')}
                        error={errors.serviceRequired}
                      >
                        {SERVICE_OPTIONS.map((option, optionIndex) => (
                          <option key={option || 'default'} value={option} disabled={optionIndex === 0}>
                            {optionIndex === 0 ? 'Select a service' : option}
                          </option>
                        ))}
                      </Select>
                    </div>

                    <div className="form__row">
                      <Select
                        id="contact-subject"
                        label="Subject"
                        required
                        value={values.subject}
                        onChange={update('subject')}
                        error={errors.subject}
                      >
                        {SUBJECT_OPTIONS.map((option, optionIndex) => (
                          <option key={option || 'default'} value={option} disabled={optionIndex === 0}>
                            {optionIndex === 0 ? 'Select a subject' : option}
                          </option>
                        ))}
                      </Select>
                    </div>

                    <Textarea
                      id="contact-message"
                      label="Message / Requirements"
                      required
                      placeholder="Tell us about your project, challenge, or requirements…"
                      value={values.message}
                      onChange={update('message')}
                      error={errors.message}
                      hint="Minimum 20 characters."
                    />

                    <div className="form__row">
                      <Select
                        id="contact-preferredContact"
                        label="Preferred Contact Method (optional)"
                        optional
                        value={values.preferredContact}
                        onChange={update('preferredContact')}
                        error={errors.preferredContact}
                      >
                        {CONTACT_METHODS.map((option, optionIndex) => (
                          <option key={option || 'default'} value={option} disabled={optionIndex === 0}>
                            {optionIndex === 0 ? 'Select preferred method' : option}
                          </option>
                        ))}
                      </Select>
                    </div>

                    <div className="field">
                      <label className="checkbox" htmlFor="contact-consent">
                        <input
                          type="checkbox"
                          id="contact-consent"
                          checked={values.consent}
                          onChange={update('consent')}
                          required
                          aria-invalid={errors.consent ? 'true' : undefined}
                          aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                        />
                        <span>
                          I agree that DTI Technologies may use this information to respond to my inquiry.
                          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        </span>
                      </label>
                      {errors.consent ? (
                        <span className="field__error" id="contact-consent-error" role="alert">
                          <Icon name="alert" size={14} />
                          {errors.consent}
                        </span>
                      ) : null}
                    </div>

                    <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                      <button
                        type="submit"
                        className="btn btn--primary btn--lg"
                        disabled={status === 'submitting'}
                        aria-busy={status === 'submitting'}
                      >
                        {status === 'submitting' ? <span className="btn__spinner" aria-hidden="true" /> : null}
                        {status === 'submitting' ? 'Sending…' : 'Send Message'}
                      </button>
                      <button type="button" className="btn btn--ghost btn--lg" onClick={handleReset}>
                        Clear form
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT */}
      <section className="section contact-journey" aria-labelledby="journey-heading">
        <div className="container">
          <div className="section-heading section-heading--center">
            <Reveal>
              <span className="eyebrow">What happens next</span>
              <h2 id="journey-heading">A clear path from conversation to solution.</h2>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="journey-track">
              {journeySteps.map((step, index) => (
                <div key={step.number} className="journey-step">
                  <div className="journey-step__circle" aria-hidden="true">
                    <span className="journey-step__number">{step.number}</span>
                  </div>
                  <div className="journey-step__content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <span className="journey-connector" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="section section--tight contact-cta" aria-labelledby="cta-heading">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <div className="cta-band__inner">
                <span className="eyebrow">Ready to start?</span>
                <h2 id="cta-heading">Have a technology challenge?</h2>
                <p className="lead">
                  Let&apos;s talk about how DTI Technologies can help turn your ideas into valuable technology.
                </p>
                <div className="cta-band__actions">
                  <Button to="/contact" size="lg" arrow>
                    Start a conversation
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}