import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = ({ contact, social }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <motion.section 
      className="contact-section"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        Contact
      </motion.h2>
      
      <div className="contact-container">
        <motion.div className="contact-info" variants={itemVariants}>
          <h3>Get in Touch</h3>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9978 21.4142 21.3728C21.0391 21.7479 20.5117 21.9587 19.96 21.96C18.36 22.05 16.81 21.89 15.36 21.48C12.36 20.65 9.67 18.94 7.59 16.86C5.51 14.78 3.8 12.09 2.97 9.09C2.56 7.64 2.4 6.09 2.49 4.49C2.49123 3.93845 2.70196 3.41126 3.07683 3.03632C3.4517 2.66138 3.9788 2.4505 4.53 2.45H7.53C8.82 2.44 9.91 3.38 10.08 4.66C10.2 5.47 10.4 6.26 10.69 7.01C11.1 8.18 10.76 9.47 9.85 10.12L8.64 10.98C9.87 13.2 11.71 15.04 13.93 16.27L14.79 15.06C15.44 14.15 16.73 13.81 17.9 14.22C18.65 14.51 19.44 14.71 20.25 14.83C21.55 15 22.49 16.12 22.46 17.42L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>{contact.phone}</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>{contact.email}</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p>{contact.location}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="contact-form-container" variants={itemVariants}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <motion.button 
              type="submit"
              className={`submit-button ${formStatus === 'sending' ? 'sending' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {formStatus === 'success' && (
              <div className="form-success">
                Your message has been sent successfully!
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
