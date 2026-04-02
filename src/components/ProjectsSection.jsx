import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import { projects } from '../data/portfolioData';

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project) => { setSelected(project); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setTimeout(() => setSelected(null), 300); };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <SectionWrapper id="projects" title="Projects">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => <ProjectCard key={project.id} project={project} onOpenDetails={() => openModal(project)} />)}
      </motion.div>
      <ProjectDetailModal project={selected} isOpen={modalOpen} onClose={closeModal} />
    </SectionWrapper>
  );
};

export default ProjectsSection;