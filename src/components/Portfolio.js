import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Portfolio.css';

const Portfolio = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section 
      className="portfolio-section"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Portfolio
      </motion.h2>
      
      <div className="portfolio-grid">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="portfolio-item"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
            onClick={() => openProject(project)}
          >
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="view-details">View Details</div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div 
              className="project-modal"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={closeProject}>×</button>
              <h2>{selectedProject.title}</h2>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                src={selectedProject.image}
                alt={selectedProject.title}
                className="project-modal-image"
              />
              <p>{selectedProject.description}</p>
              <div className="modal-tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <button className="project-button" onClick={() => window.open(selectedProject.link, '_blank')}>Live Demo</button>
                <button className="project-button" onClick={() => window.open("https://www.github.com/wailsb", '_blank')}>Source Code (look at the github repo)</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Portfolio;
