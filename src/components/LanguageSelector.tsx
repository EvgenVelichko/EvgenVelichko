import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'uk', label: 'Українська' },
    { code: 'ru', label: 'Русский' }
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
          <Globe size={20} />
          <span>{languages.find(lang => lang.code === language)?.label}</span>
        </button>
        
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          {languages.map(({ code, label }) => (
            <button 
              key={code}
              onClick={() => setLanguage(code as 'en' | 'uk' | 'ru')}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${
                language === code ? 'text-amber-500' : 'text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};