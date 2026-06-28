import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import { translations } from './translations';
import type { Language } from './translations';
import { Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_CONFIG } from './config';
import './App.css';

function App() {
  // 1. Language state
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('portfolio_lang');
    return (stored === 'id' ? 'id' : 'en') as Language;
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  };

  // 2. Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem('portfolio_dark');
    if (stored !== null) {
      return stored === 'true';
    }
    // Default to system settings if no preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_dark', 'false');
    }
  }, [darkMode]);

  // 3. Hash routing state
  const [currentPath, setCurrentPath] = useState(
    () => window.location.hash || '#/',
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on navigation
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 4. Scroll Reveal trigger
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const elementVisible = 80;

      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Timeout to make sure browser finished rendering elements
    const timer = setTimeout(handleScrollReveal, 100);

    return () => {
      window.removeEventListener('scroll', handleScrollReveal);
      clearTimeout(timer);
    };
  }, [currentPath]);

  const t = translations[lang].footer;

  // 6. Router switch logic
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '#/projects':
        return <Projects lang={lang} />;
      case '#/experience':
        return <Experience lang={lang} />;
      case '#/contact':
        return <Contact lang={lang} />;
      case '#/':
      default:
        return (
          <>
            <Hero lang={lang} />
            <About lang={lang} />
            <Skills lang={lang} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Centered pill header navbar */}
      <div className="flex justify-center w-full">
        <Navbar
          lang={lang}
          setLang={setLang}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currentPath={currentPath}
        />
      </div>

      {/* Main Page Content */}
      <main className="flex-grow pt-8">{renderCurrentPage()}</main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-zinc-900/10 py-10 text-center text-xs space-y-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright details */}
          <div className="text-slate-400 dark:text-slate-500 font-medium">
            <span>© 2026 {t.copyright}</span>
          </div>

          {/* Footer Social link pills */}
          <div className="flex items-center space-x-3">
            <a
              href={PORTFOLIO_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#ff6b00] dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>
            <a
              href={PORTFOLIO_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#ff6b00] dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
