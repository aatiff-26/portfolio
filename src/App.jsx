import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo } from './data/portfolioData';
import { openGmailCompose } from './utils/mailHelper';
import { Mail, Sun, Moon } from 'lucide-react';
import { WhatsAppIcon } from './components/Icons';

function PortfolioContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen relative font-sans transition-colors duration-200">
      
      {/* Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Quick Controls */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </button>

        <a
          href={`https://wa.me/${personalInfo.cleanPhone}?text=Hi%20Aatiff,%20I%20saw%20your%20portfolio!`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-sm transition-colors"
          title="Chat on WhatsApp (+91 9150383338)"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={() => openGmailCompose()}
          className="w-9 h-9 rounded-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white flex items-center justify-center shadow-sm transition-colors"
          title="Send Email (aatiffahameed@gmail.com)"
          aria-label="Email"
        >
          <Mail className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
