
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import TechStackSection from '../components/TechStackSection';
import ProjectsSection from '../components/ProjectsSection';
import ParticleBackground from '../components/ParticleBackground';
import SocialLinks from '../components/SocialLinks';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="tech-stack">
          <TechStackSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="social">
          <SocialLinks />
        </section>
      </div>
    </div>
  );
};

export default Index;
