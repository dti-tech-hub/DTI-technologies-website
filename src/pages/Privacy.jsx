import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    body: [
      'This Privacy Policy explains how this website handles information. It has been written for the website as it exists today: a frontend-only corporate presence with no backend services, no databases, and no user accounts.',
      'Because Phase 1 of this project performs no data storage or transmission, the sections below describe both the current behaviour of the site and the commitments that will apply once backend services are introduced, following owner approval.',
    ],
  },
  {
    id: 'information-you-provide',
    title: '2. Information you provide',
    body: [
      'Contact, newsletter, and career application forms on this website validate input in your browser only. In the current phase, submissions are not sent to any server, not stored, and not shared.',
      'If you submit information through these forms during Phase 1, nothing is retained by the website.',
    ],
  },
  {
    id: 'information-collected-automatically',
    title: '3. Information collected automatically',
    body: [
      'This website does not currently use analytics tools, advertising pixels, or tracking cookies of its own.',
      'Your hosting provider may record standard technical logs such as IP address, browser type, and request timestamps for security and operational purposes. Such handling is governed by the hosting provider’s own policies.',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies',
    body: [
      'The website itself does not set cookies. Should cookies or similar technologies be introduced later — for example for preferences or analytics — this policy will be updated and, where required, consent will be requested before they are set.',
    ],
  },
  {
    id: 'use-of-information',
    title: '5. How information will be used',
    body: [
      'When backend functionality is introduced in a later phase, information you provide will be used only to:',
    ],
    list: [
      'Respond to inquiries and requests you send to us.',
      'Consider applications for roles you apply for.',
      'Send newsletter updates you have explicitly subscribed to.',
      'Operate, secure, and improve the website and its services.',
    ],
  },
  {
    id: 'sharing',
    title: '6. Sharing and disclosure',
    body: [
      'We do not sell personal information. Information will only be shared with service providers needed to operate the website (for example, email delivery or hosting), or where required by law.',
      'No third-party marketing or advertising integrations are currently in use on this website.',
    ],
  },
  {
    id: 'retention',
    title: '7. Data retention',
    body: [
      'In Phase 1 no personal information is retained, because no information is stored. When form handling is introduced, retention periods will be defined for each data type and documented here.',
    ],
  },
  {
    id: 'your-rights',
    title: '8. Your rights',
    body: [
      'Depending on your location, you may have the right to request access to, correction of, or deletion of personal information we hold about you, as well as the right to object to or restrict certain processing.',
      'To exercise any of these rights, please contact us using the details published on the Contact page once official contact information is available.',
    ],
  },
  {
    id: 'security',
    title: '9. Security',
    body: [
      'We take reasonable technical and organisational measures to protect information handled by this website, including secure transmission when forms are connected to a backend, access controls, and regular review of the technologies in use.',
      'No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    id: 'children',
    title: '10. Children’s privacy',
    body: [
      'This website is directed at businesses and professionals. It is not intended for children, and we do not knowingly collect personal information from children.',
    ],
  },
  {
    id: 'changes',
    title: '11. Changes to this policy',
    body: [
      'This policy may be updated as the website evolves — particularly when backend services are introduced. Material changes will be reflected on this page with an updated revision date.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact',
    body: [
      'Questions about this Privacy Policy can be sent through the Contact page. Official company contact details are pending approval and will be published there.',
      'Draft notice: this policy should be reviewed by the company (and its legal advisers, where appropriate) before the website goes live.',
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How this website handles information — cookies, forms, retention, and your rights."
        path="/privacy"
      />

      <section className="page-hero" aria-labelledby="privacy-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
          <span className="eyebrow">Legal</span>
          <h1 id="privacy-heading">Privacy Policy</h1>
          <p className="lead">
            This policy explains how this website handles information — written for the site as it
            exists today, and for the services that will follow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-layout">
          <nav className="legal-toc" aria-label="Privacy policy sections">
            <h2>On this page</h2>
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="legal-content">
            <div className="notice notice--warning">
              <Icon name="alert" size={18} className="notice__icon" />
              <span>
                Draft policy for review — must be approved and, where appropriate, reviewed legally
                before publication.
              </span>
            </div>

            {sections.map((section) => (
              <Reveal key={section.id} id={section.id}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/terms" variant="secondary" size="sm">
                Read Terms &amp; Conditions
              </Button>
              <Button to="/contact" variant="ghost" size="sm">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
