import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { openGmailCompose } from '../utils/mailHelper';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#080b11] transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-[11px]">
              AA
            </span>
            <div>
              <div className="font-semibold text-xs text-slate-900 dark:text-white">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                B.Tech IT &bull; SKCET Coimbatore (CGPA 8.2)
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">Education & Certs</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back To Top */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => openGmailCompose()}
              className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="Email (aatiffahameed@gmail.com)"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${personalInfo.cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-1 p-1.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              title="Scroll to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-strip */}
        <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
          <div>
            &copy; {new Date().getFullYear()} Aatiff Ahameed A.
          </div>
          <div>
            React &bull; Tailwind CSS &bull; GSAP
          </div>
        </div>

      </div>
    </footer>
  );
}
