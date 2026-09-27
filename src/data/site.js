/**
 * Site-wide placeholder identity.
 * NOTE: Company name, logo, tagline, contact details and social accounts are
 * PENDING owner approval (see MASTER_README section 63). The values below are
 * neutral placeholders and must be replaced before production.
 */

export const site = {
  name: 'DTI Technologies',
  // Browser-tab title brand — used by Seo for document.title / og:title.
  titleBrand: 'DTI Technologies',
  tagline: 'Technology, Innovation, Transformation',
  description:
    'We help businesses turn complex technology challenges into intelligent, secure, scalable digital solutions.',
  // Placeholder domain — official domain pending (MASTER_README section 63).
  origin: '',
  defaultMeta: {
    title: 'DTI Technologies',
    description:
      'Intelligent, secure, and scalable digital solutions across AI, cyber security, data, software, and consulting.',
  },
};

export const capabilityStrip = [
  'GENERATIVE AI',
  'CYBER SECURITY',
  'DATA',
  'SOFTWARE',
  'CLOUD',
  'CONSULTING',
];

/**
 * Social accounts are pending. Links are intentionally not published until
 * official profiles are supplied; they are rendered as labelled placeholders.
 */
export const socials = [
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'x', label: 'X' },
];

/**
 * Draft positioning copy — requires owner approval before being treated as
 * an official company statement (MASTER_README section 28).
 */
export const positioning = {
  mission:
    'Build technology that solves meaningful business problems and creates measurable value.',
  vision:
    'Become a trusted technology partner for organizations embracing intelligent, secure, and scalable digital transformation.',
  values: [
    {
      title: 'Purpose over novelty',
      text: 'Technology decisions start with the business problem they need to solve, not with the trend of the season.',
    },
    {
      title: 'Engineering discipline',
      text: 'We favour maintainable, well-structured solutions that stay reliable long after launch.',
    },
    {
      title: 'Security by design',
      text: 'Security and data protection are considered from the first conversation, not bolted on at the end.',
    },
    {
      title: 'Transparent collaboration',
      text: 'Clear communication, honest trade-offs, and shared visibility throughout every engagement.',
    },
  ],
};

export const whyChooseUs = [
  {
    icon: 'target',
    title: 'Business-focused thinking',
    text: 'Every recommendation connects back to a real operational goal, so effort always maps to outcomes.',
  },
  {
    icon: 'layers',
    title: 'Modern engineering',
    text: 'Current, proven tools and practices shaped into solutions that are simple to run and easy to extend.',
  },
  {
    icon: 'shield',
    title: 'Security-conscious development',
    text: 'Threats, access, and data protection are considered throughout design, build, and release.',
  },
  {
    icon: 'cloud',
    title: 'Scalable architecture',
    text: 'Systems designed to grow with demand instead of being rebuilt from scratch every year.',
  },
  {
    icon: 'users',
    title: 'Transparent collaboration',
    text: 'Visible priorities, open communication, and shared decisions from kickoff through delivery.',
  },
  {
    icon: 'life-buoy',
    title: 'Long-term support',
    text: 'We stay with the technology after launch, keeping it secure, stable, and ready for change.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    text: 'We listen first — mapping goals, constraints, users, and the current technology landscape before proposing anything.',
  },
  {
    number: '02',
    title: 'Define',
    text: 'Together we shape a clear scope, success criteria, and roadmap so everyone shares one definition of done.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'Experiences and architectures are designed in parallel, balancing usability, performance, and security.',
  },
  {
    number: '04',
    title: 'Build',
    text: 'Iterative development with frequent demos keeps progress visible and feedback continuous.',
  },
  {
    number: '05',
    title: 'Launch',
    text: 'A disciplined release with testing, monitoring, and knowledge transfer for a confident go-live.',
  },
  {
    number: '06',
    title: 'Evolve',
    text: 'After launch we measure, maintain, and improve — so the solution keeps pace with the business.',
  },
];

/**
 * Testimonials are PENDING approved client feedback (MASTER_README section 37).
 * These clearly marked placeholders demonstrate the layout only.
 */
export const testimonials = [
  {
    id: 't1',
    placeholder: true,
    quote:
      'Placeholder testimonial — an approved client quote will appear here once supplied by the company.',
    author: 'Client name pending',
    role: 'Role and organisation pending approval',
  },
  {
    id: 't2',
    placeholder: true,
    quote:
      'Placeholder testimonial — customer feedback, names, and job titles will only be published with written approval.',
    author: 'Client name pending',
    role: 'Role and organisation pending approval',
  },
  {
    id: 't3',
    placeholder: true,
    quote:
      'Placeholder testimonial — real outcomes and references replace this content before the site goes live.',
    author: 'Client name pending',
    role: 'Role and organisation pending approval',
  },
];

/**
 * Team profiles are PENDING (MASTER_README section 63). Placeholders only.
 */
export const teamPlaceholders = [
  { id: 'team-1', name: 'Name pending approval', role: 'Leadership role pending' },
  { id: 'team-2', name: 'Name pending approval', role: 'Technology role pending' },
  { id: 'team-3', name: 'Name pending approval', role: 'Delivery role pending' },
];

/**
 * Statistics must be supplied by the company (MASTER_README section 31).
 * Rendered as labels with no invented numbers.
 */
export const statPlaceholders = [
  { label: 'Projects delivered', value: 'Figure pending approval' },
  { label: 'Technologies in use', value: 'Figure pending approval' },
  { label: 'Client retention', value: 'Figure pending approval' },
];
