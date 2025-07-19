import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const AdvancedNavbar: React.FC = () => {
  const [active, setActive] = React.useState('Home');

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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg shadow-lg rounded-full px-8 py-3 flex gap-8 border border-white/40">
      {navLinks.map(link => (
        <motion.a
          key={link.name}
          href={link.href}
          className={`relative px-2 py-1 font-semibold text-lg transition-colors duration-200 ${active === link.name ? 'text-blue-600' : 'text-gray-700'}`}
          whileHover={{ scale: 1.1 }}
        >
          {link.name}
          {active === link.name && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-pink-400"
              style={{ zIndex: 1 }}
            />
          )}
        </motion.a>
      ))}
    </nav>
  );
};

export default AdvancedNavbar; 