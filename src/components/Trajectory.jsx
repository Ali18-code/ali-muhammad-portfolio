import React from 'react';
import PropTypes from 'prop-types';
import { portfolioData } from '../data/portfolioData';
import { Compass } from 'lucide-react';

/**
 * PhilosophyCard Component
 * Renders a single philosophy step card.
 *
 * @param {Object} props - Component props
 * @param {Object} props.item - Philosophy data object
 * @returns {React.ReactElement}
 */
const PhilosophyCard = ({ item }) => (
  <div className="p-4 rounded-lg border border-slate-800/90 bg-slate-900/40 hover:border-slate-700 transition-colors">
    <span className="font-mono text-xs text-indigo-400 font-bold">{item.step}</span>
    <h3 className="text-sm font-semibold text-slate-200 mt-1 mb-1">{item.title}</h3>
    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
  </div>
);

PhilosophyCard.propTypes = {
  item: PropTypes.shape({
    step: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * TrajectoryStage Component
 * Renders a single stage in the engineering trajectory timeline.
 *
 * @param {Object} props - Component props
 * @param {Object} props.stage - Stage data object
 * @returns {React.ReactElement}
 */
const TrajectoryStage = ({ stage }) => {
  const isFocus = stage.status === 'Active Focus';
  const isFoundation = stage.status === 'Strong Foundation';

  const markerColor = isFocus
    ? 'border-indigo-500 bg-indigo-950 shadow-[0_0_10px_#6366f1]'
    : isFoundation
    ? 'border-emerald-500 bg-emerald-950'
    : 'border-slate-700 bg-slate-900';

  const badgeColor = isFocus
    ? 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300'
    : isFoundation
    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
    : 'border-slate-700 bg-slate-800/50 text-slate-400';

  return (
    <div className="relative pl-6 md:pl-8 group">
      {/* Timeline marker */}
      <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${markerColor}`}></div>

      <div className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/50 group-hover:border-slate-700 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            {stage.stage}
          </h3>
          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${badgeColor}`}>
            {stage.status}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-400 mb-3 leading-relaxed">
          {stage.desc}
        </p>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-1.5">
          {stage.skills.map((skill, sIdx) => (
            <span key={sIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/60 border border-slate-800 text-slate-300">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

TrajectoryStage.propTypes = {
  stage: PropTypes.shape({
    stage: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

/**
 * Trajectory Section Component
 * Displays the user's philosophy and technical progression timeline.
 *
 * @returns {React.ReactElement}
 */
export default function Trajectory() {
  const { trajectory, philosophy } = portfolioData;

  return (
    <section id="trajectory" className="py-20 border-t border-slate-800/80 bg-[#090d16]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Compass size={14} aria-hidden="true" />
            Engineering Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How I Build & Learn
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl">
            A systematic roadmap from computer science fundamentals to autonomous AI systems. No shortcuts, no fake credentials.
          </p>
        </div>

        {/* Philosophy 4-Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {philosophy.map((item, i) => (
            <PhilosophyCard key={i} item={item} />
          ))}
        </div>

        {/* The 4-Stage Progression Timeline */}
        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-8">
          {trajectory.map((stage, i) => (
            <TrajectoryStage key={i} stage={stage} />
          ))}
        </div>

      </div>
    </section>
  );
}
