import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personal } from '../data/portfolioData';

const Hero = () => {

    console.log("Personal Data:", personal); // Debugging log to check data structure
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100,
        delay: 0.2
      } 
    },
    hover: { 
      scale: 1.05, 
      rotate: 2,
      transition: { duration: 0.3 },
      boxShadow: "0 25px 40px -12px rgba(0,0,0,0.3)"
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring", stiffness: 200 } },
    hover: { scale: 1.15, transition: { duration: 0.2 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
        >
          {/* Profile Image with enhanced animation */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <img
              src="./src/assets/mg.png"
              alt="Mohamed Ghoul"
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl group-hover:shadow-3xl transition-all duration-300"
            />
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-500 scale-105" />
          </motion.div>

          {/* Text content */}
          <div className="text-center md:text-left flex-1">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {personal.name}
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              {personal.title}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start items-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
              <MapPin size={18} /> <span>{personal.location}</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {personal.about}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-4">
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="p-3 rounded-full glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="p-3 rounded-full glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href={`mailto:${personal.email}`}
                variants={iconVariants}
                whileHover="hover"
                className="p-3 rounded-full glass hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;