import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Projects', 'Skills', 'Experience', 'Mindset','Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-gradient">
            <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Mohamed Ghoul
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {link}
              </a>
            ))}
            <DarkModeToggle darkMode={darkMode} toggle={toggleDarkMode} />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle darkMode={darkMode} toggle={toggleDarkMode} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden glass">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;