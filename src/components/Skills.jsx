import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const categories = [
    { title: "Frontend", items: skills.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", items: skills.backend, color: "from-purple-500 to-pink-500" },
    { title: "Databases", items: skills.databases, color: "from-green-500 to-emerald-500" },
    { title: "Tools", items: skills.tools, color: "from-orange-500 to-red-500" }
  ];

  return (
    <SectionWrapper id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(item => <span key={item} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">{item}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;