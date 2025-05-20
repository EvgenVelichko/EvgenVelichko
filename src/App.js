import React, { useState } from 'react';
import { Globe } from 'lucide-react';
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
  const [language, setLanguage] = useState('uk');

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="fixed top-4 right-4 z-50">
        <div className="relative group">
          <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Globe size={20} />
            <span>{language === 'uk' ? 'УКР' : 'ENG'}</span>
          </button>
          
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <button 
              onClick={() => setLanguage('uk')}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${language === 'uk' ? 'text-amber-500' : 'text-white'}`}
            >
              Українська
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${language === 'en' ? 'text-amber-500' : 'text-white'}`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      <Navbar language={language} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Services language={language} />
      <Portfolio language={language} />
      <Certificates language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;