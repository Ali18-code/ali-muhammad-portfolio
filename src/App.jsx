import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trajectory from './components/Trajectory';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Navbar with Sticky Glass Effect */}
      <Navbar onResumeClick={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onResumeClick={() => setResumeModalOpen(true)} />
        <Trajectory />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <About />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Resume Request Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

    </div>
  );
}
