export const personalInfo = {
  name: "Aatiff Ahameed A.",
  role: "Information Technology Undergraduate",
  tagline: "Aspiring Software Engineer & Java Enthusiast",
  location: "Coimbatore, Tamil Nadu, India",
  email: "aatiffahameed@gmail.com",
  phone: "+91 9150383338",
  cleanPhone: "919150383338",
  linkedin: "https://linkedin.com/in/aatiff-ahameed",
  linkedinHandle: "aatiff-ahameed",
  github: "https://github.com/aatiff-26",
  githubHandle: "aatiff-26",
  summary:
    "Motivated Information Technology undergraduate passionate about Software Engineering and Artificial Intelligence. Skilled in Java, SQL, React, and Data Structures & Algorithms, with hands-on experience developing academic projects and a continuous expansion of technical expertise. Strong analytical thinker with excellent problem-solving abilities, eager to contribute to innovative software solutions while learning modern technologies and industry best practices.",
  careerObjective:
    "Seeking Software Development, Java Developer opportunities where I can apply my technical knowledge, strengthen my software engineering skills, and contribute to impactful real-world projects while continuously learning emerging technologies.",
  stats: [
    { label: "B.Tech IT CGPA", value: "8.2", suffix: " / 10", description: "Sri Krishna College of Engg & Tech" },
    { label: "Graduation Batch", value: "2024", suffix: " - 2028", description: "Department of Information Technology" },
    { label: "Verified Certifications", value: "3", suffix: "+", description: "Coursera credentials completed" },
    { label: "Core Technologies", value: "10", suffix: "+", description: "Languages, DBs, and Modern Frameworks" },
  ]
};

export const education = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "Sri Krishna College of Engineering and Technology (SKCET)",
  location: "Coimbatore, Tamil Nadu",
  period: "2024 – 2028",
  score: "CGPA: 8.2 / 10",
  highlights: [
    "Comprehensive curriculum in Computer Science & Information Technology fundamentals",
    "Specialized focus on Object-Oriented Software Design and Database Systems",
    "Active contributor to student technical clubs and collaborative engineering workshops",
  ]
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "Core Languages",
      description: "Foundational programming languages used for systems, backend, and logic.",
      skills: [
        { name: "Java", level: "Proficient", icon: "Coffee", color: "from-amber-500 to-red-500", progress: 90, highlight: "OOP, Collections, JDBC" },
        { name: "Python", level: "Intermediate", icon: "Code2", color: "from-blue-500 to-cyan-400", progress: 80, highlight: "Scripting, Logic, DSA" },
        { name: "SQL", level: "Advanced", icon: "Database", color: "from-emerald-500 to-teal-400", progress: 85, highlight: "Complex Queries, CRUD, Joins" },
        { name: "JavaScript", level: "Learning", icon: "Terminal", color: "from-yellow-400 to-amber-500", progress: 70, highlight: "ES6+, DOM, Asynchronous" },
      ]
    },
    {
      id: "web",
      title: "Web Development",
      description: "Modern frontend technologies for building responsive and reactive interfaces.",
      skills: [
        { name: "React.js", level: "Proficient", icon: "Atom", color: "from-cyan-400 to-blue-500", progress: 85, highlight: "Hooks, State, Components" },
        { name: "HTML5", level: "Advanced", icon: "Globe", color: "from-orange-500 to-red-500", progress: 95, highlight: "Semantic Markup, Accessibility" },
        { name: "CSS3", level: "Proficient", icon: "Palette", color: "from-blue-400 to-indigo-500", progress: 90, highlight: "Flexbox, Grid, Animations" },
        { name: "Tailwind CSS", level: "Proficient", icon: "Sparkles", color: "from-teal-400 to-cyan-500", progress: 88, highlight: "Responsive Design, Glassmorphism" },
      ]
    },
    {
      id: "database-tools",
      title: "Databases & Dev Tools",
      description: "Relational database management, version control, and development environments.",
      skills: [
        { name: "MySQL", level: "Proficient", icon: "Database", color: "from-blue-600 to-sky-400", progress: 85, highlight: "Relational Design, Indexing" },
        { name: "Git", level: "Intermediate", icon: "GitBranch", color: "from-orange-600 to-red-500", progress: 82, highlight: "Version Control, Branching" },
        { name: "GitHub", level: "Intermediate", icon: "Github", color: "from-slate-400 to-slate-200", progress: 85, highlight: "Remote Repos, Collaboration" },
        { name: "VS Code", level: "Advanced", icon: "Code", color: "from-sky-500 to-blue-600", progress: 92, highlight: "Extensions, Debugging" },
        { name: "IntelliJ IDEA", level: "Proficient", icon: "Cpu", color: "from-pink-500 to-purple-600", progress: 88, highlight: "Java Dev, Profiling, Refactoring" },
      ]
    },
    {
      id: "learning",
      title: "Currently Learning & Emerging",
      description: "Technologies currently being explored to stay at the cutting edge.",
      skills: [
        { name: "Advanced Java", level: "Active", icon: "Zap", color: "from-amber-400 to-orange-500", progress: 75, highlight: "Concurrency, Streams, JVM" },
        { name: "Spring Boot", level: "Active", icon: "Layers", color: "from-emerald-400 to-green-600", progress: 65, highlight: "Microservices, Dependency Injection" },
        { name: "Machine Learning", level: "Active", icon: "Cpu", color: "from-purple-500 to-indigo-600", progress: 60, highlight: "Models, Neural Fundamentals" },
        { name: "REST APIs", level: "Active", icon: "Network", color: "from-cyan-400 to-blue-500", progress: 78, highlight: "API Architecture, Endpoints" },
        { name: "System Design", level: "Active", icon: "Boxes", color: "from-rose-500 to-pink-500", progress: 62, highlight: "Scalability, Caching, DB Sharding" },
        { name: "Competitive Programming", level: "Active", icon: "Trophy", color: "from-amber-400 to-yellow-500", progress: 75, highlight: "Algorithms & Complex Problem Solving" },
      ]
    }
  ]
};

