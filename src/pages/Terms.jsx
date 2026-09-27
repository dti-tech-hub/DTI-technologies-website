import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of terms',
    body: [
      'By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please do not use the website.',
      'These terms apply only to this website and its content. Services delivered to clients are governed by separate written agreements.',
    ],
  },
  {
    id: 'website-purpose',
    title: '2. Purpose of the website',
    body: [
      'This website provides general information about technology services, portfolio work, careers, articles, and ways to get in touch.',
      'Content on the website is provided for information only. It does not constitute professional advice, and it does not create a client, employment, or partnership relationship.',
    ],
  },
  {
    id: 'demo-behaviour',
    title: '3. Demonstration functionality',
    body: [
      'During Phase 1, interactive features — including contact, newsletter, and career application forms — operate as frontend demonstrations only. Submissions are validated in the browser and are not transmitted to, or stored by, any server.',
      'No accounts, authentication, or user profiles are offered on this website at this stage.',
    ],
  },
  {
    id: 'acceptable-use',
    title: '4. Acceptable use',
    body: [
      'You agree not to misuse the website. Prohibited activities include, but are not limited to:',
    ],
    list: [
      'Attempting to gain unauthorised access to the website, its hosting, or related systems.',
      'Interfering with the operation or security of the website.',
      'Using automated tools to scrape or reproduce content at scale without permission.',
      'Submitting false, unlawful, or harmful information through the website’s forms.',
      'Reproducing substantial portions of the website’s content for commercial use without consent.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual property',
    body: [
      'Unless otherwise stated, the design, text, graphics, and original content of this website belong to the company or its licensors and are protected by applicable intellectual property laws.',
      'Trademarks, logos, and brand elements remain the property of their respective owners. Nothing on this website grants a licence to use them without prior written permission.',
    ],
  },
  {
    id: 'third-party',
    title: '6. Third-party links and content',
    body: [
      'The website may contain links to third-party websites or references to external resources. These are provided for convenience only. We do not control and are not responsible for the content, policies, or practices of any third-party websites.',
    ],
  },
  {
    id: 'disclaimers',
    title: '7. Disclaimers',
    body: [
      'The website is provided on an “as is” and “as available” basis. While we aim to keep content accurate and available, we make no warranties — express or implied — about the completeness, accuracy, reliability, or availability of the website or its content.',
      'Portfolio entries, career listings, and articles currently marked as demo or placeholder content are illustrative only and do not represent verified claims.',
    ],
  },
  {
    id: 'liability',
    title: '8. Limitation of liability',
    body: [
      'To the fullest extent permitted by law, the company shall not be liable for any indirect, incidental, special, or consequential damages arising out of, or in connection with, your use of or inability to use this website.',
      'Nothing in these terms excludes liability that cannot be excluded under applicable law.',
    ],
  },
  {
    id: 'privacy',
    title: '9. Privacy',
    body: [
      'How this website handles information is described in our Privacy Policy, which forms part of these terms.',
    ],
  },
  {
    id: 'changes',
    title: '10. Changes to these terms',
    body: [
      'We may update these terms from time to time. Changes take effect when the updated terms are published on this page. Continued use of the website after changes constitutes acceptance of the revised terms.',
    ],
  },
  {
    id: 'governing-law',
    title: '11. Governing law',
    body: [
      'These terms are governed by the laws applicable to the company’s principal place of business. The governing jurisdiction will be confirmed once official company details are supplied.',
      'Draft notice: this section must be completed and reviewed before publication.',
    ],
  },
  {
    id: 'contact',
    title: '12. Contact',
    body: [
      'Questions about these terms can be sent through the Contact page. Official company contact details are pending approval and will be published there.',
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="The terms that apply when using this website — acceptable use, content, disclaimers, and more."
        path="/terms"
      />

      <section className="page-hero" aria-labelledby="terms-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]} />
          <span className="eyebrow">Legal</span>
          <h1 id="terms-heading">Terms &amp; Conditions</h1>
          <p className="lead">
            The terms that apply when you access or use this website and its content.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-layout">
          <nav className="legal-toc" aria-label="Terms sections">
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
                Draft terms for review — must be approved and, where appropriate, reviewed legally
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
              <Button to="/privacy" variant="secondary" size="sm">
                Read Privacy Policy
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
