import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = ({ social }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">OW</div>
          <p>© {new Date().getFullYear()} Ouweis wail sari bey. All rights reserved.</p>
        </div>
        
        <div className="social-links">
          {social.github && (
            <motion.a 
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.36 20.08 9.72 21.28C10.32 21.38 10.5 21 10.5 20.7C10.5 20.42 10.5 19.76 10.5 18.96C7.58 19.56 6.9 17.7 6.9 17.7C6.38 16.55 5.61 16.18 5.61 16.18C4.52 15.5 5.7 15.52 5.7 15.52C6.9 15.6 7.52 16.7 7.52 16.7C8.6 18.27 10.28 17.77 10.56 17.47C10.66 16.78 10.97 16.31 11.3 16.04C8.93 15.76 6.41 14.95 6.41 11.04C6.41 9.92 6.85 9 7.55 8.28C7.44 8 7.04 6.96 7.68 5.48C7.68 5.48 8.69 5.18 10.5 6.42C11.32 6.17 12.15 6.04 13 6.04C13.85 6.04 14.68 6.17 15.5 6.42C17.31 5.18 18.32 5.48 18.32 5.48C18.96 6.96 18.56 8 18.45 8.28C19.15 9 19.59 9.92 19.59 11.04C19.59 14.95 17.07 15.76 14.7 16.04C15.11 16.38 15.5 17.05 15.5 18.07C15.5 19.54 15.5 20.3 15.5 20.7C15.5 21 15.68 21.38 16.28 21.28C20.64 20.07 24 16.42 24 12C24 6.48 19.52 2 14 2H12Z" fill="currentColor"/>
              </svg>
            </motion.a>
          )}
          {social.linkedin && (
            <motion.a 
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                <path d="M6 9H2V21H6V9Z" fill="currentColor"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
              </svg>
            </motion.a>
          )}
          {social.twitter && (
            <motion.a 
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" fill="currentColor"/>
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
