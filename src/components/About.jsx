import React from 'react';
import { 
  personalInfo, 
  strengths, 
  spokenLanguages, 
  coursework, 
  education 
} from '../data/portfolioData';
import { 
  Brain, 
  Rocket, 
  Target, 
  ShieldCheck, 
  Compass, 
  GraduationCap, 
  BookOpen, 
  Languages, 
  Briefcase, 
  FileText
} from 'lucide-react';

export default function About() {
  const iconMap = {
    Brain: Brain,
    Rocket: Rocket,
    Target: Target,
    ShieldCheck: ShieldCheck,
    Compass: Compass,
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>BACKGROUND & CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-2 font-medium">
            Information Technology undergraduate focused on building reliable, maintainable software and strengthening algorithmic capabilities.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Professional Summary Card */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-6 sm:p-7 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">Professional Summary</h3>
              </div>

              <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-sm mb-5 font-normal">
                {personalInfo.summary}
              </p>
            </div>

            {/* Career Objective Section - Distinctly Visible in Light Mode */}
            <div className="p-4 rounded-xl bg-indigo-50 border-2 border-indigo-200 dark:bg-slate-950 dark:border-indigo-900/60 shadow-xs">
              <div className="text-xs font-mono uppercase text-indigo-700 dark:text-indigo-400 font-bold mb-1.5 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-indigo-700 dark:text-indigo-400" />
                <span>Career Objective</span>
              </div>
              <p className="text-slate-900 dark:text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">
                {personalInfo.careerObjective}
              </p>
            </div>
          </div>

          {/* Education & Languages Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Education Highlight */}
            <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-5 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-black text-slate-950 dark:text-white">Education</h4>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800">
                  CGPA 8.2 / 10
                </span>
              </div>

              <div className="mt-2 text-xs sm:text-sm">
                <div className="font-bold text-slate-950 dark:text-slate-100">{education.degree}</div>
                <div className="text-slate-700 dark:text-slate-300 text-xs mt-0.5 font-medium">{education.institution}</div>
                <div className="text-slate-600 dark:text-slate-400 text-[11px] font-mono mt-1 font-semibold">{education.period} &bull; {education.location}</div>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-5 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                  <Languages className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-black text-slate-950 dark:text-white">Languages</h4>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                {spokenLanguages.map((lang, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10">
                    <div className="text-lg">{lang.flag}</div>
                    <div className="text-xs font-bold text-slate-950 dark:text-slate-100">{lang.name}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Core Strengths Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Core Strengths & Problem-Solving Approach
            </h3>
            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mt-0.5 font-medium">
              Disciplined problem-solving traits applied to every development project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {strengths.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Brain;
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-4 rounded-xl flex flex-col justify-between shadow-xs hover:border-indigo-500 transition-colors"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-700 dark:text-slate-400 mt-1.5 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Relevant Academic Coursework - Distinctly Visible Boxes in Light Mode */}
        <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-6 sm:p-7 rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-base font-black text-slate-950 dark:text-white">Relevant Academic Coursework</h3>
            </div>
            <span className="text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-400">SKCET IT Department</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coursework.map((course, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-white/10 flex items-start gap-3 shadow-xs hover:border-indigo-500 transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                  {course.code}
                </span>
                <div>
                  <div className="text-xs font-black text-slate-950 dark:text-slate-100">{course.name}</div>
                  <div className="text-[11px] text-slate-700 dark:text-slate-400 mt-0.5 font-medium">{course.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
