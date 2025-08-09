import React, { useEffect } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Process from './components/Process';
import About from './components/About';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <div className="animated-background"></div>
      <Header />
      <Hero />
      <Problems />
      <Solutions />
      <Benefits />
      <Pricing />
      <Process />
      <About />
      <Results />
      <FAQ />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;