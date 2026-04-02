import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { education, languages } from '../data/portfolioData';

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education & Languages">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4"><GraduationCap className="text-blue-600" /><h3 className="text-xl font-bold">Education</h3></div>
          {education.map((edu, i) => (
            <div key={i} className="mb-4"><p className="font-semibold">{edu.degree}</p><p className="text-gray-600 dark:text-gray-400">{edu.school}</p><p className="text-sm text-gray-500">{edu.specialization}</p><p className="text-xs text-gray-400">{edu.period}</p></div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4"><Globe className="text-blue-600" /><h3 className="text-xl font-bold">Languages</h3></div>
          {languages.map(lang => <div key={lang.name} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700"><span>{lang.name}</span><span className="text-gray-500">{lang.level}</span></div>)}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Education;