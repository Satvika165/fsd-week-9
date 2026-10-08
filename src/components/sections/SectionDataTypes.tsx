import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CodeBlock } from '../ui/CodeBlock';
import { mongoDataTypesList, completeDocumentExample } from '../../data/dataTypesData';
import { Braces, FileJson } from 'lucide-react';

export const SectionDataTypes: React.FC = () => {
  const [activeTypeName, setActiveTypeName] = useState<string>('String');

  return (
    <section id="datatypes-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 09"
          title="MongoDB Data Types &amp; BSON Representation"
          subtitle="Understanding MongoDB's rich BSON types that enable high-efficiency disk storage and robust polymorphic query execution."
          icon={<Braces className="h-3.5 w-3.5" />}
        />

        {/* Data Types Grid Selector */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-blue-950 dark:text-white">
              Supported Data Types
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Click a data type to inspect its definition and syntax
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {mongoDataTypesList.map(dt => {
              const isSelected = activeTypeName === dt.name;
              return (
                <button
                  key={dt.name}
                  onClick={() => setActiveTypeName(dt.name)}
                  className={`p-2.5 rounded-xl text-center border font-mono text-xs font-bold transition-all truncate ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border-blue-100 dark:border-slate-800 text-blue-950 dark:text-slate-300 hover:bg-blue-50/50 hover:border-blue-300'
                  }`}
                >
                  {dt.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Data Type Details Card */}
        {(() => {
          const current = mongoDataTypesList.find(d => d.name === activeTypeName)!;
          return (
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/60 shadow-sm mb-10 animate-in fade-in duration-150">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-blue-50 dark:border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-base font-black text-blue-700 dark:text-blue-400">
                    Type: {current.name}
                  </span>
                </div>
                <div className="font-mono text-xs text-blue-800 dark:text-slate-400 bg-blue-50 dark:bg-slate-800 px-3 py-1 rounded-lg border border-blue-200 dark:border-slate-700 font-bold">
                  {current.sampleValue}
                </div>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {current.description}
              </p>

              <div>
                <span className="text-[11px] font-bold text-blue-900 dark:text-slate-400 uppercase tracking-wider block mb-1">
                  Example Field Definition in Document:
                </span>
                <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-emerald-400 border border-slate-800">
                  {current.codeSnippet}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Complete Product Document Example from Notes Page 17 */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-bold text-blue-950 dark:text-white flex items-center gap-2">
              <FileJson className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Comprehensive Multi-Type Document Sample (From Notes Page 17)</span>
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
            This realistic product catalog document demonstrates String, Integer, Double, Boolean, Array, Embedded Object, ISODate, Timestamp, and BinData in a single BSON document.
          </p>
          <CodeBlock
            code={completeDocumentExample}
            language="json"
            title="product_catalog_sample.json"
          />
        </div>
      </div>
    </section>
  );
};
