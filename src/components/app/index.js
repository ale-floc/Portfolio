import React, { useState, useEffect } from 'react';
import Footer from '../footer';
import Home from '../home';
import Skills from '../skills';
import About from '../about';
import Experiences from '../experiences';
import Navbar from '../navbar';
import './styles.scss';

export const LanguageContext = React.createContext();

const App = () => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage(l => l === 'en' ? 'fr' : 'en');

  useEffect(() => {
    if ('scrollRestoration' in window.history)
      window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;