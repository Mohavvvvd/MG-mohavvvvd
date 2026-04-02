import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Maximize2 } from 'lucide-react';

const ProjectCard = ({ project, onOpenDetails }) => {
  const { title, description, highlight, techTags, githubLink, demoLink, screenshotIcon: Icon } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 }, boxShadow: "0 25px 35px -12px rgba(0,0,0,0.25)" }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-800 flex flex-col h-full"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <div className="flex gap-2">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" onClick={(e) => e.stopPropagation()}>
              <Github size={20} />
            </a>
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
        <div className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-1 rounded-md mb-4">🔍 {highlight}</div>
        <div className="flex flex-wrap gap-2 mb-5">
          {techTags.map(tag => (
            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800">{tag}</span>
          ))}
        </div>
        <button onClick={onOpenDetails} className="mt-auto w-full inline-flex justify-center items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <Maximize2 size={16} /> Details
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;