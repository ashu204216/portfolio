import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaJava, FaComments } from 'react-icons/fa';

const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.',
    link: '#',
    icon: <FaReact />,
    details: 'This project showcases my personal brand, skills, and projects using the latest frontend technologies and design trends.'
  },
  {
    name: 'Java DSA Library',
    description: 'A collection of data structures and algorithms implemented in Java.',
    link: '#',
    icon: <FaJava />,
    details: 'A comprehensive library for learning and using DSA in Java, with documentation and examples.'
  },
  {
    name: 'Mini Blog',
    description: 'A minimal blog platform with Markdown support and authentication.',
    link: '#',
    icon: <FaComments />,
    details: 'A full-stack blog platform with user authentication, Markdown editing, and a clean UI.'
  },
];

const ProjectsSection: React.FC = () => {
  const [modal, setModal] = React.useState<number | null>(null);

  return (
    <section id="projects" className="max-w-4xl mx-auto mb-20 px-4">
      <motion.h2
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-8 flex flex-col cursor-pointer backdrop-blur-lg bg-white/40 border border-white/30 shadow-xl rounded-2xl hover:scale-105 transition-transform duration-200 relative"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            onClick={() => setModal(idx)}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{project.icon}</span>
              <span className="text-xl font-bold text-gray-800">{project.name}</span>
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline font-medium mt-auto" target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {modal !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-pink-500" onClick={() => setModal(null)}>&times;</button>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{projects[modal].icon}</span>
                <span className="text-xl font-bold text-gray-800">{projects[modal].name}</span>
              </div>
              <p className="text-gray-700 mb-4">{projects[modal].details}</p>
              <a href={projects[modal].link} className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection; 