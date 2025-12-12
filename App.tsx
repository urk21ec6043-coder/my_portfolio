import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-darker min-h-screen text-slate-300 relative selection:bg-primary selection:text-darker">
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;