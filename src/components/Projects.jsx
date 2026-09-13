import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, Code2, Terminal } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { projects } = portfolioData;

  const categories = ['All', 'Machine Learning / NLP', 'Systems & DSA', 'Full-Stack Enterprise'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(selectedCategory) || (selectedCategory === 'Machine Learning / NLP' && p.category.includes('Computer Vision')));

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Code2 size={14} />
              Proof of Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects & Case Studies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
              Authentic systems built with verifiable source code, technical trade-offs, and error analysis.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-3 py-1.5 rounded-md border transition-all ${
                  selectedCategory === cat
                    ? 'border-indigo-500 bg-indigo-500/15 text-indigo-300 shadow-[0_0_12px_rgba(99,102,241,0.25)]'
                    : 'border-slate-800/90 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              scale={1.01}
              transitionSpeed={2000}
              className="group"
            >
              <div
                className="p-6 rounded-xl border border-slate-800/90 bg-slate-900/40 hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:bg-slate-900/80 transition-all h-full flex flex-col"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                        {project.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-3 self-start relative z-10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border border-slate-700/80 bg-slate-800/60 hover:bg-indigo-500 hover:text-white text-slate-200 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all"
                      >
                        <Github size={14} />
                        Code Repository
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture & Engineering Highlights */}
                <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800/70 mb-4 flex-grow">
                  <div className="text-xs font-mono text-indigo-400 font-semibold mb-2.5 flex items-center gap-1.5">
                    <Terminal size={13} />
                    Key Engineering Decisions & Implementation:
                  </div>
                  <ul className="space-y-1.5">
                    {project.architecture.map((arch, idx) => (
                      <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">▹</span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/50 text-slate-400 border border-slate-800 group-hover:border-indigo-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Status: <span className="text-indigo-400">{project.status}</span>
                  </span>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}
