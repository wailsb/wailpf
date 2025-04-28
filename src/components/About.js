import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = ({ about }) => {
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
      className="about-section"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        About
      </motion.h2>
      
      <div className="about-container">
        <motion.div className="about-content" variants={itemVariants}>
          <h3>Who I Am</h3>
          <p>{about.bio}</p>
          
          <div className="about-details">
            <div className="about-detail-item">
              <h4>Experience</h4>
              <p>{about.experience}</p>
            </div>
            <div className="about-detail-item">
              <h4>Education</h4>
              <p>{about.education}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {about.languages.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
