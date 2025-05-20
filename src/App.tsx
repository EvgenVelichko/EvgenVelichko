import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;