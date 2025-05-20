import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'uk' | 'ru';
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    
    // Map browser language to supported languages
    let detectedLang: Language = 'en';
    if (browserLang === 'uk') detectedLang = 'uk';
    else if (browserLang === 'ru') detectedLang = 'ru';
    
    // Set language and HTML lang attribute
    setLanguage(detectedLang);
    document.documentElement.lang = detectedLang;
  }, []);

  const t = (key: TranslationKey): string => {
    const translationSet = translations[language] || translations.en;
    return key.split('.').reduce((obj, k) => obj?.[k], translationSet) as string || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};