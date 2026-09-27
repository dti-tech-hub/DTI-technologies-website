/**
 * Blog content — Phase 1 demo articles (MASTER_README section 34).
 * Original placeholder writing until real articles are supplied;
 * every article is flagged `isDemo` and surfaced with a demo badge.
 */

export const blogCategories = [
  'All',
  'Artificial Intelligence',
  'Cyber Security',
  'Data',
  'Software Engineering',
  'Cloud',
  'Digital Transformation',
];

export const blogArticles = [
  {
    slug: 'where-generative-ai-pays-off',
    title: 'Where Generative AI Actually Pays Off Inside a Business',
    category: 'Artificial Intelligence',
    tags: ['Generative AI', 'Automation', 'Strategy'],
    date: '2026-06-18',
    readingTime: '5 min read',
    featured: true,
    isDemo: true,
    excerpt:
      'The useful question is not whether a business can adopt AI, but which workflows are worth transforming first. A practical way to find them.',
    content: [
      {
        type: 'p',
        text: 'Every team has work that looks productive on the surface but is mostly movement: copying data between systems, summarising long documents, drafting routine replies, hunting for the latest version of a file. These tasks rarely appear on a strategy slide, yet they quietly absorb a meaningful share of the week.',
      },
      { type: 'h2', text: 'Start with friction, not with models' },
      {
        type: 'p',
        text: 'The most reliable way to find a useful AI opportunity is to map where people wait, re-enter, or re-check information. Friction points are usually documented already — in support tickets, handover notes, and the small workarounds teams invent. Each one is a candidate for assistance.',
      },
      {
        type: 'p',
        text: 'Model choice matters far less than the surrounding design: where the data comes from, how outputs are reviewed, and what happens when the system is unsure. A modest model wrapped in a thoughtful workflow will outperform a sophisticated one left unsupervised.',
      },
      { type: 'h2', text: 'Three filters worth applying early' },
      {
        type: 'ul',
        items: [
          'Volume — does the task happen often enough for improvements to compound?',
          'Reversibility — can a human easily correct a wrong answer before it causes harm?',
          'Grounding — is there approved, well-structured content the system can reference?',
        ],
      },
      {
        type: 'p',
        text: 'Tasks that score well on all three tend to produce measurable relief quickly, which in turn builds the confidence needed for harder problems later. The goal of a first initiative is not to automate everything; it is to prove that assistance works in your specific environment.',
      },
      { type: 'h2', text: 'Keep people in the loop' },
      {
        type: 'p',
        text: 'The strongest early use cases keep a person as the final decision-maker. Review steps feel slower in a demo and prove invaluable in production: they catch edge cases, preserve accountability, and give teams a natural way to build trust in the system over time.',
      },
    ],
  },
  {
    slug: 'security-foundations-product-teams-own',
    title: 'Security Foundations Every Product Team Should Own',
    category: 'Cyber Security',
    tags: ['Security', 'Engineering', 'Practices'],
    date: '2026-05-27',
    readingTime: '4 min read',
    featured: false,
    isDemo: true,
    excerpt:
      'Security does not belong to a single specialist team. These are the foundations every delivery team can own from day one.',
    content: [
      {
        type: 'p',
        text: 'Security incidents rarely come from one dramatic failure. They come from small, ordinary gaps: a forgotten permission, an unrotated secret, a dependency nobody reviews. That is good news — it means most of the risk sits inside everyday engineering habits.',
      },
      { type: 'h2', text: 'Own the basics' },
      {
        type: 'ul',
        items: [
          'Authenticate and authorise deliberately — least privilege by default, reviewed regularly.',
          'Keep secrets out of code and configuration that ships to users.',
          'Validate input on every boundary, including your own internal APIs.',
          'Log the events that matter for detection, and protect those logs as carefully as the data.',
        ],
      },
      { type: 'h2', text: 'Make the safe path the easy path' },
      {
        type: 'p',
        text: 'Teams follow secure practices most reliably when the secure option is also the convenient one. Shared libraries for authentication, templated deployment checks, and automated dependency updates remove the need for memory and goodwill.',
      },
      {
        type: 'p',
        text: 'None of this replaces specialist assessment for higher-risk systems. But a team that treats these foundations as part of the definition of done will arrive at an assessment with far less to fix — and will respond to findings much faster when they do appear.',
      },
    ],
  },
  {
    slug: 'treating-data-as-a-product',
    title: 'From Pipelines to Products: Treating Data as a Product',
    category: 'Data',
    tags: ['Data Engineering', 'Governance', 'Analytics'],
    date: '2026-05-06',
    readingTime: '5 min read',
    featured: false,
    isDemo: true,
    excerpt:
      'Pipelines move data. Products make it trustworthy. The shift in mindset that turns dashboards into decisions.',
    content: [
      {
        type: 'p',
        text: 'Many organisations have no shortage of pipelines — and no shortage of doubt about the numbers that come out of them. When every report triggers a side conversation about which figure is correct, the data is being moved but not yet served.',
      },
      { type: 'h2', text: 'What changes with a product mindset' },
      {
        type: 'p',
        text: 'Treating a dataset as a product means giving it a clear owner, documented consumers, a published quality expectation, and a way to raise issues. The consumers become users, and their questions shape what gets built next.',
      },
      {
        type: 'ul',
        items: [
          'Ownership — a named team responsible for freshness, accuracy, and change.',
          'Contracts — defined shapes and expectations so downstream work does not silently break.',
          'Discoverability — a catalogue entry explaining what the data means and how it is computed.',
          'Feedback — a simple route for consumers to report surprises.',
        ],
      },
      { type: 'h2', text: 'Quality becomes measurable' },
      {
        type: 'p',
        text: 'Once expectations are written down, they can be checked automatically. Completeness, uniqueness, and freshness checks turn vague confidence into visible signals, and small issues are caught before they reach an executive dashboard.',
      },
      {
        type: 'p',
        text: 'The result is quieter: fewer reconciliation meetings, faster onboarding for new analysts, and more time spent on analysis instead of arguing about definitions.',
      },
    ],
  },
  {
    slug: 'build-or-buy-without-regret',
    title: 'Choosing Between Build and Buy Without Regret',
    category: 'Software Engineering',
    tags: ['Architecture', 'Procurement', 'Delivery'],
    date: '2026-04-14',
    readingTime: '4 min read',
    featured: false,
    isDemo: true,
    excerpt:
      'Build-versus-buy debates stall when they are framed as ideology. Framed as risk and fit, they become straightforward.',
    content: [
      {
        type: 'p',
        text: 'The build-versus-buy decision is often argued as if one answer is generally correct. In practice it is a question about fit: how central the capability is to your differentiation, how unusual your constraints are, and how much maintenance you are willing to carry.',
      },
      { type: 'h2', text: 'Questions that clarify the choice' },
      {
        type: 'ul',
        items: [
          'Is this capability part of what makes your offering distinct, or is it a commodity layer beneath it?',
          'How unusual are your compliance, integration, or scale requirements?',
          'Who maintains the result in three years, and with what budget?',
          'How quickly would a purchased tool need to change to keep up with you?',
        ],
      },
      { type: 'h2', text: 'Design for the exit either way' },
      {
        type: 'p',
        text: 'Whichever route you take, preserve optionality. Standard data formats, thin integration layers, and documented interfaces mean a purchased tool can be replaced — or a built one can be opened up — without a rewrite.',
      },
      {
        type: 'p',
        text: 'The goal of the decision is not to be right forever. It is to make the trade-off explicit, so the cost of reversing it is understood before it is ever needed.',
      },
    ],
  },
  {
    slug: 'practical-cloud-cost-awareness',
    title: 'A Practical Path to Cloud Cost Awareness',
    category: 'Cloud',
    tags: ['Cloud', 'FinOps', 'Operations'],
    date: '2026-03-24',
    readingTime: '4 min read',
    featured: false,
    isDemo: true,
    excerpt:
      'Cloud cost conversations improve when they become routine engineering signals rather than quarterly surprises.',
    content: [
      {
        type: 'p',
        text: 'Cloud bills are rarely alarming because of a single oversized resource. They creep upward through accumulated defaults: environments nobody closed, logging kept forever, and instances sized for a peak that passed months ago.',
      },
      { type: 'h2', text: 'Make spend visible where decisions happen' },
      {
        type: 'ul',
        items: [
          'Tag resources by team and environment so ownership is obvious.',
          'Show cost alongside usage in the same dashboards engineers already watch.',
          'Set budgets with alerts that trigger before the month is over.',
          'Review the top movers on a fixed cadence — small, regular conversations beat annual clean-ups.',
        ],
      },
      { type: 'h2', text: 'Automate the boring safeguards' },
      {
        type: 'p',
        text: 'Auto-scaling policies, scheduled shutdowns for non-production environments, and lifecycle rules for stored data remove the need for constant vigilance. The objective is not to spend less at any price — it is to make sure spending maps to value.',
      },
      {
        type: 'p',
        text: 'Once cost becomes a normal engineering signal, optimisation stops being a finance initiative and becomes part of running healthy systems.',
      },
    ],
  },
  {
    slug: 'modernising-without-stopping-the-business',
    title: 'Modernising Legacy Systems Without Stopping the Business',
    category: 'Digital Transformation',
    tags: ['Legacy', 'Modernisation', 'Strategy'],
    date: '2026-02-26',
    readingTime: '5 min read',
    featured: false,
    isDemo: true,
    excerpt:
      'Replacement projects fail when they demand stillness. Incremental approaches let the business keep moving while the platform changes underneath.',
    content: [
      {
        type: 'p',
        text: 'Legacy systems carry two costs at once: the risk they create, and the speed they remove. Waiting for a quiet moment to replace them rarely works, because the systems that most need change are usually the ones in constant use.',
      },
      { type: 'h2', text: 'Strangler patterns over big-bang rewrites' },
      {
        type: 'p',
        text: 'Rather than building a replacement in isolation, new capabilities are introduced around the existing system and gradually take over responsibilities. Each increment delivers value on its own, and the old platform shrinks in scope instead of being switched off in a single risky moment.',
      },
      {
        type: 'ul',
        items: [
          'Identify a boundary where traffic can be split safely.',
          'Route one capability at a time to the new path.',
          'Keep both systems observable during the transition.',
          'Retire the old responsibility only after the new one has proven itself.',
        ],
      },
      { type: 'h2', text: 'Change the organisation alongside the code' },
      {
        type: 'p',
        text: 'Modernisation stalls when only the architecture changes. Release practices, ownership, and monitoring need to evolve together — otherwise the new system gradually drifts back toward the habits that made the old one hard to change.',
      },
      {
        type: 'p',
        text: 'Done this way, transformation becomes a sequence of ordinary releases rather than a single leap of faith.',
      },
    ],
  },
];

export const getArticleBySlug = (slug) => blogArticles.find((article) => article.slug === slug);
