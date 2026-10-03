import { socials } from './site.js';

export const primaryNav = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'about', label: 'About', to: '/about' },
  { id: 'services', label: 'Services', to: '/services', hasDropdown: true },
  { id: 'portfolio', label: 'Portfolio', to: '/portfolio' },
  { id: 'careers', label: 'Careers', to: '/careers' },
  { id: 'blog', label: 'Blog', to: '/blog' },
  { id: 'contact', label: 'Contact', to: '/contact' },
];

/** Grouped Services dropdown (MASTER_README section 12). */
export const serviceGroups = [
  {
    id: 'ai',
    label: 'AI & INTELLIGENCE',
    items: [{ slug: 'generative-ai', label: 'Generative AI', icon: 'brain' }],
  },
  {
    id: 'security',
    label: 'SECURITY',
    items: [{ slug: 'cyber-security', label: 'Cyber Security', icon: 'shield' }],
  },
  {
    id: 'data',
    label: 'DATA',
    items: [
      { slug: 'data-engineering', label: 'Data Engineering', icon: 'database' },
      { slug: 'data-management', label: 'Data Management', icon: 'chart' },
    ],
  },
  {
    id: 'software',
    label: 'SOFTWARE',
    items: [
      { slug: 'application-development', label: 'Application Development', icon: 'code' },
      { slug: 'web-applications', label: 'Web Applications', icon: 'globe' },
    ],
  },
  {
    id: 'consulting',
    label: 'CONSULTING',
    items: [
      { slug: 'it-consulting', label: 'IT Consulting Services', icon: 'compass' },
      { slug: 'outsourcing', label: 'Outsourcing Services', icon: 'users' },
      { slug: 'maintenance', label: 'Maintenance Services', icon: 'wrench' },
      { slug: 'other-services', label: 'Other Services', icon: 'grid' },
    ],
  },
];

export const footerColumns = [
  {
    id: 'company',
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    links: [
      { label: 'AI', to: '/services/generative-ai' },
      { label: 'Cyber Security', to: '/services/cyber-security' },
      { label: 'Data', to: '/services/data-engineering' },
      { label: 'Development', to: '/services/application-development' },
      { label: 'Web Apps', to: '/services/web-applications' },
      { label: 'Consulting', to: '/services/it-consulting' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
];

export const footerSocials = socials;
