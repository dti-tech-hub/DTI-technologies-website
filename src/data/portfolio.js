import wealthManagerImage from '../assets/wealthManager.png';
import aiFramingImage from '../assets/AI-driven framing.png';
import campusLoopImage from '../assets/campusloop.png';

/**
 * Portfolio showcase.
 *
 * IMPORTANT (MASTER_README section 32): real portfolio items, clients,
 * outcomes, statistics and technologies have NOT been supplied. The entries
 * below are clearly marked placeholder records that demonstrate the layout
 * and filtering only — they are not claims about work performed.
 *
 * The first three records carry real project imagery and names, but their
 * case-study copy (overview/challenge/solution/outcome/technologies/features)
 * is still unapproved placeholder text and must not be published as a claim
 * about work performed until it is replaced with verified content.
 */

export const portfolioCategories = [
  'All',
  'AI',
  'Cyber Security',
  'Data',
  'Web',
  'Mobile',
  'Cloud',
];

export const portfolioItems = [
  {
    id: 'ai-wealth-manager',
    title: 'Wealth Manager & Goal Tracker',
    category: 'AI',
    icon: 'brain',
    image: wealthManagerImage,
    isPlaceholder: false,
    description:
      'Placeholder entry — an approved case study for an assistant that helps teams find answers across internal documentation.',
    overview:
      'Placeholder overview. A real case study will describe the context, scope, and delivery of this solution once approved.',
    challenge:
      'Placeholder — the business challenge and constraints will be documented from the approved case study.',
    solution:
      'Placeholder — the solution approach, architecture, and delivery details will be added when the real project information is supplied.',
    outcome:
      'Placeholder — outcomes, measurements, and results will only be published with verified company data.',
    technologies: ['Technology stack pending approval'],
    features: ['Feature list pending approval'],
  },
  {
    id: 'ai-driven-framing',
    title: 'AI-Driven Precision Framing',
    category: 'AI',
    icon: 'layers',
    image: aiFramingImage,
    isPlaceholder: false,
    description:
      'Placeholder entry — an approved case study covering a structured security assessment and remediation programme.',
    overview:
      'Placeholder overview. This record demonstrates how security engagements will be presented in the portfolio.',
    challenge: 'Placeholder — scope, systems, and constraints to be documented from the real engagement.',
    solution:
      'Placeholder — assessment methodology, findings structure, and remediation plan will be added after approval.',
    outcome: 'Placeholder — verified improvements will be published only with owner approval.',
    technologies: ['Technology stack pending approval'],
    features: ['Feature list pending approval'],
  },
  {
    id: 'campusloop',
    title: 'CampusLoop',
    category: 'Web',
    icon: 'code',
    image: campusLoopImage,
    isPlaceholder: false,
    description:
      'Placeholder entry — an approved case study for a central data platform that connects information across systems.',
    overview: 'Placeholder overview. The real platform architecture and delivery story will replace this text.',
    challenge: 'Placeholder — data sources, quality issues, and constraints to be added.',
    solution: 'Placeholder — pipeline design, modelling approach, and tooling to be added.',
    outcome: 'Placeholder — adoption and impact figures will only be published if verified.',
    technologies: ['Technology stack pending approval'],
    features: ['Feature list pending approval'],
  },
  {
    id: 'ph-customer-portal',
    title: 'Customer Self-Service Portal',
    category: 'Web',
    icon: 'code',
    isPlaceholder: true,
    description:
      'Placeholder entry — an approved case study for a web portal that lets customers complete tasks online.',
    overview: 'Placeholder overview. Screenshots and details will be added from the approved case study.',
    challenge: 'Placeholder — user needs and business constraints to be documented.',
    solution: 'Placeholder — experience design and engineering approach to be documented.',
    outcome: 'Placeholder — results will be published only when verified.',
    technologies: ['Technology stack pending approval'],
    features: ['Feature list pending approval'],
  },
  {
    id: 'ph-field-app',
    title: 'Field Operations Mobile App',
    category: 'Mobile',
    icon: 'mobile',
    isPlaceholder: true,
    description:
      'Placeholder entry — an approved case study for a mobile application supporting work away from the desk.',
    overview: 'Placeholder overview. The real product story and screenshots will replace this content.',
    challenge: 'Placeholder — field conditions, connectivity, and user needs to be added.',
    solution: 'Placeholder — platform choices and offline strategy to be added.',
    outcome: 'Placeholder — verified usage and impact data to be added later.',
    technologies: ['Technology stack pending approval'],
    features: ['Feature list pending approval'],
  },
  {
    id: 'ph-cloud-migration',
    title: 'Cloud Migration & Modernisation',
    category: 'Cloud',
    icon: 'cloud',
    isPlaceholder: true,
    description:
      'Placeholder entry — an approved case study describing a migration to cloud infrastructure with modernisation.',
    overview: 'Placeholder overview. Migration scope and approach will be added after approval.',
    challenge: 'Placeholder — current estate, risks, and constraints to be documented.',
    solution: 'Placeholder — target architecture, migration waves, and operating model to be documented.',
    outcome: 'Placeholder — verified outcomes will be published only with approval.',
    technologies: ['Technology stack pending approval'],
    features: ['Feature list pending approval'],
  },
];
