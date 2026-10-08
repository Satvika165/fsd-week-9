import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, Hash } from 'lucide-react';
import { searchIndex, SearchItem } from '../../data/searchData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setResults(searchIndex.slice(0, 5));
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value.toLowerCase().trim();
    setQuery(e.target.value);

    if (!q) {
      setResults(searchIndex.slice(0, 5));
      return;
    }

    const filtered = searchIndex.filter(item => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some(k => k.toLowerCase().includes(q))
      );
    });
    setResults(filtered);
  };

  const handleSelect = (targetSection: string) => {
    onClose();
    const elem = document.getElementById(targetSection);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl transform rounded-2xl bg-white dark:bg-slate-900 p-4 sm:p-6 shadow-2xl transition-all border border-slate-200 dark:border-slate-800 z-10">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Search className="h-5 w-5" />
            <span className="font-semibold text-sm">Quick Search</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Input */}
        <div className="relative my-4">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search topics, operators, code, ACID, JUnit, CAP..."
            className="w-full rounded-xl bg-slate-50 dark:bg-slate-800/80 px-4 py-3 pl-11 text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-200 dark:border-slate-700"
          />
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
          {query && (
            <button
              onClick={() => { setQuery(''); setResults(searchIndex.slice(0, 5)); }}
              className="absolute right-3.5 top-3.5 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
          {results.length > 0 ? (
            results.map(item => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.targetSection)}
                className="w-full text-left p-3 rounded-xl border border-transparent hover:border-blue-200 dark:hover:border-blue-900/60 bg-slate-50/60 dark:bg-slate-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all flex items-start justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/80 text-blue-700 dark:text-blue-300">
                      {item.category}
                    </span>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all mt-2 shrink-0 ml-2" />
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-sm text-slate-500 dark:text-slate-400">
              No direct matches found for "{query}". Try keywords like <span className="text-blue-600 dark:text-blue-400">ACID</span>, <span className="text-blue-600 dark:text-blue-400">CAP</span>, <span className="text-blue-600 dark:text-blue-400">mongosh</span>, or <span className="text-blue-600 dark:text-blue-400">JUnit</span>.
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>Navigate to any topic instantly</span>
          <span className="flex items-center gap-1 font-mono">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};
