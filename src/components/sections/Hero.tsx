import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative pt-10 pb-14 sm:pb-16 overflow-hidden bg-gradient-to-b from-blue-50/70 via-[#f8fbff] to-[#f8fbff] dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950 border-b border-blue-100/60 dark:border-slate-800">
      {/* Subtle blue background decorative blurs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-200/30 via-sky-200/20 to-blue-100/40 blur-3xl pointer-events-none -z-10 rounded-full dark:opacity-20" />

      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Academic Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 mb-6 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>Full Stack Development • Diploma Engineering</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-blue-950 dark:text-white leading-tight">
          Full Stack Development <span className="text-blue-600 dark:text-blue-400">— Week 9</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-xl font-semibold text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Spring Security <span className="text-blue-500">•</span> JUnit <span className="text-blue-500">•</span> NoSQL <span className="text-blue-500">•</span> MongoDB
        </p>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          An interactive educational portal converting textbook chapters and lecture notes into modular concepts, interactive architecture visualizers, verified code suites, and exam preparation.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => scrollTo('acid-section')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Learning</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={() => scrollTo('revision-section')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-blue-50/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-blue-900 dark:text-blue-300 text-sm font-bold border border-blue-200 dark:border-slate-700 shadow-xs transition-all"
          >
            <span>Quick Revision</span>
          </button>

          <button
            onClick={() => scrollTo('quiz-section')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/50 dark:hover:bg-blue-900/60 text-blue-800 dark:text-blue-300 text-sm font-bold border border-blue-200 dark:border-blue-800/60 transition-all"
          >
            <span>Practice Quiz (15 MCQs)</span>
          </button>
        </div>

        {/* Quick Highlights Metric Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
            <div className="text-blue-600 dark:text-blue-400 font-extrabold text-xl font-mono">17+</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-0.5">Syllabus Topics</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
            <div className="text-blue-600 dark:text-blue-400 font-extrabold text-xl font-mono">15 MCQs</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-0.5">Interactive Quiz</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
            <div className="text-blue-600 dark:text-blue-400 font-extrabold text-xl font-mono">10 Marks</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-0.5">Exam Solutions</div>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
            <div className="text-blue-600 dark:text-blue-400 font-extrabold text-xl font-mono">100%</div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-0.5">Source Fidelity</div>
          </div>
        </div>
      </div>
    </section>
  );
};
