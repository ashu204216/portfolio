import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';
// import Lottie from 'lottie-react';
// import devAnimation from '../dev-animate.json';

const AVATAR_URL = 'https://ui-avatars.com/api/?name=Ashutosh+Kaushik&background=0D8ABC&color=fff&size=256';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/ashu204216', color: 'text-gray-700 hover:text-black' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/ashutoshkaushik204216', color: 'text-blue-700 hover:text-blue-900' },
  { icon: <FaEnvelope />, url: 'mailto:ashutoshkaushik347@gmail.com', color: 'text-pink-500 hover:text-pink-700' },
  { icon: <FaPhone />, url: 'tel:9045693319', color: 'text-green-600 hover:text-green-800' },
];

const HeroSection: React.FC = () => (
  <section id="home" className="flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-12 text-center relative select-none">
    <motion.div
      className="relative mb-6 flex flex-col items-center"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-44 h-44 rounded-full border-4 border-white shadow-xl mx-auto overflow-hidden bg-white/80 flex items-center justify-center relative">
        {/* <Lottie animationData={devAnimation} loop={true} className="w-40 h-40" /> */}
        <img src={AVATAR_URL} alt="Ashutosh Kaushik" className="w-40 h-40 rounded-full" />
        {/* Floating element */}
        <motion.div
          className="absolute -top-4 -right-4 bg-gradient-to-tr from-blue-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
          initial={{ scale: 0, rotate: 30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
        >
          Open to Work
        </motion.div>
      </div>
    </motion.div>
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Ashutosh Kaushik
    </motion.h1>
    <div className="text-xl md:text-2xl text-gray-700 font-medium mb-6 min-h-[40px]">
      <Typewriter
        textStyle={{ fontWeight: 500, color: '#374151' }}
        startDelay={500}
        cursorColor="#a78bfa"
        multiText={[
          'Aspiring Software Engineer',
          'Problem Solver',
          'Full Stack Developer',
          'Open Source Enthusiast',
        ]}
        multiTextDelay={1500}
        typeSpeed={60}
        multiTextLoop
      />
    </div>
    <motion.a
      href="#contact"
      className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
      whileHover={{ scale: 1.08 }}
    >
      Contact Me
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
  </section>
);

export default HeroSection; 