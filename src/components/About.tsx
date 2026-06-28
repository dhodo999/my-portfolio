import React from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';
import { PORTFOLIO_CONFIG } from '../config';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;

  // List of tech icons and labels to render in the scroll marquee
  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'PHP',
    'Laravel',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'C#',
    'WPF',
    'FastAPI',
    'Python',
    'PyTorch',
    'Docker',
    'Git',
    'Bun',
    'Rsbuild',
    'Unity',
  ];

  return (
    <section
      id="about"
      className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 scroll-mt-16 text-left max-w-4xl mx-auto px-6"
    >
      {/* Bio / About Intro */}
      <div className="reveal">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
          <span>{t.title}</span>
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
          <p>
            {t.paragraph3} Follow my updates on{' '}
            <a
              href={PORTFOLIO_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff6b00] hover:underline font-semibold"
            >
              {t.linkedinLink}
            </a>
            .
          </p>
        </div>
      </div>

      {/* Tech Scroll Marquee Container */}
      <div className="my-16 py-10 border-y border-slate-200/80 dark:border-slate-800/60 relative overflow-hidden select-none bg-slate-50/50 dark:bg-zinc-900/10 rounded-2xl reveal">
        <div className="px-6 mb-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#ff6b00]">
            {t.techTitle}
          </h3>
        </div>
        <div className="relative flex overflow-x-hidden pt-2">
          {/* Scroll wrapper */}
          <div className="animate-infinite-scroll flex gap-12 text-sm font-semibold tracking-wide text-slate-550 dark:text-slate-400 font-mono whitespace-nowrap">
            {/* Render stack items */}
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="hover:text-[#ff6b00] transition-colors cursor-pointer select-none"
              >
                {tech}
              </span>
            ))}
            {/* Duplicate list to enable loop alignment */}
            {techStack.map((tech, idx) => (
              <span
                key={`dup-${idx}`}
                className="hover:text-[#ff6b00] transition-colors cursor-pointer select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
