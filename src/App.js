import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LearningSection from './components/LearningSection';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import VolunteerSection from './components/VolunteerSection';
import ContactSection from './components/ContactUsSection';
import ProjectSection from './components/ProjectSection';

import Navbar_french from './components_french/Navbar';
import LearningSection_french from './components_french/LearningSection';
import HomeSection_french from './components_french/HomeSection';
import AboutSection_french from './components_french/AboutSection';
import VolunteerSection_french from './components_french/VolunteerSection';
import ContactSection_french from './components_french/ContactUsSection';
import ProjectSection_french from './components_french/ProjectSection';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [language, setLanguage] = useState('english');

  const handleLanguageToggle = () => {
    if (language === 'english') {
      setLanguage('french');
    } else {
      setLanguage('english');
    }
  };

  return (
    <>
      <Router>
      {language === 'english' ? <Navbar /> : <Navbar_french />}
        <div id="toggle-container">
          <button className="btn--outline" id="language-toggle" onClick={handleLanguageToggle}>
            En/Fr
          </button>
          
        </div>
        <div id="home">{language === 'english' ? <HomeSection /> : <HomeSection_french />}</div>
        {language === 'english' ? <AboutSection /> : <AboutSection_french />}
        <div id="projects">{language === 'english' ? <ProjectSection /> : <ProjectSection_french />}</div>
        {language === 'english' ? <LearningSection /> : <LearningSection_french />}
        <div id="volunteer">{language === 'english' ? <VolunteerSection /> : <VolunteerSection_french />}</div>
        <div id="contact">{language === 'english' ? <ContactSection /> : <ContactSection_french />}</div>
      </Router>
    </>
  );
}

export default App;
