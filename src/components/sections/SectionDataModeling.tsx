import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CodeBlock } from '../ui/CodeBlock';
import {
  dataModelingOverview,
  embeddedModelData,
  normalizedModelData
} from '../../data/dataModelingData';
import { Layers, Split, CheckCircle2, AlertTriangle } from 'lucide-react';

export const SectionDataModeling: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'embedded' | 'normalized'>('embedded');

  return (
    <section id="modeling-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 07"
          title="MongoDB Data Modeling: Embedded vs. Normalized"
          subtitle="Architecting document schemas for performance: choosing between nested de-normalized documents and referenced relational collections."
          icon={<Split className="h-3.5 w-3.5" />}
        />

        {/* Overview Header */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm mb-8">
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3 font-medium">
            {dataModelingOverview.definition}
          </p>
          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-xs text-blue-950 dark:text-blue-300 font-bold">
            {dataModelingOverview.decisionRule}
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('embedded')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border ${
              activeTab === 'embedded'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                : 'bg-white dark:bg-slate-900 border-blue-200 dark:border-slate-800 text-blue-950 dark:text-slate-300 hover:bg-blue-50'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Embedded Data Model (De-normalized)</span>
          </button>

          <button
            onClick={() => setActiveTab('normalized')}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 border ${
              activeTab === 'normalized'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                : 'bg-white dark:bg-slate-900 border-blue-200 dark:border-slate-800 text-blue-950 dark:text-slate-300 hover:bg-blue-50'
            }`}
          >
            <Split className="h-4 w-4" />
            <span>Normalized Data Model (Referenced)</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'embedded' ? (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
              <h4 className="text-base font-extrabold text-blue-950 dark:text-white mb-2">
                {embeddedModelData.title}
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                {embeddedModelData.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-2">
                    Key Advantages:
                  </span>
                  <ul className="space-y-2">
                    {embeddedModelData.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-amber-700 dark:text-amber-400 block mb-2">
                    Trade-offs:
                  </span>
                  <ul className="space-y-2">
                    {embeddedModelData.tradeoffs.map((tro, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-400">
                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{tro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-blue-950 dark:text-slate-300 mb-1">
                Embedded Employee Document JSON Sample (Single Document):
              </div>
              <CodeBlock
                code={embeddedModelData.codeSnippet}
                language="json"
                title="Single Embedded Employee Record"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
              <h4 className="text-base font-extrabold text-blue-950 dark:text-white mb-2">
                {normalizedModelData.title}
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                {normalizedModelData.description}
              </p>

              {/* When to Use Normalized Model Callout */}
              <div className="mb-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs">
                <span className="font-bold text-blue-950 dark:text-blue-300 block mb-2 uppercase tracking-wider text-[11px]">
                  When to use Normalized Data Models (Textbook Rule):
                </span>
                <ul className="space-y-1.5 text-slate-800 dark:text-slate-300">
                  {normalizedModelData.whenToUse.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">{idx + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-2">
                    Advantages:
                  </span>
                  <ul className="space-y-2">
                    {normalizedModelData.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-amber-700 dark:text-amber-400 block mb-2">
                    Trade-offs:
                  </span>
                  <ul className="space-y-2">
                    {normalizedModelData.tradeoffs.map((tro, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-400">
                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{tro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-blue-950 dark:text-slate-300 mb-1">
                Referenced Normalized Collections (Linked via <code className="font-mono text-blue-600 dark:text-blue-400">empDocID</code>):
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {normalizedModelData.codeSnippets.map(snippet => (
                  <CodeBlock
                    key={snippet.collection}
                    code={snippet.code}
                    language="json"
                    title={snippet.collection}
                    showLineNumbers={false}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
