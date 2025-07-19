import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaPython, FaJava, FaNodeJs, FaBrain, FaUsers, FaComments, FaLightbulb, FaWater } from 'react-icons/fa';
import { SiC, SiJavascript } from 'react-icons/si';
import Lottie from 'lottie-react';
// import devAnimation from './dev-animate.json'; // Temporarily remove to avoid build error
import AnimatedBackground from './components/AnimatedBackground';
import AdvancedNavbar from './components/AdvancedNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationTimeline from './components/EducationTimeline';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SidebarNav from './components/SidebarNav';

const AVATAR_URL = 'https://ui-avatars.com/api/?name=Ashutosh+Kaushik&background=0D8ABC&color=fff&size=256';

const qualifications = [
  {
    title: '10th',
    school: 'MVM Agra Road Aligarh',
    score: '82%',
    board: 'CBSE',
    year: '2018',
  },
  {
    title: '12th',
    school: 'MVM Agra Road Aligarh',
    score: '75%',
    board: 'CBSE',
    stream: 'PCM',
    year: '2020',
  },
  {
    title: 'B.Tech (Pursuing)',
    school: 'GLA University, Mathura',
    year: '3rd Year',
    stream: 'CSE',
  },
];

const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'C', icon: <SiC /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'DSA', icon: <FaBrain /> },
  { name: 'OOPs', icon: <FaLightbulb /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Problem Solving', icon: <FaBrain /> },
  { name: 'Teamwork', icon: <FaUsers /> },
  { name: 'Communication', icon: <FaComments /> },
  { name: 'Critical Thinking', icon: <FaLightbulb /> },
  { name: 'Adaptability', icon: <FaWater /> },
];

const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.',
    link: '#',
    icon: <FaReact />,
  },
  {
    name: 'Java DSA Library',
    description: 'A collection of data structures and algorithms implemented in Java.',
    link: '#',
    icon: <FaJava />,
  },
  {
    name: 'Mini Blog',
    description: 'A minimal blog platform with Markdown support and authentication.',
    link: '#',
    icon: <FaComments />,
  },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const GradientBG = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-40 rounded-full blur-3xl top-[-20vw] left-[-20vw] animate-pulse" />
    <div className="absolute w-[40vw] h-[40vw] bg-gradient-to-br from-pink-300 via-blue-200 to-purple-300 opacity-30 rounded-full blur-2xl bottom-[-10vw] right-[-10vw] animate-pulse" />
    <div className="absolute w-full h-32 bg-gradient-to-b from-white/80 to-transparent top-0 left-0 z-10" />
  </div>
);

const GlassCard: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <motion.div
    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
    className={`backdrop-blur-lg bg-white/40 border border-white/30 shadow-xl rounded-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const Timeline: React.FC = () => (
  <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-400 before:to-pink-400">
    {qualifications.map((q, i) => (
      <motion.div
        key={i}
        className="mb-10 flex items-start"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-400 to-pink-400 border-2 border-white shadow-lg mt-1 mr-4" />
        <GlassCard className="p-6 w-full">
          <h3 className="text-xl font-bold mb-1">{q.title}</h3>
          <div className="text-gray-700 mb-1">{q.school}</div>
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            {q.score && <span>Score: {q.score}</span>}
            {q.board && <span>Board: {q.board}</span>}
            {q.stream && <span>Stream: {q.stream}</span>}
            {q.year && <span>Year: {q.year}</span>}
          </div>
        </GlassCard>
      </motion.div>
    ))}
  </div>
);

const AnimatedNav = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow flex justify-center py-3">
    <ul className="flex gap-6 md:gap-10 text-lg font-semibold">
      {navLinks.map(link => (
        <motion.li
          key={link.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={link.href}
            className="hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {link.name}
          </a>
        </motion.li>
      ))}
    </ul>
  </nav>
);

const SocialLinks = () => (
  <div className="flex gap-4 justify-center mt-4">
    <a href="https://github.com/ashu204216" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-black transition-colors"><FaGithub /></a>
    <a href="https://linkedin.com/in/ashutoshkaushik204216" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700 hover:text-blue-900 transition-colors"><FaLinkedin /></a>
    <a href="mailto:ashutoshkaushik347@gmail.com" className="text-2xl text-pink-500 hover:text-pink-700 transition-colors"><FaEnvelope /></a>
    <a href="tel:9045693319" className="text-2xl text-green-600 hover:text-green-800 transition-colors"><FaPhone /></a>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
      <AnimatedBackground />
      <SidebarNav />
      <AdvancedNavbar />
      <HeroSection />
      <AboutSection />
      <EducationTimeline />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-white/70 rounded-t-3xl shadow-inner">
        &copy; {new Date().getFullYear()} Ashutosh Kaushik. All rights reserved.
      </footer>
    </div>
  );
};

export default App; 