import React from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';
import { PORTFOLIO_CONFIG } from '../config';
import { Layers, Server, Cpu } from 'lucide-react';

interface SkillsProps {
  lang: Language;
}

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const t = translations[lang].skills;

  // Filter skills by category
  const frontendSkills = PORTFOLIO_CONFIG.skills.filter(
    (s) => s.category === 'Frontend',
  );
  const backendSkills = PORTFOLIO_CONFIG.skills.filter(
    (s) => s.category === 'Backend',
  );
  const aiToolsSkills = PORTFOLIO_CONFIG.skills.filter(
    (s) => s.category === 'AI/Tools',
  );

  const categories = [
    {
      title: t.frontend,
      icon: <Layers className="text-[#ff6b00]" size={24} />,
      skills: frontendSkills,
    },
    {
      title: t.backend,
      icon: <Server className="text-[#ff6b00]" size={24} />,
      skills: backendSkills,
    },
    {
      title: t.aiTools,
      icon: <Cpu className="text-[#ff6b00]" size={24} />,
      skills: aiToolsSkills,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-50 dark:bg-gray-900/40 border-y border-slate-200/60 dark:border-slate-800/40 text-left relative scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 reveal">
          <p className="text-[#ff6b00] text-sm font-semibold uppercase tracking-widest mb-2">
            {lang === 'en' ? 'Expertise' : 'Keahlian'}
          </p>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            {t.title}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            {t.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-[16px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-[#ff6b00]/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-sm shadow-[0_2px_12px_rgba(0,0,0,0.02)] dark:shadow-none flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-900 pb-4">
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags Grid */}
              <div className="flex flex-col gap-3 flex-grow">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-850 hover:border-[#ff6b00]/25 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-150 flex flex-col"
                  >
                    <span className="font-bold text-sm text-slate-850 dark:text-slate-200">
                      {skill.name}
                    </span>
                    {skill.description && (
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 font-mono">
                        {skill.description}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
