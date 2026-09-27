import Seo from '../components/Seo.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CtaBand from '../components/CtaBand.jsx';
import servicespageImage from '../assets/servicespage.png';

const values = [
  {
    number: '01',
    title: 'Purpose over novelty',
    text: 'We start with the business problem, choosing technology because it creates meaningful value—not simply because it is new.',
    icon: 'target',
  },
  {
    number: '02',
    title: 'Engineering discipline',
    text: 'We build structured, maintainable and reliable solutions designed to perform well beyond launch.',
    icon: 'layers',
  },
  {
    number: '03',
    title: 'Security by design',
    text: 'Security, privacy and data protection are considered from the beginning and throughout the technology lifecycle.',
    icon: 'shield',
  },
  {
    number: '04',
    title: 'Transparent collaboration',
    text: 'We communicate clearly, share progress openly, and make important decisions together with our clients.',
    icon: 'users',
  },
];

const whyDti = [
  {
    title: 'Business-focused',
    text: 'Every recommendation connects technology decisions to real operational goals.',
    icon: 'target',
  },
  {
    title: 'Engineering-led',
    text: 'We build maintainable, secure and scalable solutions designed for long-term use.',
    icon: 'layers',
  },
  {
    title: 'Transparent partnership',
    text: 'Clear priorities, honest communication and shared decisions throughout delivery.',
    icon: 'users',
  },
  {
    title: 'Long-term thinking',
    text: 'We remain focused on stability, security and continuous improvement beyond launch.',
    icon: 'life-buoy',
  },
];

