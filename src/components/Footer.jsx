import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-800/80 bg-[#060910] text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="font-mono text-slate-400 font-semibold">{personal.name}</span>
          <span>•</span>
          <span>Air University BS CS (2024–2028)</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
