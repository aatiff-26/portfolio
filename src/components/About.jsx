import React from 'react';
import { 
  personalInfo, 
  strengths, 
  spokenLanguages, 
  coursework, 
  education 
} from '../data/portfolioData';
import { 
  GraduationCap, 
  BookOpen, 
  Languages, 
  Briefcase,
  CheckCircle2,
  Target
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            01 &mdash; Background & Direction
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Narrative & Objective */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Summary */}
            <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {personalInfo.summary}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                My academic journey emphasizes strong core principles: modular software design, relational database schemas, and writing maintainable code that can scale.
              </p>
            </div>

            {/* Career Objective */}
            <div className="p-4 sm:p-5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>Career Objective</span>
              </div>
              <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Core Working Strengths */}
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Approach to Software Development
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {strengths.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40"
                  >
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 pl-5">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education & Coursework Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Credential Card */}
            <div className="p-5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">Undergraduate Degree</span>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                  CGPA 8.2 / 10
                </span>
              </div>

              <div>
                <div className="font-semibold text-sm text-slate-900 dark:text-white">
                  {education.degree}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                  {education.institution}
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                  {education.period} &bull; {education.location}
                </div>
              </div>
            </div>

            {/* Coursework Directory */}
            <div className="p-5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">
                <BookOpen className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <h3 className="text-xs font-semibold text-slate-900 dark:text-white">
                  Core Academic Coursework
                </h3>
              </div>

              <div className="space-y-2">
                {coursework.map((course, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 text-xs pb-2 border-b border-slate-100 dark:border-slate-800/60 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                      {course.code}
                    </span>
                    <div>
                      <div className="font-medium text-slate-800 dark:text-slate-200">
                        {course.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal">
                        {course.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-900 dark:text-white">
                <Languages className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                <span>Languages</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {spokenLanguages.map((lang, idx) => (
                  <div key={idx} className="p-2 rounded bg-slate-50 dark:bg-slate-800/50">
                    <div className="font-medium text-slate-800 dark:text-slate-200">
                      {lang.flag} {lang.name}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {lang.proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
