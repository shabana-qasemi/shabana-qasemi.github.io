// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit the values below - you should never need to touch component code.
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: "Shabana Qasemi",
  firstName: "Shabana",
  initials: "SQ",
  role: "AI Engineering Intern & Frontend/AI Systems Builder",
  tagline:
    "My name is Shabana, and I am a Computer Science student concentrating in AI/ML and Data Engineering. I am passionate about building software that solves real problems - technology that's reliable enough to trust with people's data, and accessible enough to actually reach the people it's meant to help. I am driven by a desire to build systems people can depend on, grounded in hands-on technical experience and a strong attention to detail.",
  // 2-sentence hero-length version of the tagline above - keep these in sync when the bio changes.
  impactStatement:
    "I build systems people can trust with their data - from a multi-agent AI orchestrator that plans real meals around a real budget, to production fixes and AI tooling shipped inside a live fintech platform. Currently a Programming Intern at ARC's Design Hub, studying AI/ML and Data Engineering at American River College.",
  status: "Building a Chrome extension for ARC's MESA program as a Programming Intern",
  github: "https://github.com/shabana-qasemi",
  linkedin: "https://www.linkedin.com/in/shabana-qasemi",
  // Set this to enable the Hero's "Copy Email" button - left unset because email was
  // deliberately removed from Contact previously. See handoff notes before setting it.
  email: undefined as string | undefined,
  availability: "Programming Intern @ ARC Design Hub - pursuing an A.S. in Computer Science, May 2027",
} as const;

export const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: "Github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "Linkedin" },
] as const;

// Small credibility line shown under the name in the Hero section.
export const priorOrganizations = ["AgentixPay", "Design Hub", "American River College"];

export const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Connect", href: "#contact" },
] as const;

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = {
  school: "American River College",
  location: "Sacramento, CA",
  degree: "Associate Degree in Computer Science",
  // Cumulative across the Los Rios district (ARC + Folsom Lake + Sac City), matching the figure on her resume.
  gpa: "3.35 / 4.00",
  graduation: "May 2027",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Discrete Mathematics",
  ],
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  metrics: string[];
  links: {
    demo?: string;
    github?: string;
  };
  architecture: string[];
  featured: boolean;
  /** True for work built inside a proprietary codebase - hides demo/GitHub links, shows a "Confidential" badge instead. */
  confidential?: boolean;
  /** Path under /public to a real screenshot (public/projects/*). Falls back to a decorative icon frame when unset. */
  image?: string;
}

