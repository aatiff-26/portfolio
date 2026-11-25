import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { openGmailCompose } from '../utils/mailHelper';
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
    <section id="contact" className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
            05 &mdash; Contact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            Interested in software engineering roles, internships, or technical collaborations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Gmail Card */}
            <div className="p-5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white break-all">
                {personalInfo.email}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Direct inquiries and development opportunities.
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openGmailCompose()}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                </button>
                <a
                  href={`mailto:${personalInfo.email}?subject=Opportunity%20/%20Inquiry%20for%20Aatiff&body=Hi%20Aatiff,`}
                  className="py-2 px-3 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-1"
                  title="Open Default Mail App"
                >
                  <span>Mail App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Primary WhatsApp Card */}
            <div className="p-5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  WhatsApp
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                {personalInfo.phone}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Direct messaging and quick communication.
              </p>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-2 px-3 rounded-lg text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-colors flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp (+91 9150383338)</span>
              </a>
            </div>

            {/* Location & Social Profiles */}
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Standard IST Working Hours</span>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1 px-2 rounded bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <LinkedinIcon className="w-3 h-3 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1 px-2 rounded bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <GithubIcon className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Note Composer */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Send a Message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Compose a quick note and choose whether to dispatch it via Gmail Web or WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSendGmail} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Recruiter / Engineering Manager"
                    className="w-full px-3 py-2 rounded text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject or Inquiry
                  </label>
                  <input
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="e.g. Software Development Role / Discussion"
                    className="w-full px-3 py-2 rounded text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="Hi Aatiff, I saw your portfolio and would like to discuss..."
                    className="w-full px-3 py-2 rounded text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 resize-none focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="py-2 px-3 rounded bg-slate-50 dark:bg-slate-800/40 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span>To: aatiffahameed@gmail.com</span>
                  <span>WhatsApp: +91 9150383338</span>
                </div>

                {/* Dispatch Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="submit"
                    className="py-2 px-3 rounded text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Gmail Web</span>
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800/80 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
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
