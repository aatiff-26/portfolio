import React from 'react';
import confetti from 'canvas-confetti';
import { education, certifications } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export default function EducationCertifications() {
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#4f46e5', '#10b981', '#f59e0b']
      });
    } catch (e) {
      // fallback safe
    }
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Education & <span className="text-indigo-600 dark:text-indigo-400">Certifications</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-2 font-medium">
            Formal undergraduate engineering curriculum supported by verified technical certifications.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-6 sm:p-8 rounded-xl mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-100 text-indigo-900 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 flex items-center gap-1.5 shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-700 dark:text-indigo-400" />
                  Undergraduate Degree
                </span>
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </span>
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                {education.degree}
              </h3>
              
              <h4 className="text-sm sm:text-base font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                {education.institution}
              </h4>

              <div className="mt-4 space-y-2">
                {education.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Score Box - Highly Visible & Distinct in Light Mode */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-indigo-50 border-2 border-indigo-200 dark:bg-slate-950 dark:border-indigo-900/60 text-center shadow-xs">
              <div className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-1">
                Cumulative Grade
              </div>
              <div className="text-5xl font-black text-slate-950 dark:text-white font-mono">
                8.2 <span className="text-sm text-slate-600 dark:text-slate-400 font-bold">/ 10</span>
              </div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-300 mt-1">
                CGPA across semesters
              </div>
              <div className="mt-3 text-[11px] font-mono font-bold text-emerald-900 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800 shadow-xs">
                Strong Academic Standing
              </div>
            </div>

          </div>
        </div>

        {/* Verified Coursera Certifications Subsection */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg font-black text-slate-950 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Verified Coursera Certifications
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 font-medium">
                Official share credentials verifying coursework completion and technical competency.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 self-start sm:self-auto bg-indigo-100 dark:bg-indigo-950/80 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
              3 Verified Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-5 rounded-xl flex flex-col justify-between shadow-xs hover:border-indigo-500 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800">
                      Verified
                    </span>
                  </div>

                  <h4 className="text-sm font-black text-slate-950 dark:text-white">
                    {cert.title}
                  </h4>
                  
                  <div className="text-xs text-indigo-700 dark:text-indigo-400 font-bold mt-0.5">
                    {cert.issuer} &bull; {cert.domain}
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {cert.description}
                  </p>

                  {/* Share ID Box & Content - High Contrast in Light Mode */}
                  <div className="mt-3.5 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-950 border-2 border-slate-300 dark:border-white/10 font-mono text-[11px] text-slate-900 dark:text-slate-200 break-all shadow-xs">
                    <span className="block text-indigo-700 dark:text-indigo-400 font-bold mb-0.5">Share ID:</span>
                    <span className="font-semibold">{cert.code}</span>
                  </div>
                </div>

                {/* Verify Coursera Credentials Button - Prominent in Light Mode */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={triggerConfetti}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-center text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-md flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Verify Credential on Coursera</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
