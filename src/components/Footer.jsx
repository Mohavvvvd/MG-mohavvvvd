import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
      <p className="flex items-center justify-center gap-1">Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React, Tailwind & Framer Motion</p>
      <p className="mt-2">© {new Date().getFullYear()} Mohamed Ghoul — Fullstack JavaScript Developer</p>
    </footer>
  );
};

export default Footer;