export const personalInfo = {
  name: "Aatiff Ahameed A.",
  role: "Information Technology Undergraduate",
  tagline: "Aspiring Software Engineer & Java Enthusiast",
  location: "Coimbatore, Tamil Nadu, India",
  email: "aatiffahameed@gmail.com",
  phone: "+91 9150383338",
  cleanPhone: "919150383338",
  linkedin: "https://www.linkedin.com/in/aatiff-ahameed-a1441b328",
  linkedinHandle: "aatiff-ahameed-a1441b328",
  github: "https://github.com/aatiff-26",
  githubHandle: "aatiff-26",
  summary:
    "Information Technology undergraduate at SKCET passionate about software engineering, Java development, and building clean web applications. Experienced in Object-Oriented Programming, SQL database management, and React. Focused on writing structured, maintainable code and solving algorithmic problems.",
  careerObjective:
    "Seeking software development and Java developer opportunities where I can apply my foundation in OOP, databases, and modern web technologies to contribute to real-world engineering projects.",
  stats: [
    { label: "B.Tech IT CGPA", value: "8.2", suffix: " / 10", description: "Sri Krishna College of Engg & Tech" },
    { label: "Graduation Batch", value: "2024", suffix: " – 2028", description: "Department of Information Technology" },
    { label: "Certifications", value: "3", suffix: "", description: "NVIDIA, Meta & Microsoft on Coursera" },
    { label: "Core Focus", value: "Java", suffix: " & React", description: "Backend, OOP, DB & Modern Frontend" },
  ]
};

export const education = {
  degree: "Bachelor of Technology in Information Technology",
  institution: "Sri Krishna College of Engineering and Technology (SKCET)",
  location: "Coimbatore, Tamil Nadu",
  period: "2024 – 2028",
  score: "CGPA: 8.2 / 10",
  highlights: [
    "Core studies in Data Structures & Algorithms, Object-Oriented Software Design, and Database Systems",
    "Hands-on academic projects integrating Java OOP with MySQL relational databases",
    "Active participant in technical coding clubs and department workshops",
  ]
};

// Streamlined, minimal technical skills strictly matching resume (No Python, No fake percentages)
export const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", note: "OOP, Collections Framework, JDBC", icon: "Coffee", badge: "Core Focus" },
      { name: "SQL", note: "Complex Queries, Joins, CRUD Operations", icon: "Database", badge: "Proficient" },
      { name: "JavaScript", note: "ES6+, DOM Manipulation, Async/Await", icon: "Terminal", badge: "Learning" },
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React.js", note: "Functional Components, Hooks, State", icon: "Atom", badge: "Frontend" },
      { name: "HTML5", note: "Semantic Structure, Web Accessibility", icon: "Globe", badge: "Markup" },
      { name: "CSS3 & Tailwind", note: "Responsive Layouts, Modern Flex/Grid", icon: "Palette", badge: "Styling" },
    ]
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", note: "Relational Schemas, Primary/Foreign Keys", icon: "Database", badge: "Database" },
      { name: "Git & GitHub", note: "Version Control, Branching, Repos", icon: "GitBranch", badge: "Tooling" },
      { name: "VS Code & IntelliJ IDEA", note: "Development, Debugging, Refactoring", icon: "Code", badge: "IDEs" },
    ]
  },
  {
    category: "Coursework & Foundations",
    items: [
      { name: "Data Structures & Algorithms", note: "Arrays, Linked Lists, Trees, Sorting, Searching", icon: "Cpu", badge: "Theory" },
      { name: "Object-Oriented Programming", note: "Encapsulation, Inheritance, Polymorphism, Abstraction", icon: "Layers", badge: "Design" },
      { name: "Database Management Systems", note: "ACID Properties, Normalization, Transactions", icon: "Database", badge: "Systems" },
    ]
  }
];

export const coursework = [
  { name: "Data Structures & Algorithms", code: "DSA", desc: "Arrays, Trees, Graphs, Sorting, Searching" },
  { name: "Object-Oriented Programming", code: "OOP", desc: "Encapsulation, Inheritance, Polymorphism, Modular Design" },
  { name: "Database Management Systems", code: "DBMS", desc: "Relational Modeling, Normalization, ACID Transactions" },
  { name: "Operating Systems", code: "OS", desc: "Process Scheduling, Memory Management, File Systems" },
  { name: "Computer Networks", code: "CN", desc: "OSI & TCP/IP Stack, Routing, Sockets, HTTP/HTTPS" },
  { name: "Software Engineering", code: "SE", desc: "SDLC, Modular Architecture, Quality & Testing" },
];

export const strengths = [
  { title: "Analytical Problem Solving", icon: "Brain", desc: "Breaking problems down into logical, modular steps." },
  { title: "Fast Learner", icon: "Rocket", desc: "Quickly adopting new frameworks, libraries, and best practices." },
  { title: "Debugging & Troubleshooting", icon: "ShieldCheck", desc: "Methodical root cause analysis in Java and JavaScript." },
  { title: "Logical Reasoning", icon: "Compass", desc: "Structured approach to algorithms and system workflows." },
];

