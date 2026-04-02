import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!project) return null;

    const {
        title,
        techTags,
        githubLink,
        demoLink,
        whyItMatters,
        keyChallenge,
        securityFeatures,
        fullDescription,
        screenshotIcon: Icon,
        screenShots = [], // array of image paths
    } = project;

    const hasScreenshots = screenShots && screenShots.length > 0;
    const hasMultiple = hasScreenshots && screenShots.length > 1;

    const nextImage = () => {
        if (hasMultiple) {
            setCurrentImageIndex((prev) => (prev + 1) % screenShots.length);
        }
    };

    const prevImage = () => {
        if (hasMultiple) {
            setCurrentImageIndex((prev) => (prev - 1 + screenShots.length) % screenShots.length);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal Container - Perfectly Centered */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="pointer-events-auto w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="sticky top-4 float-right mr-4 mt-4 z-10 p-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-6 md:p-8 pt-0">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                                        <Icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                            {title}
                                        </h2>
                                        <div className="flex gap-3 mt-2">
                                            <a
                                                href={githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <Github size={16} /> Code
                                            </a>
                                            <a
                                                href={demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                            >
                                                <ExternalLink size={16} /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Screenshot Gallery - Smaller Images */}
                                {hasScreenshots ? (
                                    <div className="mb-8">
                                        <div className="relative group flex justify-center">
                                            <img
                                                src={screenShots[currentImageIndex]}
                                                alt={`${title} screenshot ${currentImageIndex + 1}`}
                                                className="max-h-[300px] w-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 object-contain"
                                            />
                                            {hasMultiple && (
                                                <>
                                                    <button
                                                        onClick={prevImage}
                                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <ChevronLeft size={20} />
                                                    </button>
                                                    <button
                                                        onClick={nextImage}
                                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <ChevronRight size={20} />
                                                    </button>
                                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                                        {screenShots.map((_, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => setCurrentImageIndex(idx)}
                                                                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-3' : 'bg-white/50'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        {hasMultiple && (
                                            <p className="text-center text-xs text-gray-500 mt-2">
                                                {currentImageIndex + 1} / {screenShots.length}
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <div className="mb-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 flex justify-center items-center border border-gray-200 dark:border-gray-700">
                                        <div className="text-center">
                                            <Icon size={48} strokeWidth={1} className="mx-auto text-gray-500 dark:text-gray-400 mb-2" />
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                📱 UI/UX Mockup — interactive prototype available
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Overview
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {fullDescription}
                                    </p>
                                </div>

                                {/* Why + Challenge */}
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-xl">
                                        <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                                            ✨ Why this project matters
                                        </h3>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{whyItMatters}</p>
                                    </div>
                                    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-xl">
                                        <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                                            ⚡ Key technical challenge solved
                                        </h3>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{keyChallenge}</p>
                                    </div>
                                </div>

                                {/* Security Features (if any) */}
                                {securityFeatures && securityFeatures.length > 0 && (
                                    <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border-l-4 border-red-500">
                                        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                                            <Lock size={18} /> Security Features Implemented
                                        </h3>
                                        <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                                            {securityFeatures.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2">
                                                    • {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {techTags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;