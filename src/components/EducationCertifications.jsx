import React from 'react';
import { education, certifications } from '../data/portfolioData';
import CertificateDocument from './CertificateDocument';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            04 &mdash; Education & Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Background & Certifications
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Degree coursework at SKCET and industry credentials verified by NVIDIA, Meta, and Microsoft on Coursera.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-5 sm:p-6 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  B.Tech Undergraduate
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {education.period}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {education.location}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {education.degree}
              </h3>
              
              <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                {education.institution}
              </div>

              <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                {education.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 select-none">&bull;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Score Box */}
            <div className="md:col-span-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                Cumulative CGPA
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white font-mono">
                8.2 <span className="text-sm font-normal text-slate-500">/ 10</span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Department of Information Technology
              </div>
            </div>

          </div>
        </div>

        {/* Verified Coursera Certifications Subsection */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Verified Course Certifications
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Official certificates earned through Coursera, displayed directly below.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              3 Verified
            </span>
          </div>

          {/* Cards with Original Coursera Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="p-5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                      Verified
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {cert.title}
                  </h4>
                  
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Display Original Certificate Image Directly Under Course */}
                <CertificateDocument cert={cert} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
