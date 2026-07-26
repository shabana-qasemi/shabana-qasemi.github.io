// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit the values below - you should never need to touch component code.
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: "Shabana Qasemi",
  firstName: "Shabana",
  initials: "SQ",
  role: "AI Engineering Intern & Computer Science Student",
  tagline:
    "I'm an AI Engineering Intern at AgentixPay, where I debug real production systems, build data pipelines, and design AI personas that shape how our systems talk to real users every day. I'm also working toward my A.S. in Computer Science at American River College, but most of what I actually know came from just building things - a fractal renderer, a physics simulation, an encryption tool from scratch in C++, because I wanted to understand how they worked, not just use them. Outside of that, I'm a Community Representative for the Ismaili Students Network and spent a semester teaching weekly classes for ITREB - a good reminder that not everything I care about lives in a terminal.",
  location: "Sacramento, CA",
  email: "qasemi.shabana@gmail.com",
  github: "https://github.com/shabana-qasemi",
  linkedin: "https://www.linkedin.com/in/shabana-qasemi",
  resumeUrl: "/resume.pdf",
  availability: "AI Engineering Intern - pursuing an A.S. in Computer Science, May 2027",
} as const;

export const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: "Github" },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: "Linkedin" },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: "Mail" },
] as const;

// Small credibility line shown under the name in the Hero section.
export const priorOrganizations = [
  "AgentixPay",
  "Design Hub",
  "American River College",
  "Walmart",
  "HI-Q-Tronix GmbH",
];

export const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#skills" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Connect", href: "#contact" },
] as const;

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export const education = {
  school: "American River College",
  location: "Sacramento, CA",
  degree: "Associate Degree in Computer Science",
  gpa: "3.41 / 4.00",
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
}

export const projects: Project[] = [
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
    featured: true,
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
    featured: true,
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
    category: "Core Languages",
    icon: "Code2",
    skills: ["C++", "Python", "C"],
  },
  {
    category: "AI Engineering & Data Systems",
    icon: "BrainCircuit",
    skills: [
      "Claude Code",
      "PostgreSQL",
      "ERD Design (3NF)",
      "Data Pipelines",
      "AWS",
      "Data Scraping & Enrichment",
      "Prompt Engineering",
    ],
  },
  {
    category: "Graphics & Simulation",
    icon: "Boxes",
    skills: [
      "SFML",
      "LodePNG",
      "Real-time Rendering",
      "Particle Physics",
      "Fractal Algorithms",
    ],
  },
  {
    category: "Developer Tools & Workflow",
    icon: "Terminal",
    skills: ["Git", "GitHub", "Xcode", "Visual Studio Code", "Linux", "Linear"],
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
    endDate: "Present",
    summary:
      "Debug production systems with AI-assisted tooling, design enterprise data pipelines, and build domain-specific AI personas, reporting directly to the CTO.",
    bullets: [
      "AI-Assisted Diagnostics & Debugging: Utilized terminal-based AI diagnostic tools (Claude Code) to trace execution paths, analyze variable mutations, and resolve 10+ production bugs across frontend and data layers (including subscription state filtering, visibility metrics, and card rendering)",
      "Data Workflows & Database Loading: Engineered multi-stage data pipelines, generated production-ready datasets based on enterprise ERDs, structured clean CSV files, and executed data loads into PostgreSQL databases",
      "Cross-Product Systems Collaboration: Participated in technical architecture and pair-programming sessions across core product systems (Radar, Nexus, and Atlas) to maintain data flow integrity and service reliability",
      "System Mapping & AI Strategy: Engineered domain-specific AI user personas, mapped platform site navigation, and integrated catalog taxonomy classifiers to enrich scraped product data",
    ],
    tech: ["Claude Code", "PostgreSQL", "TypeScript", "SQL", "ERD Design", "Data Pipelines"],
  },
  {
    id: "design-hub-arc",
    role: "Programming Intern",
    company: "Design Hub, American River College",
    location: "Sacramento, CA",
    startDate: "Fall 2026",
    endDate: "Upcoming",
    summary: "Incoming Fall 2026 internship - details to be added once the role begins.",
    bullets: [],
    tech: [],
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
      "Assisted 50+ students daily with registration, transcripts, and enrollment processes, improving service efficiency by 33%",
      "Maintained 100% accuracy while updating student records, ensuring compliance with institutional data standards",
      "Streamlined administrative workflows by guiding 15+ students daily through digital registration systems",
    ],
    tech: [],
  },
  {
    id: "itreb",
    role: "Teacher",
    company: "Ismaili Tariqah and Religious Education Board (ITREB), Western United States",
    location: "Sacramento, CA",
    startDate: "Aug 2025",
    endDate: "Jan 2026",
    summary:
      "Taught weekly religious education classes to elementary students, connecting core principles to everyday decision-making.",
    bullets: [
      "Taught weekly classes to 15-25 elementary students, connecting core principles to everyday decision-making",
      "Developed structured lesson plans, improving student engagement and comprehension",
      "Strengthened communication and leadership skills through classroom instruction and interactive group activities",
    ],
    tech: [],
  },
  {
    id: "walmart",
    role: "Financial Associate",
    company: "Walmart",
    location: "Roseville, CA",
    startDate: "Jun 2024",
    endDate: "May 2025",
    summary:
      "Handled high-volume financial transactions and trained new hires in a fast-paced retail environment.",
    bullets: [
      "Trained 5+ new employees on POS systems and store workflows, improving onboarding efficiency by 50%",
      "Processed high-volume financial transactions with 90% accuracy, handling sensitive customer payment information",
      "Maintained customer service standards in a fast-paced retail environment, improving checkout flow by 30%",
    ],
    tech: [],
  },
  {
    id: "hi-q-tronix",
    role: "Data Entry Clerk",
    company: "HI-Q-Tronix GmbH",
    location: "Oldenburg, DE",
    startDate: "May 2023",
    endDate: "Oct 2023",
    summary:
      "Maintained structured company data and corrected inconsistencies across records.",
    bullets: [
      "Entered and maintained structured data in company databases and spreadsheets with consistent accuracy",
      "Verified data integrity and corrected inconsistencies across records",
    ],
    tech: [],
  },
];

