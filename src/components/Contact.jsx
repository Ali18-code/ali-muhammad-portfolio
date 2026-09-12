import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, Phone } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Mail size={14} />
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Start a Conversation
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
            Open to discussing AI/ML internships, engineering opportunities, or collaborating on open-source systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Contact Info Box */}
            <div className="p-5 rounded-xl border border-slate-800/90 bg-slate-900/40 space-y-4">
              <div>
                <div className="text-xs font-mono text-slate-400 mb-1">Direct Email</div>
                <div className="text-sm font-semibold text-white mb-2 break-all font-mono">
                  {personal.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2 px-3 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                >
                  {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  {copied ? 'Copied to Clipboard!' : 'Copy Email Address'}
                </button>
              </div>

              {personal.phone && (
                <div className="pt-4 border-t border-slate-800/50">
                  <div className="text-xs font-mono text-slate-400 mb-1">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-white mb-2 font-mono flex items-center gap-2">
                    <Phone size={14} className="text-indigo-400" />
                    {personal.phone}
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="w-full py-2 px-3 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    {copiedPhone ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    {copiedPhone ? 'Copied to Clipboard!' : 'Copy Phone Number'}
                  </button>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="p-5 rounded-xl border border-slate-800/90 bg-slate-900/40 space-y-3">
              <div className="text-xs font-mono text-slate-400 mb-2">Profiles & Repositories</div>
              
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
              >
                <span className="flex items-center gap-2">
                  <Github size={15} className="text-indigo-400" />
                  github.com/Ali18-code
                </span>
                <span className="text-slate-500 group-hover:text-indigo-400 transition-colors">↗</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
              >
                <span className="flex items-center gap-2">
                  <Linkedin size={15} className="text-indigo-400" />
                  linkedin.com/in/ali-muhammad-17625a335
                </span>
                <span className="text-slate-500 group-hover:text-indigo-400 transition-colors">↗</span>
              </a>
            </div>

            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-300 flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 flex-shrink-0 animate-pulse"></span>
              <span>Available for Summer & Fall internships, part-time roles, or remote opportunities.</span>
            </div>

          </div>

          {/* Send Message Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl border border-slate-800/90 bg-slate-900/40 space-y-4"
            >
              <h3 className="text-sm font-bold text-slate-200 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Fill this out to dispatch an inquiry directly to Ali's inbox.
              </p>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins (Recruiter / Engineer)"
                  className="w-full px-3 py-2 rounded-md bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-slate-200 text-xs sm:text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 rounded-md bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-slate-200 text-xs sm:text-sm focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="We are reviewing candidates for an AI/ML internship and would like to discuss..."
                  className="w-full px-3 py-2 rounded-md bg-slate-950/80 border border-slate-800 focus:border-indigo-500 text-slate-200 text-xs sm:text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              >
                {formSubmitted ? (
                  <>
                    <Check size={16} />
                    Message Dispatched!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