export const projects: Project[] = [
  {
    id: "prep-agent",
    title: "Prep-Agent",
    tagline: "A multi-agent meal-prep orchestrator that decides its own execution plan at runtime - built with Claude Code.",
    description:
      "An Orchestrator Agent classifies each request and decides, per message, exactly which specialized agents need to run - so a general question or a no-budget request skips agents it doesn't need, instead of always running a fixed pipeline. Built end-to-end on free-tier APIs after weighing the cost and security tradeoffs of paid ones.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "LangGraph", "Pydantic", "Groq", "Gemini", "Claude Code"],
    metrics: [
      "Migrated the full LLM and data layer to free-tier providers (Groq + Gemini + TheMealDB), eliminating 100% of projected API costs while keeping feature parity - validated by 57+ automated pytest tests with zero live-API dependency",
      "Diagnosed a structured-output reliability issue through live load testing, then redesigned around JSON-mode with failure-specific retry/backoff logic",
      "Ran a full secret/PII sweep of the current tree and entire git history before making the repo public",
    ],
    links: { github: "https://github.com/shabana-qasemi/Prep-Agent" },
    image: "/projects/prep-agent.jpg",
    architecture: [
      "An Orchestrator Agent classifies each incoming message with a single LLM call and builds a plan of exactly which downstream agents apply (Macro, MealPlan, Budget, Grocery), skipping anything the request doesn't need",
      "Every agent enforces strict schema validation via Pydantic JSON-mode structured outputs instead of parsing free-text LLM responses",
      "Real-time SSE streaming renders each pipeline stage as it completes, instead of waiting on the full multi-agent run",
      "The FastAPI backend is hardened with defense-in-depth: dual-layer request-size validation, prompt-injection-resistant system prompts, environment-driven CORS, and a sanitizing global exception handler - with multi-tenant safety verified by construction (zero shared mutable state)",
    ],
    featured: true,
  },
  {
    id: "radar-production-engineering",
    title: "Production Engineering @ AgentixPay",
    tagline: "Diagnosing production bugs and building the scoring specs, personas, and reporting tools Radar's team relies on.",
    description:
      "As an AI Engineering Intern on the Radar team (May-Aug 2026), independently diagnosed and fixed production bugs in a TypeScript/C++ platform, then took on broader ownership - authoring a scoring-model design spec, building AI-driven customer personas, and shipping internal reporting tooling, all backed by automated tests.",
    techStack: ["TypeScript", "C++", "Python", "Vitest", "PostgreSQL", "Claude Code"],
    metrics: [
      "Diagnosed and fixed a data-integrity bug that silently dropped critical account and billing fields during signup, shipping a database migration and 29 regression tests to prevent recurrence",
      "Built AI-driven synthetic customer personas from real event data and U.S. Census demographics for a client engagement, co-developed with a fellow intern and presented directly to the CEO and CTO",
      "Authored the design specification for a 7-component AI-discoverability scoring model, defining weighting logic, product-vs-site score renormalization, and a formal analysis of score non-determinism",
    ],
    links: {},
    architecture: [
      "Traced the data-integrity bug from a downstream symptom (missing account/billing fields) back to the signup flow using AI-assisted diagnostics, then designed and shipped a database migration to close the gap",
      "Modeled synthetic customer personas in Python by combining real event data with U.S. Census demographics, splitting the workload with a fellow intern under a tight client deadline",
      "Specified a 7-component scoring model for Radar's AI-discoverability score, working through how sub-scores renormalize between product-level and site-level results and where the existing score behaves non-deterministically",
      "Built a Python reporting pipeline that renders transaction-flow data as both Excel workbooks and HTML diagrams, covering the success, verification-failure, and returns paths merchants actually hit",
    ],
    featured: true,
    confidential: true,
  },
  {
    id: "portfolio-site",
    title: "This Portfolio",
    tagline: "The site you're looking at right now - built with Claude Code, directing every design and content decision.",
    description:
      "A ground-up redesign of this portfolio focused on clear information architecture, a token-based dark-mode design system, and motion that supports the content instead of distracting from it.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Claude Code"],
    metrics: [
      "Built a token-based design system (CSS variables for color, radius, and theme) so light and dark mode stay consistent across every component",
      "Statically exported via the Next.js App Router and deployed through GitHub Actions to GitHub Pages - no server required",
      "Used Framer Motion for scroll-triggered reveals and hover micro-interactions without hurting load performance",
    ],
    links: {
      demo: "https://shabana-qasemi.github.io",
      github: "https://github.com/shabana-qasemi/shabana-qasemi.github.io",
    },
    image: "/projects/portfolio-site.jpg",
    architecture: [
      "All content lives in one typed data file (data/portfolio.ts), so copy changes never touch component code",
      "Design tokens are defined as CSS variables in globals.css and consumed through the Tailwind theme config, so both themes share one source of truth",
      "Section components compose independently in app/page.tsx, each animating in on scroll via Framer Motion's whileInView",
      "next.config.mjs runs a static export that the GitHub Actions workflow deploys automatically on every push to main",
    ],
    featured: true,
  },
  {
    id: "mandelbrot-set-visualizer",
    title: "Mandelbrot Set Visualizer",
    tagline: "Multithreaded fractal renderer with dynamic zoom.",
    description:
      "A Mandelbrot fractal visualizer built in C++ with SFML, implementing the escape-time algorithm and mapping pixel coordinates to the complex plane for smooth, dynamic zoom exploration.",
    techStack: ["C++", "SFML"],
    metrics: [
      "Implemented the escape-time algorithm for real-time fractal rendering",
      "Optimized rendering with multithreading, improving computation speed by 75%",
      "Mapped coordinate systems to the complex plane, enabling dynamic zoom exploration",
    ],
    links: {},
    image: "/projects/mandelbrot-set-visualizer.jpg",
    architecture: [
      "Each pixel is mapped from screen space to a point on the complex plane",
      "The escape-time algorithm iterates each point to determine set membership and color",
      "Work is partitioned across threads so rows/tiles render concurrently",
      "SFML handles the render loop, window management, and pixel buffer presentation",
    ],
    featured: true,
  },
  {
    id: "particle-simulation",
    title: "Particle Simulation",
    tagline: "Real-time physics simulation with collision behavior.",
    description:
      "A real-time particle physics simulation modeling velocity, acceleration, and collisions, built with an object-oriented architecture designed for maintainability.",
    techStack: ["C++", "SFML"],
    metrics: [
      "Built a real-time simulation modeling velocity, acceleration, and collision behavior",
      "Designed an object-oriented architecture, improving maintainability and scalability",
      "Implemented a rendering pipeline for real-time visualization",
    ],
    links: {},
    architecture: [
      "Each particle is an object tracking position, velocity, and acceleration",
      "A simulation loop updates physics state every frame using discrete time steps",
      "Collision checks resolve particle-particle and boundary interactions",
      "SFML renders the updated particle state each frame in real time",
    ],
    featured: false,
  },
  {
    id: "rsa-encryption",
    title: "RSA Encryption / Decryption",
    tagline: "From-scratch public-key cryptography implementation.",
    description:
      "An RSA encryption system implemented from scratch in C++, including key generation and modular exponentiation, with correctness validated through brute-force testing.",
    techStack: ["C++"],
    metrics: [
      "Implemented key generation and modular exponentiation from scratch",
      "Designed full encryption/decryption workflows",
      "Validated correctness through brute-force testing",
    ],
    links: {},
    architecture: [
      "Key generation selects prime pairs and derives public/private exponents",
      "Modular exponentiation is implemented for fast, correct encryption and decryption",
      "Encrypted output is verified by decrypting and comparing against the original input",
      "Brute-force tests on small key sizes confirm correctness of the core math",
    ],
    featured: false,
  },
  {
    id: "chaos-fractal-generator",
    title: "Chaos Fractal Game Generator",
    tagline: "Probabilistic fractal generation via the Chaos Game.",
    description:
      "A Chaos Game simulation that generates fractals such as the Sierpiński Triangle using probabilistic point selection and iterative midpoint calculations.",
    techStack: ["C++"],
    metrics: [
      "Generated fractals such as the Sierpiński Triangle via the Chaos Game algorithm",
      "Used probabilistic point selection and iterative midpoint calculations",
      "Visualized randomness-driven systems and emergent mathematical patterns",
    ],
    links: {},
    architecture: [
      "A set of anchor vertices defines the base polygon (e.g. triangle)",
      "A starting point is chosen at random within the plane",
      "Each iteration jumps the point halfway toward a randomly chosen vertex",
      "Plotting thousands of iterations reveals the emergent fractal structure",
    ],
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// Skills matrix
// ---------------------------------------------------------------------------

export interface SkillCategory {
  category: string;
  icon: string; // lucide-react icon name
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend & UI Systems",
    icon: "Code2",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "TanStack Query"],
  },
  {
    category: "Backend & AI Infrastructure",
    icon: "BrainCircuit",
    skills: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Pydantic",
      "Claude API",
      "Multi-Agent Systems",
      "Structured Output",
      "Prompt Engineering",
      "Data Engineering",
      "Web Scraping",
    ],
  },
  {
    category: "Data & Platform Tooling",
    icon: "Database",
    skills: ["PostgreSQL", "Prisma", "SQLite", "Stripe API"],
  },
  {
    category: "Systems & Graphics (C++)",
    icon: "Boxes",
    skills: [
      "C++",
      "C",
      "SFML",
      "Multithreading",
      "Real-time Rendering",
      "Fractal Algorithms",
    ],
  },
  {
    category: "Developer Tooling & Workflow",
    icon: "Terminal",
    skills: ["Git", "GitHub", "GitHub Actions", "pnpm/Turborepo", "Claude Code", "Vitest", "VS Code", "Linux"],
  },
];

