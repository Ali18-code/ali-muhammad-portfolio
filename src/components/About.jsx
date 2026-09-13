import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, Terminal, Cpu, Target } from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#090d16]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            <User size={14} />
            Background & Mindset
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            About Ali Muhammad Panhwar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Narrative */}
          <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am currently a 3rd-year Computer Science student at <span className="text-white font-medium">Air University</span>, focused on becoming an <span className="text-indigo-400 font-medium">AI & Autonomous Agent Engineer</span>.
            </p>
            <p>
              Unlike the standard path of jumping directly into calling pre-trained AI APIs, I started my journey grounded in foundational computer science: <span className="text-white font-medium">C++, Data Structures & Algorithms, Java, and Relational Databases</span>. Writing low-level systems taught me memory discipline, algorithmic complexity, and how computers actually execute instructions.
            </p>
            <p>
              During my Machine Learning internship at <span className="text-slate-100 font-medium">Arch Technologies</span>, I transitioned these engineering principles into Applied AI — constructing text classification pipelines, evaluating machine learning models against imbalanced datasets, and analyzing misclassified error cases.
            </p>
            <p className="text-slate-400 text-sm italic">
              "My mission is not to boast superficial titles, but to build verifiable systems, understand trade-offs, and continuously improve toward the top tier of software and AI engineering."
            </p>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="md:col-span-4 space-y-3">
            <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-semibold mb-1">
                <Terminal size={14} />
                Systems Thinker
              </div>
              <p className="text-xs text-slate-400">
                Prioritizes clean data structures, optimal time complexity, and robust application architecture.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-semibold mb-1">
                <Cpu size={14} />
                Pragmatic ML Builder
              </div>
              <p className="text-xs text-slate-400">
                Evaluates models using precision, recall, and error breakdown rather than naive training accuracy.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold mb-1">
                <Target size={14} />
                Active Target
              </div>
              <p className="text-xs text-slate-400">
                Seeking AI/ML and software engineering internships where I can contribute code and learn from senior engineers.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
