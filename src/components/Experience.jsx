import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((exp, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-wrap justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500"><Calendar size={14} /> {exp.period}</div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;