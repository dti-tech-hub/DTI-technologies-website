# Premium Technology Services Website — Master Specification

**Version:** 1.0  
**Phase:** Frontend Design & Development  
**Backend:** Deferred until frontend approval  
**Design Direction:** Midnight Plum + Light Biscuit  
**Reference Website:** https://thecodeon.com/index.php#data-management

---

# 1. Project Overview

This project is a modern, premium corporate technology-services website.

The website will clearly present the company's technology capabilities and services, with strong visual design, confident messaging, smooth animations, responsive behavior, and a professional user experience.

The reference website is used as inspiration for:

- Overall information architecture
- Service-oriented navigation
- Depth of service presentation
- Corporate website structure
- Contact/career/blog patterns
- Portfolio presentation
- Interaction ideas

The reference website's branding, company identity, text, images, testimonials, and proprietary content must **not** be copied.

The new website must have its own identity, content, design system, and visual language.

---

# 2. Core Development Strategy

The project will be developed in two phases.

## Phase 1 — Frontend Only

Phase 1 is strictly frontend.

It includes:

- Complete website UI
- All pages
- Navigation
- Dropdown menus
- Responsive design
- Forms and frontend validation
- Search/filter interfaces
- Animations
- Hover states
- Loading states
- Empty states
- Success/error UI
- Portfolio UI
- Careers UI
- Blog UI
- Contact UI
- Legal pages
- Accessibility
- SEO-friendly page structure
- Frontend testing

Phase 1 must **not** include:

- Backend
- Database
- Authentication
- Admin dashboard
- Real form persistence
- API integration
- Newsletter database
- Career application database
- Contact inquiry database

Forms should work as frontend demonstrations with validation and appropriate success/error states.

## Phase 2 — Backend

Backend development starts only after:

1. The complete frontend has been built.
2. The design has been reviewed.
3. All pages have been tested.
4. The owner approves the frontend design as final.

Only then should backend requirements be designed and implemented.

---

# 3. Final Navigation

The website must have the following primary navigation:

```text
HOME

ABOUT US

SERVICES
├── Generative AI Services
├── Cyber Security
├── Data Engineering Services
├── Application Development
├── Data Management
├── IT Consulting Services
├── Outsourcing Services
├── Maintenance Services
└── Other Services

PORTFOLIO

CAREERS

BLOG

CONTACT US
```

There is **no Products section**.

There is **no Projects section**.

The company's work showcase is called **Portfolio**.

---

# 4. Website Page Architecture

```text
/
├── Home
├── About Us
├── Services
│   ├── Generative AI
│   ├── Cyber Security
│   ├── Data Engineering
│   ├── Application Development
│   ├── Data Management
│   ├── IT Consulting
│   ├── Outsourcing
│   ├── Maintenance
│   └── Other Services
├── Portfolio
├── Careers
├── Blog
├── Contact Us
├── Privacy Policy
└── Terms & Conditions
```

---

# 5. Brand Positioning

The website should communicate the company as a:

- Modern technology company
- Digital solutions partner
- Technology transformation partner
- Engineering-focused organization
- Provider of intelligent and secure digital solutions

The communication should feel:

- Confident
- Attractive
- Professional
- Premium
- Modern
- Trustworthy
- Intelligent
- Technology-focused

Avoid exaggerated claims, fake statistics, invented clients, or unsupported business claims.

---

# 6. Core Brand Message

Primary positioning direction:

> **We help businesses turn complex technology challenges into intelligent, secure, scalable digital solutions.**

Possible homepage messaging:

### Hero headline

> **Technology That Moves Your Business Forward.**

### Supporting message

> We build intelligent, secure, and scalable digital solutions that help businesses transform ideas into meaningful outcomes.

### Primary CTA

> **Explore Our Services**

### Secondary CTA

> **Talk to Our Team**

Supporting capability strip:

```text
GENERATIVE AI
•
CYBER SECURITY
•
DATA
•
SOFTWARE
•
CLOUD
•
CONSULTING
```

These are positioning/content directions and should be refined when actual company information is supplied.

---

# 7. Design Direction

## Theme Name

**Midnight Plum + Light Biscuit**

The visual concept is:

