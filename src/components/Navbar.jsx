import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { openGmailCompose } from '../utils/mailHelper';
import { 
  Menu, 
  X, 
  Mail, 
  Sun, 
  Moon 
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 pt-4">
      {/* Navbar Container with Strong Light Mode Visibility */}
      <div 
        className={`max-w-6xl mx-auto rounded-xl transition-all duration-300 ${
          scrolled 
            ? 'bg-white border-2 border-slate-300 shadow-xl shadow-slate-300/40 dark:bg-slate-900/90 dark:border-white/15 dark:shadow-2xl py-2.5 px-5' 
            : 'bg-white/95 border-2 border-slate-300 shadow-lg shadow-slate-200/60 dark:bg-slate-900/80 dark:border-white/10 py-3 px-5 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              AA
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight text-slate-950 dark:text-white flex items-center gap-1.5">
                <span>Aatiff Ahameed</span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  IT
                </span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-mono font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>Available for Opportunities</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-lg border border-slate-300 dark:border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 rounded-md transition-all shadow-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-white/10 transition-all shadow-xs"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/${personalInfo.cleanPhone}?text=Hi%20Aatiff,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Gmail Action */}
            <button
              onClick={() => openGmailCompose()}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-sm transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-white/10"
              title="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-300 dark:border-white/10 flex flex-col gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors font-semibold"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-300 dark:border-white/10 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openGmailCompose();
                }}
                className="flex-1 py-2 rounded-lg text-xs font-semibold text-center text-white bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Aatiff</span>
              </button>
              <a
                href={`https://wa.me/${personalInfo.cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg text-xs font-semibold text-center text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
