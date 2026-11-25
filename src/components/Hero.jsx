import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { personalInfo } from '../data/portfolioData';
import { openGmailCompose } from '../utils/mailHelper';
import { 
  ArrowRight, 
  Mail, 
  Terminal, 
  Play, 
  CheckCircle2, 
  MapPin, 
  Code2, 
  FileCode,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgesRef = useRef(null);
  const ideRef = useRef(null);
  const statsRef = useRef(null);

  const [activeTab, setActiveTab] = useState('java');
  const [isRunning, setIsRunning] = useState(false);
  const [runOutput, setRunOutput] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(badgesRef.current, {
        y: -8,
        opacity: 0,
        duration: 0.4,
        delay: 0.1
      })
      .from(titleRef.current.children, {
        y: 15,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
      }, "-=0.2")
      .from(subtitleRef.current, {
        y: 12,
        opacity: 0,
        duration: 0.45,
      }, "-=0.25")
      .from(ideRef.current, {
        y: 15,
        opacity: 0,
        duration: 0.5,
      }, "-=0.3")
      .from(statsRef.current.children, {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4
      }, "-=0.25");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleRunCode = () => {
    setIsRunning(true);
    setRunOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setRunOutput(
        activeTab === 'java'
          ? "$ javac StudentManagementSystem.java && java Main\n[JVM 21] Build succeeded in 28ms\n[DB] MySQL 8.0 connected @ localhost:3306\n[INIT] Object-Oriented Service & DAO layers active.\n-> Ready for software engineering opportunities."
          : "$ npm run build\n✓ 42 modules transformed\n✓ State management & Hooks index ready (0 latency)\n-> Reactive UI ready for production deployment."
      );
    }, 450);
  };

  return (
    <section ref={heroRef} className="relative pt-24 pb-14 md:pt-32 md:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Context meta label */}
            <div ref={badgesRef} className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Software Development Roles</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                Coimbatore, India
              </span>
            </div>

            {/* Main Headline */}
            <div ref={titleRef} className="space-y-1 mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300">
                Information Technology Undergraduate &bull; <span className="text-blue-600 dark:text-blue-400 font-semibold">Java Enthusiast</span>
              </p>
            </div>

            {/* Subtitle Description */}
            <div ref={subtitleRef} className="space-y-5 max-w-xl">
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently studying Information Technology at <strong className="text-slate-900 dark:text-white font-semibold">Sri Krishna College of Engineering & Technology (CGPA 8.2 / 10)</strong>. 
                Passionate about Object-Oriented Programming, relational databases with MySQL, and responsive web development with React.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {/* Direct Gmail Trigger Button */}
                <button
                  onClick={() => openGmailCompose()}
                  className="px-4 py-2 rounded-lg font-medium text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Email Me</span>
                </button>

                {/* Direct WhatsApp Trigger Button */}
                <a
                  href={`https://wa.me/${personalInfo.cleanPhone}?text=Hi%20Aatiff,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg font-medium text-xs sm:text-sm text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-colors flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                {/* View Projects */}
                <a
                  href="#projects"
                  className="px-3.5 py-2 rounded-lg font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors flex items-center gap-1"
                >
                  <span>Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Developer Links */}
              <div className="flex items-center gap-3 pt-1 text-slate-500 dark:text-slate-400 text-xs font-mono">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github/aatiff-26</span>
                </a>
                <span>&bull;</span>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>linkedin/{personalInfo.linkedinHandle}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Code Editor Workbench */}
          <div ref={ideRef} className="lg:col-span-5 w-full">
            <div id="ide-window" className="rounded-lg overflow-hidden shadow-lg border border-slate-700/80 bg-[#0d1117] text-slate-100">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-400">{activeTab === 'java' ? 'AatiffProfile.java' : 'TechStack.jsx'}</span>
                </div>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                >
                  <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Run'}</span>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center border-b border-slate-800 bg-[#0d1117] px-2 pt-1 gap-1">
                <button
                  onClick={() => setActiveTab('java')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-t transition-colors ${
                    activeTab === 'java'
                      ? 'bg-[#161b22] text-amber-300 border-t border-amber-400 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>AatiffProfile.java</span>
                </button>
                <button
                  onClick={() => setActiveTab('react')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-t transition-colors ${
                    activeTab === 'react'
                      ? 'bg-[#161b22] text-cyan-300 border-t border-cyan-400 font-medium'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TechStack.jsx</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="p-3.5 font-mono text-xs overflow-x-auto min-h-[200px] bg-[#0d1117] text-slate-100 leading-relaxed">
                {activeTab === 'java' ? (
                  <div className="space-y-0.5">
                    <div className="text-slate-500 italic">// AatiffProfile.java</div>
                    <div><span className="text-pink-400 font-medium">package</span> <span className="text-slate-300">com.aatiff.profile;</span></div>
                    <div className="h-1.5"></div>
                    <div><span className="text-pink-400 font-medium">public class</span> <span className="text-amber-300 font-semibold">SoftwareEngineer</span> &#123;</div>
                    <div className="pl-4"><span className="text-pink-400 font-medium">public final</span> <span className="text-cyan-300">String</span> name = <span className="text-emerald-300">"Aatiff Ahameed A."</span>;</div>
                    <div className="pl-4"><span className="text-pink-400 font-medium">public final</span> <span className="text-cyan-300">String</span> college = <span className="text-emerald-300">"SKCET (CGPA 8.2 / 10)"</span>;</div>
                    <div className="h-1.5"></div>
                    <div className="pl-4 text-slate-500 italic">// Core Stack</div>
                    <div className="pl-4"><span className="text-pink-400 font-medium">public final</span> <span className="text-cyan-300">String</span>[] coreStack = &#123;</div>
                    <div className="pl-8 text-emerald-300">"Java (OOP, Collections, JDBC)",</div>
                    <div className="pl-8 text-emerald-300">"MySQL Relational Schemas",</div>
                    <div className="pl-8 text-emerald-300">"React.js & State Management",</div>
                    <div className="pl-8 text-emerald-300">"Data Structures & Algorithms"</div>
                    <div className="pl-4 text-slate-300">&#125;;</div>
                    <div className="h-1.5"></div>
                    <div className="pl-4"><span className="text-pink-400 font-medium">public boolean</span> <span className="text-amber-300">isAvailable</span>() &#123;</div>
                    <div className="pl-8"><span className="text-pink-400 font-medium">return</span> <span className="text-cyan-300 font-semibold">true</span>; <span className="text-slate-500 italic">// SDE internships & roles</span></div>
                    <div className="pl-4 text-slate-300">&#125;</div>
                    <div>&#125;</div>
                  </div>
                ) : (
                  <div className="space-y-0.5">
                    <div className="text-slate-500 italic">// TechStack.jsx</div>
                    <div><span className="text-pink-400 font-medium">import</span> <span className="text-slate-300">React</span> <span className="text-pink-400 font-medium">from</span> <span className="text-emerald-300">'react'</span>;</div>
                    <div className="h-1.5"></div>
                    <div><span className="text-pink-400 font-medium">export function</span> <span className="text-amber-300 font-semibold">TechStack</span>() &#123;</div>
                    <div className="pl-4"><span className="text-pink-400 font-medium">const</span> principles = [</div>
                    <div className="pl-8 text-emerald-300">"Clean Object-Oriented Architecture",</div>
                    <div className="pl-8 text-emerald-300">"Relational Database Normalization",</div>
                    <div className="pl-8 text-emerald-300">"Responsive, Accessible User Interfaces"</div>
                    <div className="pl-4">];</div>
                    <div className="h-1.5"></div>
                    <div className="pl-4"><span className="text-pink-400 font-medium">return</span> (</div>
                    <div className="pl-8 text-slate-300">&lt;<span className="text-cyan-300 font-medium">div</span> <span className="text-amber-300">className</span>=<span className="text-emerald-300">"stack-container"</span>&gt;</div>
                    <div className="pl-12 text-slate-200">&lt;<span className="text-cyan-300 font-medium">p</span>&gt;Driven to craft reliable software&lt;/<span className="text-cyan-300 font-medium">p</span>&gt;</div>
                    <div className="pl-8 text-slate-300">&lt;/<span className="text-cyan-300 font-medium">div</span>&gt;</div>
                    <div className="pl-4">);</div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>

              {/* Terminal Log */}
              {runOutput && (
                <div className="px-3 py-2 bg-black/95 border-t border-slate-800 font-mono text-xs text-emerald-400 animate-fadeIn">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-emerald-400" />
                    <span>TERMINAL OUTPUT</span>
                  </div>
                  <pre className="whitespace-pre-wrap text-emerald-300 font-normal">{runOutput}</pre>
                </div>
              )}

              {/* Status Bar */}
              <div className="px-3 py-1.5 bg-[#161b22] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Java 21 &bull; React 19 &bull; MySQL</span>
                </span>
                <span>SKCET IT &bull; CGPA 8.2</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-6 border-t border-slate-200 dark:border-slate-800">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80"
            >
              <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">
                {stat.value}<span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{stat.suffix}</span>
              </div>
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{stat.label}</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{stat.description}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
