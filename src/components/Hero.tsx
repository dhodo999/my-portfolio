import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';
import { ArrowRight, Mail } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;
  const words = t.typingTitles;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
          return;
        }
      }

      const speed = isDeleting ? 75 : 150;
      setTypingSpeed(speed);
      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed]);

  const handleCtaClick = () => {
    window.location.hash = '#/contact';
  };

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] pt-28 pb-16 overflow-hidden max-w-4xl mx-auto px-6 text-center select-none z-10">
      <div className="space-y-8 w-full">
        {/* Profile Image, Name, and Title Block */}
        <div className="space-y-4 reveal">
          {/* Avatar Container */}
          <div className="relative size-28 sm:size-32 mx-auto rounded-full ring-4 ring-[#ff6b00]/10 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center bg-slate-50 dark:bg-zinc-900 overflow-hidden shadow-lg select-none">
            <img
              src="/pic/dhodo.JPG"
              alt="Afridho Nur Zaki"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = parent.querySelector('.avatar-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />
            <svg
              className="avatar-fallback hidden size-16 text-slate-400 dark:text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          {/* Name */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-850 dark:text-white tracking-tight">
            {PORTFOLIO_CONFIG.name}
          </h2>

          {/* Tagline Subtitle */}
          <p className="text-xs sm:text-sm font-semibold text-[#ff6b00] tracking-wide font-mono">
            Full Stack Developer | AI Enthusiast | AI Engineer
          </p>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-150 bg-green-50/50 dark:border-green-900/30 dark:bg-green-950/20 text-green-700 dark:text-green-400 text-xs sm:text-sm font-semibold mb-2 animate-fade-in shadow-sm shadow-green-100/5 dark:shadow-none reveal">
          <span className="size-2 bg-green-500 rounded-full animate-pulse" />
          <span>{t.available}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] reveal">
          <span className="block font-medium text-slate-400 dark:text-slate-500 text-lg sm:text-xl md:text-2xl mb-1.5 uppercase tracking-widest font-mono">
            {t.greeting}
          </span>
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 dark:from-white dark:via-slate-100 dark:to-indigo-300 bg-clip-text text-transparent block py-2">
            {currentText}
            <span className="inline-block w-1 h-8 ml-1 bg-indigo-650 dark:bg-indigo-400 animate-blink align-middle" />
          </span>
        </h1>

        {/* Quote Block */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-zinc-900/20 max-w-lg mx-auto font-medium text-slate-550 dark:text-slate-400 italic text-sm sm:text-base shadow-sm shadow-slate-100/30 dark:shadow-none reveal">
          <span>“ {t.quote} ”</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 reveal">
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 text-sm font-semibold transition-all duration-150 active:scale-95 shadow-md shadow-slate-950/10 dark:shadow-none cursor-pointer w-full sm:w-auto"
          >
            <span>{t.cta}</span>
            <ArrowRight size={14} />
          </button>

          <a
            href={`mailto:${PORTFOLIO_CONFIG.email}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-all duration-150 active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <Mail size={14} className="text-[#ff6b00]" />
            <span>{lang === 'en' ? 'Email Me' : 'Kirim Email'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
