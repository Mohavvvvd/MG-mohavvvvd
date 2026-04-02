import React from 'react';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import EngineeringMindset from '../components/EngineeringMindset';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Education />
      <ProjectsSection />
      <Skills />
      <Experience />
      
      
      <EngineeringMindset />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