> Deep cinematic backgrounds + plum/burgundy gradients + warm biscuit highlights + elegant motion.

The website should feel like a premium technology company, not a generic template, gaming website, or overly flashy AI landing page.

---

# 8. Color System

## Primary Palette

| Name | Hex | Usage |
|---|---|---|
| Midnight Navy | `#181931` | Main background |
| Deep Plum | `#44174E` | Secondary sections |
| Rich Plum | `#662249` | Cards / gradients |
| Burgundy | `#A34054` | Primary accent |
| Warm Coral | `#B34D60` | Secondary accent |
| Light Biscuit | `#E8C79B` | CTA / highlights |
| White | `#FFFFFF` | Primary text |
| Soft Gray | `#C8C5CC` | Secondary text |

## UI Colors

```text
Success: #7BCF9A
Warning: #E8C56A
Error:   #E27D86
Info:    #8EA8D8
```

Use status colors sparingly.

---

# 9. Gradients

## Primary Atmospheric Gradient

```text
#181931 → #44174E → #662249
```

Use for:

- Hero backgrounds
- Large feature sections
- Footer
- Decorative areas

## Accent Gradient

```text
#662249 → #A34054
```

Use for:

- Service accents
- Portfolio accents
- Highlight sections

## Warm Gradient

```text
#A34054 → #E8C79B
```

Use selectively for:

- CTA highlights
- Decorative elements
- Featured statistics
- Special visual moments

The biscuit color must remain an accent, not the dominant website background.

---

# 10. Background System

Use multiple background levels.

```text
Main Background:    #181931
Secondary:          #20172F
Plum Section:       #44174E
Card:               #241B35
Card Hover:         #30203F
```

Cards should appear elevated while remaining dark and premium.

---

# 11. Typography

Use a modern, clean sans-serif font family.

## H1

```text
56–76px desktop
Weight: 700–800
Line-height: 1.05–1.15
```

## H2

```text
42–52px
Weight: 700
```

## H3

```text
26–32px
Weight: 600–700
```

## Body

```text
16–18px
Line-height: 1.6–1.75
```

## Small Text

```text
13–14px
```

Typography should have generous spacing and should never feel crowded.

Responsive typography must scale appropriately on tablets and mobile devices.

---

# 12. Navbar

Desktop structure:

```text
LOGO
Home
About
Services ▼
Portfolio
Careers
Blog
Contact
```

## Navbar behavior

At the top:

- Transparent/semi-transparent appearance
- Subtle backdrop blur

After scrolling:

- Darker background
- Slight shadow
- Subtle border
- Smooth transition

## Services Dropdown

The dropdown should feel premium and organized.

Suggested grouping:

```text
SERVICES

AI & INTELLIGENCE
  Generative AI

SECURITY
  Cyber Security

DATA
  Data Engineering
  Data Management

SOFTWARE
  Application Development

CONSULTING
  IT Consulting
  Outsourcing
  Maintenance
  Other Services
```

Exact grouping may be refined during implementation.

---

# 13. Mobile Navigation

Mobile header:

```text
LOGO                                  ☰
```

Mobile menu:

```text
Home
About
Services >
Portfolio
Careers
Blog
Contact
```

The mobile menu should animate smoothly and never cause horizontal overflow.

---

# 14. Homepage Structure

The homepage should tell a clear story rather than simply displaying service cards.

Recommended sequence:

```text
Hero
↓
Company Introduction
↓
Services
↓
How We Work
↓
Why Choose Us
↓
Portfolio Preview
↓
Testimonials / Social Proof
↓
Blog Preview
↓
Final CTA
↓
Footer
```

Any section requiring real company information must use supplied information rather than invented claims.

---

# 15. Hero Section

The hero should be visually strong and premium.

Suggested content:

### Eyebrow

> TECHNOLOGY • INNOVATION • TRANSFORMATION

### Heading

> **Technology That Moves Your Business Forward.**

### Supporting paragraph

> We build intelligent, secure, and scalable digital solutions that help businesses transform ideas into meaningful outcomes.

### Buttons

```text
Explore Our Services
Talk to Our Team
```

## Hero visual

Use an original abstract technology visual consisting of:

- Gradients
- Abstract shapes
- Floating cards
- Subtle grid
- Technology-inspired geometry
- Light glow effects

Avoid relying on generic stock photography by default.

---

# 16. Hero Animation

Animation sequence:

1. Background appears
2. Eyebrow fades in
3. Heading fades/slides upward
4. Supporting text appears
5. CTA buttons appear
6. Hero visual begins a subtle floating animation

Animations must be smooth and restrained.

---

# 17. Services

The website will clearly present the company's service capabilities.

## Service 01 — Generative AI

### Headline

> **Build Intelligent Systems That Work With You.**

### Content

> We design and develop practical AI solutions that help organizations automate repetitive work, understand information faster, and create intelligent experiences for customers and teams.

### Capabilities

- AI assistants and copilots
- Generative AI applications
- Retrieval-augmented generation
- AI workflow automation
- Intelligent document processing
- Custom AI solutions

---

# 18. Service 02 — Cyber Security

### Headline

> **Protect What Your Business Can't Afford to Lose.**

### Content

> Modern businesses operate in an environment where security cannot be an afterthought. We help organizations strengthen their applications, infrastructure, data, and digital operations through practical security-focused solutions.

### Capabilities

- Security assessment
- Application security
- Threat monitoring
- Vulnerability management
- Data protection
- Security consulting

---

# 19. Service 03 — Data Engineering

### Headline

> **Turn Complex Data Into Business-Ready Intelligence.**

### Content

> Data becomes valuable when it is reliable, accessible, and ready to drive decisions. We build modern data pipelines and platforms that connect information across systems and make it easier to use.

### Capabilities

- Data pipelines
- ETL / ELT
- Data warehouses
- Data lakes
- Cloud data platforms
- Data integration

---

# 20. Service 04 — Application Development

### Headline

> **From Idea to Production-Ready Software.**

### Content

> We design and develop modern web and mobile applications around real business requirements — combining intuitive experiences with scalable engineering.

### Capabilities

- Web applications
- Mobile applications
- Enterprise applications
- API development
- Cloud-native applications
- Custom software

---

# 21. Service 05 — Data Management

### Headline

> **Make Your Data Reliable, Governed and Useful.**

### Content

> Strong data management creates the foundation for better operations and better decisions. We help organizations improve data quality, governance, accessibility, and visibility.

### Capabilities

- Data quality
- Data governance
- Master data management
- Data integration
- Business intelligence
- Dashboards and reporting

---

# 22. Service 06 — IT Consulting

### Headline

> **Technology Decisions With a Clear Business Purpose.**

### Content

> Technology investments should solve real problems. Our consulting approach connects business objectives with practical technology strategies, helping organizations plan, modernize, and execute with confidence.

### Capabilities

- Technology strategy
- Digital transformation
- Architecture consulting
- Cloud consulting
- IT modernization
- Technical advisory

---

# 23. Service 07 — Outsourcing

### Headline

> **Extend Your Team With the Right Technical Expertise.**

### Content

> When internal teams need additional capability, we provide flexible technology resources and delivery support that integrate with existing workflows and objectives.

### Capabilities

- Dedicated development teams
- Technical resources
- Application development support
- QA resources
- Data specialists
- Long-term technical support

---

# 24. Service 08 — Maintenance & Support

### Headline

> **Keep Your Technology Running. Keep Your Business Moving.**

### Content

> Launching software is only the beginning. We provide ongoing maintenance and technical support to help applications remain secure, reliable, performant, and ready for change.

### Capabilities

- Application maintenance
- Bug fixing
- Performance optimization
- Security updates
- Monitoring
- Technical support

---

# 25. Service 09 — Other Digital Services

### Headline

> **The Expertise You Need Beyond Development.**

Potential capability areas:

- UI/UX design
- Quality assurance
- Software testing
- Cloud services
- Digital experience
- SEO and digital presence

Only capabilities that the company actually provides should ultimately be presented as factual business claims.

---

# 26. Service Card Design

Service cards should use:

```text
Background: #241B35
Border: rgba(255,255,255,0.08)
Border radius: 18–24px
```

Example structure:

```text
┌──────────────────────────────┐
│ ✦                            │
│                              │
│ Generative AI                │
│                              │
│ Intelligent solutions        │
│ powered by modern AI.        │
│                              │
│ Explore service →            │
└──────────────────────────────┘
```

Hover:

- Slight upward movement
- Subtle border brightening
- Gradient glow
- Icon movement
- Small scale change where appropriate

No exaggerated 3D effects.

---

# 27. About Us

The About page should establish credibility without inventing company history.

Recommended sections:

- Company introduction
- Mission
- Vision
- Values
- Capabilities
- Team
- Why Us
- CTA

The layout should alternate between:

- Text + visual
- Visual + text

This prevents the page from becoming a repetitive card grid.

---

# 28. Mission / Vision / Values

These should be written using actual company direction once supplied.

Suggested positioning direction:

### Mission

> Build technology that solves meaningful business problems and creates measurable value.

### Vision

> Become a trusted technology partner for organizations embracing intelligent, secure, and scalable digital transformation.

These are draft content directions and must be approved before being treated as final company statements.

---

# 29. How We Work

Recommended process:

```text
01 — Discover
02 — Define
03 — Design
04 — Build
05 — Launch
06 — Evolve
```

Each step should have a concise explanation.

Scroll animation should reveal each stage progressively.

---

# 30. Why Choose Us

Potential content themes:

- Business-focused thinking
- Modern engineering
- Security-conscious development
- Scalable architecture
- Transparent collaboration
- Long-term support

Do not present unsupported numerical claims.

---

# 31. Statistics

A statistics section may be visually included, but actual numbers must be supplied by the company.

Do not publish invented values such as:

```text
50+ Projects
20+ Technologies
15+ Industries
99% Commitment
```

Those values were discussed only as design examples and must not become real content without verification.

---

# 32. Portfolio

There is **no Products section** and **no Projects section**.

The work showcase is called:

> **Portfolio**

## Portfolio purpose

Showcase genuine software, digital solutions, services, case studies, or other work performed by the company.

## Portfolio card information

Each item may contain:

- Project/solution title
- Category
- Short description
- Detailed overview
- Client/organization where appropriate
- Technologies
- Key features
- Challenge
- Solution
- Outcome
- Screenshots/images
- Case study details

## Portfolio categories

Potential frontend filters:

```text
All
AI
Cyber Security
Data
Web
Mobile
Cloud
```

These are UI categories and can be adjusted to match actual company work.

## Important rule

Do not invent portfolio projects, clients, outcomes, statistics, or technologies.

---

# 33. Careers

Suggested headline:

> **Build What's Next With Us.**

Suggested supporting direction:

> We are always looking for curious minds, problem solvers, engineers, designers, and technology enthusiasts who want to build meaningful digital experiences.

## Careers page

Include:

- Careers introduction
- Job search
- Job listing cards
- Job details
- Location
- Employment type
- Experience
- Responsibilities
- Requirements
- Benefits
- Apply CTA
- Application UI

Phase 1 application is frontend-only.

---

# 34. Blog

Positioning:

> **Ideas, Insights & Technology**

Potential categories:

- Artificial Intelligence
- Cyber Security
- Data
- Software Engineering
- Cloud
- Digital Transformation

## Blog page

Include:

- Featured article
- Latest articles
- Search
- Categories
- Tags
- Pagination or load-more UI
- Individual article pages

Phase 1 blog content may use approved placeholder/demo content until real articles are supplied.

---

# 35. Contact Page

Suggested headline:

> **Have a Challenge Worth Solving?**

Suggested supporting content:

> Tell us what you're trying to build, improve, or transform. Let's explore what technology can do for your business.

CTA:

> **Start a Conversation**

## Contact form

Potential fields:

- First Name
- Last Name
- Email
- Company
- Phone
- Inquiry Type
- Country / Region
- State / Province
- Job Title
- Area of Interest
- Message

Required fields must be clearly indicated.

## Phase 1 behavior

```text
Submit
↓
Frontend validation
↓
Success or error state
```

No database submission.

---

# 36. Newsletter

The frontend may include a newsletter subscription section.

Example:

> **Stay Ahead of What's Next.**

> Get practical insights on AI, cybersecurity, data, software, and digital transformation.

Fields:

