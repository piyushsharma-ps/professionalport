import type { FocusArea, SkillCategory, TimelineMilestone, ProjectItem, VisionPillar } from '../types';

export const PERSONAL_INFO = {
  name: "PIYUSH SHARMA",
  shortName: "PS",
  role: "AI & ML Student",
  subtitles: "Future AI Professional | Aspiring Entrepreneur",
  heroIntro: "Building my foundation in Artificial Intelligence & Machine Learning while exploring finance, real estate, entrepreneurship, and meaningful professional connections.",
  tagline: "AI / ML • FINANCE • REAL ESTATE • ENTREPRENEURSHIP",
  email: "piyushorg78@gmail.com",
  whatsappDisplay: "+91 7877003567",
  whatsappUrl: "https://wa.me/917877003567?text=Hi%20Piyush,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
  location: "India",
  year: "2026",
  quote: "Building knowledge today. Creating possibilities for tomorrow."
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "ai",
    number: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    tagline: "Intelligent Systems & Neural Architectures",
    description: "Learning AI concepts, machine learning, intelligent systems, and modern AI technologies to grasp the paradigm shifts shaping modern computing.",
    subPoints: [
      "Core AI principles & search heuristics",
      "Modern deep learning foundations",
      "Intelligent autonomous reasoning"
    ]
  },
  {
    id: "ml",
    number: "02",
    title: "MACHINE LEARNING",
    tagline: "Algorithms, Data & Experimentation",
    description: "Building understanding of algorithms, data, model development, experimentation, and practical applications that translate raw data into predictive clarity.",
    subPoints: [
      "Supervised & unsupervised learning pipelines",
      "Mathematical modeling & feature engineering",
      "Model evaluation, loss landscapes & metrics"
    ]
  },
  {
    id: "finance",
    number: "03",
    title: "FINANCE",
    tagline: "Capital Allocation & Market Dynamics",
    description: "Developing side knowledge around finance, markets, financial thinking, and business economics to understand wealth creation and capital efficiency.",
    subPoints: [
      "Financial markets & quantitative basics",
      "Corporate valuation & risk management",
      "Systematic financial modeling"
    ]
  },
  {
    id: "realestate",
    number: "04",
    title: "REAL ESTATE",
    tagline: "Physical Assets & Strategic Ventures",
    description: "Exploring real estate, property business, market opportunities, networking, and entrepreneurship to identify high-value physical asset opportunities.",
    subPoints: [
      "Property cycles & regional asset valuations",
      "PropTech automation & workflow synergy",
      "High-trust institutional relationships"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical",
    subtitle: "Programming languages, tooling, and engineering fundamentals",
    skills: [
      { name: "Python", level: "Foundation Built", description: "Scientific computing, OOP, scripting & data manipulation" },
      { name: "C", level: "Foundation Built", description: "Low-level memory management, pointers, and systems programming basics" },
      { name: "Data Analysis", level: "Foundation Built", description: "Exploratory data analysis, Pandas, NumPy & visualization" },
      { name: "Machine Learning Fundamentals", level: "Foundation Built", description: "Regression, classification, clustering & loss optimization" },
      { name: "AI Fundamentals", level: "Foundation Built", description: "State space search, heuristics & neural network premises" },
      { name: "Git & GitHub", level: "Foundation Built", description: "Version control, branching strategies, and collaborative repositories" },
      { name: "Problem Solving", level: "Foundation Built", description: "Algorithmic breakdown and disciplined technical logic" },
      { name: "Data Structures & Algorithms", level: "Actively Learning", description: "Trees, graphs, dynamic programming & asymptotic complexity" }
    ]
  },
  {
    title: "AI / Emerging Technology",
    subtitle: "Modern deep learning, agentic workflows, and future paradigms",
    skills: [
      { name: "Artificial Intelligence", level: "Foundation Built", description: "Heuristic reasoning, agent environments & perceptual models" },
      { name: "Machine Learning", level: "Foundation Built", description: "Statistical inference and iterative parameter optimization" },
      { name: "Generative AI", level: "Foundation Built", description: "Diffusion, autoregression, prompt engineering & multimodal models" },
      { name: "AI Agents", level: "Foundation Built", description: "Autonomous task execution, tools integration & memory mechanisms" },
      { name: "Agentic AI", level: "Foundation Built", description: "Multi-agent orchestration, planner-actor loops & feedback systems" },
      { name: "LLM Concepts", level: "Foundation Built", description: "Transformers, attention mechanisms, tokenization & context windows" },
      { name: "AI Engineering", level: "Actively Learning", description: "Production deployments, model quantization, RAG & latency optimization" }
    ]
  },
  {
    title: "Business & Finance",
    subtitle: "Commercial intelligence, asset evaluation, and strategic networking",
    skills: [
      { name: "Financial Literacy", level: "Foundation Built", description: "Balance sheets, cash flows, and personal wealth compounding" },
      { name: "Finance Fundamentals", level: "Foundation Built", description: "Time value of money, equity markets, risk-adjusted returns" },
      { name: "Real Estate", level: "Foundational Study", description: "Property lifecycle, asset analysis & PropTech opportunities" },
      { name: "Entrepreneurship", level: "Foundational Study", description: "Value proposition design, bootstrapping & venture dynamics" },
      { name: "Business Strategy", level: "Foundational Study", description: "Competitive moats, operational leverage & strategic execution" },
      { name: "Networking", level: "Active Practice", description: "Curating high-integrity relationships across tech and industry leaders" }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2026",
    tag: "FOUNDATION",
    title: "Core Groundwork in AI & Machine Learning",
    description: "Started my journey in Artificial Intelligence & Machine Learning. Establishing unbreakable foundations in mathematics, algorithmic thinking, and core programming.",
    keyGoals: [
      "Rigorous mastery of Python and C programming architectures",
      "Deep study of linear algebra, calculus, and probability for machine learning",
      "Hands-on experimentation with core data processing and analytics frameworks"
    ],
    status: "In Progress"
  },
  {
    year: "NEXT",
    tag: "TECHNICAL DEPTH",
    title: "Strengthening Engineering & Algorithmic Rigor",
    description: "Strengthen Python, mathematics, data structures, machine learning, and AI engineering. Bridging theoretical principles with production-grade implementation discipline.",
    keyGoals: [
      "Master advanced Data Structures & Algorithms (Trees, Graphs, DP)",
      "Train custom neural networks and dive into AI agent architectures",
      "Build deep intuition for LLM mechanisms, RAG, and AI engineering pipelines"
    ],
    status: "Upcoming"
  },
  {
    year: "FUTURE",
    tag: "REAL-WORLD APPLICATION",
    title: "Industry Collaboration & Scaled Prototypes",
    description: "Build practical AI projects and participate in internships, collaborations, and industry opportunities that demand high reliability and tangible value.",
    keyGoals: [
      "Deploy open-source AI utilities and complete industry-grade internships",
      "Collaborate with leading researchers, engineers, and early-stage founders",
      "Publish transparent project benchmarks and engineering case studies"
    ],
    status: "Future Vision"
  },
  {
    year: "LONG-TERM",
    tag: "ENTREPRENEURSHIP",
    title: "Venture Creation at Tech & Asset Intersections",
    description: "Combine AI, finance, and real estate knowledge to develop entrepreneurial ventures that harness technology to modernize capital-intensive markets.",
    keyGoals: [
      "Launch a technology-driven real estate venture utilizing AI analytics",
      "Bridge institutional finance with automated operational intelligence",
      "Build long-standing networks that compound value over decades"
    ],
    status: "Future Vision"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proptech-ai-engine",
    title: "PropTech Intelligence & Valuation Engine",
    category: "Real Estate + Technology Ideas",
    status: "In Active Development",
    description: "An architectural concept exploring AI algorithms to analyze neighborhood demographic trends, zoning data, and multi-factor property valuations.",
    detailedVision: "Developing a conceptual pipeline using Python data analysis and machine learning heuristics to benchmark historical property data against macroeconomic indicators.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "GeoPandas"],
    highlights: [
      "Architecting automated data ingest pipelines for property indicators",
      "Feature engineering for geographic clustering and yield forecasts",
      "Built with scalable modular microservice design in mind"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    id: "agentic-market-monitor",
    title: "Agentic Financial Insights Synthesizer",
    category: "Finance + AI Ideas",
    status: "Architecture & Design",
    description: "A research framework investigating how autonomous AI agents can parse financial transcripts, quarterly filings, and market sentiment to summarize high-signal insights.",
    detailedVision: "Exploring multi-agent planner-executor frameworks where specialized agents verify numerical data, extract key risks, and compose concise executive summaries.",
    technologies: ["Python", "LLM Concepts", "Agentic Workflows", "Vector DBs", "Streamlit"],
    highlights: [
      "Investigating multi-agent supervisor loops with strict hallucination checks",
      "Experimenting with structured JSON output enforcement",
      "Designed specifically for disciplined financial analysis workflows"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    id: "ai-learning-pipeline",
    title: "Neural Vision & Classification Sandbox",
    category: "AI / ML Projects",
    status: "In Active Development",
    description: "A disciplined testing repository implementing foundational machine learning algorithms from mathematical first principles in Python and C.",
    detailedVision: "Reinforcing academic understanding by writing gradient descent, backpropagation, and linear models from scratch before scaling into deep learning frameworks.",
    technologies: ["Python", "NumPy", "C", "Matplotlib", "PyTorch"],
    highlights: [
      "From-scratch implementations of fundamental optimization routines",
      "Comparative runtime benchmarks between native C and Python implementations",
      "Documented mathematical proofs alongside code routines"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  },
  {
    id: "data-pipeline-automation",
    title: "Automated Data Ingestion & Cleansing Pipeline",
    category: "Automation Projects",
    status: "Conceptual Research",
    description: "Automated scripts designed to ingest unstructured datasets, validate schemas, remove anomalies, and prepare standardized tensors for machine learning modeling.",
    detailedVision: "Addressing the real-world challenge where 80% of data science effort is cleaning noisy data. This utility automates sanity checks, missing value strategies, and outlier detection.",
    technologies: ["Python", "Git", "Data Analysis", "Regex", "Docker"],
    highlights: [
      "Rule-based and heuristic anomaly flags for tabular datasets",
      "Clean CLI interface with automated summary reports",
      "Modular pipeline easily extensible to new schemas"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://github.com"
  }
];

export const VISION_PILLARS: VisionPillar[] = [
  {
    number: "01",
    title: "TECHNOLOGY",
    subtitle: "AI, Data & Autonomous Systems",
    description: "Using AI, data, and automation to improve business processes. Moving beyond manual legacy inefficiencies to build software that scales decision-making with high fidelity.",
    focusElements: [
      "Automated underwriting & valuation models",
      "Data pipeline orchestration for commercial assets",
      "Predictive analytics & intelligent operational workflows"
    ]
  },
  {
    number: "02",
    title: "REAL ESTATE",
    subtitle: "Physical Asset Mastery & Market Cycles",
    description: "Understanding properties, markets, opportunities, and customer needs. Merging technological velocity with the stability, tangible value, and cash flow dynamics of premium real estate.",
    focusElements: [
      "Deep understanding of local & regional asset dynamics",
      "Bridging tenant/buyer experiences with modern digital interfaces",
      "Recognizing high-upside market anomalies before mainstream consensus"
    ]
  },
  {
    number: "03",
    title: "NETWORK",
    subtitle: "High-Caliber Professional Synergy",
    description: "Building relationships with people across technology, finance, business, and real estate. Value is compounded through disciplined integrity, mutual trust, and long-term alliances.",
    focusElements: [
      "Connecting visionary technologists with experienced operators",
      "Fostering relationships with institutional capital & private investors",
      "Collaborating openly with peers pushing the boundaries of AI & ML"
    ]
  }
];
