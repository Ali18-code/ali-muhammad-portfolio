import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 border-t border-slate-800/80 bg-[#090d16]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Award size={14} />
            Verified Learning
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Certifications & Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
            Directly verifiable certifications demonstrating active proficiency in generative AI and agentic developer tooling.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              scale={1.01}
              transitionSpeed={2000}
              className="group h-full"
            >
              <div
                className="p-6 rounded-xl border border-slate-800/90 bg-slate-900/40 hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] hover:bg-slate-900/80 transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-medium text-slate-400 mb-4 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>{cert.issuer}</span>
                  </div>

                  {cert.image && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-slate-700/50 group-hover:border-indigo-500/50 transition-colors bg-slate-950">
                      {cert.image.endsWith('.pdf') ? (
                        <object data={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf" className="w-full h-48 sm:h-56">
                           <div className="p-4 text-center">
                             <p className="text-slate-400 text-xs mb-2">PDF viewer not available.</p>
                             <a href={cert.image} target="_blank" rel="noreferrer" className="text-indigo-400 text-xs hover:underline">View Certificate</a>
                           </div>
                        </object>
                      ) : (
                        <img src={cert.image} alt={`${cert.title} Certificate`} className="w-full h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  )}

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-500 truncate max-w-[180px]">
                    ID: <span className="text-slate-400">{cert.credentialId}</span>
                  </span>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500 hover:text-white text-indigo-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}