- Email
- Subscribe button

Phase 1 is UI-only.

---

# 37. Testimonials / Social Proof

A testimonial section may be included in the design because it is useful for a corporate technology website.

However:

- Do not invent customers.
- Do not invent testimonials.
- Do not invent company names.
- Do not invent job titles.

Use real approved testimonials when supplied.

Until then, the component can be demonstrated with clearly marked placeholder/demo content or omitted from production content.

---

# 38. Footer

Suggested structure:

```text
LOGO

Short company description

COMPANY
About
Careers
Portfolio
Blog

SERVICES
AI
Cyber Security
Data
Development
Consulting

RESOURCES
Contact
Privacy
Terms

SOCIAL
LinkedIn
Instagram
Facebook
X

--------------------------------------------

© 2026 Company Name
All Rights Reserved
```

Actual company information must replace placeholders before production.

---

# 39. Legal Pages

Include:

- Privacy Policy
- Terms & Conditions

These must be original content appropriate to the actual company and website.

Do not copy the reference site's legal text.

---

# 40. Animation Philosophy

The animation style is:

> **Premium motion, not excessive motion.**

Use:

- Fade-up
- Fade-in
- Subtle scale
- Slide-in
- Staggered card appearance
- Gradient movement
- Floating elements
- Button micro-interactions
- Link underline animations
- Number counters when real numbers exist
- Page transitions
- Dropdown transitions
- Form focus effects
- Success animations
- Back-to-top interaction

Avoid:

- Excessive bouncing
- Distracting parallax
- Constant motion everywhere
- Gaming-style effects
- Excessive neon
- Slow animations that delay interaction

---

# 41. Background Effects

Use subtle:

- Radial gradients
- Blurred glow shapes
- Grain/noise texture
- Animated gradient blobs
- Grid patterns

These effects must remain subtle.

The goal is:

> Elegant technology atmosphere

not:

> Neon gaming interface.

---

# 42. Glassmorphism

Use glass effects selectively.

Possible use:

- Navbar
- Selected feature cards
- Floating hero elements

Do not make every element glass.

Example design characteristics:

```text
Semi-transparent background
Backdrop blur
Subtle border
Very soft shadow
```

---

# 43. Buttons

## Primary

```text
Background: #E8C79B
Text: #181931
```

Hover:

- Slight lift
- Subtle glow
- Slightly brighter biscuit
- 200–300ms transition

## Secondary

Transparent/dark background.

Border:

```text
rgba(232,199,155,0.5)
```

Text:

- White
- Biscuit

Hover:

- Plum background
- Biscuit border
- Slight lift

---

# 44. Cards

Default:

```text
Background: #241B35
Border: rgba(255,255,255,0.08)
Border radius: 18–24px
```

Hover:

```text
translateY(-5px)
Slightly brighter border
Subtle gradient glow
```

Keep cards visually consistent across services, portfolio, careers, and blog.

---

# 45. Responsive Design

## Desktop

- Full navigation
- Multi-column layouts
- Large hero
- Full service grids

## Tablet

- Condensed navigation
- Two-column layouts where appropriate
- Reduced heading sizes
- Adjusted spacing

## Mobile

- Hamburger menu
- Single-column hero
- Stacked sections
- Touch-friendly buttons
- Responsive cards
- Reduced decorative effects
- No horizontal overflow

Use responsive breakpoints appropriate to the chosen frontend framework/design system.

---

# 46. Accessibility

The website must:

- Use semantic HTML
- Provide accessible labels
- Maintain keyboard navigation
- Provide visible focus states
- Maintain adequate contrast
- Provide alt text for meaningful images
- Avoid inaccessible hover-only interactions
- Support reduced motion

Respect:

```text
prefers-reduced-motion
```

When reduced motion is requested, decorative animations should be reduced or disabled.

---

# 47. SEO

Frontend should be structured for SEO.

Include:

- Proper page titles
- Meta descriptions
- Semantic headings
- One clear H1 per page where appropriate
- Descriptive URLs
- Image alt text
- Open Graph metadata where practical
- Structured content
- Fast-loading pages

Actual company/domain metadata should be inserted when supplied.

---

# 48. Performance

The frontend should:

