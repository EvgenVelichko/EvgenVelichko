import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, User, Briefcase, Palette, Mail, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', icon: <Home size={18} />, href: '#hero' },
    { name: 'About', icon: <User size={18} />, href: '#about' },
    { name: 'Skills', icon: <Code size={18} />, href: '#skills' },
    { name: 'Services', icon: <Briefcase size={18} />, href: '#services' },
    { name: 'Portfolio', icon: <Palette size={18} />, href: '#portfolio' },
    { name: 'Certificates', icon: <GraduationCap size={18} />, href: '#certificates' },
    { name: 'Contact', icon: <Mail size={18} />, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center text-amber-500 font-bold text-xl">
            <Code className="mr-2" /> DEV<span className="text-white">PORTFOLIO</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="flex items-center text-gray-300 hover:text-amber-500 transition-colors duration-300"
              >
                <span className="mr-1">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 mt-4 rounded-lg shadow-xl p-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 text-gray-300 hover:text-amber-500 hover:bg-gray-700 rounded transition-colors duration-300"
              >
                <span className="mr-3">{link.icon}</span>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};