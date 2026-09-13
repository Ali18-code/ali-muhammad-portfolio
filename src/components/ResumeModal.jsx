import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, FileText, Mail, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { personal } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-xl border border-slate-700 bg-[#0e1424] p-6 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Curriculum Vitae / Resume</h3>
            <p className="text-xs text-slate-400">Ali Muhammad Panhwar</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 space-y-2.5 mb-5 leading-relaxed">
          <p>
            <strong className="text-indigo-300">Status:</strong> Resume is currently being synchronized with recent AI/ML project milestones at Arch Technologies.
          </p>
          <p className="text-slate-400">
            To receive the latest PDF copy immediately, feel free to request it via email or connect directly on LinkedIn.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5">
          <a
            href={`mailto:${personal.email}?subject=Resume Request - Ali Muhammad Panhwar`}
            className="w-full py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(99,102,241,0.25)]"
          >
            <Mail size={14} />
            Request Resume via Email
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2 px-4 rounded-md border border-slate-700 hover:border-slate-500 bg-slate-900 text-slate-200 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
          >
            <ExternalLink size={14} />
            View Experience on LinkedIn
          </a>
        </div>

      </div>
    </div>
  );
}
