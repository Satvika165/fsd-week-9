import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { nosqlOverview, nosqlTypes } from '../../data/nosqlData';
import {
  Database,
  History,
  Layers,
  Server,
  CheckCircle2,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const SectionNoSql: React.FC = () => {
  const [activeTypeId, setActiveTypeId] = useState<string>('key-value');

  return (
    <section id="nosql-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 04"
          title="Introduction to NoSQL & The 4 Database Types"
          subtitle="Non-relational, horizontally scalable data stores built to overcome rigid schema and join bottlenecks in modern distributed applications."
          icon={<Database className="h-3.5 w-3.5" />}
        />

        {/* What is NoSQL & DBMS Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {nosqlOverview.dbmsCategories.map(cat => (
            <div
              key={cat.title}
              className={`p-4 rounded-2xl border transition-all ${
                cat.title === 'NoSQL'
                  ? 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-600 shadow-xs'
                  : 'bg-white dark:bg-slate-900 border-blue-100 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-sm text-blue-950 dark:text-white">
                  {cat.title}
                </span>
                {cat.title === 'NoSQL' && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white">
                    Primary Focus
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why NoSQL is Used & Core Purpose */}
        <div className="p-6 rounded-2xl bg-white dark:from-slate-900 dark:to-slate-800/80 border border-blue-200 dark:border-blue-900/40 shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-md shadow-blue-500/20">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-blue-950 dark:text-white mb-1">
                Why NoSQL? (&ldquo;{nosqlOverview.acronymMeaning}&rdquo;)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3 font-medium">
                {nosqlOverview.definition}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {nosqlOverview.whyNoSQL.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-blue-50/50 dark:bg-slate-800/80 p-2.5 rounded-xl border border-blue-100 dark:border-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brief History Timeline */}
        <div className="mb-10 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <History className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Brief History of NoSQL (1998 &mdash; 2009)</span>
          </h4>
          <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-3 space-y-4 py-2">
            {nosqlOverview.historyTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-slate-900" />
                <span className="font-mono text-xs font-black text-blue-700 dark:text-blue-400 mr-2">
                  {item.year}:
                </span>
                <span className="text-xs text-slate-700 dark:text-slate-300">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Features of NoSQL */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-4">
            Features of NoSQL Databases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {nosqlOverview.features.map(feat => (
              <div
                key={feat.title}
                className="p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700"
              >
                <h4 className="text-xs font-bold text-blue-950 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                  <span>{feat.title}</span>
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive 4 Types of NoSQL */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="text-lg font-bold text-blue-950 dark:text-white">
              The 4 Major Types of NoSQL Databases
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Select a database category to view its storage model
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {nosqlTypes.map(t => {
              const isSelected = activeTypeId === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTypeId(t.id)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border-blue-100 dark:border-slate-800 text-blue-950 dark:text-slate-200 hover:bg-blue-50/50 hover:border-blue-300'
                  }`}
                >
                  <span className={`block font-bold text-xs uppercase tracking-wider ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                    {t.subTitle}
                  </span>
                  <span className="block font-black text-sm mt-0.5 truncate">
                    {t.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active NoSQL Type Card Details */}
          {(() => {
            const current = nosqlTypes.find(t => t.id === activeTypeId)!;
            return (
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/60 shadow-sm animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-blue-50 dark:border-slate-800 mb-4">
                  <div>
                    <h4 className="text-base font-extrabold text-blue-950 dark:text-white">
                      {current.title}
                    </h4>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold">
                      {current.subTitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-semibold text-slate-500 mr-1">Systems:</span>
                    {current.examples.map(ex => (
                      <span key={ex} className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-50 dark:bg-slate-800 text-blue-800 dark:text-slate-200 border border-blue-200 dark:border-slate-700">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {current.description}
                </p>

                <div className="p-3.5 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 mb-4">
                  <span className="text-[11px] font-bold text-blue-950 dark:text-slate-400 uppercase tracking-wider block mb-1">
                    Internal Storage Mechanism:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    {current.storageMechanism}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-bold text-blue-950 dark:text-slate-200 block mb-2">
                      Key Characteristics:
                    </span>
                    <ul className="space-y-1.5 text-slate-700 dark:text-slate-400">
                      {current.keyCharacteristics.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-blue-950 dark:text-slate-200 block mb-2">
                      Real-world Use Cases:
                    </span>
                    <ul className="space-y-1.5 text-slate-700 dark:text-slate-400">
                      {current.useCases.map((uc, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <ArrowRight className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
            <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>{nosqlOverview.benefits.scalability.title}</span>
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              {nosqlOverview.benefits.scalability.desc}
            </p>
            <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 p-2.5 rounded-lg border border-blue-200 dark:border-blue-900">
              Sharding Examples: {nosqlOverview.benefits.scalability.examples}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
            <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <Server className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>{nosqlOverview.benefits.availability.title}</span>
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {nosqlOverview.benefits.availability.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
