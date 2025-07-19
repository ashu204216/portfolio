import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/ashu204216', color: 'text-gray-700 hover:text-black' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/ashutoshkaushik204216', color: 'text-blue-700 hover:text-blue-900' },
  { icon: <FaEnvelope />, url: 'mailto:ashutoshkaushik347@gmail.com', color: 'text-pink-500 hover:text-pink-700' },
  { icon: <FaPhone />, url: 'tel:9045693319', color: 'text-green-600 hover:text-green-800' },
];

const ContactSection: React.FC = () => (
  <section id="contact" className="max-w-2xl mx-auto mb-20 px-4">
    <motion.div
      className="p-8 text-center backdrop-blur-lg bg-white/40 border border-white/30 shadow-xl rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Contact</h2>
      <p className="mb-4 text-lg">Email: <a href="mailto:ashutoshkaushik347@gmail.com" className="text-blue-600 hover:underline">ashutoshkaushik347@gmail.com</a></p>
      <p className="mb-4 text-lg">Phone: <a href="tel:9045693319" className="text-blue-600 hover:underline">9045693319</a></p>
      <motion.a
        href="mailto:ashutoshkaushik347@gmail.com"
        className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
        whileHover={{ scale: 1.08 }}
      >
        Send Email
      </motion.a>
      <div className="flex gap-4 justify-center mt-6">
        {socialLinks.map((s, i) => (
          <motion.a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${s.color} transition-colors`}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ContactSection; 