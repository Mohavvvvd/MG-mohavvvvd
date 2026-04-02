import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, LayoutTemplate, GitBranch } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const EngineeringMindset = () => {
  const traits = [
    { icon: Cpu, title: "Problem‑Solving", desc: "Break down complex problems into modular, testable components." },
    { icon: LayoutTemplate, title: "Clean Architecture", desc: "Separation of concerns, dependency injection, and maintainable code." },
    { icon: GitBranch, title: "Scalability", desc: "Design systems that grow horizontally and handle increased load gracefully." },
    { icon: Shield, title: "Security‑First", desc: "Threat modelling, input validation, encryption, and secure defaults." }
  ];

  return (
    <SectionWrapper id="mindset" title="Engineering Mindset" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {traits.map((trait, idx) => (
          <motion.div key={trait.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
            <trait.icon className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{trait.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{trait.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EngineeringMindset;