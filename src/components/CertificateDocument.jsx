import React, { useState } from 'react';
import { ExternalLink, Maximize2, X, ZoomIn, CheckCircle2 } from 'lucide-react';

export default function CertificateDocument({ cert }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
      {/* Action controls above certificate */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
          Official Credential
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1"
            title="Inspect original certificate in full resolution"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Enlarge</span>
          </button>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 transition-colors flex items-center gap-1"
            title="Verify on Coursera"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Verify</span>
          </a>
        </div>
      </div>

      {/* Original Coursera Certificate Image Displayed Directly Under Course */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group relative rounded-md border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 overflow-hidden cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 transition-all"
        title="Click to view full-resolution original certificate"
      >
        <div className="relative aspect-[16/11.5] w-full overflow-hidden bg-slate-200 dark:bg-slate-900 flex items-center justify-center">
          <img
            src={cert.image}
            alt={`${cert.title} - Official Coursera Certificate for ${cert.issuedTo}`}
            className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-200"
            loading="lazy"
          />

          {/* Subtle Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-xs font-medium">
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Click to View Full Resolution</span>
          </div>
        </div>

        {/* Certificate Metadata strip below image */}
        <div className="p-2 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verified</span>
          </span>
          <span>
            ID: {cert.credentialId}
          </span>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Inspection */}
      {isModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl p-4 sm:p-5 flex flex-col max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {cert.issuer}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Credential ID: <strong className="text-slate-800 dark:text-slate-200">{cert.credentialId}</strong>
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-medium px-3 py-1.5 rounded bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify on Coursera</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Image */}
            <div className="overflow-auto rounded border border-slate-200 dark:border-slate-800 bg-slate-950 flex items-center justify-center p-2">
              <img
                src={cert.image}
                alt={`${cert.title} Original Certificate`}
                className="max-h-[65vh] w-auto object-contain rounded"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>Recipient: <strong className="text-slate-800 dark:text-slate-200">{cert.issuedTo}</strong></span>
              <span>Issued by {cert.issuer} via Coursera</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
