import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Database, 
  Atom, 
  Globe, 
  Palette, 
  Sparkles, 
  GitBranch, 
  Code, 
  Cpu, 
  Zap, 
  Layers, 
  Network, 
  Boxes, 
  Trophy, 
  Coffee, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const iconComponents = {
    Coffee,
    Code2,
    Database,
    Terminal,
    Atom,
    Globe,
    Palette,
    Sparkles,
    GitBranch,
    Github: GithubIcon,
    Code,
    Cpu,
    Zap,
    Layers,
    Network,
    Boxes,
    Trophy,
  };

  const tabs = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Core Languages' },
    { id: 'web', label: 'Web Development' },
    { id: 'database-tools', label: 'DB & Tools' },
    { id: 'learning', label: 'Currently Learning' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return skillsData.categories.flatMap(category => 
        category.skills.map(skill => ({ ...skill, categoryTitle: category.title }))
      );
    }
    const cat = skillsData.categories.find(c => c.id === activeTab);
    return cat ? cat.skills.map(skill => ({ ...skill, categoryTitle: cat.title })) : [];
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Skills & <span className="text-indigo-600 dark:text-indigo-400">Stack</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-2 font-medium">
            Languages, frameworks, database systems, and developer tools applied across software implementations.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all shadow-xs ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-2 border-slate-300 dark:border-white/10 hover:border-indigo-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {getFilteredSkills().map((skill, index) => {
            const Icon = iconComponents[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-4 rounded-xl flex flex-col justify-between shadow-xs hover:border-indigo-500 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-white/5 font-bold">
                      <Icon className="w-4 h-4" />
                    </div>
                    
                    {/* Level Proficiency Box - High Contrast in Light Mode */}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold bg-indigo-100 text-indigo-900 border border-indigo-300 dark:bg-indigo-950/80 dark:text-indigo-300 dark:border-indigo-800 shadow-xs">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-slate-950 dark:text-white">
                    {skill.name}
                  </h3>
                  
                  <p className="text-[11px] text-slate-700 dark:text-slate-300 mt-1 font-mono font-medium">
                    {skill.highlight}
                  </p>
                </div>

                {/* Progress Bar & Percentage */}
                <div className="mt-4 pt-2.5 border-t border-slate-200 dark:border-white/10">
                  <div className="flex justify-between items-center text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200 mb-1">
                    <span>Proficiency</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">{skill.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-indigo-600 dark:bg-indigo-500"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Continuous Growth */}
        <div className="mt-10 bg-white dark:bg-slate-900/80 border-2 border-indigo-200 dark:border-indigo-900/40 p-5 sm:p-6 rounded-xl shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-950 dark:text-white">Continuous Growth & Emerging Horizons</h4>
                <p className="text-xs text-slate-800 dark:text-slate-200 mt-0.5 leading-relaxed font-normal">
                  Deepening capabilities: <span className="font-extrabold text-slate-950 dark:text-white">Advanced Java & Concurrency</span>, <span className="font-extrabold text-slate-950 dark:text-white">Spring Boot Microservices</span>, <span className="font-extrabold text-slate-950 dark:text-white">Machine Learning</span>, and <span className="font-extrabold text-slate-950 dark:text-white">System Design Fundamentals</span>.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shrink-0 shadow-sm"
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
