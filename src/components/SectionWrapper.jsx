import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;