import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolioData.json';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(false);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header 
        onNavigate={handleNavigation} 
        currentSection={currentSection}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      
      <AnimatePresence mode="wait">
        {currentSection === 'hero' && <Hero data={portfolioData.personalInfo} skills={portfolioData.skills} />}
        {currentSection === 'services' && <Services services={portfolioData.services} />}
        {currentSection === 'portfolio' && <Portfolio projects={portfolioData.portfolio} />}
        {currentSection === 'about' && <About about={portfolioData.about} />}
        {currentSection === 'contact' && <Contact contact={portfolioData.contact} social={portfolioData.social} />}
      </AnimatePresence>
      
      <Footer social={portfolioData.social} />
    </div>
  );
}

export default App;
