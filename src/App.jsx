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
    <div className="min-h-screen relative font-sans transition-colors duration-300">
      
      {/* Background Architectural Canvas */}
      <div className="fixed inset-0 executive-canvas pointer-events-none -z-10"></div>

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

      {/* Floating Action Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full glass-card shadow-md text-slate-800 dark:text-slate-200 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
        </button>

        <a
          href={`https://wa.me/${personalInfo.cleanPhone}?text=Hi%20Aatiff,%20I%20saw%20your%20portfolio!`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4" />
        </a>

        <button
          onClick={() => openGmailCompose()}
          className="w-10 h-10 rounded-full bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
          title="Open in Gmail (aatiffahameed@gmail.com)"
        >
          <Mail className="w-4 h-4" />
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
