import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  FolderGit2, 
  Terminal, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Layers, 
  Play, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  // State for Java Terminal Simulator (Project 1)
  const [terminalOutput, setTerminalOutput] = useState([
    "SKCET Student Management System [Java v21 + MySQL 8.0]",
    "Select an action below to execute console operations."
  ]);
  const [terminalLoading, setTerminalLoading] = useState(false);

  // State for React Search Live Simulator (Project 2)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const sampleSearchDataset = [
    { id: 1, title: "Java OOP Encapsulation & Classes", category: "Java", desc: "Private fields, public accessors, and constructor overloading pattern." },
    { id: 2, title: "MySQL Relational Schemas & Foreign Keys", category: "Database", desc: "Normalized relational tables for student enrollment & department records." },
    { id: 3, title: "React useState & useMemo Optimization", category: "React", desc: "Prevent unnecessary re-renders when filtering large client-side collections." },
    { id: 4, title: "Data Structures: HashMaps & ArrayLists", category: "Algorithms", desc: "O(1) average lookup time for indexed student roll numbers." },
    { id: 5, title: "JDBC Transaction Safety & PreparedStatements", category: "Backend", desc: "SQL injection prevention and commit/rollback transaction safety." },
  ];

  const handleSimulateJava = (action) => {
    setTerminalLoading(true);
    setTimeout(() => {
      setTerminalLoading(false);
      if (action === 'insert') {
        setTerminalOutput([
          "[SQL] INSERT INTO students (roll_no, name, dept, cgpa) VALUES ('727724EUIT001', 'Aatiff Ahameed A.', 'IT', 8.2);",
          "[DB] Query OK, 1 row inserted (0.008 sec)",
          "[JAVA] Java Collections ArrayList<Student> synchronized.",
          "[STATUS] Student record registered with status: ACTIVE."
        ]);
      } else if (action === 'search') {
        setTerminalOutput([
          "[SQL] SELECT * FROM students WHERE name LIKE '%Aatiff%';",
          "+---------------+-------------------+------+------+",
          "| ROLL_NO       | NAME              | DEPT | CGPA |",
          "+---------------+-------------------+------+------+",
          "| 727724EUIT001 | Aatiff Ahameed A. | IT   | 8.2  |",
          "+---------------+-------------------+------+------+",
          "[JAVA] POJO mapping completed in 10ms."
        ]);
      } else if (action === 'analytics') {
        setTerminalOutput([
          "[JAVA] Stream API: students.stream().mapToDouble(s -> s.getCgpa()).average();",
          "[METRICS] Total Active Students: 540",
          "[METRICS] Department Average CGPA: 8.41",
          "[OOP] Encapsulation preserved across model boundaries."
        ]);
      }
    }, 350);
  };

  const filteredItems = sampleSearchDataset.filter(item => {
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || item.category === selectedTag;
    return matchesQuery && matchesTag;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRACTICAL IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-2 font-medium">
            Software solutions designed with clean architecture, relational database engineering, and reactive frontend state.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PROJECT 1: Student Management System (Java + MySQL) */}
          <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1.5 shadow-xs">
                  <Code2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                  Java & MySQL
                </span>
                <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">Console & DB Application</span>
              </div>

              <h3 className="text-xl font-black text-slate-950 dark:text-white">
                Student Management System
              </h3>
              
              <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                Designed and developed a console-based Student Management System in Java using Object-Oriented Programming (OOP) principles, integrated with MySQL for reliable CRUD operations.
              </p>

              {/* Resume Bullet Points */}
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Integrated MySQL-based CRUD operations for efficient storage and retrieval of student records.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Applied OOP principles: encapsulation, modular design, and Java Collections Framework.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Structured maintainable architecture with robust exception handling and JDBC transactions.</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["Java", "OOP", "MySQL", "Collections", "JDBC"].map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive Java Console Simulation - High Contrast Visible Codes */}
              <div id="java-terminal" className="mt-5 rounded-lg bg-[#0d1117] text-slate-100 border-2 border-slate-300 dark:border-slate-700 overflow-hidden shadow-md">
                <div className="px-3.5 py-2 bg-[#161b22] border-b border-slate-700 flex items-center justify-between text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    <span>Java Console Simulator</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-extrabold">JVM 21.0</span>
                </div>

                {/* Console Output Area with Visible Color Coding */}
                <div className="p-3.5 font-mono text-xs min-h-[110px] max-h-[150px] overflow-y-auto leading-relaxed bg-[#0d1117]">
                  {terminalLoading ? (
                    <div className="text-amber-300 font-bold py-1">Executing JVM transaction...</div>
                  ) : (
                    terminalOutput.map((line, idx) => {
                      if (line.startsWith('[SQL]')) {
                        return (
                          <div key={idx} className="text-white font-medium">
                            <span className="text-cyan-300 font-bold">[SQL] </span>
                            <span className="text-amber-200 font-semibold">{line.replace('[SQL]', '')}</span>
                          </div>
                        );
                      }
                      if (line.startsWith('+') || line.startsWith('|')) {
                        return <div key={idx} className="text-amber-300 font-bold">{line}</div>;
                      }
                      if (line.startsWith('[JAVA]') || line.startsWith('[DB]') || line.startsWith('[STATUS]')) {
                        return (
                          <div key={idx} className="text-emerald-300 font-medium">
                            <span className="text-emerald-400 font-bold">{line.substring(0, line.indexOf(']') + 1)}</span>
                            <span className="text-slate-100">{line.substring(line.indexOf(']') + 1)}</span>
                          </div>
                        );
                      }
                      return <div key={idx} className="text-slate-200 font-medium">{line}</div>;
                    })
                  )}
                </div>

                {/* Control Actions */}
                <div className="p-2 bg-[#161b22] border-t border-slate-700 flex flex-wrap gap-1.5 text-[11px] font-mono">
                  <span className="text-slate-400 py-0.5 font-bold">Run:</span>
                  <button
                    onClick={() => handleSimulateJava('insert')}
                    className="px-2.5 py-1 rounded font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-600 transition-colors shadow-xs"
                  >
                    1. Insert Record
                  </button>
                  <button
                    onClick={() => handleSimulateJava('search')}
                    className="px-2.5 py-1 rounded font-bold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-600 transition-colors shadow-xs"
                  >
                    2. Query MySQL
                  </button>
                  <button
                    onClick={() => handleSimulateJava('analytics')}
                    className="px-2.5 py-1 rounded font-bold bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-600 transition-colors shadow-xs"
                  >
                    3. Stream Analytics
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-5 pt-3.5 border-t border-slate-300 dark:border-white/10 flex items-center justify-between">
              <a
                href="https://github.com/aatiff-26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
              <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">SKCET Academic Project</span>
            </div>
          </div>

          {/* PROJECT 2: React Search Application */}
          <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  React.js & Hooks
                </span>
                <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">Interactive Web App</span>
              </div>

              <h3 className="text-xl font-black text-slate-950 dark:text-white">
                React Search Application
              </h3>
              
              <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                Developed a responsive search application using React.js, leveraging reusable components and efficient state management to deliver an intuitive user experience.
              </p>

              {/* Resume Bullet Points */}
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Implemented state management using React Hooks to enhance application scalability and maintainability.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Optimized search functionality to improve usability by delivering fast, responsive, and accurate results.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>Constructed modular, reusable UI components for scalable architecture and rapid rendering.</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["React.js", "React Hooks", "JavaScript ES6+", "Tailwind CSS", "Filter Logic"].map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded font-mono text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Interactive Search Demo - High Contrast Visible Codes */}
              <div className="mt-5 rounded-lg border-2 border-slate-300 dark:border-slate-700 overflow-hidden bg-slate-100 dark:bg-slate-950 shadow-sm">
                <div className="px-3.5 py-2 bg-slate-200 dark:bg-[#161b22] border-b border-slate-300 dark:border-slate-700 flex items-center justify-between text-xs font-mono text-slate-800 dark:text-slate-200">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Search className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Reactive Search Simulator</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950 px-2 py-0.5 rounded">
                    {filteredItems.length} match{filteredItems.length !== 1 ? 'es' : ''}
                  </span>
                </div>

                {/* Search Bar Input */}
                <div className="p-3 border-b border-slate-300 dark:border-slate-700 space-y-2 bg-white dark:bg-slate-900">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filter dataset (e.g. Java, Hook, MySQL)..."
                      className="w-full pl-8 pr-3 py-1.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-white/20 text-slate-950 dark:text-white placeholder-slate-500 focus:outline-none focus:border-indigo-600 font-mono font-bold"
                    />
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-1 text-[10px] font-mono">
                    {["All", "Java", "React", "Database", "Algorithms"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-2 py-1 rounded font-bold transition-colors ${
                          selectedTag === tag 
                            ? 'bg-indigo-600 text-white shadow-xs' 
                            : 'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-300'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filtered Items with Crisp Dark Text in Light Mode */}
                <div className="p-3 font-mono text-xs space-y-2 max-h-[130px] overflow-y-auto bg-slate-50 dark:bg-slate-950">
                  {filteredItems.length === 0 ? (
                    <div className="text-slate-600 dark:text-slate-400 text-center py-3 text-xs font-medium">No records found for "{searchQuery}".</div>
                  ) : (
                    filteredItems.map(item => (
                      <div key={item.id} className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-start justify-between gap-2 shadow-xs">
                        <div>
                          <div className="text-slate-950 dark:text-slate-100 font-black text-xs">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-700 dark:text-slate-400 mt-0.5 font-medium">{item.desc}</div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900 shrink-0">
                          {item.category}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-5 pt-3.5 border-t border-slate-300 dark:border-white/10 flex items-center justify-between">
              <a
                href="https://github.com/aatiff-26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
              <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400">Tested & Verified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
