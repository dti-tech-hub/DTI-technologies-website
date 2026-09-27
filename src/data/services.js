/**
 * The nine service offerings — content sourced from MASTER_README sections 17–25.
 * Extra "approach" blocks are draft copy for the service detail pages and
 * require owner approval before being treated as final company claims.
 */

export const services = [
  {
    slug: 'generative-ai',
    number: '01',
    icon: 'brain',
    group: 'AI & Intelligence',
    title: 'Generative AI Services',
    navLabel: 'Generative AI',
    cardText: 'Intelligent solutions powered by modern AI.',
    headline: 'Build Intelligent Systems That Work With You.',
    summary:
      'We design and develop practical AI solutions that help organizations automate repetitive work, understand information faster, and create intelligent experiences for customers and teams.',
    capabilities: [
      'AI assistants and copilots',
      'Generative AI applications',
      'Retrieval-augmented generation',
      'AI workflow automation',
      'Intelligent document processing',
      'Custom AI solutions',
    ],
    approach: [
      {
        title: 'Identify high-value use cases',
        text: 'We look for workflows where AI removes real friction — repetitive handling, searching, summarising, and drafting.',
      },
      {
        title: 'Ground models in your information',
        text: 'Retrieval patterns connect AI responses to your own approved content, so answers stay relevant and traceable.',
      },
      {
        title: 'Design for human oversight',
        text: 'Assistive experiences keep people in control, with review steps and clear boundaries around automated actions.',
      },
      {
        title: 'Measure and iterate',
        text: 'Quality is evaluated against real examples and refined over time as usage and expectations grow.',
      },
    ],
    meta: {
      title: 'Generative AI Services',
      description:
        'Practical generative AI solutions — assistants, retrieval-augmented generation, workflow automation, and intelligent document processing.',
    },
  },
  {
    slug: 'cyber-security',
    number: '02',
    icon: 'shield',
    group: 'Security',
    title: 'Cyber Security Services',
    navLabel: 'Cyber Security',
    cardText: 'Security-focused solutions for applications, data and operations.',
    headline: 'Protect What Your Business Can’t Afford to Lose.',
    summary:
      'Modern businesses operate in an environment where security cannot be an afterthought. We help organizations strengthen their applications, infrastructure, data, and digital operations through practical security-focused solutions.',
    capabilities: [
      'Security assessment',
      'Application security',
      'Threat monitoring',
      'Vulnerability management',
      'Data protection',
      'Security consulting',
    ],
    approach: [
      {
        title: 'Understand the exposure',
        text: 'We map applications, data flows, and access paths to see where risk actually lives.',
      },
      {
        title: 'Prioritise what matters',
        text: 'Findings are ranked by business impact so remediation effort goes where it reduces the most risk.',
      },
      {
        title: 'Strengthen by design',
        text: 'Secure coding practices, hardening, and protection controls are applied during development — not after release.',
      },
      {
        title: 'Keep watching',
        text: 'Monitoring and recurring reviews help new threats surface early, while the environment keeps evolving.',
      },
    ],
    meta: {
      title: 'Cyber Security Services',
      description:
        'Security assessments, application security, threat monitoring, vulnerability management, data protection, and security consulting.',
    },
  },
  {
    slug: 'data-engineering',
    number: '03',
    icon: 'database',
    group: 'Data',
    title: 'Data Engineering Services',
    navLabel: 'Data Engineering',
    cardText: 'Modern pipelines and platforms that make data usable.',
    headline: 'Turn Complex Data Into Business-Ready Intelligence.',
    summary:
      'Data becomes valuable when it is reliable, accessible, and ready to drive decisions. We build modern data pipelines and platforms that connect information across systems and make it easier to use.',
    capabilities: [
      'Data pipelines',
      'ETL / ELT',
      'Data warehouses',
      'Data lakes',
      'Cloud data platforms',
      'Data integration',
    ],
    approach: [
      {
        title: 'Connect the sources',
        text: 'Integrations bring information together from the systems your teams already rely on.',
      },
      {
        title: 'Model for reuse',
        text: 'Clean, documented datasets are shaped once and reused across reporting, analytics, and AI initiatives.',
      },
      {
        title: 'Automate the flow',
        text: 'Scheduled and event-driven pipelines keep data fresh without manual intervention.',
      },
      {
        title: 'Make it trustworthy',
        text: 'Validation and monitoring flag issues early, so decisions rest on dependable information.',
      },
    ],
    meta: {
      title: 'Data Engineering Services',
      description:
        'Data pipelines, ETL/ELT, data warehouses, data lakes, cloud data platforms, and data integration.',
    },
  },
  {
    slug: 'application-development',
    number: '04',
    icon: 'code',
    group: 'Software',
    title: 'Application Development',
    navLabel: 'Application Development',
    cardText: 'Modern web and mobile applications built around real requirements.',
    headline: 'From Idea to Production-Ready Software.',
    summary:
      'We design and develop modern web and mobile applications around real business requirements — combining intuitive experiences with scalable engineering.',
    capabilities: [
      'Web applications',
      'Mobile applications',
      'Enterprise applications',
      'API development',
      'Cloud-native applications',
      'Custom software',
    ],
    approach: [
      {
        title: 'Start with the workflow',
        text: 'Interfaces are shaped around how people actually work, reducing training and friction.',
      },
      {
        title: 'Engineer for change',
        text: 'Modular architecture and clear contracts let features evolve without destabilising the product.',
      },
      {
        title: 'Integrate cleanly',
        text: 'Well-documented APIs connect the application with the rest of your technology landscape.',
      },
      {
        title: 'Release with confidence',
        text: 'Automated testing and deployment pipelines make shipping frequent, visible, and reversible.',
      },
    ],
    meta: {
      title: 'Application Development',
      description:
        'Web, mobile, and enterprise application development, API development, cloud-native applications, and custom software.',
    },
  },
  {
    slug: 'data-management',
    number: '05',
    icon: 'chart',
    group: 'Data',
    title: 'Data Management Services',
    navLabel: 'Data Management',
    cardText: 'Reliable, governed and accessible data foundations.',
    headline: 'Make Your Data Reliable, Governed and Useful.',
    summary:
      'Strong data management creates the foundation for better operations and better decisions. We help organizations improve data quality, governance, accessibility, and visibility.',
    capabilities: [
      'Data quality',
      'Data governance',
      'Master data management',
      'Data integration',
      'Business intelligence',
      'Dashboards and reporting',
    ],
    approach: [
      {
        title: 'Define ownership',
        text: 'Clear responsibilities and policies give everyone confidence in how data is created and used.',
      },
      {
        title: 'Improve quality continuously',
        text: 'Profiling, rules, and remediation workflows keep critical fields accurate over time.',
      },
      {
        title: 'Create one version of key data',
        text: 'Master records reduce duplication and disagreement across departments and systems.',
      },
      {
        title: 'Surface the insight',
        text: 'Dashboards and reporting put the right numbers in front of the right people.',
      },
    ],
    meta: {
      title: 'Data Management Services',
      description:
        'Data quality, data governance, master data management, data integration, business intelligence, dashboards and reporting.',
    },
  },
  {
    slug: 'it-consulting',
    number: '06',
    icon: 'compass',
    group: 'Consulting',
    title: 'IT Consulting Services',
    navLabel: 'IT Consulting',
    cardText: 'Technology strategy connected to business purpose.',
    headline: 'Technology Decisions With a Clear Business Purpose.',
    summary:
      'Technology investments should solve real problems. Our consulting approach connects business objectives with practical technology strategies, helping organizations plan, modernize, and execute with confidence.',
    capabilities: [
      'Technology strategy',
      'Digital transformation',
      'Architecture consulting',
      'Cloud consulting',
      'IT modernization',
      'Technical advisory',
    ],
    approach: [
      {
        title: 'Assess where you are',
        text: 'A clear view of systems, skills, and constraints anchors every recommendation in reality.',
      },
      {
        title: 'Set the direction',
        text: 'A prioritised roadmap balances ambition with effort, risk, and the capacity of your teams.',
      },
      {
        title: 'Choose pragmatically',
        text: 'Architecture and platform choices are made for your context — not for a vendor checklist.',
      },
      {
        title: 'Support execution',
        text: 'We stay involved through delivery so strategy survives contact with real projects.',
      },
    ],
    meta: {
      title: 'IT Consulting Services',
      description:
        'Technology strategy, digital transformation, architecture consulting, cloud consulting, IT modernization, and technical advisory.',
    },
  },
  {
    slug: 'outsourcing',
    number: '07',
    icon: 'users',
    group: 'Consulting',
    title: 'Outsourcing Services',
    navLabel: 'Outsourcing',
    cardText: 'Flexible technical resources that integrate with your team.',
    headline: 'Extend Your Team With the Right Technical Expertise.',
    summary:
      'When internal teams need additional capability, we provide flexible technology resources and delivery support that integrate with existing workflows and objectives.',
    capabilities: [
      'Dedicated development teams',
      'Technical resources',
      'Application development support',
      'QA resources',
      'Data specialists',
      'Long-term technical support',
    ],
    approach: [
      {
        title: 'Match skills to need',
        text: 'Resources are selected against the actual gaps in your team, not a generic roster.',
      },
      {
        title: 'Integrate quickly',
        text: 'Working agreements, rituals, and tooling align new contributors with your existing workflow.',
      },
      {
        title: 'Keep quality visible',
        text: 'Code review, testing, and shared reporting maintain standards across the extended team.',
      },
      {
        title: 'Scale up or down',
        text: 'Capacity flexes with project phases, so effort follows demand.',
      },
    ],
    meta: {
      title: 'Outsourcing Services',
      description:
        'Dedicated development teams, technical resources, application development support, QA resources, data specialists, and long-term support.',
    },
  },
  {
    slug: 'maintenance',
    number: '08',
    icon: 'wrench',
    group: 'Consulting',
    title: 'Maintenance & Support',
    navLabel: 'Maintenance',
    cardText: 'Ongoing care that keeps applications secure and reliable.',
    headline: 'Keep Your Technology Running. Keep Your Business Moving.',
    summary:
      'Launching software is only the beginning. We provide ongoing maintenance and technical support to help applications remain secure, reliable, performant, and ready for change.',
    capabilities: [
      'Application maintenance',
      'Bug fixing',
      'Performance optimization',
      'Security updates',
      'Monitoring',
      'Technical support',
    ],
    approach: [
      {
        title: 'Monitor continuously',
        text: 'Health checks and alerting surface issues before they reach end users.',
      },
      {
        title: 'Respond predictably',
        text: 'Defined priorities and response expectations keep incidents calm and controlled.',
      },
      {
        title: 'Patch and harden',
        text: 'Regular dependency and security updates reduce the window of exposure.',
      },
      {
        title: 'Improve steadily',
        text: 'Recurring reviews turn support tickets into a backlog of targeted improvements.',
      },
    ],
    meta: {
      title: 'Maintenance & Support',
      description:
        'Application maintenance, bug fixing, performance optimization, security updates, monitoring, and technical support.',
    },
  },
  {
    slug: 'other-services',
    number: '09',
    icon: 'grid',
    group: 'Consulting',
    title: 'Other Digital Services',
    navLabel: 'Other Services',
    cardText: 'Design, quality, cloud and digital experience expertise.',
    headline: 'The Expertise You Need Beyond Development.',
    summary:
      'Software is only part of a successful digital presence. These capability areas complement our core services — helping teams design, test, launch, and grow complete digital experiences.',
    capabilities: [
      'UI/UX design',
      'Quality assurance',
      'Software testing',
      'Cloud services',
      'Digital experience',
      'SEO and digital presence',
    ],
    approach: [
      {
        title: 'Design with intent',
        text: 'Research-informed interfaces that stay consistent and accessible across the journey.',
      },
      {
        title: 'Test systematically',
        text: 'Structured QA and test automation protect releases from regressions.',
      },
      {
        title: 'Run reliably',
        text: 'Cloud services keep environments resilient, observable, and cost-aware.',
      },
      {
        title: 'Be found',
        text: 'Technical SEO and content fundamentals strengthen digital presence over time.',
      },
    ],
    note: 'Only capabilities the company actually provides should ultimately be presented as factual business claims.',
    meta: {
      title: 'Other Digital Services',
      description:
        'UI/UX design, quality assurance, software testing, cloud services, digital experience, and SEO and digital presence.',
    },
  },
];

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);

export const getServiceTitle = (slug) => getServiceBySlug(slug)?.title;
