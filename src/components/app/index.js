import React, { useState, useEffect } from 'react';
import Footer from '../footer';
import Home from '../home';
import Skills from '../skills';
import About from '../about';
import Experiences from '../experiences';
import Navbar from '../navbar';
import './styles.scss';

const App = () => {
  const [language, setLanguage] = useState('en');
	
  useEffect(() => {
    if ('scrollRestoration' in window.history)
      window.history.scrollRestoration = 'manual'
	}, []);

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
      <Home language={language} />
      <About language={language} />
      <Skills language={language} />
      <Experiences language={language} />
      <Footer />
    </div>
  );
}

export default App;