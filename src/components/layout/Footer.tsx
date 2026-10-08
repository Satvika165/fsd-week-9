import React from 'react';
import { ArrowUp, BookOpen, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-50 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-blue-950 dark:text-white">
                FSD Week 9 — Interactive Learning Portal
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Full Stack Development • Diploma Curriculum Comprehensive Study Companion
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-blue-800 dark:text-slate-300 bg-blue-50 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all border border-blue-200 dark:border-slate-700 shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Faithfully constructed from <strong>WEEK 9.pdf</strong> &amp; <strong>FSD WEEK-09 NOTES.pdf</strong></span>
          </div>
          <div>
            Diploma Engineering Education • White &amp; Blue Academic Design System
          </div>
        </div>
      </div>
    </footer>
  );
};
