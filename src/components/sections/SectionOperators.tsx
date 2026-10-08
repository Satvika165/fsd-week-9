import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { mongoOperatorsList } from '../../data/operatorsData';
import { Search, Filter, Copy, Check } from 'lucide-react';

export const SectionOperators: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'comparison' | 'logical' | 'array'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedOp, setCopiedOp] = useState<string | null>(null);

  const filteredOperators = mongoOperatorsList.filter(op => {
    const matchesCategory = selectedCategory === 'all' || op.category === selectedCategory;
    const matchesSearch =
      op.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (query: string, op: string) => {
    navigator.clipboard.writeText(query);
    setCopiedOp(op);
    setTimeout(() => setCopiedOp(null), 2000);
  };

  return (
    <section id="operators-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 10"
          title="MongoDB Query &amp; Projection Operators"
          subtitle="Special symbols informing the query engine to execute comparative, logical, and array-matching operations across document collections."
          icon={<Filter className="h-3.5 w-3.5" />}
        />

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700/60 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-900 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              All ({mongoOperatorsList.length})
            </button>
            <button
              onClick={() => setSelectedCategory('comparison')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'comparison'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-900 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              Comparison (8)
            </button>
            <button
              onClick={() => setSelectedCategory('logical')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'logical'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-900 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              Logical (4)
            </button>
            <button
              onClick={() => setSelectedCategory('array')}
              className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === 'array'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-900 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              Array (3)
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Filter operators ($gt, $or, $all)..."
              className="w-full rounded-xl bg-white dark:bg-slate-900 px-3 py-2 pl-9 text-xs text-slate-800 dark:text-slate-200 border border-blue-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-blue-500" />
          </div>
        </div>

        {/* Operators Table */}
        <div className="overflow-x-auto rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-blue-200 dark:border-slate-800 bg-blue-50/80 dark:bg-slate-800/60 font-bold text-blue-950 dark:text-slate-300">
                <th className="p-3.5">Operator</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5">Meaning &amp; Description</th>
                <th className="p-3.5 font-mono">Example Query Syntax</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filteredOperators.map(op => (
                <tr key={op.operator} className="hover:bg-blue-50/40 dark:hover:bg-slate-800/40">
                  <td className="p-3.5 font-mono text-blue-700 dark:text-blue-400 font-black whitespace-nowrap text-sm">
                    {op.operator}
                  </td>
                  <td className="p-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-slate-700">
                      {op.category}
                    </span>
                  </td>
                  <td className="p-3.5 max-w-xs">
                    <span className="font-bold text-blue-950 dark:text-white block mb-0.5">
                      {op.meaning}
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">
                      {op.description}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <div className="flex items-center gap-2 group">
                      <code className="p-2 rounded-xl bg-slate-950 text-slate-200 font-mono text-[11px] block overflow-x-auto whitespace-nowrap max-w-sm border border-slate-800">
                        {op.exampleQuery}
                      </code>
                      <button
                        onClick={() => handleCopy(op.exampleQuery, op.operator)}
                        className="p-1.5 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
                        title="Copy query"
                      >
                        {copiedOp === op.operator ? (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOperators.length === 0 && (
          <div className="text-center py-10 bg-white dark:bg-slate-900 rounded-2xl border border-blue-100 dark:border-slate-800 mt-2 text-slate-500 text-xs">
            No operators match "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
