import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { importantQuestionsList } from '../../data/questionsData';
import { ChevronDown, ChevronUp, Award, CheckCircle2 } from 'lucide-react';

export const SectionQuestions: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<{ [id: string]: boolean }>({
    'exam-1': true,
    'exam-2': true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = filterType === 'all'
    ? importantQuestionsList
    : importantQuestionsList.filter(q => q.type === filterType);

  return (
    <section id="questions-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 14"
          title="Important Questions &amp; Weekly Assignments"
          subtitle="Curated university examination questions (including 10-mark recurring problems), conceptual short questions, and coding assignments."
          icon={<Award className="h-3.5 w-3.5" />}
        />

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap mb-8">
          {[
            { label: 'All Questions', val: 'all' },
            { label: '10 Marks Exam Questions', val: 'exam' },
            { label: 'Short Answer', val: 'short' },
            { label: 'Long Answer', val: 'long' },
            { label: 'Practical / Coding', val: 'practical' }
          ].map(f => (
            <button
              key={f.val}
              onClick={() => setFilterType(f.val)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterType === f.val
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-blue-950 dark:text-slate-300 border border-blue-200 dark:border-slate-800 hover:bg-blue-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map(item => {
            const isExpanded = !!expandedIds[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all"
              >
                {/* Question Header Bar */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 cursor-pointer flex items-start justify-between gap-4 hover:bg-blue-50/40 dark:hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {item.marks && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                          {item.marks} MARKS
                        </span>
                      )}
                      {item.examAppearance && (
                        <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                          {item.examAppearance}
                        </span>
                      )}
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {item.type}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-blue-950 dark:text-white pt-1">
                      {item.question}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {item.solutionSummary}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="p-1 rounded-lg text-slate-400 hover:text-blue-600 dark:hover:text-slate-200 shrink-0 mt-1"
                    aria-label="Toggle answer"
                  >
                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                </div>

                {/* Expanded Solution View */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-blue-50 dark:border-slate-800 bg-blue-50/30 dark:bg-slate-950/30 animate-in fade-in duration-150">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider mb-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Model Answer / Technical Solution:</span>
                    </div>
                    <pre className="whitespace-pre-wrap font-sans text-xs text-slate-800 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl border border-blue-100 dark:border-slate-800">
                      {item.detailedAnswer}
                    </pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
