import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { openGmailCompose, openDefaultMailto } from '../utils/mailHelper';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Custom message composer state
  const [senderName, setSenderName] = useState('');
  const [senderSubject, setSenderSubject] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendGmail = (e) => {
    e.preventDefault();
    const subject = senderSubject || 'Opportunity / Discussion with Aatiff Ahameed';
    const body = senderMessage 
      ? `Hi Aatiff,\n\n${senderMessage}\n\nBest regards,\n${senderName || 'A portfolio visitor'}`
      : `Hi Aatiff,\n\nI reviewed your portfolio and would like to connect.\n\nBest regards,\n${senderName || 'A portfolio visitor'}`;
    openGmailCompose(subject, body);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      senderMessage 
        ? `Hi Aatiff, my name is ${senderName || 'a recruiter/collaborator'}. ${senderMessage}`
        : `Hi Aatiff, I saw your portfolio and would like to chat with you about an opportunity!`
    );
    return `https://wa.me/${personalInfo.cleanPhone}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
            Contact <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mt-2 font-medium">
            Interested in discussing software engineering opportunities, internships, or technical collaborations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Action Buttons & Information Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Gmail Card */}
            <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-6 rounded-xl border-l-4 border-l-indigo-600 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-white/10 hover:bg-slate-200 transition-colors flex items-center gap-1 shadow-xs"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono uppercase text-indigo-700 dark:text-indigo-400 font-bold mb-0.5">Gmail Contact</div>
              <div className="text-base sm:text-lg font-black text-slate-950 dark:text-white break-all">{personalInfo.email}</div>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-medium">Direct inquiries, opportunities, and discussions.</p>

              {/* Explicit User Request: Gmail Navigation Button */}
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => openGmailCompose()}
                  className="flex-1 py-2.5 px-4 rounded-lg font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-white" />
                  <span>Open in Gmail (aatiffahameed@gmail.com)</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}?subject=Opportunity%20/%20Inquiry%20for%20Aatiff&body=Hi%20Aatiff,`}
                  className="py-2.5 px-3 rounded-lg font-bold text-xs text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-white/10 transition-colors flex items-center justify-center gap-1 shadow-xs"
                  title="Open in Desktop Mail App"
                >
                  <span>Mail App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Primary WhatsApp Card */}
            <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-6 rounded-xl border-l-4 border-l-emerald-500 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-white/10 hover:bg-slate-200 transition-colors flex items-center gap-1 shadow-xs"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold mb-0.5">WhatsApp Chat</div>
              <div className="text-base sm:text-lg font-black text-slate-950 dark:text-white">{personalInfo.phone}</div>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 font-medium">Instant messaging & direct technical chat.</p>

              {/* Explicit User Request: WhatsApp Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2.5 px-4 rounded-lg font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp (+91 9150383338)</span>
              </a>
            </div>

            {/* Details & Socials */}
            <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-5 rounded-xl space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-300 font-medium">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-800 dark:text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Typically responds within a few hours (IST)</span>
              </div>

              <div className="pt-2 border-t border-slate-300 dark:border-white/10 flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-xs font-bold text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-xs font-bold text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-950 dark:text-slate-100" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Note Composer */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900/80 border-2 border-slate-300 dark:border-white/10 p-6 sm:p-7 rounded-xl shadow-sm">
              <div className="mb-5">
                <h3 className="text-lg font-black text-slate-950 dark:text-white">Quick Note Composer</h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 font-medium">
                  Type your message below and choose to launch it directly into Gmail or WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSendGmail} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-mono text-slate-900 dark:text-slate-300 uppercase tracking-wide mb-1 font-bold">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Recruiter / Engineering Manager"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-white/20 text-slate-950 dark:text-white placeholder-slate-500 text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-900 dark:text-slate-300 uppercase tracking-wide mb-1 font-bold">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. Software Development Opportunity / Project Inquiry"
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-white/20 text-slate-950 dark:text-white placeholder-slate-500 text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-900 dark:text-slate-300 uppercase tracking-wide mb-1 font-bold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Hi Aatiff, I saw your portfolio and would like to connect regarding..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-white/20 text-slate-950 dark:text-white placeholder-slate-500 text-xs sm:text-sm font-medium resize-none focus:outline-none focus:border-indigo-600"
                  ></textarea>
                </div>

                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-slate-950 border-2 border-indigo-200 dark:border-white/10 font-mono text-[11px] font-bold text-slate-800 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-xs">
                  <span>To: aatiffahameed@gmail.com</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-extrabold">WhatsApp: +91 9150383338</span>
                </div>

                {/* Dispatch Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-white" />
                    <span>Send via Gmail Web</span>
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
