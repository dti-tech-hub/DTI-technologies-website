import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Reveal from '../components/Reveal.jsx';
import { Input, Select, Textarea } from '../components/Fields.jsx';
import { ErrorState, SuccessState } from '../components/States.jsx';
import { validateContactMessage } from '../utils/validation.js';
import { services } from '../data/services.js';
import contactImage from '../assets/contact.png';

const SERVICE_OPTIONS = ['', ...services.map((service) => service.title)];

const INITIAL = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (key) => (event) => {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event?.preventDefault?.();
    const nextErrors = validateContactMessage(values);
    setErrors(nextErrors);

    const errorKeys = Object.keys(nextErrors);
    if (errorKeys.length > 0) {
      document.getElementById(`contact-${errorKeys[0]}`)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          service: values.service,
          message: values.message,
        }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || 'Submission failed');
      }
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
        description="Get in touch with DTI Technologies — email, phone, WhatsApp, and our contact form."
        path="/contact"
      />

      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div className="container contact-hero__inner">
          <div className="contact-hero__content">
            <Reveal variant="left">
              <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />
              <span className="eyebrow">Contact Us</span>
              <h1 id="contact-hero-heading">Let&apos;s build something valuable.</h1>
              <p className="lead">
                Have a technology challenge, idea, or opportunity? Let&apos;s start the conversation.
              </p>
            </Reveal>
          </div>

          <div className="contact-hero__visual">
            <Reveal variant="right">
              <figure className="contact-hero__figure">
                <img
                  src={contactImage}
                  alt="DTI Technologies contact"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section contact-area" aria-labelledby="contact-details-heading">
        <div className="container contact-area__grid">
          <div className="contact-area__info">
            <Reveal variant="left">
              <h2 id="contact-details-heading">Get in touch</h2>

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
                    <Icon name="pin" size={22} />
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
                  <Icon name="send" size={22} />
                  <span>Chat with us on WhatsApp</span>
                </a>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <h3 style={{ marginBottom: '0.75rem' }}>Connect with us</h3>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary btn--sm"
                    aria-label="WhatsApp"
                  >
                    <Icon name="send" size={18} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:dtitechnologies@gmail.com"
                    className="btn btn--secondary btn--sm"
                    aria-label="Email"
                  >
                    <Icon name="mail" size={18} />
                    <span>Email</span>
                  </a>
                  <span className="btn btn--secondary btn--sm" aria-disabled="true" title="LinkedIn profile coming soon">
                    <Icon name="linkedin" size={18} />
                    <span>LinkedIn</span>
                  </span>
                  <a
                    href="https://www.instagram.com/dtitechnologies?igsh=MXR0NGhjdjRtOG1pYg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary btn--sm"
                    aria-label="Instagram"
                  >
                    <Icon name="instagram" size={18} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="contact-area__form-wrapper">
            <Reveal variant="right" delay={100}>
              <div id="contact-form" className="card contact-form-card" style={{ scrollMarginTop: '110px' }}>
                {status === 'success' ? (
                  <SuccessState
                    title="Thank you. Your inquiry has been received."
                    text="We've received your message and will get back to you shortly."
                    action={
                      <button type="button" className="btn btn--primary btn--sm" onClick={handleReset}>
                        Send another message
                      </button>
                    }
                  />
                ) : (
                  <form className="form" onSubmit={handleSubmit} noValidate>
                    <div>
                      <span className="eyebrow">Send us a message</span>
                      <h2>Start a Conversation</h2>
                    </div>

                    {status === 'error' ? (
                      <ErrorState
                        text="Something went wrong while submitting. Please try again."
                        onRetry={handleSubmit}
                      />
                    ) : null}

                    <Input
                      id="contact-name"
                      label="Full Name"
                      required
                      autoComplete="name"
                      value={values.name}
                      onChange={update('name')}
                      error={errors.name}
                    />

                    <Input
                      id="contact-company"
                      label="Company / Organization"
                      optional
                      autoComplete="organization"
                      value={values.company}
                      onChange={update('company')}
                      error={errors.company}
                    />

                    <Input
                      id="contact-email"
                      label="Work Email"
                      type="email"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={update('email')}
                      error={errors.email}
                    />

                    <Input
                      id="contact-phone"
                      label="Phone Number"
                      type="tel"
                      optional
                      autoComplete="tel"
                      value={values.phone}
                      onChange={update('phone')}
                      error={errors.phone}
                    />

                    <Select
                      id="contact-service"
                      label="Service Required"
                      required
                      value={values.service}
                      onChange={update('service')}
                      error={errors.service}
                    >
                      {SERVICE_OPTIONS.map((option, optionIndex) => (
                        <option key={option || 'default'} value={option} disabled={optionIndex === 0}>
                          {optionIndex === 0 ? 'Select a service' : option}
                        </option>
                      ))}
                    </Select>

                    <Textarea
                      id="contact-message"
                      label="Message"
                      required
                      rows={5}
                      value={values.message}
                      onChange={update('message')}
                      error={errors.message}
                      hint="Minimum 20 characters."
                    />

                    <button
                      type="submit"
                      className="btn btn--primary btn--lg"
                      disabled={status === 'submitting'}
                      aria-busy={status === 'submitting'}
                    >
                      {status === 'submitting' ? <span className="btn__spinner" aria-hidden="true" /> : null}
                      <span>{status === 'submitting' ? 'Sending…' : 'Send Message'}</span>
                      {status !== 'submitting' ? <Icon name="arrow-right" size={17} className="btn__arrow" /> : null}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
