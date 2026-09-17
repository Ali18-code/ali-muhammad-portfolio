import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Footer Component
 * 
 * Displays the bottom navigation bar including dynamic personal branding,
 * social links mapped from global data, and a smooth-scroll back-to-top action.
 * Refactored for better accessibility (aria-labels) and theme consistency.
 * 
 * @returns {React.ReactElement} The rendered footer layout
 */
export default function Footer() {
  const { personal } = portfolioData;

  /**
   * Smoothly scrolls the window back to the top of the document.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-800/80 bg-[#060910] text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Branding & Academic Timeline */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-slate-400 font-semibold tracking-wide">
            {personal.name}
          </span>
          <span aria-hidden="true">•</span>
          <span>Air University BS CS (2024–2028)</span>
        </div>

        {/* Social Navigation & Actions */}
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${personal.name}'s GitHub Profile`}
            className="hover:text-indigo-400 focus:text-indigo-400 focus:outline-none transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${personal.name}'s LinkedIn Profile`}
            className="hover:text-indigo-400 focus:text-indigo-400 focus:outline-none transition-colors"
          >
            LinkedIn
          </a>
          
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-md border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
            aria-label="Scroll back to top"
            title="Scroll back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