// ---------------------------------------------------------------------------
// Experience - real jobs
// ---------------------------------------------------------------------------

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "ai-engineering-intern",
    role: "AI Engineering Intern",
    company: "AgentixPay",
    location: "Remote",
    startDate: "May 2026",
    endDate: "Aug 2026",
    summary:
      "Diagnosed production bugs, built AI-driven data tooling, and authored a scoring-model design spec for Radar - reporting on client-facing work directly to the CEO and CTO.",
    bullets: [
      "Diagnosed and fixed a data-integrity bug that silently dropped critical account and billing fields during user signup, using AI-assisted diagnostic tooling (Claude Code); shipped a database migration and 29 regression tests to prevent recurrence",
      "Built AI-driven synthetic customer personas for a client using Python, real event data, and U.S. Census demographics, co-developed with a fellow intern; presented directly to the CEO and CTO",
      "Authored the design specification for a 7-component AI-discoverability scoring model (Radar), defining weighting logic, product-vs-site score renormalization, and a formal analysis of score non-determinism - establishing the technical foundation for an LLM-driven scoring redesign",
      "Built Python-based transaction-flow visualization tooling, generating Excel workbooks and HTML flow diagrams covering success, verification-failure, and returns paths at the CTO's request - supporting merchant onboarding and data QC, using Claude Code as an AI pair-programming agent",
    ],
    tech: [
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Claude Code",
      "Data Migration",
      "AI Personas",
      "Prompt Engineering",
    ],
  },
  {
    id: "design-hub-arc",
    role: "Programming Intern",
    company: "Design Hub, American River College",
    location: "Sacramento, CA",
    startDate: "Fall 2026",
    endDate: "Present",
    summary:
      "Scoping and building a Chrome extension for ARC's MESA department from an open-ended request, owning it from requirements through ship.",
    bullets: [
      "Scoping and building a Chrome extension for the campus MESA department from an open-ended, unspecified request",
      "Independently defined requirements through stakeholder conversations with the program coordinator",
      "Designing, developing, and testing the extension end-to-end",
    ],
    tech: ["JavaScript", "Chrome Extension APIs", "Requirements Gathering"],
  },
  {
    id: "admissions-records",
    role: "Student Assistant",
    company: "Admissions & Records Office, American River College",
    location: "Sacramento, CA",
    startDate: "May 2025",
    endDate: "Present",
    summary:
      "Support 50+ students daily with registration, transcripts, and enrollment while maintaining full data accuracy.",
    bullets: [
      "Support 50+ students daily with registration, transcripts, and enrollment systems, maintaining full accuracy on record updates per institutional data standards",
    ],
    tech: [],
  },
];

