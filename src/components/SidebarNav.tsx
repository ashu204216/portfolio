import React from 'react';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  { name: 'About', href: '#about', icon: <FaUser /> },
  { name: 'Education', href: '#education', icon: <FaGraduationCap /> },
  { name: 'Skills', href: '#skills', icon: <FaTools /> },
  { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
];

const SidebarNav: React.FC = () => {
  const [active, setActive] = React.useState('Home');
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map(link => {
        const el = document.querySelector(link.href);
        return el ? (el as HTMLElement).offsetTop : 0;
      });
      const scrollY = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i]) {
          setActive(navLinks[i].name);
          break;
        }
      }
      // Progress bar
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, (window.scrollY / docHeight) * 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl px-3 py-6 border border-white/40">
      <div className="w-1 h-40 bg-gradient-to-b from-blue-400 to-pink-400 rounded-full mb-4 relative overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-blue-500 to-pink-500 rounded-full"
          style={{ height: `${progress}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      {navLinks.map(link => (
        <motion.a
          key={link.name}
          href={link.href}
          className={`flex flex-col items-center text-xl p-2 rounded-lg transition-colors duration-200 ${active === link.name ? 'text-blue-600 bg-blue-100' : 'text-gray-500 hover:text-blue-500'}`}
          whileHover={{ scale: 1.15 }}
        >
          {link.icon}
          <span className="text-xs mt-1 font-semibold">{link.name}</span>
        </motion.a>
      ))}
    </aside>
  );
};

export default SidebarNav; 