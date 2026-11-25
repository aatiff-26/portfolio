import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  FolderGit2, 
  Terminal, 
  Search, 
  Code2, 
  Play, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  // State for Java Terminal Simulator (Project 1)
  const [terminalOutput, setTerminalOutput] = useState([
    "SKCET Student Management System [Java v21 + MySQL 8.0]",
    "Select an operation below to run a JVM transaction."
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
    <section id="projects" className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            03 &mdash; Featured Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Practical applications built with Java, MySQL, and modern React.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* PROJECT 1: Student Management System (Java + MySQL) */}
          <div className="p-5 sm:p-6 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80">
                  Java & MySQL
                </span>
                <span className="text-[11px] font-mono text-slate-400">Academic Project</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Student Management System
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                A console-based Student Management System developed in Java using Object-Oriented Programming (OOP) principles, connected to MySQL for persistent relational storage and CRUD operations.
              </p>

              {/* Implementation Details */}
              <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 select-none">&bull;</span>
                  <span>Implemented CRUD queries in MySQL for normalized student record storage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 select-none">&bull;</span>
                  <span>Structured modular Java classes using encapsulation, inheritance, and the Collections Framework.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 select-none">&bull;</span>
                  <span>Configured JDBC transaction safety with exception handling for resilient database operations.</span>
                </li>
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["Java", "OOP", "MySQL", "Collections", "JDBC"].map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded font-mono text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive Java Console Simulation */}
              <div id="java-terminal" className="mt-5 rounded-md bg-[#0d1117] text-slate-100 border border-slate-800 overflow-hidden">
                <div className="px-3 py-1.5 bg-[#161b22] border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3 h-3 text-amber-400" />
                    <span>Java Console Simulation</span>
                  </div>
                  <span className="text-emerald-400">JVM 21</span>
                </div>

                {/* Console Output Area */}
                <div className="p-3 font-mono text-xs min-h-[105px] max-h-[140px] overflow-y-auto leading-relaxed bg-[#0d1117]">
                  {terminalLoading ? (
                    <div className="text-amber-300 py-1">Executing JVM transaction...</div>
                  ) : (
                    terminalOutput.map((line, idx) => {
                      if (line.startsWith('[SQL]')) {
                        return (
                          <div key={idx} className="text-white">
                            <span className="text-cyan-300 font-semibold">[SQL] </span>
                            <span className="text-amber-200">{line.replace('[SQL]', '')}</span>
                          </div>
                        );
                      }
                      if (line.startsWith('+') || line.startsWith('|')) {
                        return <div key={idx} className="text-amber-300">{line}</div>;
                      }
                      if (line.startsWith('[JAVA]') || line.startsWith('[DB]') || line.startsWith('[STATUS]')) {
                        return (
                          <div key={idx} className="text-emerald-300">
                            <span className="text-emerald-400 font-medium">{line.substring(0, line.indexOf(']') + 1)}</span>
                            <span className="text-slate-200">{line.substring(line.indexOf(']') + 1)}</span>
                          </div>
                        );
                      }
                      return <div key={idx} className="text-slate-300">{line}</div>;
                    })
                  )}
                </div>

                {/* Control Actions */}
                <div className="p-2 bg-[#161b22] border-t border-slate-800 flex flex-wrap gap-1.5 text-[11px] font-mono">
                  <button
                    onClick={() => handleSimulateJava('insert')}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 transition-colors"
                  >
                    1. Insert Record
                  </button>
                  <button
                    onClick={() => handleSimulateJava('search')}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors"
                  >
                    2. Query MySQL
                  </button>
                  <button
                    onClick={() => handleSimulateJava('analytics')}
                    className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 transition-colors"
                  >
                    3. Stream Analytics
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a
                href="https://github.com/aatiff-26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
              <span className="text-[11px] font-mono text-slate-400">SKCET &bull; Java Backend</span>
            </div>
          </div>

          {/* PROJECT 2: React Search Application */}
          <div className="p-5 sm:p-6 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80">
                  React.js & Hooks
                </span>
                <span className="text-[11px] font-mono text-slate-400">Frontend Application</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                React Search Application
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                A responsive client-side search application built with React, demonstrating efficient state filtering, reusable components, and reactive user feedback without full page reloads.
              </p>

              {/* Implementation Details */}
              <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 select-none">&bull;</span>
                  <span>Implemented search state and category filtering using React useState and useMemo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 select-none">&bull;</span>
                  <span>Optimized filtering algorithms to deliver instant search responses with zero lag.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 select-none">&bull;</span>
                  <span>Built clean, modular UI components styled with responsive Tailwind CSS.</span>
                </li>
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["React.js", "React Hooks", "JavaScript ES6+", "Tailwind CSS", "Search State"].map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded font-mono text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Interactive Search Demo */}
              <div className="mt-5 rounded-md border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-950">
                <div className="px-3 py-1.5 bg-slate-100 dark:bg-[#161b22] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Search className="w-3 h-3 text-blue-500" />
                    <span>Interactive Search Demo</span>
                  </div>
                  <span>
                    {filteredItems.length} match{filteredItems.length !== 1 ? 'es' : ''}
                  </span>
                </div>

                {/* Search Bar Input */}
                <div className="p-2.5 border-b border-slate-200 dark:border-slate-800 space-y-2 bg-white dark:bg-slate-900">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search (e.g. Java, Hook, MySQL)..."
                      className="w-full pl-8 pr-3 py-1 rounded text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 font-mono"
                    />
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-1 text-[10px] font-mono">
                    {["All", "Java", "React", "Database", "Algorithms"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-2 py-0.5 rounded transition-colors ${
                          selectedTag === tag 
                            ? 'bg-slate-900 dark:bg-blue-600 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filtered Items */}
                <div className="p-2.5 font-mono text-xs space-y-1.5 max-h-[125px] overflow-y-auto bg-slate-50 dark:bg-slate-950">
                  {filteredItems.length === 0 ? (
                    <div className="text-slate-500 text-center py-2 text-xs">No records matching "{searchQuery}".</div>
                  ) : (
                    filteredItems.map(item => (
                      <div key={item.id} className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-slate-900 dark:text-slate-100 font-medium text-xs truncate">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">{item.desc}</div>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                          {item.category}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a
                href="https://github.com/aatiff-26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
              <span className="text-[11px] font-mono text-slate-400">React Frontend</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
