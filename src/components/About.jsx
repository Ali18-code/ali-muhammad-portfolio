import React from 'react';
import PropTypes from 'prop-types';
import { User, Terminal, Cpu, Target } from 'lucide-react';

/**
 * InfoCard Sub-component
 * 
 * Renders a single highlighted pillar/trait card in the sidebar.
 * Extracted to reduce code duplication and improve maintainability.
 */
const InfoCard = ({ icon: Icon, title, description, colorClass }) => (
  <div className="p-4 rounded-xl border border-slate-800/90 bg-slate-900/50 hover:bg-slate-800/60 transition-colors">
    <div className={`flex items-center gap-2 text-xs font-mono font-semibold mb-1 ${colorClass}`}>
      <Icon size={14} aria-hidden="true" />
      {title}
    </div>
    <p className="text-xs text-slate-400">
      {description}
    </p>
  </div>
);

InfoCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorClass: PropTypes.string.isRequired,
};

/**
 * About Component
 * 
 * Displays the personal narrative, background story, and core professional pillars.
 * Built with a responsive CSS grid layout (narrative vs summary sidebar).
 * 
 * @returns {React.ReactElement} The About section
 */
export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#090d16]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            <User size={14} aria-hidden="true" />
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
              &ldquo;My mission is not to boast superficial titles, but to build verifiable systems, understand trade-offs, and continuously improve toward the top tier of software and AI engineering.&rdquo;
            </p>
          </div>

          {/* Quick Pillars Sidebar */}
          <div className="md:col-span-4 space-y-3">
            <InfoCard 
              icon={Terminal}
              title="Systems Thinker"
              description="Prioritizes clean data structures, optimal time complexity, and robust application architecture."
              colorClass="text-indigo-400"
            />
            <InfoCard 
              icon={Cpu}
              title="Pragmatic ML Builder"
              description="Evaluates models using precision, recall, and error breakdown rather than naive training accuracy."
              colorClass="text-purple-400"
            />
            <InfoCard 
              icon={Target}
              title="Active Target"
              description="Seeking AI/ML and software engineering internships where I can contribute code and learn from senior engineers."
              colorClass="text-emerald-400"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
