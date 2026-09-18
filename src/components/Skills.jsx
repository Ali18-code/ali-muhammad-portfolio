import React from 'react';
import PropTypes from 'prop-types';
import { portfolioData } from '../data/portfolioData';
import { Wrench, Terminal, Cpu } from 'lucide-react';

/**
 * SkillCategory Component
 * Renders a single column card containing a category of technical skills.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the category
 * @param {React.ElementType} props.icon - The Lucide icon to display next to the title
 * @param {Array} props.items - List of skill objects
 * @param {string} props.badgeColor - Tailwind classes for the skill level badge
 * @returns {React.ReactElement}
 */
const SkillCategory = ({ title, icon: IconComponent, items, badgeColor }) => (
  <div className="p-5 rounded-xl border border-slate-800/90 bg-slate-900/40 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
        <IconComponent size={16} className="text-indigo-400" aria-hidden="true" />
        <h3 className="text-sm font-bold text-slate-200">{title}</h3>
      </div>

      <div className="space-y-3.5">
        {items.map((skill, sIdx) => (
          <div key={sIdx} className="group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors">
                {skill.name}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${badgeColor}`}>
                {skill.level}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              {skill.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

SkillCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ).isRequired,
  badgeColor: PropTypes.string.isRequired,
};

/**
 * Skills Section Component
 * Displays the user's technical competencies in an organized grid layout.
 *
 * @returns {React.ReactElement}
 */
export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Core Systems & Algorithms",
      icon: Terminal,
      items: skills.core,
      badgeColor: "border-slate-700 bg-slate-800/60 text-slate-300"
    },
    {
      title: "Machine Learning & AI Foundations",
      icon: Cpu,
      items: skills.aiMl,
      badgeColor: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300"
    },
    {
      title: "Engineering Tools & Web Technologies",
      icon: Wrench,
      items: skills.tools,
      badgeColor: "border-purple-500/40 bg-purple-500/10 text-purple-300"
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#090d16]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Wrench size={14} aria-hidden="true" />
            Technical Toolkit
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Verified Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
            Honest assessments based on code written and systems deployed — no artificial percentage bars.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <SkillCategory 
              key={idx}
              title={cat.title}
              icon={cat.icon}
              items={cat.items}
              badgeColor={cat.badgeColor}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
