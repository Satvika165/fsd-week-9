import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { transactionDefinition, acidProperties, transactionLifecycle } from '../../data/acidData';
import { Zap, CheckCircle2, ShieldAlert, HardDrive, ArrowRight, Database, RefreshCw, AlertCircle } from 'lucide-react';

export const SectionAcid: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<string>('A');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />;
      case 'ShieldAlert': return <ShieldAlert className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'HardDrive': return <HardDrive className="h-5 w-5 text-sky-600 dark:text-sky-400" />;
      default: return <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="acid-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 01"
          title="Transaction Management & ACID Principles"
          subtitle="Understanding transactions as atomic logical units of work and the four foundational properties ensuring database integrity."
          icon={<Database className="h-3.5 w-3.5" />}
        />

        {/* Transaction Definition Callout */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/40 shadow-sm mb-10">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 shrink-0">
              <Database className="h-6 w-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-extrabold text-blue-950 dark:text-white">
                What is a Database Transaction?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {transactionDefinition.notesSummary}
              </p>
              <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 text-xs text-blue-950 dark:text-slate-300 italic">
                &ldquo;{transactionDefinition.textbookSummary}&rdquo; &mdash; <em>Section 9.1</em>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {transactionDefinition.transactionalSystem}
              </p>
            </div>
          </div>
        </div>

        {/* The 4 ACID Cards */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-4 flex items-center gap-2">
            <span>The Four ACID Properties</span>
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">(Click a card to inspect)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {acidProperties.map(prop => {
              const isSelected = selectedProperty === prop.letter;
              return (
                <div
                  key={prop.letter}
                  onClick={() => setSelectedProperty(prop.letter)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-600 shadow-md ring-1 ring-blue-500'
                      : 'bg-white dark:bg-slate-900 border-blue-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100/70 dark:bg-slate-800 flex items-center justify-center font-extrabold text-blue-700 dark:text-blue-400 font-mono text-lg border border-blue-200 dark:border-slate-700">
                        {prop.letter}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-blue-950 dark:text-white flex items-center gap-2">
                          <span>{prop.name}</span>
                          {getIcon(prop.iconName)}
                        </h4>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {prop.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
                    {prop.definition}
                  </p>

                  <div className="mt-4 pt-3 border-t border-blue-50 dark:border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 dark:text-slate-400 block mb-1">
                      Real-world Example:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800/60 p-2.5 rounded-lg border border-blue-100 dark:border-slate-800">
                      {prop.example}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Flow: Transaction Lifecycle & ACID Guarantee */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Transaction Lifecycle Flow &amp; ACID Guarantees</span>
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
            {transactionLifecycle.map((stage, idx) => (
              <div
                key={stage.step}
                className="p-4 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 flex flex-col justify-between relative group hover:border-blue-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                      {stage.step}
                    </span>
                    {idx < 3 && (
                      <ArrowRight className="hidden lg:block h-4 w-4 text-blue-300 absolute -right-2 top-6 z-10 bg-white dark:bg-slate-900 rounded-full" />
                    )}
                  </div>
                  <h5 className="text-xs font-bold text-blue-950 dark:text-white mb-1">
                    {stage.title}
                  </h5>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-blue-50 text-xs text-blue-900 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40">
            <span className="font-semibold flex items-center gap-1.5">
              <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Core Takeaway:</span>
            </span>
            <span>If any constraint fails, the transaction <strong>rolls back</strong> (Atomicity). If all succeed, state becomes <strong>permanent</strong> (Durability).</span>
          </div>
        </div>
      </div>
    </section>
  );
};
