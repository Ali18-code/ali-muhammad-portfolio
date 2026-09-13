import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, FileText } from 'lucide-react';

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
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] animate-pulse"></span>
          <span className="font-mono text-sm tracking-wide text-slate-200 group-hover:text-indigo-400 transition-colors">
            ali.panhwar<span className="text-indigo-400 font-bold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-400 hover:text-indigo-300 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onResumeClick}
            className="flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1.5 rounded-md border border-slate-700/80 bg-slate-900/60 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-300 transition-all shadow-sm"
          >
            <FileText size={13} className="text-indigo-400" />
            Resume
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onResumeClick}
            className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded border border-slate-800 bg-slate-900 text-slate-300"
          >
            <FileText size={12} className="text-indigo-400" />
            CV
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
              className="block text-sm text-slate-300 hover:text-indigo-400 py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
