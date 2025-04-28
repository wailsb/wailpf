import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = ({ data, skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="hero-section"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1 variants={itemVariants}>
            Hey, I'm <span className="highlight">{data.name.split(' ')[0]}</span>
          </motion.h1>
          
          <motion.div className="skills-list" variants={itemVariants}>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.p className="hero-description" variants={itemVariants}>
            {data.description}
          </motion.p>
          
          <motion.div 
            className="cta-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://www.linkedin.com/in/wailsb", '_blank')}
          >
            Let's connect
          </motion.div>
        </div>
        
        <div className="hero-image">
          <motion.div 
            className="illustration"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="developer-illustration">
              <div className="code-window">
                <div className="window-header">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <div className="code-lines">
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                  <div className="code-line"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrows">
            ↓
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
