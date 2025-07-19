import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => (
  <section id="about" className="max-w-3xl mx-auto mb-16 px-4">
    <motion.div
      className="p-8 backdrop-blur-lg bg-white/40 border border-white/30 shadow-xl rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">About Me</h2>
      <p className="text-lg leading-relaxed">
        Hi! I am <span className="font-bold text-blue-600">Ashutosh Kaushik</span>, a passionate B.Tech student at GLA University, Mathura. I love building web applications, solving problems, and learning new technologies. My journey in tech started with curiosity and has grown into a deep interest in software engineering, DSA, and full-stack development. I believe in continuous learning and strive to create impactful solutions.
      </p>
    </motion.div>
  </section>
);

export default AboutSection; 