// ---------------------------------------------------------------------------
// Leadership & Involvement
// ---------------------------------------------------------------------------

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export const leadership: LeadershipItem[] = [
  {
    id: "isn",
    role: "Community Representative",
    organization: "Ismaili Students Network (ISN)",
    location: "Sacramento, CA",
    startDate: "May 2025",
    endDate: "Present",
    bullets: [
      "Represented 40+ Sacramento students in regional initiatives, supporting student engagement efforts",
      "Coordinated 5+ student events and communications, increasing student engagement by 25% year over year",
      "Served as liaison between students and National Leadership, coordinating 6+ initiatives across the United States",
    ],
  },
];

// ---------------------------------------------------------------------------
// Recommendations
// Empty until real quotes are added - the section renders a placeholder
// state until this array has entries. Add objects here to populate it.
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [];

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
      "A few highlights: a multithreaded Mandelbrot Set Visualizer (75% faster rendering), a real-time Particle Simulation with collision physics, an RSA encryption system built from scratch, and a Chaos Game fractal generator. All in C++ with SFML - check the Projects section for details.",
  },
  {
    keywords: ["favorite", "proudest", "best project", "coolest"],
    question: "What's your favorite project?",
    answer:
      "Probably the Mandelbrot Set Visualizer - I optimized it with multithreading and got a 75% speed improvement, which taught me a lot about how real concurrency bugs actually show up.",
  },
  {
    keywords: ["stack", "tech", "technologies", "languages", "tools", "typescript", "sql", "database"],
    question: "What's your tech stack?",
    answer:
      "Core languages are C++, Python, and C, plus TypeScript and SQL through my internship work. Through my AI Engineering internship I work with Claude Code, PostgreSQL, and ERD/database design. For graphics and simulation work I use SFML and LodePNG. Day to day tools: Git, GitHub, Xcode, VS Code, and Linux.",
  },
  {
    keywords: ["experience", "internship", "agentixpay", "work", "job", "ai engineering", "current role"],
    question: "What's your work experience?",
    answer:
      "I'm currently an AI Engineering Intern at AgentixPay - debugging production codebases with Claude Code, designing PostgreSQL data pipelines and ERDs, and building AI personas. I've also worked as a Student Assistant at American River College, a Financial Associate at Walmart, and a Data Entry Clerk at HI-Q-Tronix GmbH in Germany. Full details are in the Experience timeline.",
  },
  {
    keywords: ["education", "school", "college", "degree", "graduate", "studying"],
    question: "What are you studying?",
    answer:
      "I'm pursuing an Associate Degree in Computer Science at American River College, graduating May 2027, with coursework in Data Structures and Algorithms, Object-Oriented Programming, and Discrete Mathematics.",
  },
  {
    keywords: ["leadership", "isn", "itreb", "volunteer", "community", "involvement"],
    question: "Tell me about your leadership experience.",
    answer:
      "I'm a Community Representative for the Ismaili Students Network, representing 40+ Sacramento students in regional initiatives, and I taught weekly classes for the Ismaili Tariqah and Religious Education Board. Details are in the Leadership section.",
  },
  {
    keywords: ["why ai", "why computer science", "passion", "interested in"],
    question: "Why AI engineering / CS?",
    answer:
      "I like understanding how things actually work under the hood - that's true whether I'm writing a fractal renderer from scratch or debugging a production AI system at my internship. AI engineering is where that curiosity meets real-world impact.",
  },
  {
    keywords: ["design hub", "fall 2026", "upcoming", "next internship"],
    question: "What's next for you?",
    answer:
      "I'm starting a Programming Intern role at Design Hub, American River College in Fall 2026, alongside my current AI Engineering internship.",
  },
  {
    keywords: ["contact", "reach", "email", "hire", "available", "hiring"],
    question: "How can I reach you?",
    answer:
      "The fastest way to reach me is the contact form below, or email directly - links are in the footer.",
  },
  {
    keywords: ["resume", "cv"],
    question: "Can I get your resume?",
    answer:
      "I don't post my resume for public download here, but I'm happy to send it directly - just reach out through the contact form or email.",
  },
];
