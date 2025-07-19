import React from 'react';

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
  { name: 'Python', icon: '🐍' },
  { name: 'C', icon: '💻' },
  { name: 'Java', icon: '☕' },
  { name: 'DSA', icon: '📊' },
  { name: 'OOPs', icon: '🧩' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🌲' },
  { name: 'Problem Solving', icon: '🧠' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Communication', icon: '💬' },
  { name: 'Critical Thinking', icon: '🔎' },
  { name: 'Adaptability', icon: '🌊' },
];

const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.',
    link: '#',
    icon: '🌐',
  },
  {
    name: 'Java DSA Library',
    description: 'A collection of data structures and algorithms implemented in Java.',
    link: '#',
    icon: '📚',
  },
  {
    name: 'Mini Blog',
    description: 'A minimal blog platform with Markdown support and authentication.',
    link: '#',
    icon: '📝',
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
    <div className="absolute w-[60vw] h-[60vw] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl top-[-20vw] left-[-20vw] animate-pulse" />
    <div className="absolute w-[40vw] h-[40vw] bg-gradient-to-br from-pink-300 via-blue-200 to-purple-300 opacity-20 rounded-full blur-2xl bottom-[-10vw] right-[-10vw] animate-pulse" />
  </div>
);

const GlassCard: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={`backdrop-blur-lg bg-white/40 border border-white/30 shadow-xl rounded-2xl ${className}`}>{children}</div>
);

const Timeline: React.FC = () => (
  <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-400 before:to-pink-400">
    {qualifications.map((q, i) => (
      <div key={i} className="mb-10 flex items-start">
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
      </div>
    ))}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screenmt-4  font-sans text-gray-900 relative">
      <GradientBG />
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md shadow flex justify-center py-3">
        <ul className="flex gap-6 md:gap-10 text-lg font-semibold">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-12 text-center relative">
        <div className="relative mb-6">
          <img src={AVATAR_URL} alt="Ashutosh Kaushik" className="w-40 h-40 rounded-full border-4 border-white shadow-xl mx-auto" />
          <span className="absolute bottom-2 right-2 bg-gradient-to-tr from-blue-400 to-pink-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow">Open to Work</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-lg">Ashutosh Kaushik</h1>
        <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">Aspiring Software Engineer & Problem Solver</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200">Contact Me</a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto mb-16 px-4">
        <GlassCard className="p-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi! I am Ashutosh Kaushik, a passionate B.Tech student at GLA University, Mathura. I love building web applications, solving problems, and learning new technologies. My journey in tech started with curiosity and has grown into a deep interest in software engineering, DSA, and full-stack development. I believe in continuous learning and strive to create impactful solutions.
          </p>
        </GlassCard>
      </section>

      {/* Education Timeline */}
      <section id="education" className="max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Education</h2>
        <Timeline />
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <GlassCard key={idx} className="flex flex-col items-center p-6 hover:scale-105 transition-transform duration-200 cursor-pointer">
              <span className="text-3xl mb-2">{skill.icon}</span>
              <span className="font-semibold text-lg text-gray-800">{skill.name}</span>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <GlassCard key={idx} className="p-8 flex flex-col hover:scale-105 transition-transform duration-200 cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{project.icon}</span>
                <span className="text-xl font-bold text-gray-800">{project.name}</span>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline font-medium mt-auto">View Project</a>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto mb-20 px-4">
        <GlassCard className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Contact</h2>
          <p className="mb-4 text-lg">Email: <a href="mailto:ashutoshkaushik347@gmail.com" className="text-blue-600 hover:underline">ashutoshkaushik347@gmail.com</a></p>
          <p className="mb-4 text-lg">Phone: <a href="tel:9045693319" className="text-blue-600 hover:underline">9045693319</a></p>
          <a href="mailto:ashutoshkaushik347@gmail.com" className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200">Send Email</a>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 bg-white/70 rounded-t-3xl shadow-inner">
        &copy; {new Date().getFullYear()} Ashutosh Kaushik. All rights reserved.
      </footer>
    </div>
  );
};

export default App; 