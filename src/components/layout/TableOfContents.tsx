import React, { useEffect, useState } from 'react';
import { ListChecks } from 'lucide-react';

interface TocItem {
  id: string;
  number: string;
  title: string;
}

const tocItems: TocItem[] = [
  { id: 'acid-section', number: '01', title: 'ACID Transactions' },
  { id: 'security-section', number: '02', title: 'Spring Security' },
  { id: 'junit-section', number: '03', title: 'JUnit Testing' },
  { id: 'nosql-section', number: '04', title: 'NoSQL & 4 Types' },
  { id: 'cap-base-section', number: '05', title: 'CAP & BASE' },
  { id: 'mongodb-section', number: '06', title: 'MongoDB Core' },
  { id: 'modeling-section', number: '07', title: 'Data Modeling' },
  { id: 'tools-section', number: '08', title: 'MongoDB Tools' },
  { id: 'datatypes-section', number: '09', title: 'Data Types' },
  { id: 'operators-section', number: '10', title: 'Operators' },
  { id: 'comparison-section', number: '11', title: 'MySQL vs Mongo' },
  { id: 'revision-section', number: '12', title: 'Quick Revision' },
  { id: 'quiz-section', number: '13', title: 'Interactive Quiz' },
  { id: 'questions-section', number: '14', title: 'Exam Questions' },
];

export const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('acid-section');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 rounded-2xl border border-blue-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-2 border-b border-blue-50 dark:border-slate-800 text-xs font-bold text-blue-950 dark:text-slate-200 uppercase tracking-wider">
          <ListChecks className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span>Chapter Index</span>
        </div>

        <nav className="space-y-1 text-xs max-h-[calc(100vh-12rem)] overflow-y-auto pr-1">
          {tocItems.map(item => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-bold border-l-2 border-blue-600 dark:border-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-slate-200 hover:bg-blue-50/50 dark:hover:bg-slate-800/40'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive ? 'text-blue-600 dark:text-blue-400 font-extrabold' : 'text-slate-400'}`}>
                  {item.number}
                </span>
                <span className="truncate">{item.title}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
