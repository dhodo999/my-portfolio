import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';
import { PORTFOLIO_CONFIG } from '../config';
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  RefreshCw,
  FolderGit2,
} from 'lucide-react';

interface ProjectsProps {
  lang: Language;
}

interface GHRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = translations[lang].projects;

  const [activeFilter, setActiveFilter] = useState<
    'All' | 'Web' | 'Desktop/AI' | 'Mobile'
  >('All');
  const [myRepos, setMyRepos] = useState<GHRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Helper to categorize GitHub repositories dynamically
  const getCategoryFromRepo = (
    repo: GHRepo,
  ): 'Web' | 'Desktop/AI' | 'Mobile' => {
    const langName = (repo.language || '').toLowerCase();
    const topics = repo.topics || [];

    if (
      topics.includes('mobile') ||
      topics.includes('android') ||
      topics.includes('ios') ||
      langName === 'kotlin' ||
      langName === 'swift' ||
      langName === 'dart'
    ) {
      return 'Mobile';
    }

    if (
      langName === 'java' ||
      langName === 'c#' ||
      langName === 'python' ||
      langName === 'c++' ||
      langName === 'c' ||
      topics.includes('ai') ||
      topics.includes('desktop') ||
      topics.includes('machine-learning')
    ) {
      return 'Desktop/AI';
    }

    return 'Web';
  };

  // Fetch GitHub repos automatically on mount
  useEffect(() => {
    const fetchMyRepos = async () => {
      setIsLoading(true);
      setFetchError(false);
      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(PORTFOLIO_CONFIG.githubUsername)}/repos?sort=updated&per_page=30`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data: GHRepo[] = await response.json();
        // Filter out the profile readme repo (same name as username)
        const filteredData = data.filter(
          (repo) =>
            repo.name.toLowerCase() !==
            PORTFOLIO_CONFIG.githubUsername.toLowerCase(),
        );
        setMyRepos(filteredData);
      } catch (err) {
        console.error(err);
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyRepos();
  }, []);

  const handleFilterChange = (
    filter: 'All' | 'Web' | 'Desktop/AI' | 'Mobile',
  ) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to page 1 on filter switch
  };

  // Trigger scroll reveal updates whenever loading state, filters, or page count changes
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, 150);
    return () => clearTimeout(timer);
  }, [isLoading, activeFilter, currentPage]);

  // Filter repositories based on active filter
  const filteredRepos = myRepos.filter((repo) => {
    if (activeFilter === 'All') return true;
    return getCategoryFromRepo(repo) === activeFilter;
  });

  // Calculate Paginated items
  const totalPages = Math.ceil(filteredRepos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section
      id="projects"
      className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 scroll-mt-16 text-left max-w-4xl mx-auto px-6"
    >
      {/* Title */}
      <div className="mb-8 reveal">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FolderGit2 className="text-[#ff6b00]" size={24} />
          <span>{t.title}</span>
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-lg leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-1.5 mb-8 reveal">
        {[
          { key: 'All', label: t.filterAll },
          { key: 'Web', label: t.filterWeb },
          { key: 'Desktop/AI', label: t.filterDesktopAI },
          { key: 'Mobile', label: t.filterMobile },
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => handleFilterChange(btn.key as any)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              activeFilter === btn.key
                ? 'bg-slate-800 text-white border-slate-800 dark:bg-zinc-800 dark:border-zinc-800'
                : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-white'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <RefreshCw size={32} className="text-[#ff6b00] animate-spin mb-3" />
          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
            Fetching dynamic repositories from GitHub...
          </p>
        </div>
      )}

      {/* Fetch Error Fallback (Render static projects from config) */}
      {!isLoading && fetchError && (
        <div className="space-y-6">
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-250 dark:border-amber-900/30 text-amber-700 dark:text-amber-400 rounded-xl text-xs font-mono">
            Notice: GitHub API rate limit reached or offline. Loading local
            featured backup projects.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
            {PORTFOLIO_CONFIG.projects
              .filter(
                (p) => activeFilter === 'All' || p.category === activeFilter,
              )
              .map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-850 hover:border-slate-350 dark:hover:border-slate-750 duration-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-855 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {lang === 'en'
                        ? project.descriptionEN
                        : project.descriptionID}
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-medium bg-slate-50 dark:bg-slate-955 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-zinc-800 px-3 py-1.5 text-xs font-semibold flex-1 transition-all"
                        >
                          <ExternalLink size={12} />
                          <span>{t.demoUrl}</span>
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-zinc-800 px-3 py-1.5 text-xs font-semibold flex-1 transition-all"
                      >
                        <Github size={12} />
                        <span>{t.githubUrl}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Main Dynamically Hydrated GitHub Grid */}
      {!isLoading && !fetchError && currentRepos.length === 0 && (
        <div className="text-center py-12 text-slate-400 dark:text-slate-500 font-mono text-sm">
          No repositories found in this category.
        </div>
      )}

      {!isLoading && !fetchError && currentRepos.length > 0 && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal animate-fade-in">
            {currentRepos.map((repo) => {
              const category = getCategoryFromRepo(repo);
              return (
                <div
                  key={repo.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-850 hover:border-slate-300 dark:hover:border-slate-750 duration-200 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500">
                        {category === 'Desktop/AI'
                          ? t.filterDesktopAI
                          : category === 'Web'
                            ? t.filterWeb
                            : category === 'Mobile'}
                      </span>
                      {repo.language && (
                        <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-850 dark:text-white truncate">
                      {repo.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-[40px] line-clamp-3">
                      {repo.description || 'No description provided.'}
                    </p>
                  </div>

                  <div className="mt-4 space-y-4">
                    {/* Repo metrics */}
                    <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 dark:text-slate-505">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-amber-500" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork
                          size={12}
                          className="text-slate-400 dark:text-slate-550"
                        />
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>

                    {/* Outlined Action Buttons */}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-zinc-800 px-3 py-1.5 text-xs font-semibold flex-1 transition-all text-slate-700 dark:text-slate-300"
                        >
                          <ExternalLink size={12} />
                          <span>{t.demoUrl}</span>
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-zinc-800 px-3 py-1.5 text-xs font-semibold flex-1 transition-all text-slate-700 dark:text-slate-300"
                      >
                        <Github size={12} />
                        <span>{t.githubUrl}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 reveal">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Previous' : 'Sebelumnya'}
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`size-8 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                      currentPage === page
                        ? 'bg-slate-800 border-slate-800 text-white dark:bg-zinc-800 dark:border-zinc-800'
                        : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Next' : 'Berikutnya'}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