// Data Entry Clerk (Hi-Q-Tronix GmbH), ITREB teaching, Walmart, and the
// Leadership/Recommendations sections were intentionally cut from the main
// narrative - a portfolio proves technical craft through evidence, a resume
// lists credentials. Full work history still lives on LinkedIn (linked in the
// Hero/Contact); add a real resume PDF link here if you want a downloadable
// version too.

// ---------------------------------------------------------------------------
// AI Portfolio Assistant - fallback knowledge base
// Used by the chat widget when no LLM API key is configured, and as grounding
// context for the system prompt when one is.
// ---------------------------------------------------------------------------

export interface FaqEntry {
  keywords: string[];
  question: string;
  answer: string;
}

export const assistantFaq: FaqEntry[] = [
  {
    keywords: ["hi", "hello", "hey", "who are you", "what is this"],
    question: "Hello!",
    answer: `Hi! I'm ${personalInfo.name}'s portfolio assistant. Ask me about her projects, internship, education, or how to get in touch - or say something like "take me to projects" and I'll scroll you there.`,
  },
  {
    keywords: ["project", "built", "build", "portfolio", "made"],
    question: "What have you built?",
    answer:
      "A few highlights: Prep-Agent, a LangGraph multi-agent orchestrator that plans real meals around a real budget; production bug fixes and test coverage inside AgentixPay's live Radar platform; this portfolio site itself; and a multithreaded Mandelbrot Set Visualizer in C++. Check the Projects section for the full case studies.",
  },
  {
    keywords: ["favorite", "proudest", "best project", "coolest"],
    question: "What's your favorite project?",
    answer:
      "Probably Prep-Agent - designing the LangGraph routing so agents only run when a request actually needs them taught me a lot about when NOT to reach for one big pipeline.",
  },
  {
    keywords: ["stack", "tech", "technologies", "languages", "tools", "typescript", "sql", "database"],
    question: "What's your tech stack?",
    answer:
      "Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion. Backend & AI: Python, FastAPI, LangGraph, the Claude API, PostgreSQL. I also have a C++ background (SFML, multithreading, real-time rendering) from earlier systems projects. Day to day tools: Git, GitHub, Claude Code, VS Code, Linux.",
  },
  {
    keywords: ["experience", "internship", "agentixpay", "design hub", "work", "job", "ai engineering", "current role"],
    question: "What's your work experience?",
    answer:
      "I'm currently a Programming Intern at ARC's Design Hub, building a Chrome extension for the campus MESA department. Before that, I was an AI Engineering Intern at AgentixPay (May-Aug 2026) - diagnosing production bugs with Claude Code, building AI-driven customer personas, and authoring a scoring-model design spec for their Radar product. I've also worked as a Student Assistant at American River College since 2025. Full details are in the Experience timeline.",
  },
  {
    keywords: ["education", "school", "college", "degree", "graduate", "studying"],
    question: "What are you studying?",
    answer:
      "I'm pursuing an Associate Degree in Computer Science at American River College, graduating May 2027, with coursework in Data Structures and Algorithms, Object-Oriented Programming, and Discrete Mathematics.",
  },
  {
    keywords: ["why ai", "why computer science", "passion", "interested in"],
    question: "Why AI engineering / CS?",
    answer:
      "I like understanding how things actually work under the hood - that's true whether I'm writing a fractal renderer from scratch or debugging a production AI system at my internship. AI engineering is where that curiosity meets real-world impact.",
  },
  {
    keywords: ["design hub", "chrome extension", "mesa", "fall 2026", "current project"],
    question: "What are you working on right now?",
    answer:
      "I'm a Programming Intern at ARC's Design Hub, scoping and building a Chrome extension for the campus MESA department from an open-ended request - gathering requirements directly from the program coordinator, then designing, building, and testing it end-to-end.",
  },
  {
    keywords: ["contact", "reach", "hire", "available", "hiring"],
    question: "How can I reach you?",
    answer: "The best way to reach me is through LinkedIn or GitHub - links are in the footer.",
  },
  {
    keywords: ["resume", "cv"],
    question: "Can I get your resume?",
    answer:
      "I don't post my resume for public download here, but I'm happy to send it directly - just reach out through LinkedIn.",
  },
];