- Avoid unnecessary dependencies
- Optimize images
- Lazy-load appropriate images
- Avoid heavy animation libraries unless justified
- Avoid excessive DOM effects
- Keep initial load fast
- Minimize unnecessary re-renders
- Avoid horizontal overflow
- Test production builds

---

# 49. Content Rules

The AI coding agent must follow these rules:

1. Do not invent company facts.
2. Do not invent clients.
3. Do not invent portfolio results.
4. Do not invent statistics.
5. Do not invent team members.
6. Do not invent addresses or contact information.
7. Do not invent certifications.
8. Do not claim technologies the company has not approved.
9. Do not copy reference-site text.
10. Do not copy reference-site branding.
11. Use attractive professional draft copy where appropriate.
12. Mark content that requires owner approval.
13. Keep all content consistent with the company's actual services.

---

# 50. Reference Website Feature Inventory

The reference website influenced the following website capabilities and patterns:

- Corporate homepage
- About section/page
- Service navigation
- Individual service pages
- Portfolio/work presentation
- Careers
- Blog
- Contact/inquiry form
- Newsletter
- Testimonials/social proof
- Collaborator/partner area where applicable
- Footer navigation
- Privacy
- Terms & Conditions
- Responsive navigation
- Service dropdowns
- CTA sections

The new website should implement the relevant functionality with original design and content.

---

# 51. Technical Direction

The frontend should be built using a modern component-based architecture.

Preferred direction:

```text
React
Vite
JavaScript
React Router
```

Styling can use a clean maintainable CSS architecture or an appropriate utility/component approach chosen during implementation.

Avoid unnecessary complexity.

---

# 52. Suggested Frontend Structure

```text
src/
├── components/
├── layouts/
├── pages/
├── sections/
├── data/
├── assets/
├── hooks/
├── utils/
└── styles/
```

Content that may eventually come from a backend should initially be kept in structured frontend data rather than scattered throughout components.

---

# 53. Component Philosophy

Build reusable components for:

- Navbar
- Mobile navigation
- Footer
- Buttons
- Section headings
- Cards
- Service cards
- Portfolio cards
- Blog cards
- Career cards
- Forms
- Input fields
- Select fields
- Modal/dialog
- CTA sections
- Breadcrumbs
- Filters
- Search
- Loading state
- Empty state
- Error state
- Success state

Do not duplicate large blocks of markup unnecessarily.

---

# 54. Frontend State

Phase 1 may use local/static data for:

- Services
- Portfolio
- Blog
- Careers
- Testimonials
- Navigation
- Categories

No database is required.

Forms should use local component state and frontend validation.

---

# 55. Error / Empty States

Every interactive area should consider:

## Loading

Provide an elegant loading state where appropriate.

## Empty

Example:

> No articles available yet.

## Error

Example:

> Something went wrong. Please try again.

## Success

Example:

> Thank you. Your inquiry has been received.

For Phase 1, success is only a frontend demonstration.

---

# 56. Testing Requirements

After implementation, test:

## Navigation

- Every navbar link
- Every dropdown
- Every mobile menu item
- Every footer link
- Browser back/forward behavior
- Direct page URLs

## Buttons

- Every CTA
- Every service CTA
- Portfolio CTA
- Career CTA
- Blog CTA
- Contact CTA

## Forms

- Required validation
- Invalid email
- Empty fields
- Successful frontend submission
- Error states
- Keyboard navigation
- Focus states

## Search/filter

- Blog search
- Portfolio filters
- Career search if implemented
- Empty results

## Responsive

Test:

- Desktop
- Tablet
- Mobile
- Different viewport widths
- No horizontal overflow

## Visual

Check:

- Colors
- Typography
- Spacing
- Card alignment
- Animations
- Hover states
- Footer
- Mobile menu

## Technical

Run:

```text
npm run lint
npm run build
```

Both must pass before considering the frontend ready for review.

---

# 57. Definition of Done — Phase 1

Phase 1 is complete when:

- All planned pages exist.
- Navigation works.
- Services work.
- Service detail pages work.
- Portfolio works.
- Careers works.
- Blog works.
- Contact works.
- Legal pages work.
- Mobile navigation works.
- Forms validate correctly.
- Loading/error/empty/success states are handled.
- Animations are smooth.
- Responsive layouts work.
- Accessibility basics are implemented.
- SEO basics are implemented.
- No horizontal overflow exists.
- No major console errors exist.
- No major broken links exist.
- Lint passes.
- Production build passes.
- Every important interaction has been tested.
- Owner visually reviews the site.
- Owner approves the design.

Only after this approval should Phase 2/backend begin.

---

# 58. Phase 2 — Future Backend Direction

Backend is intentionally excluded from Phase 1.

Potential future backend entities may include:

```text
Services
Portfolio
Portfolio Case Studies
Blog Posts
Blog Categories
Careers
Job Openings
Applications
Contact Inquiries
Newsletter Subscribers
Testimonials
Team Members
Website Settings
```

These are future possibilities, not Phase 1 requirements.

Backend architecture must be designed separately after the frontend is approved.

---

# 59. AI Coding Agent Instructions

The coding agent must:

1. Read this entire README before making changes.
2. Treat this README as the primary project specification.
3. Inspect the existing project before modifying it.
4. Follow the design system exactly.
5. Follow the navigation exactly.
6. Implement the frontend-only scope.
7. Do not create a backend.
8. Do not create a database.
9. Do not add authentication.
10. Do not invent company facts.
11. Do not copy content from the reference website.
12. Do not add a Products section.
13. Do not add a Projects section.
14. Use Portfolio as the work showcase.
15. Build reusable components.
16. Keep content organized in structured data.
17. Preserve responsive behavior.
18. Implement accessibility basics.
19. Implement the defined animations.
20. Keep animations subtle and premium.
21. Avoid unnecessary dependencies.
22. Run lint and build after implementation.
23. Fix errors before reporting completion.
24. Test important navigation and interactions.
25. Do not begin Phase 2 unless explicitly instructed.

---

# 60. Final AI Build Instruction

The owner will provide a short instruction to the coding agent after this README has been finalized.

Suggested instruction:

> **Read `README.md` completely before making any changes. Treat it as the single source of truth for the project. Inspect the existing codebase first, then build the complete frontend according to every applicable requirement in the README. Implement the design system, navigation, pages, services, portfolio, careers, blog, contact, responsive behavior, animations, accessibility, and frontend interactions described there. Do not build the backend, database, authentication, or API integrations in Phase 1. Do not invent company facts or copy content from the reference website. After implementation, run lint/build checks and verify the important interactions.**

---

# 61. Final Project Philosophy

The website should communicate one clear idea:

> **Technology should not simply exist. It should solve problems, create opportunities, and move businesses forward.**

The final experience should feel:

**Premium.  
Confident.  
Modern.  
Intelligent.  
Elegant.  
Trustworthy.  
Purposeful.**

The visual identity should be unmistakably based on:

> **Midnight Plum + Light Biscuit**

with sophisticated motion and a clean technology aesthetic.

---

# 62. Important Decisions Locked So Far

```text
Reference website:
The Codeon website

Reference usage:
Inspiration for structure/features only

Website type:
Corporate technology services website

Phase 1:
Frontend only

Phase 2:
Backend after frontend approval

Products section:
REMOVED

Projects section:
REMOVED

Portfolio:
KEEP

Primary navigation:
Home
About Us
Services
Portfolio
Careers
Blog
Contact Us

Theme:
Midnight Plum + Light Biscuit

Style:
Modern Premium Technology

Animation:
Smooth, subtle, sophisticated

Content:
Original company-focused content

Reference content:
Do not copy

Backend:
Do not build yet

AI build approach:
AI coding agent reads this README as the single source of truth
```

---

# 63. Pending Information

The following information has not yet been supplied and must not be invented:

```text
Company Name
Logo
Official Tagline
Official Company Description
Mission
Vision
Values
Founder/Leadership Information
Team Members
Office Address
Phone
Email
Social Media Accounts
Actual Portfolio Items
Actual Clients
Actual Testimonials
Actual Statistics
Actual Certifications
Actual Careers
Actual Blog Articles
Official Domain
```

When supplied, these should be incorporated into this specification before the final AI build.

---

## End of Master Specification
