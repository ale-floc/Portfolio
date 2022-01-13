import React, { useState, useEffect } from 'react';
import Footer from './components/footer';
import Home from './components/home';
import Skills from './components/skills';
import About from './components/about';
import Experiences from './components/experiences';
import Navbar from './components/navbar';

const App = () => {
  const [language, setLanguage] = useState('en');
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if ('scrollRestoration' in window.history)
      window.history.scrollRestoration = 'manual'
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar language={language} scroll={scroll} setLanguage={setLanguage} />
      <Home language={language} scroll={scroll} />
      <About language={language} />
      <Skills language={language} />
      <Experiences language={language} />
      <Footer />
    </div>
  );
}

export default App;