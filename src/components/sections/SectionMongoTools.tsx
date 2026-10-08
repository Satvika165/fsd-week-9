import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { mongoTools } from '../../data/toolsData';
import { Terminal, Compass, Cloud, Server, CheckCircle2 } from 'lucide-react';

export const SectionMongoTools: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string>('mongosh');

  const getToolIcon = (id: string) => {
    switch (id) {
      case 'mongosh': return <Terminal className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'compass': return <Compass className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'atlas': return <Cloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      default: return <Server className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="tools-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 08"
          title="Working with MongoDB: Shell, Compass &amp; Atlas"
          subtitle="Essential developer tooling: the mongosh JavaScript/Node.js REPL, MongoDB Compass visual GUI, Community Server, and Atlas cloud."
          icon={<Terminal className="h-3.5 w-3.5" />}
        />

        {/* Tool Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {mongoTools.map(t => {
            const isSelected = activeToolId === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveToolId(t.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 border-blue-100 dark:border-slate-800 text-blue-950 dark:text-slate-200 hover:bg-blue-50/50 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {getToolIcon(t.id)}
                  <span className="font-extrabold text-xs truncate">{t.title}</span>
                </div>
                <span className={`text-[10px] block truncate ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                  {t.role}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tool Details */}
        {(() => {
          const tool = mongoTools.find(t => t.id === activeToolId)!;
          return (
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/60 shadow-sm animate-in fade-in duration-150">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-blue-50 dark:border-slate-800 mb-4">
                <div>
                  <h4 className="text-base font-extrabold text-blue-950 dark:text-white flex items-center gap-2">
                    <span>{tool.title}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                      {tool.role}
                    </span>
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {tool.description}
              </p>

              {/* Shell REPL Commands Special View */}
              {tool.sampleCommands && (
                <div className="mb-6">
                  <span className="font-bold text-xs text-blue-950 dark:text-slate-200 block mb-2 flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span>Interactive Shell Session (mongosh Commands from Notes):</span>
                  </span>
                  <div className="rounded-xl bg-slate-950 p-4 font-mono text-xs border border-slate-800 text-slate-300 space-y-3">
                    {tool.sampleCommands.map((sc, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <span className="text-slate-600 select-none">&gt;</span>
                          <span className="font-bold">{sc.cmd}</span>
                        </div>
                        <div className="text-slate-400 text-[11px] pl-4 whitespace-pre-line border-l-2 border-slate-800">
                          {sc.output}
                        </div>
                        <div className="text-[10px] text-slate-500 italic pl-4">
                          &#x21B3; {sc.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {tool.features && (
                <div className="mb-4">
                  <span className="font-bold text-xs text-blue-950 dark:text-slate-200 block mb-2">
                    Key Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {tool.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-blue-50/40 dark:bg-slate-800/60 p-2.5 rounded-lg border border-blue-100 dark:border-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tool.installSteps && (
                <div>
                  <span className="font-bold text-xs text-blue-950 dark:text-slate-200 block mb-2">
                    Installation &amp; Setup Procedure:
                  </span>
                  <ol className="space-y-1.5 text-xs text-slate-700 dark:text-slate-400">
                    {tool.installSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 dark:text-blue-400 font-mono">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </section>
  );
};
