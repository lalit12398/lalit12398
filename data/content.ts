export const siteConfig = {
  name: "Lalit Chauhan",
  role: "Lead Frontend Engineer",
  tagline: "I architect frontend systems that scale.",
  subTagline:
    "Lead Frontend Engineer with 9+ years building React/Next.js platforms, design systems, and engineering culture at enterprise scale.",
  email: "chauhan.lalit95@gmail.com",
  linkedin: "https://linkedin.com/in/lalit12398",
  phone: "+91-9013942501",
  resumeUrl: "/resume.pdf",
  description:
    "Lead Frontend Engineer with 9+ years building React/Next.js platforms, design systems, and engineering culture at enterprise scale. Based in Noida.",
  ogImage: "/og.png",
};

export const about = {
  bio: "I've spent 9 years at the intersection of code, architecture, and people. I care about systems that outlast the sprint — reusable, accessible, observable, and maintainable by teams I'll never meet. At GlobalLogic I've moved from writing code to shaping how entire BUs write code. That shift — from contributor to multiplier — is what I'm most proud of.",
  philosophy: [
    {
      title: "Systems over features",
      body: "I'd rather build the right foundation once than patch the same thing five times.",
      icon: "layers",
    },
    {
      title: "Teams are the product",
      body: "The best architecture is useless without engineers who understand and own it.",
      icon: "users",
    },
    {
      title: "Measure everything",
      body: "If you can't observe it, you can't improve it.",
      icon: "bar-chart",
    },
  ],
};

export const impact = [
  { value: 9, suffix: "+", label: "years building production systems" },
  { value: 40, suffix: "%", label: "faster delivery via shared architecture" },
  { value: 35, suffix: "%", label: "reduction in p75 LCP post-migration" },
  { value: 60, suffix: "%", label: "cut in SVG processing time" },
  { value: 50, suffix: "%", label: "faster engineer onboarding" },
  { value: 22, suffix: "", label: "teams in 24-hour hackathon" },
  { value: 15, suffix: "+", label: "engineers mentored across BUs" },
];

export const experience = [
  {
    company: "GlobalLogic (Hitachi Group)",
    role: "Associate Consultant, Lead Frontend Engineer",
    period: "Nov 2023 – Present",
    location: "Noida",
    highlights: [
      "Contributed to BU-wide architectural governance: RFP/RFI evaluation, SOW scoping, and frontend workflow design adopted across project teams.",
      "Architected shared monorepo platform (Turborepo + Tailwind + ShadCN) with design tokens and WCAG 2.1 AA patterns; adopted across 5+ projects, ~40% delivery improvement.",
      "Architected AngularJS → React/Next.js migration using strangler fig pattern; reduced p75 LCP by 35%.",
      "Established recurring structured frontend training curriculum; mentored 15+ engineers, reducing onboarding time by 50%.",
      "Organised 24-hour hackathon with 22 participating teams.",
      "Built SVG generation/printing modules with role-based access and API caching — 60% processing time reduction.",
    ],
  },
  {
    company: "Inadev India Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Jan 2022 – Nov 2023",
    location: "Noida",
    highlights: [
      "Led frontend for MaxLife Insurance portal (React, Next.js, Strapi, GraphQL).",
      "Optimised caching, state management, and data-fetching — 25% performance improvement.",
      "Drove incremental rollout plans reducing release risk.",
    ],
  },
  {
    company: "To The New",
    role: "Senior Software Engineer",
    period: "Oct 2020 – Dec 2021",
    location: "Noida",
    highlights: [
      "Built Tata Sky Smart Home and Subscription platforms (React/Redux).",
      "Focused on reusable component architecture and scalable state models.",
    ],
  },
  {
    company: "NetProphets Cyberworks",
    role: "Software Engineer",
    period: "Jul 2018 – Sep 2020",
    location: "Noida",
    highlights: [
      "Campaign dashboards, admin systems, reporting (React, Node.js, PHP).",
      "Role-based access, geotagging, exportable reporting.",
    ],
  },
  {
    company: "BizSpice India Pvt. Ltd.",
    role: "Software Engineer",
    period: "Jan 2017 – Jun 2018",
    location: "Noida",
    highlights: [
      "Magento 2 modules and e-commerce features via React/Node integrations.",
    ],
  },
];

