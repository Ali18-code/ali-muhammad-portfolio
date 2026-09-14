export const portfolioData = {
  personal: {
    name: "Ali Muhammad Panhwar",
    title: "Aspiring AI Engineer",
    subTitle: "Computer Science Student @ Air University",
    statusBadge: "Open to AI/ML & Software Engineering Internships",
    location: "Pakistan (Open to Local & Remote)",
    email: "am6470224@gmail.com",
    phone: "03089368917",
    github: "https://github.com/Ali18-code",
    linkedin: "https://www.linkedin.com/in/ali-muhammad-17625a335",
    resumeUrl: "#", // Add your PDF path in public/ or Google Drive link here
    hasResume: false, // Set to true when ready to link your PDF resume
    headline: "From Code to Intelligent Systems",
    tagline: "Building practical systems with strong software fundamentals, actively progressing from Machine Learning toward Generative AI and Autonomous Agents.",
    mission: "Not just importing libraries, but understanding systems, evaluating trade-offs, and building verifiable proof of work.",
    avatarUrl: "/profile.png"
  },

  philosophy: [
    {
      step: "01",
      title: "Learn Fundamentals",
      desc: "Grounded in C++, Data Structures, Algorithms, and Systems before rushing into high-level abstractions."
    },
    {
      step: "02",
      title: "Build Real Systems",
      desc: "Developing end-to-end applications that solve practical workflows, from relational DBs to NLP classifiers."
    },
    {
      step: "03",
      title: "Evaluate & Explain",
      desc: "Inspecting failure cases, measuring precision vs recall, and being able to defend every line of code."
    },
    {
      step: "04",
      title: "Iterate & Advance",
      desc: "Progressing systematically into Deep Learning, LLM orchestration, and Agentic architectures."
    }
  ],

  trajectory: [
    {
      stage: "Core Engineering Foundations",
      skills: ["C++", "Data Structures & Algorithms", "Java", "SQL", "Relational Databases"],
      status: "Strong Foundation",
      desc: "Deep algorithmic problem solving, object-oriented software design, and database schema modeling."
    },
    {
      stage: "Applied Machine Learning",
      skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "NLP", "Feature Engineering"],
      status: "Active Focus",
      desc: "Building supervised learning pipelines, text classification, exploratory data analysis, and error analysis."
    },
    {
      stage: "Deep Learning & Computer Vision",
      skills: ["Neural Networks", "CNNs", "Model Evaluation", "PyTorch/TensorFlow Basics"],
      status: "Currently Learning",
      desc: "Experimenting with digit classification, image representations, and loss optimization."
    },
    {
      stage: "Generative AI & Agentic Systems",
      skills: ["LLMs", "RAG", "Function Calling", "Multi-Agent Workflows", "API Deployment"],
      status: "Upcoming Target",
      desc: "The long-term mission: building robust, autonomous AI agents that act as reliable software operators."
    }
  ],

  stats: [
    { label: "Degree Progress", value: "BS CS (2024–2028)" },
    { label: "Core Languages", value: "C++, Python, Java" },
    { label: "Target Domain", value: "AI / ML Engineering" },
    { label: "Work Ethic", value: "Disciplined Builder" }
  ],

  projects: [
    {
      id: "email-spam-classification",
      title: "Email Spam Classification System",
      category: "Machine Learning / NLP",
      badge: "Interactive NLP Engine",
      description: "An end-to-end Natural Language Processing (NLP) pipeline featuring a live web app where users can input custom messages and instantly detect if they are Spam or Ham.",
      architecture: [
        "Interactive UI: Built a Streamlit web application allowing real-time message analysis and probability visualization.",
        "Text Preprocessing: Tokenization, URL/number stripping, punctuation filtering, and whitespace normalization.",
        "Feature Representation: TF-IDF vectorization generating a 3000-word feature vocabulary.",
        "Model Comparison: Evaluated Naive Bayes, Logistic Regression, and Linear SVM, achieving 98.3% accuracy with Linear SVM."
      ],
      tags: ["Python", "Streamlit", "Scikit-Learn", "NLP", "TF-IDF"],
      github: "https://github.com/Ali18-code/email-spam-classification",
      demo: null, // Will add live link once deployed
      status: "Live Demo Available"
    },
    {
      id: "smart-clinic-system",
      title: "Smart Clinic Management System",
      category: "Systems & DSA",
      badge: "Core Engineering Proof",
      description: "A comprehensive medical clinic management system built with robust object-oriented architecture, data structures, and database integration.",
      architecture: [
        "Data Structures: Utilized custom linked structures and hash indexing for fast patient record retrieval",
        "Backend Logic: Core logic implemented in C++ emphasizing memory management and execution speed",
        "Interactive GUI: Java desktop interface providing intuitive doctor scheduling and patient appointment queues",
        "Data Persistence: SQL relational database with structured foreign key schemas for doctors, patients, and billing"
      ],
      tags: ["C++", "DSA", "Java GUI", "SQL", "Object-Oriented Design"],
      github: "https://github.com/Ali18-code/Smart-Clinic-Management-system",
      demo: null,
      status: "Completed"
    },
    {
      id: "mnist-digit-recognition",
      title: "Interactive MNIST Digit Recognizer",
      category: "Computer Vision / ML",
      badge: "Interactive Neural Net",
      description: "An end-to-end interactive machine learning pipeline featuring a live web app where users can draw digits and get real-time predictions from a trained Multi-Layer Perceptron (MLP).",
      architecture: [
        "Interactive UI: Built a Streamlit web application with a drawable HTML canvas for real-time user inference.",
        "Rigorous Preprocessing: Implemented exact MNIST Center of Mass (CoM) centering to correct user drawings and eliminate translation variance.",
        "Classification Pipeline: Trained and pickled a 128x64 architecture MLP, comparing performance against a Logistic Regression baseline (96% Accuracy).",
        "Error Analysis: Inspected failure cases (e.g., distinguishing ambiguous handwriting) and handled out-of-distribution inputs."
      ],
      tags: ["Python", "Streamlit", "Scikit-Learn", "OpenCV", "Neural Networks"],
      github: "https://github.com/Ali18-code/Mnist-digit-recognition",
      demo: null, // We will add the live link once it's deployed to HuggingFace Spaces or Streamlit Cloud
      status: "Live Demo Available"
    },
    {
      id: "crime-fir-system",
      title: "Crime & FIR Management System",
      category: "Full-Stack Enterprise",
      badge: "Systems Architecture",
      description: "A web-based digital First Information Report (FIR) and criminal case tracking portal built to streamline law enforcement record keeping.",
      architecture: [
        "Full-Stack Architecture: Built with C# and Blazor WebAssembly for reactive client-side performance",
        "Role-Based Access: Citizen FIR filing, investigator case assignment, and supervisor status audit",
        "Database Layer: Relational schema handling case evidence, officer logs, and status timelines",
        "UI/UX: Clean responsive dashboards styled with HTML, CSS, and modern web components"
      ],
      tags: ["C#", "Blazor", "SQL", "HTML/CSS", "Full-Stack"],
      github: "https://github.com/Ali18-code",
      demo: null,
      status: "Completed"
    },
    {
      id: "flagship-agent-ai",
      title: "Autonomous Agent & RAG System (In Progress)",
      category: "Flagship AI Project",
      badge: "Upcoming Flagship",
      description: "A production-grade GenAI agent incorporating Retrieval-Augmented Generation (RAG), tool calling, and evaluation metrics.",
      architecture: [
        "Architecture: Orchestrated with Python, Vector DB (Chroma/FAISS), and LLM APIs",
        "Tool Calling: Empowering the model to query structured databases, execute sandboxed code, and synthesize findings",
        "Evaluation: Grounded verification against hallucination benchmarks"
      ],
      tags: ["GenAI", "LLMs", "RAG", "Agentic Workflows", "Vector DB", "In Progress"],
      github: "https://github.com/Ali18-code",
      demo: null,
      status: "In Active Research"
    }
  ],

  skills: {
    core: [
      { name: "C++", level: "Strong", detail: "DSA, Memory, Pointers, OOP" },
      { name: "Python", level: "Intermediate", detail: "ML scripts, NumPy, Pandas, Scikit-Learn" },
      { name: "Java", level: "Intermediate", detail: "OOP, GUI Design, Application Logic" },
      { name: "SQL", level: "Intermediate", detail: "Relational modeling, Joins, Aggregations" },
      { name: "Data Structures & Algorithms", level: "Strong", detail: "Trees, Graphs, Sorting, Hash Maps" }
    ],
    aiMl: [
      { name: "Machine Learning", level: "Active Focus", detail: "Supervised Classification, Regression, Clustering" },
      { name: "Natural Language Processing (NLP)", level: "Active Focus", detail: "TF-IDF, Tokenization, Text Preprocessing" },
      { name: "Model Evaluation", level: "Practicing", detail: "Precision, Recall, F1-Score, Confusion Matrices" },
      { name: "Deep Learning (Basics)", level: "Learning", detail: "Neural architectures, loss functions" },
      { name: "Generative AI & LLMs", level: "Roadmap", detail: "Prompt engineering, RAG concepts, Agentic workflows" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Proficient", detail: "Version control, branching, repository management" },
      { name: "Linux / CLI", level: "Working Knowledge", detail: "Bash, filesystem navigation, scripting" },
      { name: "VS Code / IDEs", level: "Daily Driver", detail: "Debugging, extensions, environment config" },
      { name: "HTML5 / CSS3 / JS", level: "Intermediate", detail: "Responsive UI, modern frontend concepts" },
      { name: "Blazor / C#", level: "Working Knowledge", detail: "Component architecture, .NET basics" }
    ]
  },

  certifications: [
    {
      title: "Mastering Claude Code: From Setup to Real Projects",
      issuer: "SkillsBooster Academy via Coursera",
      date: "August 2026",
      credentialId: "F230WIWM57KL",
      verifyUrl: "https://coursera.org/verify/F230WIWM57KL",
      image: "/certificates/cert1.jpg",
      badge: "Agentic AI Tools",
      desc: "In-depth application of Anthropic's Claude Code command-line tool, configuring agentic developer environments, and orchestrating AI-driven code generation across real projects."
    },
    {
      title: "Mastering ChatGPT: All Features and Functions",
      issuer: "Start-Tech Academy via Udemy",
      date: "August 2026",
      credentialId: "UC-3210318a-40d7-433f-b13b-b710e3398eaf",
      verifyUrl: "https://www.udemy.com/certificate/UC-3210318a-40d7-433f-b13b-b710e3398eaf/",
      image: "/certificates/cert2.png",
      badge: "Prompt Engineering & LLMs",
      desc: "Comprehensive mastery of advanced prompting techniques, OpenAI features, structured output workflows, and generative AI productivity."
    },
    {
      title: "Python For Beginners Course In-Depth",
      issuer: "Horizon Tech via Udemy",
      date: "July 2025",
      credentialId: "UC-43881411-330e-455e-bae7-96c7a91aad0d",
      verifyUrl: "https://ude.my/UC-43881411-330e-455e-bae7-96c7a91aad0d",
      image: "/certificates/cert_python.png",
      badge: "Python Programming",
      desc: "Comprehensive 7-hour course covering foundational Python programming concepts, syntax, and hands-on applications."
    }
  ],

  experience: [
    {
      role: "Machine Learning Intern",
      company: "Arch Technologies",
      type: "Internship (Assigned Tasks)",
      period: "2025 — Present (2 Months)",
      location: "Remote",
      highlights: [
        "Constructed end-to-end NLP email spam classification pipeline with feature engineering and model evaluation.",
        "Implemented and evaluated MNIST handwritten digit classification, analyzing misclassified failure cases.",
        "Demonstrated practical model training, precision/recall trade-off analysis, and experiment documentation."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science (BS CS)",
      institution: "Air University",
      period: "2024 — 2028",
      status: "3rd Year (Active)",
      highlights: [
        "Deep coursework in Data Structures & Algorithms, Object-Oriented Programming (C++/Java), and Relational Databases.",
        "Transitioning from software systems to Machine Learning and Autonomous AI systems."
      ]
    },
    {
      degree: "College (Pre-Engineering)",
      institution: "Scienta Vision College",
      period: "Completed 2024",
      status: "Completed",
      highlights: [
        "Strong foundation in advanced mathematics, calculus, and analytical physics."
      ]
    },
    {
      degree: "Matriculation (High School)",
      institution: "Scienta Vision School & Roots Millennium",
      period: "Completed",
      status: "Completed",
      highlights: [
        "Foundational STEM education and academic discipline."
      ]
    }
  ]
};
