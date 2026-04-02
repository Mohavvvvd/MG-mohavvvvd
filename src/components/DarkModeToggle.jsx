import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const DarkModeToggle = ({ darkMode, toggle }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className="p-2 rounded-full glass text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
};

export default DarkModeToggle;