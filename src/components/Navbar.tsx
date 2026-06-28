import React from 'react';
import { Sun, Moon, Github, Linkedin, FileText } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../translations';
import { PORTFOLIO_CONFIG } from '../config';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  currentPath,
}) => {
  const t = translations[lang].nav;

  const navLinks = [
    { label: t.home, href: '#/' },
    { label: t.projects, href: '#/projects' },
    { label: t.experience, href: '#/experience' },
  ];

  const handleLinkClick = (href: string) => {
    window.location.hash = href;
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-3xl w-[92%] sm:w-auto flex items-center justify-between bg-slate-100/90 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-slate-800/80 px-3 sm:px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md h-12">
      {/* Navigation Links */}
      <nav className="flex items-center space-x-1 sm:space-x-2">
        {navLinks.map((link) => {
          const isActive =
            currentPath === link.href ||
            (link.href === '#/' &&
              (currentPath === '' || currentPath === '#/'));
          return (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`px-2.5 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer select-none ${
                isActive
                  ? 'bg-slate-700 text-white dark:bg-zinc-800'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-zinc-800/50'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      {/* Actions (Socials, Resume, Theme, Lang) */}
      <div className="flex items-center space-x-1.5 sm:space-x-3 border-l border-slate-200/60 dark:border-slate-800/60 pl-2 sm:pl-4 ml-1 sm:ml-2">
        {/* GitHub Icon */}
        <a
          href={PORTFOLIO_CONFIG.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={16} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href={PORTFOLIO_CONFIG.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={16} />
        </a>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
          className="px-1 py-0.5 text-[10px] font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded border border-slate-350 dark:border-slate-800 transition-colors cursor-pointer select-none"
          title={lang === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
        >
          {lang.toUpperCase()}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Resume Button */}
        <a
          href={PORTFOLIO_CONFIG.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full bg-white dark:bg-zinc-950 shadow-sm"
        >
          <FileText size={12} />
          <span>{t.resume}</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
