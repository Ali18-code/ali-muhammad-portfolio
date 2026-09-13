import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Briefcase size={14} />
            Background & Education
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Experience & Academic Foundation
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
            Real industry practice coupled with structured computer science education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Work / Internship Experience */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-6">
              <span className="p-1.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Briefcase size={16} />
              </span>
              Practical Experience
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-800/90 bg-slate-900/40 hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                      {exp.type}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-indigo-400 mb-3">
                    {exp.company}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                        <span className="text-indigo-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-6">
              <span className="p-1.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <GraduationCap size={16} />
              </span>
              Academic Background
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-slate-800/90 bg-slate-900/40 hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs text-purple-300 font-medium mb-2">
                    {edu.institution}
                  </div>

                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
