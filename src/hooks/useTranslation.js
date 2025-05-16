import { create } from 'zustand';

const translations = {
  ua: {
    nav: {
      home: 'Головна',
      about: 'Про мене',
      certificates: 'Дипломи',
      projects: 'Проєкти',
      contact: 'Контакти',
    },
    hero: {
      greeting: 'Вітаю, я',
      name: 'Євгеній.',
      description: 'Створюю сучасні веб-рішення з фокусом на користувацький досвід та продуктивність.',
    },
    about: {
      title: 'Про мене',
      intro: 'Мене звати Величко Євген, мені',
      years: 'років',
      location: 'Я живу в Україні',
      description: 'Я студент із веб-розробки, але в мене вже є деякі навички та проєкти, якими я хочу поділитися з вами.',
      skills: 'Мої навички:',
      skillsList: {
        html: 'HTML і CSS: можу створювати базові веб-сторінки за допомогою HTML і CSS, додаючи стилі і структуру.',
        js: 'JavaScript: почав вивчати JavaScript, щоб додати інтерактивність до веб-сторінок.',
        projects: 'Проєкти: Працюю над різними проєктами для вдосконалення моїх навичок і створення корисних речей.',
      },
    },
    sections: {
      certificates: 'Мої дипломи',
      projects: 'Мої проєкти',
      contact: 'Контакти',
    },
    certificates: {
      cert1: 'Диплом 1',
      cert2: 'Websites for schoolchildren',
      cert3: 'Диплом 3',
    },
    projects: {
      financial: 'Фінансовий портал',
      auto: 'Автомобільний блог',
      music: 'Музичний плеєр',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      certificates: 'Certificates',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Evgen.',
      description: 'Creating modern web solutions focused on user experience and performance.',
    },
    about: {
      title: 'About Me',
      intro: "My name is Evgen Velychko, I'm",
      years: 'years old',
      location: 'I live in Ukraine',
      description: "I'm a web development student, but I already have some skills and projects that I want to share with you.",
      skills: 'My Skills:',
      skillsList: {
        html: 'HTML & CSS: I can create basic web pages using HTML and CSS, adding styles and structure.',
        js: 'JavaScript: Started learning JavaScript to add interactivity to web pages.',
        projects: 'Projects: Working on various projects to improve my skills and create useful things.',
      },
    },
    sections: {
      certificates: 'My Certificates',
      projects: 'My Projects',
      contact: 'Contact',
    },
    certificates: {
      cert1: 'Certificate 1',
      cert2: 'Websites for schoolchildren',
      cert3: 'Certificate 3',
    },
    projects: {
      financial: 'Financial Portal',
      auto: 'Automotive Blog',
      music: 'Music Player',
    },
  },
};

const useStore = create((set) => ({
  language: 'ua',
  setLanguage: (lang) => set({ language: lang }),
}));

export const useTranslation = () => {
  const { language, setLanguage } = useStore();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value[k];
    }
    return value;
  };

  return {
    t,
    changeLanguage: setLanguage,
    currentLanguage: language,
  };
};