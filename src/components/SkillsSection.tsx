import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaNodeJs, FaBrain, FaUsers, FaComments, FaLightbulb, FaWater } from 'react-icons/fa';
import { SiC, SiJavascript } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython />, color: 'from-yellow-400 to-green-400' },
  { name: 'C', icon: <SiC />, color: 'from-blue-400 to-blue-600' },
  { name: 'Java', icon: <FaJava />, color: 'from-orange-400 to-red-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'from-yellow-300 to-yellow-500' },
  { name: 'DSA', icon: <FaBrain />, color: 'from-pink-400 to-purple-400' },
  { name: 'OOPs', icon: <FaLightbulb />, color: 'from-yellow-400 to-pink-400' },
  { name: 'React', icon: <FaReact />, color: 'from-blue-400 to-cyan-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'from-green-400 to-green-700' },
  { name: 'Problem Solving', icon: <FaBrain />, color: 'from-pink-400 to-purple-400' },
  { name: 'Teamwork', icon: <FaUsers />, color: 'from-blue-400 to-pink-400' },
  { name: 'Communication', icon: <FaComments />, color: 'from-pink-400 to-blue-400' },
  { name: 'Critical Thinking', icon: <FaLightbulb />, color: 'from-yellow-400 to-pink-400' },
  { name: 'Adaptability', icon: <FaWater />, color: 'from-blue-400 to-cyan-400' },
];

const SkillRing = ({ icon, name, color }: { icon: React.ReactNode; name: string; color: string }) => (
  <motion.div
    className={`relative flex flex-col items-center justify-center p-6 cursor-pointer group`}
    whileHover={{ scale: 1.08 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all text-3xl text-white mb-2`}>
      {icon}
    </div>
    <span className="font-semibold text-lg text-gray-800 mt-1 drop-shadow">{name}</span>
  </motion.div>
);

const SkillsSection: React.FC = () => (
  <section id="skills" className="max-w-4xl mx-auto mb-16 px-4">
    <motion.h2
      className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      Skills
    </motion.h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, idx) => (
        <SkillRing key={idx} icon={skill.icon} name={skill.name} color={skill.color} />
      ))}
    </div>
  </section>
);

export default SkillsSection; 