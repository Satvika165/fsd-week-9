import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import {
  capTheoremDefinition,
  capPillars,
  capCombinations,
  baseModelPillars,
  acidVsBaseComparison
} from '../../data/capBaseData';
import { Zap, Network } from 'lucide-react';

export const SectionCapBase: React.FC = () => {
  const [selectedPillarKey, setSelectedPillarKey] = useState<'C' | 'A' | 'P'>('C');

  const selectedPillar = capPillars.find(p => p.key === selectedPillarKey)!;

  return (
    <section id="cap-base-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 05"
          title="The CAP Theorem & BASE Distributed Model"
          subtitle="Theoretical computer science foundation governing distributed data stores, unavoidable network partitions, and eventual consistency trade-offs."
          icon={<Zap className="h-3.5 w-3.5" />}
        />

        {/* CAP Overview Callout */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/40 shadow-sm mb-10">
          <h3 className="text-base font-extrabold text-blue-950 dark:text-white mb-2">
            The CAP Principle (Theorem)
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3 font-medium">
            {capTheoremDefinition.overview}
          </p>
          <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-slate-800/80 border border-blue-200 dark:border-slate-700 text-xs text-blue-950 dark:text-blue-300 font-bold">
            {capTheoremDefinition.tradeoffLaw}
          </div>
        </div>

        {/* Interactive CAP Pillar Explorer */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="text-lg font-bold text-blue-950 dark:text-white">
              Interactive CAP Pillar Explorer
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Click C, A, or P to inspect definitions and trade-offs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {capPillars.map(pillar => {
              const isSelected = selectedPillarKey === pillar.key;
              return (
                <button
                  key={pillar.key}
                  onClick={() => setSelectedPillarKey(pillar.key)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border-blue-100 dark:border-slate-800 hover:bg-blue-50/50 hover:border-blue-300 text-blue-950 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-8 h-8 rounded-xl font-mono text-base font-extrabold flex items-center justify-center bg-blue-100 text-blue-700 dark:bg-slate-800">
                      {pillar.key}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-blue-200' : 'text-slate-400'}`}>
                      Pillar {pillar.key}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm">{pillar.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/60 shadow-sm">
            <div className="flex items-center gap-3 pb-3 border-b border-blue-50 dark:border-slate-800 mb-3">
              <span className="font-mono text-xl font-black text-blue-600 dark:text-blue-400">
                {selectedPillar.key}
              </span>
              <div>
                <h4 className="font-bold text-base text-blue-950 dark:text-white">
                  {selectedPillar.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedPillar.meaning}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
                <span className="font-bold text-blue-950 dark:text-slate-200 block mb-1">
                  Textbook CAP Definition:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedPillar.inCapContext}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                <span className="font-bold text-blue-900 dark:text-blue-300 block mb-1">
                  Scenario Example:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedPillar.realWorldExample}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trade-off combinations */}
        <div className="mb-12">
          <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-4">
            The Three Theoretical Trade-Off Pairs
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {capCombinations.map(combo => (
              <div
                key={combo.pair}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h5 className="font-bold text-xs text-blue-600 dark:text-blue-400 mb-2">
                    {combo.pair}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {combo.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-blue-50 dark:border-slate-800 text-[11px]">
                  <span className="font-bold text-blue-950 dark:text-slate-300 block">DB Examples:</span>
                  <span className="font-mono text-slate-500 dark:text-slate-400">{combo.examples}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The BASE Model */}
        <div className="mb-10">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Network className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-base font-extrabold text-blue-950 dark:text-white">
                The BASE Model for Distributed Databases
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
              Unlike strict ACID transactions, NoSQL distributed systems adopt the BASE model to provide fluidity, ease of data manipulation, and horizontal scale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {baseModelPillars.map(pillar => (
                <div
                  key={pillar.letter}
                  className="p-4 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-base font-black text-blue-600 dark:text-blue-400">
                      {pillar.letter}
                    </span>
                    <h5 className="font-bold text-xs text-blue-950 dark:text-white">
                      {pillar.name}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-2">
                    {pillar.description}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    {pillar.textbookMeaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ACID vs BASE Comparison Table */}
        <div>
          <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3">
            Architectural Comparison: ACID vs. BASE
          </h4>
          <div className="overflow-x-auto rounded-xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-blue-200 dark:border-slate-800 bg-blue-50/80 dark:bg-slate-800/60 font-bold text-blue-950 dark:text-slate-300">
                  <th className="p-3">Feature</th>
                  <th className="p-3 text-blue-700 dark:text-blue-300">ACID (Traditional RDBMS)</th>
                  <th className="p-3 text-blue-950 dark:text-emerald-300">BASE (Distributed NoSQL)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {acidVsBaseComparison.map(row => (
                  <tr key={row.feature} className="hover:bg-blue-50/30 dark:hover:bg-slate-800/30">
                    <td className="p-3 font-bold text-blue-950 dark:text-slate-200">{row.feature}</td>
                    <td className="p-3">{row.acid}</td>
                    <td className="p-3">{row.base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
