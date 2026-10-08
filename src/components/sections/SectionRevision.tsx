import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { quickRevisionCards } from '../../data/revisionData';
import { Bookmark, CheckCircle2 } from 'lucide-react';

export const SectionRevision: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Transactions', 'Security', 'Testing', 'Databases', 'Distributed Systems', 'MongoDB'];

  const filteredCards = selectedCategory === 'All'
    ? quickRevisionCards
    : quickRevisionCards.filter(c => c.category === selectedCategory);

  return (
    <section id="revision-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 12"
          title="Quick Revision Mode"
          subtitle="Distilled high-yield revision cards designed for rapid exam review, concept retention, and final syllabus recap."
          icon={<Bookmark className="h-3.5 w-3.5" />}
        />

        {/* Filter Badges */}
        <div className="flex items-center gap-1.5 flex-wrap mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-blue-950 dark:text-slate-300 border border-blue-200 dark:border-slate-700 hover:bg-blue-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Revision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCards.map(card => (
            <div
              key={card.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-blue-400 dark:hover:border-blue-900 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                    {card.category}
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-blue-950 dark:text-white mb-3">
                  {card.title}
                </h4>

                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 mb-4">
                  {card.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-800 text-xs text-blue-950 dark:text-slate-400 italic">
                &ldquo;{card.quickSummary}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
