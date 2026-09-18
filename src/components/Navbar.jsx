import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, FileText } from 'lucide-react';

/**
 * Navbar Component
 * 
 * Provides responsive top-level navigation, displaying brand info and
 * navigational anchors. Includes a mobile drawer menu and a Resume trigger.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onResumeClick - Callback triggered when the Resume button is clicked
 * @returns {React.ReactElement} The fixed navigation header
 */
export default function Navbar({ onResumeClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = portfolioData;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Trajectory', href: '#trajectory' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" aria-label="Go to top" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] animate-pulse"></span>
          <span className="font-mono text-sm tracking-wide text-slate-200 group-hover:text-indigo-400 transition-colors">
            ali.panhwar<span className="text-indigo-400 font-bold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-400 hover:text-indigo-300 focus:outline-none focus:text-indigo-300 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onResumeClick}
            aria-label="Open Resume"
            className="flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-md border border-slate-700/80 bg-slate-900/60 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-sm"
          >
            <FileText size={13} aria-hidden="true" className="text-indigo-400" />
            Resume
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onResumeClick}
            aria-label="Open CV"
            className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded border border-slate-800 bg-slate-900 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <FileText size={12} aria-hidden="true" className="text-indigo-400" />
            CV
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-slate-300 hover:text-indigo-400 focus:outline-none focus:text-indigo-400 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

Navbar.propTypes = {
  onResumeClick: PropTypes.func.isRequired,
};