export const spokenLanguages = [
  { name: "English", proficiency: "Professional Working Proficiency", flag: "🇬🇧" },
  { name: "Tamil", proficiency: "Native Proficiency", flag: "🇮🇳" },
];

export const projects = [
  {
    id: "student-management-system",
    title: "Student Management System",
    badge: "Java & MySQL",
    category: "Backend & Systems",
    description:
      "A console-based Student Management System built in Java applying Object-Oriented Programming (OOP) principles and connected to MySQL for persistent record management.",
    points: [
      "Designed and developed a console-based management system using core Java OOP principles (encapsulation, abstraction, and modular structure).",
      "Integrated MySQL database operations for CRUD handling of student enrollments, departments, and academic records.",
      "Used the Java Collections Framework (ArrayList, HashMap) for in-memory data caching and quick lookups.",
      "Implemented input sanitization and exception handling to ensure data integrity during database transactions."
    ],
    techStack: ["Java", "OOP", "MySQL", "JDBC", "Java Collections"],
    terminalPreview: {
      initialCommand: "java StudentManagementSystem",
      output: [
        "Connected to MySQL Database (localhost:3306)",
        "Loading Student Management System...",
        "Ready for operations: [1] Register [2] Query [3] Performance Summary"
      ]
    },
    githubUrl: "https://github.com/aatiff-26"
  },
  {
    id: "react-search-application",
    title: "React Search Application",
    badge: "React.js & Hooks",
    category: "Frontend Development",
    description:
      "A fast, responsive search and filtering single-page application built with React.js featuring component-based architecture and optimized state management.",
    points: [
      "Built with React.js using functional components and React Hooks (useState, useMemo) for responsive, lag-free UI state.",
      "Developed an instant client-side search and category filter that updates results in real-time as users type.",
      "Structured reusable, modular UI components to keep the codebase maintainable and scalable.",
      "Ensured mobile-friendly responsive layout and smooth UI feedback."
    ],
    techStack: ["React.js", "React Hooks", "JavaScript ES6+", "Tailwind CSS"],
    interactiveSampleItems: [
      { id: 1, title: "Java OOP Encapsulation & Classes", category: "Java", desc: "Private accessors, constructors, and getters/setters pattern." },
      { id: 2, title: "MySQL Relational Schemas & Foreign Keys", category: "Database", desc: "Normalized relational storage for student enrollment data." },
      { id: 3, title: "React useState & useMemo Optimization", category: "React", desc: "Zero re-render lag when filtering large list datasets." },
      { id: 4, title: "Data Structures: Trees & HashMaps", category: "Algorithms", desc: "Fast O(1) average lookup time for cached student IDs." },
      { id: 5, title: "JDBC Transaction Management & ACID", category: "Backend", desc: "Commit and rollback safety during batch student updates." }
    ],
    githubUrl: "https://github.com/aatiff-26"
  }
];

// Exact Coursera Certifications verified from Aatiff Ahameed's credentials
export const certifications = [
  {
    id: "nvidia-networking",
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    platform: "Coursera",
    credentialId: "ZGR52LNQJUR2",
    shareId: "7e287eef0853603e039307892dab374c",
    credentialUrl: "https://coursera.org/share/7e287eef0853603e039307892dab374c",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/ZGR52LNQJUR2",
    image: "/certificates/nvidia-networking.jpeg",
    description: "Fundamental networking concepts, architecture, topologies, routing protocols, and modern network infrastructure verified by NVIDIA.",
    issuedTo: "Aatiff Ahameed A.",
    accent: "border-emerald-500",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300"
  },
  {
    id: "meta-frontend",
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    platform: "Coursera",
    credentialId: "1V1R8YNVNO2U",
    shareId: "4795ccd34dd0cda1e725e3e01d8b33aa",
    credentialUrl: "https://coursera.org/share/4795ccd34dd0cda1e725e3e01d8b33aa",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/1V1R8YNVNO2U",
    image: "/certificates/meta-frontend.jpeg",
    description: "Core frontend web development, semantic HTML5, CSS layout principles, responsive UI, UI engineering practices verified by Meta.",
    issuedTo: "Aatiff Ahameed A.",
    accent: "border-blue-500",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300 dark:bg-blue-950 dark:text-blue-300"
  },
  {
    id: "microsoft-os-security",
    title: "Introduction to Computers and Operating Systems and Security",
    issuer: "Microsoft",
    platform: "Coursera",
    credentialId: "QW6GOZVCJ5J6",
    shareId: "ca7b12fcd216f37a68e0e72221798d18",
    credentialUrl: "https://coursera.org/share/ca7b12fcd216f37a68e0e72221798d18",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/QW6GOZVCJ5J6",
    image: "/certificates/microsoft-os.jpeg",
    description: "Computer hardware architecture, operating system memory/process management, and core digital security principles verified by Microsoft.",
    issuedTo: "Aatiff Ahameed A.",
    accent: "border-indigo-500",
    badgeColor: "bg-indigo-100 text-indigo-900 border-indigo-300 dark:bg-indigo-950 dark:text-indigo-300"
  }
];
