import React from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Terminal, 
  Database, 
  Atom, 
  Globe, 
  Palette, 
  GitBranch, 
  Code, 
  Cpu, 
  Layers, 
  Coffee 
} from 'lucide-react';

export default function Skills() {
  const iconMap = {
    Coffee,
    Database,
    Terminal,
    Atom,
    Globe,
    Palette,
    GitBranch,
    Code,
    Cpu,
    Layers,
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            02 &mdash; Technical Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Technologies practiced through academic coursework and practical project engineering.
          </p>
        </div>

        {/* Clean, Intentional Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {skillsData.map((category, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {category.category}
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  {category.items.length} items
                </span>
              </div>

              {/* Skill Items */}
              <div className="space-y-2.5">
                {category.items.map((item, itemIdx) => {
                  const Icon = iconMap[item.icon] || Code;
                  return (
                    <div 
                      key={itemIdx}
                      className="p-2.5 rounded-md bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-slate-900 dark:text-white truncate">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                            {item.note}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
