import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = ({ onNavigate, currentSection, toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <div className="logo" onClick={() => handleNavClick('hero')}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            OW
          </motion.div>
        </div>
        
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <motion.nav>
            <ul>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={currentSection === 'portfolio' ? 'active' : ''}
                onClick={() => handleNavClick('portfolio')}
              >
                Portfolio
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={currentSection === 'services' ? 'active' : ''}
                onClick={() => handleNavClick('services')}
              >
                Services
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={currentSection === 'hero' ? 'active' : ''}
                onClick={() => handleNavClick('hero')}
              >
                My work
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={currentSection === 'about' ? 'active' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                className={currentSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </motion.li>
            </ul>
          </motion.nav>
        </div>

        <div className="header-actions">
          <motion.button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? '🌞' : '🌙'}
          </motion.button>
          
          <motion.div 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
