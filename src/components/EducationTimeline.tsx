import React from 'react';
import { motion } from 'framer-motion';

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

const EducationTimeline: React.FC = () => (
  <section id="education" className="max-w-3xl mx-auto mb-16 px-4">
    <motion.h2
      className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      Education
    </motion.h2>
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
          <motion.div className="p-6 w-full backdrop-blur-lg bg-white/40 border border-white/30 shadow-xl rounded-2xl" whileHover={{ scale: 1.03 }}>
            <h3 className="text-xl font-bold mb-1">{q.title}</h3>
            <div className="text-gray-700 mb-1">{q.school}</div>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500">
              {q.score && <span>Score: {q.score}</span>}
              {q.board && <span>Board: {q.board}</span>}
              {q.stream && <span>Stream: {q.stream}</span>}
              {q.year && <span>Year: {q.year}</span>}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default EducationTimeline; 