export const skills = [
  {
    category: "Frontend Core",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Redux-Thunk"],
  },
  {
    category: "Architecture",
    items: ["Micro Frontends", "Module Federation", "Monorepo (Turborepo/Nx)", "SSR/SSG", "Strangler Fig Migration", "Design Systems"],
  },
  {
    category: "UI & Accessibility",
    items: ["Tailwind CSS", "ShadCN", "MUI", "Radix UI", "Design Tokens", "WCAG 2.1 AA"],
  },
  {
    category: "Build & Tooling",
    items: ["Webpack", "Vite", "GitHub Actions", "Jest", "Docker (fundamentals)", "Lighthouse CI"],
  },
  {
    category: "Observability",
    items: ["Core Web Vitals", "Performance Budgets", "API Caching", "Sentry (learning)"],
  },
  {
    category: "AI-Assisted Development",
    items: ["GitHub Copilot", "Gemini", "Claude Code"],
  },
  {
    category: "Leadership & Process",
    items: ["Architecture Governance", "RFC/ADR Authoring", "Training Curriculum", "Agile Delivery", "RFP/RFI/SOW"],
  },
  {
    category: "Cloud",
    items: ["Azure (AZ-900 Certified)", "AWS (exposure)", "Vercel"],
  },
];

export const contributions = [
  {
    title: "BU-wide Governance",
    icon: "building",
    body: "Contributed to RFP/RFI evaluation and SOW scoping across multiple project teams within GlobalLogic's BU. Defined frontend delivery workflows adopted org-wide.",
  },
  {
    title: "Engineering Standards",
    icon: "check-square",
    body: "Authored coding standards, PR review protocols, and automated quality gates that serve as the baseline for all new project onboarding across the BU.",
  },
  {
    title: "24-Hour Hackathon",
    icon: "zap",
    body: "Conceived and ran a 24-hour internal hackathon with 22 participating teams — full end-to-end programme ownership from ideation to execution.",
  },
  {
    title: "Training Curriculum",
    icon: "book-open",
    body: "Designed and delivered a recurring structured frontend training programme as part of BU L&D. Covers React architecture, performance, and design systems.",
  },
  {
    title: "Internal Publication",
    icon: "pen-line",
    body: "Published engineering blog on frontend scaling practices on the GlobalLogic UI Engineering intranet.",
  },
  {
    title: "POC Leadership",
    icon: "flask-conical",
    body: "Leading proof-of-concepts for React Native and module federation to evaluate org-wide adoption feasibility.",
  },
];

export const projects = [
  {
    title: "RAGify",
    description: "A production-ready RAG with hybrid retrieval and LLM architecture. Features Agnostic AI Synthesis along with vector search and contextual caching layers.",
    tags: ["RAG", "ReactJs", "Tailwind", "Vector Search", "LLM  "],
    status: "In Progress",
    github: "https://github.com/lalit12398/RAGify", // TODO: add GitHub URL
    demo: null,   // TODO: add live demo URL
  },
  {
    title: "Monorepo Starter Template",
    description: "A production-ready Turborepo + Next.js + Tailwind + ShadCN monorepo with design token system and automated CI/CD.",
    tags: ["Turborepo", "Next.js", "Tailwind", "GitHub Actions"],
    status: "In Progress",
    github: null, // TODO: add GitHub URL
    demo: null,   // TODO: add live demo URL
  },
  {
    title: "Module Federation POC",
    description: "Proof-of-concept demonstrating Webpack Module Federation with two independently deployed Next.js micro-frontends sharing a component library.",
    tags: ["Module Federation", "Webpack", "Next.js", "Micro Frontends"],
    status: "In Progress",
    github: null,
    demo: null,
  },
  {
    title: "React Native POC",
    description: "Cross-platform mobile POC exploring shared component patterns between web (Next.js) and native (React Native).",
    tags: ["React Native", "TypeScript", "Claude Code"],
    status: "In Progress",
    github: null,
    demo: null,
  },
];

export const blog = [
  {
    title: "Frontend Scaling Practices at GlobalLogic",
    published: "Internal — GlobalLogic UI Engineering Blog",
    excerpt: "Architecture patterns and team practices for scaling frontend delivery across multi-squad enterprise environments.",
    link: null,
    status: "published",
  },
  {
    title: "Micro Frontends in Practice: What the Tutorials Don't Tell You",
    published: null,
    excerpt: null,
    link: null,
    status: "draft",
  },
  {
    title: "Why Your Design System Is Actually an Org Problem",
    published: null,
    excerpt: null,
    link: null,
    status: "draft",
  },
];

export const contact = {
  heading: "Open to discussing Lead, Staff, and Architect opportunities — or just talking frontend architecture.",
  email: siteConfig.email,
  linkedin: siteConfig.linkedin,
};
