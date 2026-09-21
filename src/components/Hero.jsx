import React from 'react';
import PropTypes from 'prop-types';
import { portfolioData } from '../data/portfolioData';
import { Github, Linkedin, Code2, Cpu } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

/**
 * StatCard Component
 * Displays a single statistic or proof point in the hero section.
 *
 * @param {Object} props - Component props
 * @param {Object} props.stat - Stat object containing label and value
 * @returns {React.ReactElement}
 */
const StatCard = ({ stat }) => (
  <div className="p-3.5 rounded-lg border border-slate-800/90 bg-slate-900/50 backdrop-blur-sm">
    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{stat.label}</div>
    <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">{stat.value}</div>
  </div>
);

StatCard.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Hero Section Component
 * The main landing view of the portfolio.
 *
 * @param {Object} props - Component props
 * @param {Function} [props.onResumeClick] - Optional callback for resume click
 * @returns {React.ReactElement}
 */
export default function Hero({ onResumeClick }) {
  const { personal, stats } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Linear Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          <div className="flex-1 order-2 md:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* Main Title & Role */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Ali Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-slate-200">Panhwar</span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-lg sm:text-xl text-slate-300 font-medium mb-6">
              <span className="text-indigo-400 font-mono flex items-center gap-1.5">
                <Cpu size={18} aria-hidden="true" />
                {personal.title}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{personal.subTitle}</span>
            </div>

            {/* Narrative / Mission Statement */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
              Building practical software systems with strong engineering foundations in <span className="text-slate-200 font-medium">C++, DSA, Java, and SQL</span>, actively advancing through applied <span className="text-indigo-300 font-medium">Machine Learning & NLP</span> toward autonomous AI systems.
            </p>

            {/* Key Verification Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mb-10">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center gap-2"
              >
                <Code2 size={16} aria-hidden="true" />
                Explore Projects
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-md border border-slate-700/80 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/60 text-slate-300 hover:text-white font-mono text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Github size={16} aria-hidden="true" />
                GitHub Profile
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-md border border-slate-700/80 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/60 text-slate-300 hover:text-white font-mono text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          {personal.avatarUrl && (
            <Tilt 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              scale={1.05} 
              transitionSpeed={2500} 
              className="shrink-0 relative order-1 md:order-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto md:ml-auto"
            >
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <img 
                src={personal.avatarUrl} 
                alt={personal.name} 
                className="relative z-10 w-full h-full object-cover rounded-full border-2 border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-500"
              />
            </Tilt>
          )}
        </div>
      </div>
    </section>
  );
}
