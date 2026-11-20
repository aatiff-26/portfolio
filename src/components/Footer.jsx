import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { openGmailCompose } from '../utils/mailHelper';
import { 
  ArrowUp, 
  Mail, 
  Terminal, 
  Heart 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#090d16] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-sm">
              AA
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 dark:text-white">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                B.Tech IT &bull; SKCET Coimbatore (CGPA 8.2)
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400">
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
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white glass-pill transition-colors"
              title="Open Gmail (aatiffahameed@gmail.com)"
            >
              <Mail className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${personalInfo.cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 glass-pill transition-colors"
              title="Chat on WhatsApp (+91 9150383338)"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white glass-pill transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 glass-pill transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-900 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-strip */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono gap-2">
          <div>
            &copy; {new Date().getFullYear()} Aatiff Ahameed A. &bull; All Rights Reserved.
          </div>
          <div>
            React 19 &bull; Tailwind CSS &bull; GSAP Animations &bull; Professional UI
          </div>
        </div>
      </div>
    </footer>
  );
}
