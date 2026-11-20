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
        y: -12,
        opacity: 0,
        duration: 0.5,
        delay: 0.1
      })
      .from(titleRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
      }, "-=0.3")
      .from(subtitleRef.current, {
        y: 15,
        opacity: 0,
        duration: 0.5,
      }, "-=0.3")
      .from(ideRef.current, {
        scale: 0.97,
        opacity: 0,
        duration: 0.7,
      }, "-=0.4")
      .from(statsRef.current.children, {
        y: 15,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5
      }, "-=0.3");
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
          ? "$ javac StudentManagementSystem.java && java Main\n[JVM 21] Build succeeded in 28ms\n[DB] MySQL 8.0 connected @ localhost:3306\n[INIT] Object-Oriented Service & DAO layers active.\n-> Ready for high-impact software engineering roles."
          : "$ npm run build\n✓ 42 modules transformed\n✓ State management & Hooks index ready (0 latency)\n-> Reactive UI ready for production deployment."
      );
    }, 450);
  };

  return (
    <section ref={heroRef} className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pills */}
            <div ref={badgesRef} className="flex flex-wrap items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for Software & Java Dev Roles</span>
              </div>

              <div className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-slate-800 dark:text-slate-300 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-white/10 flex items-center gap-1.5 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Coimbatore, India</span>
              </div>
            </div>

            {/* Main Headline */}
            <div ref={titleRef} className="space-y-1.5 mb-4">
              <div className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                Software Engineering &bull; Systems &bull; Web
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.1]">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-200">
                Information Technology Undergraduate &bull; <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">Java Enthusiast</span>
              </p>
            </div>

            {/* Subtitle Description */}
            <div ref={subtitleRef} className="space-y-5 max-w-xl">
              <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed bg-white dark:bg-slate-900/70 border border-slate-300 dark:border-white/10 p-4 rounded-xl shadow-xs">
                Information Technology student at <strong className="text-slate-950 dark:text-white font-extrabold">Sri Krishna College of Engineering & Technology (CGPA 8.2 / 10)</strong>. 
                Passionate about Object-Oriented design, relational database systems, and modern reactive web development.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Direct Gmail Trigger Button */}
                <button
                  onClick={() => openGmailCompose()}
                  className="px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-white bg-slate-950 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 active:scale-95 shadow-md transition-all flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Email aatiffahameed@gmail.com</span>
                </button>

                {/* Direct WhatsApp Trigger Button */}
                <a
                  href={`https://wa.me/${personalInfo.cleanPhone}?text=Hi%20Aatiff,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-colors flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp Chat</span>
                </a>

                {/* View Projects */}
                <a
                  href="#projects"
                  className="px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-white/20 hover:border-indigo-600 transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                </a>
              </div>

              {/* Developer Links */}
              <div className="flex items-center gap-4 pt-1 text-slate-700 dark:text-slate-400 text-xs font-mono font-medium">
                <span className="text-slate-500 dark:text-slate-500">Profiles:</span>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-900 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-semibold"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github/aatiff-26</span>
                </a>
                <span>&bull;</span>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-700 dark:text-indigo-400 hover:underline transition-colors font-semibold"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>linkedin/aatiff-ahameed</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Visible Code Editor Terminal */}
          <div ref={ideRef} className="lg:col-span-5 w-full">
            <div id="ide-window" className="rounded-xl overflow-hidden shadow-2xl border-2 border-slate-300 dark:border-slate-700 bg-[#0d1117] text-slate-100">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#161b22] border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-300 font-semibold">{activeTab === 'java' ? 'AatiffProfile.java' : 'TechStack.jsx'}</span>
                </div>

                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all active:scale-95 shadow-sm"
                >
                  <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Running...' : 'Run'}</span>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center border-b border-slate-700 bg-[#0d1117] px-2 pt-1 gap-1">
                <button
                  onClick={() => setActiveTab('java')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t transition-colors ${
                    activeTab === 'java'
                      ? 'bg-[#161b22] text-amber-300 border-t-2 border-amber-400 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>AatiffProfile.java</span>
                </button>
                <button
                  onClick={() => setActiveTab('react')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t transition-colors ${
                    activeTab === 'react'
                      ? 'bg-[#161b22] text-cyan-300 border-t-2 border-cyan-400 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TechStack.jsx</span>
                </button>
              </div>

              {/* Explicit High-Contrast Code Editor Body */}
              <div className="p-4 font-mono text-xs overflow-x-auto min-h-[220px] bg-[#0d1117] text-slate-100 leading-relaxed">
                {activeTab === 'java' ? (
                  <div className="space-y-0.5">
                    <div className="text-slate-400 italic">// AatiffProfile.java</div>
                    <div><span className="text-pink-400 font-bold">package</span> <span className="text-slate-200">com.aatiff.engineer;</span></div>
                    <div className="h-2"></div>
                    <div><span className="text-pink-400 font-bold">public class</span> <span className="text-amber-300 font-extrabold">SoftwareEngineer</span> &#123;</div>
                    <div className="pl-4"><span className="text-pink-400 font-bold">public final</span> <span className="text-cyan-300 font-semibold">String</span> name = <span className="text-emerald-300 font-medium">"Aatiff Ahameed A."</span>;</div>
                    <div className="pl-4"><span className="text-pink-400 font-bold">public final</span> <span className="text-cyan-300 font-semibold">String</span> college = <span className="text-emerald-300 font-medium">"SKCET (CGPA 8.2 / 10)"</span>;</div>
                    <div className="h-2"></div>
                    <div className="pl-4 text-slate-400 italic">// Core Technical Focus</div>
                    <div className="pl-4"><span className="text-pink-400 font-bold">public final</span> <span className="text-cyan-300 font-semibold">String</span>[] coreStack = &#123;</div>
                    <div className="pl-8 text-emerald-300 font-medium">"Java (OOP, Concurrency, JDBC)",</div>
                    <div className="pl-8 text-emerald-300 font-medium">"MySQL & Relational Design",</div>
                    <div className="pl-8 text-emerald-300 font-medium">"React.js & State Architecture",</div>
                    <div className="pl-8 text-emerald-300 font-medium">"Data Structures & Algorithms"</div>
                    <div className="pl-4 text-slate-200">&#125;;</div>
                    <div className="h-2"></div>
                    <div className="pl-4"><span className="text-pink-400 font-bold">public boolean</span> <span className="text-amber-300 font-bold">isAvailableForRoles</span>() &#123;</div>
                    <div className="pl-8"><span className="text-pink-400 font-bold">return</span> <span className="text-cyan-300 font-bold">true</span>; <span className="text-slate-400 italic">// Open for SDE roles</span></div>
                    <div className="pl-4 text-slate-200">&#125;</div>
                    <div className="text-slate-200">&#125;</div>
                  </div>
                ) : (
                  <div className="space-y-0.5">
                    <div className="text-slate-400 italic">// TechStack.jsx</div>
                    <div><span className="text-pink-400 font-bold">import</span> <span className="text-slate-200">React</span> <span className="text-pink-400 font-bold">from</span> <span className="text-emerald-300">'react'</span>;</div>
                    <div className="h-2"></div>
                    <div><span className="text-pink-400 font-bold">export function</span> <span className="text-amber-300 font-extrabold">TechStack</span>() &#123;</div>
                    <div className="pl-4"><span className="text-pink-400 font-bold">const</span> principles = [</div>
                    <div className="pl-8 text-emerald-300 font-medium">"Clean Object-Oriented Architecture",</div>
                    <div className="pl-8 text-emerald-300 font-medium">"High-Performance Database Normalization",</div>
                    <div className="pl-8 text-emerald-300 font-medium">"Responsive, Accessible User Interfaces"</div>
                    <div className="pl-4">];</div>
                    <div className="h-2"></div>
                    <div className="pl-4"><span className="text-pink-400 font-bold">return</span> (</div>
                    <div className="pl-8 text-slate-200">&lt;<span className="text-cyan-300 font-bold">div</span> <span className="text-amber-300">className</span>=<span className="text-emerald-300">"engineer-summary"</span>&gt;</div>
                    <div className="pl-12 text-slate-100">&lt;<span className="text-cyan-300 font-bold">h1</span>&gt;Driven to craft maintainable software&lt;/<span className="text-cyan-300 font-bold">h1</span>&gt;</div>
                    <div className="pl-8 text-slate-200">&lt;/<span className="text-cyan-300 font-bold">div</span>&gt;</div>
                    <div className="pl-4">);</div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>

              {/* Terminal Log */}
              {runOutput && (
                <div className="px-3.5 py-2.5 bg-black/95 border-t border-slate-700 font-mono text-xs text-emerald-400 animate-fadeIn">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3 h-3 text-emerald-400" />
                    <span>TERMINAL OUTPUT</span>
                  </div>
                  <pre className="whitespace-pre-wrap text-emerald-300 font-medium">{runOutput}</pre>
                </div>
              )}

              {/* Status Bar */}
              <div className="px-3.5 py-1.5 bg-[#161b22] border-t border-slate-700 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Java 21 &bull; React 19 &bull; UTF-8</span>
                </span>
                <span className="text-slate-300 font-semibold">SKCET IT &bull; CGPA 8.2</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t-2 border-slate-200 dark:border-white/10">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-4 rounded-xl text-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white font-mono">
                {stat.value}<span className="text-indigo-600 dark:text-indigo-400 text-base font-bold">{stat.suffix}</span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-slate-100 mt-1">{stat.label}</div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-0.5">{stat.description}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