export const coursework = [
  { name: "Data Structures & Algorithms", code: "DSA", desc: "Arrays, Trees, Graphs, Sorting, Searching, Dynamic Programming" },
  { name: "Object-Oriented Programming", code: "OOP", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, SOLID" },
  { name: "Database Management Systems", code: "DBMS", desc: "Normalization, ACID properties, Transaction Management, SQL" },
  { name: "Operating Systems", code: "OS", desc: "Process Scheduling, Memory Management, Concurrency, Virtualization" },
  { name: "Computer Networks", code: "CN", desc: "OSI & TCP/IP models, Routing protocols, HTTP/HTTPS, Sockets" },
  { name: "Software Engineering", code: "SE", desc: "SDLC methodologies, Agile, Design Patterns, Quality Assurance" },
];

export const strengths = [
  { title: "Analytical Problem Solving", icon: "Brain", desc: "Breaking down complex problems into clear, computational algorithmic steps." },
  { title: "Fast Adaptation to Technologies", icon: "Rocket", desc: "Quickly learning new stacks, frameworks, and engineering standards." },
  { title: "Analytical Thinking", icon: "Target", desc: "Evaluating trade-offs, edge cases, and architectural performance." },
  { title: "Debugging & Troubleshooting", icon: "ShieldCheck", desc: "Methodical root cause analysis and bug resolution across Java and React." },
  { title: "Logical Reasoning", icon: "Compass", desc: "Structured approach to algorithmic challenges and system workflows." },
];

export const spokenLanguages = [
  { name: "English", proficiency: "Professional Working Proficiency", flag: "🇬🇧" },
  { name: "Tamil", proficiency: "Native Proficiency", flag: "🇮🇳" },
];

export const projects = [
  {
    id: "student-management-system",
    title: "Student Management System",
    category: "Java & Database Engineering",
    type: "Console & Database Application",
    badge: "Core Java & OOP",
    description:
      "A robust, console-based Student Management System developed in Java following clean Object-Oriented Programming (OOP) principles, integrated with MySQL for enterprise-grade persistent data storage and CRUD operations.",
    points: [
      "Designed and developed an interactive console-based Student Management System utilizing Java and Object-Oriented Programming (OOP) principles.",
      "Integrated MySQL-based CRUD operations for reliable, efficient storage, indexing, and retrieval of student academic records.",
      "Applied OOP principles including encapsulation, modular design, separation of concerns, and the Java Collections Framework to deliver a maintainable, extensible architecture.",
      "Implemented strict input validation, exception handling, and JDBC transaction safety to prevent data inconsistency.",
    ],
    techStack: ["Java", "OOP Principles", "MySQL", "Java Collections", "JDBC", "Data Structures"],
    demoType: "terminal",
    terminalPreview: {
      initialCommand: "java -jar StudentManagementSystem.jar",
      output: [
        "==================================================",
        "   SKCET STUDENT MANAGEMENT SYSTEM v2.4 (Java)   ",
        "==================================================",
        "[DB] Connecting to MySQL database at localhost:3306... OK!",
        "[INIT] Loading Java Collections Cache & DAO layers... OK!",
        "",
        "Available Operations:",
        "  1. Register New Student Record",
        "  2. Search Student by ID / Roll Number",
        "  3. Update Academic Details & Marks",
        "  4. Generate Department Performance Analytics",
        "  5. Exit System",
        "",
        "-> Execution: Successfully processed 500+ records in < 45ms.",
      ]
    },
    githubUrl: "https://github.com/aatiff-26",
  },
  {
    id: "react-search-application",
    title: "React Search Application",
    category: "Modern Frontend Engineering",
    type: "Interactive Single Page Web Application",
    badge: "React.js & State",
    description:
      "A fast, responsive search and filter web application built with React.js, featuring optimized state management, reusable component hierarchy, and instant client-side query matching.",
    points: [
      "Developed an intuitive, responsive search application using React.js, leveraging modular UI components and streamlined state management.",
      "Implemented state management using React Hooks (useState, useMemo, useEffect, useCallback) for enhanced scalability, maintainability, and silky user experience.",
      "Optimized query debouncing and search filtering algorithms to deliver fast, instant, and accurate search results with zero UI lag.",
      "Crafted an accessible, mobile-first design with smooth transition animations and clear feedback states.",
    ],
    techStack: ["React.js", "React Hooks", "JavaScript (ES6+)", "Tailwind CSS", "Debounce Logic"],
    demoType: "interactive",
    interactiveSampleItems: [
      { id: 1, title: "Java OOP & Design Patterns", tag: "Java", desc: "Clean architecture, encapsulation, and inheritance." },
      { id: 2, title: "React Component Lifecycle & Hooks", tag: "Frontend", desc: "State management, useEffect, custom hooks." },
      { id: 3, title: "MySQL Query Optimization & Joins", tag: "Database", desc: "B-Tree indexes, execution plans, and transactions." },
      { id: 4, title: "Data Structures: Trees & Graphs", tag: "Algorithms", desc: "Traversal, shortest path, and dynamic programming." },
      { id: 5, title: "Spring Boot Microservice REST API", tag: "Backend", desc: "Controllers, service layer, and JPA repositories." },
    ],
    githubUrl: "https://github.com/aatiff-26",
  }
];

export const certifications = [
  {
    title: "Coursera Verified Specialization / Course 1",
    issuer: "Coursera",
    credentialUrl: "https://coursera.org/share/7e287eef0853603e039307892dab374c",
    code: "7e287eef0853603e039307892dab374c",
    domain: "Software Development & Engineering",
    description: "Hands-on verified academic certification demonstrating mastery in fundamental computer science and programming concepts.",
    icon: "Award",
    accent: "from-blue-500 to-indigo-600"
  },
  {
    title: "Coursera Verified Specialization / Course 2",
    issuer: "Coursera",
    credentialUrl: "https://coursera.org/share/4795ccd34dd0cda1e725e3e01d8b33aa",
    code: "4795ccd34dd0cda1e725e3e01d8b33aa",
    domain: "Computer Science & IT Fundamentals",
    description: "Verified assessment of technical competencies, problem-solving, and practical implementation methodologies.",
    icon: "CheckCircle2",
    accent: "from-cyan-500 to-blue-600"
  },
  {
    title: "Coursera Verified Specialization / Course 3",
    issuer: "Coursera",
    credentialUrl: "https://coursera.org/share/ca7b12fcd216f37a68e0e72221798d18",
    code: "ca7b12fcd216f37a68e0e72221798d18",
    domain: "Professional Technical Skills",
    description: "Curriculum verified completion in software paradigms, modern algorithms, and industry-aligned best practices.",
    icon: "GraduationCap",
    accent: "from-violet-500 to-purple-600"
  }
];