const team = [
  {
    id: 1,
    name: 'S. Siva Kumar',
    role: 'Chief Executive Officer',
    image: null,
  },
  {
    id: 2,
    name: 'M. Hari Prasad Goud',
    role: 'Chief Operations Officer',
    image: null,
  },
  {
    id: 3,
    name: 'S. Ruthvik Goud',
    role: 'Chief Marketing Officer',
    image: null,
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="A modern technology company and digital solutions partner focused on intelligent, secure, and scalable engineering."
        path="/about"
      />

      {/* 1. HERO — ABOUT US */}
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="container about-hero__inner">
          <div className="about-hero__content">
            <Reveal variant="left">
              <span className="eyebrow">About us</span>
              <h1 id="about-hero-heading">Engineering technology with purpose and discipline.</h1>
              <p className="lead">
                We are a modern technology company built around one belief: technology should not simply
                exist — it should solve problems, create opportunities, and move businesses forward.
              </p>
              <div className="about-hero__actions">
                <Button to="/contact" size="lg" arrow>
                  Talk to our team
                </Button>
                <Button to="/portfolio" variant="secondary" size="lg">
                  See our portfolio
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="about-hero__visual">
            <Reveal variant="right">
              <figure className="about-hero__figure">
                <img
                  src={servicespageImage}
                  alt="DTI Technologies team working on technology solutions"
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

      {/* 2. OUR PURPOSE */}
      <section className="section about-purpose" aria-labelledby="purpose-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our purpose"
            title="Technology with a clear reason to exist."
            description="At DTI Technologies, technology is a means to an outcome — not the outcome itself. We combine business understanding, engineering discipline and modern technology to create solutions that are useful, measurable and built to last."
            id="purpose-heading"
            align="center"
          />

          <div className="about-purpose__grid">
            <Reveal variant="left" delay={80}>
              <article className="about-purpose__panel">
                <span className="about-purpose__label">Mission — What we do today</span>
                <h3>Build technology that solves meaningful business problems and creates measurable value.</h3>
                <ul className="about-purpose__points">
                  <li>
                    <span className="about-purpose__point-label">SOLVE</span>
                    <span className="about-purpose__point-text">Identify the real business challenge before selecting the technology.</span>
                  </li>
                  <li>
                    <span className="about-purpose__point-label">MEASURE</span>
                    <span className="about-purpose__point-text">Connect technology investment to meaningful operational and business outcomes.</span>
                  </li>
                </ul>
              </article>
            </Reveal>

            <Reveal variant="right" delay={160}>
              <article className="about-purpose__panel">
                <span className="about-purpose__label">Vision — Where we&apos;re going</span>
                <h3>Become a trusted technology partner for organizations embracing intelligent, secure, and scalable digital transformation.</h3>
                <ul className="about-purpose__points">
                  <li>
                    <span className="about-purpose__point-label">TRUSTED</span>
                    <span className="about-purpose__point-text">A partner organizations can rely on for complex technology decisions.</span>
                  </li>
                  <li>
                    <span className="about-purpose__point-label">ENDURING</span>
                    <span className="about-purpose__point-text">Relationships and solutions designed to create value beyond a single project.</span>
                  </li>
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="about-purpose__journey" aria-label="Our technology journey">
              <div className="about-purpose__journey-track">
                <div className="about-purpose__journey-step">
                  <span className="about-purpose__journey-icon">
                    <Icon name="briefcase" size={18} />
                  </span>
                  <span className="about-purpose__journey-label">Business Challenge</span>
                </div>
                <span className="about-purpose__journey-connector" aria-hidden="true" />
                <div className="about-purpose__journey-step">
                  <span className="about-purpose__journey-icon">
                    <Icon name="search" size={18} />
                  </span>
                  <span className="about-purpose__journey-label">Understand</span>
                </div>
                <span className="about-purpose__journey-connector" aria-hidden="true" />
                <div className="about-purpose__journey-step">
                  <span className="about-purpose__journey-icon">
                    <Icon name="code" size={18} />
                  </span>
                  <span className="about-purpose__journey-label">Engineer</span>
                </div>
                <span className="about-purpose__journey-connector" aria-hidden="true" />
                <div className="about-purpose__journey-step">
                  <span className="about-purpose__journey-icon">
                    <Icon name="shield" size={18} />
                  </span>
                  <span className="about-purpose__journey-label">Secure</span>
                </div>
                <span className="about-purpose__journey-connector" aria-hidden="true" />
                <div className="about-purpose__journey-step">
                  <span className="about-purpose__journey-icon">
                    <Icon name="bar-chart-2" size={18} />
                  </span>
                  <span className="about-purpose__journey-label">Measure</span>
                </div>
                <span className="about-purpose__journey-connector" aria-hidden="true" />
                <div className="about-purpose__journey-step">
                  <span className="about-purpose__journey-icon">
                    <Icon name="trending-up" size={18} />
                  </span>
                  <span className="about-purpose__journey-label">Business Value</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="section about-values" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Our values"
            title="Principles that shape how we work."
            description="Our values guide how we think, build, communicate, and support our clients — from the first conversation through long-term delivery."
            id="values-heading"
            align="center"
          />

          <Reveal delay={80}>
            <div className="about-values__journey">
              <div className="about-values__track">
                {values.map((value) => (
                  <div key={value.number} className="about-values__step">
                    <div className="about-values__connector" aria-hidden="true">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d="M0,50 Q25,50 25,50 T75,50 T100,50"
                          stroke="url(#values-gradient)"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <article className="about-values__card">
                      <span className="about-values__number">{value.number}</span>
                      <span className="about-values__icon">
                        <Icon name={value.icon} size={22} />
                      </span>
                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. WHY DTI TECHNOLOGIES */}
      <section className="section section--secondary about-why" aria-labelledby="why-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Why DTI Technologies"
            title="What working with us feels like."
            id="why-heading"
            align="center"
          />

          <div className="about-why__grid">
            {whyDti.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="about-why__card">
                  <span className="about-why__icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR TEAM */}
      

      {/* 6. FINAL CTA */}
      <section className="section section--tight">
        <div className="container">
          <CtaBand
            eyebrow="Let's build together"
            title="Let's build something meaningful."
            description="Have a technology challenge, idea, or opportunity? Let's talk about how DTI Technologies can help turn it into something valuable."
            primary={{ label: 'Start a conversation', to: '/contact' }}
            secondary={{ label: 'Explore our services', to: '/services' }}
          />
        </div>
      </section>
    </>
  );
}