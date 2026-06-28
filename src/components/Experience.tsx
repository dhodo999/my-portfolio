import React from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';
import { Calendar, MapPin, Briefcase, Trophy } from 'lucide-react';

interface ExperienceProps {
  lang: Language;
}

const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const t = translations[lang].experience;

  return (
    <section
      id="experience"
      className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 scroll-mt-16 text-left max-w-4xl mx-auto px-6"
    >
      {/* Title */}
      <div className="mb-10 reveal">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>{t.title}</span>
        </h2>
      </div>

      {/* Sub-Section 1: Competitions & Awards */}
      <div className="space-y-8 mb-16 relative">
        <h3 className="text-lg font-extrabold text-slate-850 dark:text-white border-b border-slate-100 dark:border-slate-850 pb-3 reveal">
          {t.awardsTitle}
        </h3>

        <div className="relative pl-8 space-y-12 ml-4">
          {/* Mathematically Centered Timeline Line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800" />

          {t.awards.map((entry, idx) => (
            <div key={idx} className="relative reveal">
              {/* Dot marker - aligned perfectly with the left line */}
              <span className="absolute -left-8 top-1.5 flex items-center justify-center size-5 rounded-full bg-white dark:bg-slate-950 border-2 border-[#ff6b00] z-10 shadow-sm shadow-[#ff6b00]/10">
                <span className="size-1.5 rounded-full bg-[#ff6b00]" />
              </span>

              {/* Content card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-850 hover:border-slate-350 dark:hover:border-slate-750 duration-200 shadow-sm shadow-slate-100/50 dark:shadow-none space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-850 dark:text-white flex items-center gap-2">
                      <Trophy size={16} className="text-[#ff6b00]" />
                      <span>{entry.title}</span>
                    </h4>
                    <span className="text-sm font-semibold text-[#ff6b00] block mt-0.5">
                      {entry.category}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono flex items-center gap-1.5 shrink-0">
                    <Calendar size={12} />
                    <span>{entry.duration}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Section 2: Work Experience */}
      <div className="space-y-8 relative">
        <h3 className="text-lg font-extrabold text-slate-850 dark:text-white border-b border-slate-100 dark:border-slate-850 pb-3 reveal">
          {t.workTitle}
        </h3>

        <div className="relative pl-8 space-y-12 ml-4">
          {/* Mathematically Centered Timeline Line */}
          <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800" />

          {t.work.map((entry, idx) => (
            <div key={idx} className="relative reveal">
              {/* Dot marker - aligned perfectly with the left line */}
              <span className="absolute -left-8 top-1.5 flex items-center justify-center size-5 rounded-full bg-white dark:bg-slate-950 border-2 border-[#ff6b00] z-10 shadow-sm shadow-[#ff6b00]/10">
                <span className="size-1.5 rounded-full bg-[#ff6b00]" />
              </span>

              {/* Content card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-750 duration-200 shadow-sm shadow-slate-100/50 dark:shadow-none space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-850 dark:text-white flex items-center gap-2">
                      <Briefcase size={16} className="text-[#ff6b00]" />
                      <span>{entry.role}</span>
                    </h4>
                    <span className="text-sm font-semibold text-[#ff6b00] block mt-0.5">
                      {entry.company}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 dark:text-slate-500 font-mono space-y-1 text-left sm:text-right shrink-0">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Calendar size={12} />
                      <span>{entry.duration}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin size={12} />
                      <span>{entry.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="list-none space-y-3 text-sm text-slate-650 dark:text-slate-400 pl-1 leading-relaxed">
                  {entry.points.map((pt, pIdx) => {
                    const parts = pt.split(' — ');
                    if (parts.length > 1) {
                      return (
                        <li key={pIdx} className="relative pl-5">
                          <span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                          <strong className="text-slate-800 dark:text-slate-200">
                            {parts[0]}
                          </strong>{' '}
                          — {parts[1]}
                        </li>
                      );
                    }
                    return (
                      <li key={pIdx} className="relative pl-5">
                        <span className="absolute left-0 top-2 size-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                        {pt}
                      </li>
                    );
                  })}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
