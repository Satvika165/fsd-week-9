import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import {
  mongoOverview,
  mongoFeatures,
  mongoArchitectureComponents
} from '../../data/mongoData';
import {
  FileSpreadsheet,
  Server,
  FolderTree,
  FileCode,
  Gauge,
  RefreshCw,
  Layers,
  Scale,
  Search,
  Cpu,
  HardDrive,
  ArrowDown
} from 'lucide-react';

export const SectionMongoDb: React.FC = () => {
  const [selectedComp, setSelectedComp] = useState<string>('_id');

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Gauge': return <Gauge className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'RefreshCw': return <RefreshCw className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Layers': return <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'Scale': return <Scale className="h-5 w-5 text-sky-600 dark:text-sky-400" />;
      case 'Search': return <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'Cpu': return <Cpu className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />;
      case 'FileCode': return <FileCode className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'HardDrive': return <HardDrive className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      default: return <Server className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const hierarchyLevels = [
    { level: '1. Database Server', desc: 'Host process running MongoDB environment (mongod)' },
    { level: '2. Databases', desc: 'Containers holding sets of physical storage files' },
    { level: '3. Collections', desc: 'Grouping of documents (analogous to SQL tables)' },
    { level: '4. Documents', desc: 'Records stored in BSON format (up to 16MB maximum)' },
    { level: '5. Fields', desc: 'Key-value pairs carrying dynamic typed data' },
  ];

  return (
    <section id="mongodb-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 06"
          title="MongoDB: Architecture, Hierarchy & Features"
          subtitle="Open-source document database storing semi-structured BSON data with dynamic schemas, native indexing, and distributed sharding."
          icon={<FileSpreadsheet className="h-3.5 w-3.5" />}
        />

        {/* MongoDB Overview Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/40 shadow-sm mb-10">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3.5 rounded-xl bg-blue-600 text-white shrink-0 shadow-md shadow-blue-500/20">
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-extrabold text-blue-950 dark:text-white">
                What is MongoDB &amp; Why is it Used?
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {mongoOverview.definition}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                  <span className="font-bold text-blue-800 dark:text-blue-400 block mb-0.5">Basic Unit of Data:</span>
                  <span className="text-slate-700 dark:text-slate-300">{mongoOverview.unitOfData}</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700">
                  <span className="font-bold text-blue-800 dark:text-blue-400 block mb-0.5">BSON Storage Limit:</span>
                  <span className="text-slate-700 dark:text-slate-300">{mongoOverview.maxDocumentSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Hierarchy */}
        <div className="mb-10 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm">
          <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
            <FolderTree className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>MongoDB Data Hierarchy</span>
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
            Logical data containment from the physical server host down to individual document key-value pairs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {hierarchyLevels.map((lvl, idx) => (
              <React.Fragment key={lvl.level}>
                <div className="w-full sm:w-auto flex-1 p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/70 border border-blue-100 dark:border-slate-700 text-center">
                  <span className="font-bold text-xs text-blue-700 dark:text-blue-400 block mb-1">
                    {lvl.level}
                  </span>
                  <span className="text-[10px] text-slate-600 dark:text-slate-400 block font-medium">
                    {lvl.desc}
                  </span>
                </div>
                {idx < hierarchyLevels.length - 1 && (
                  <ArrowDown className="sm:-rotate-90 h-4 w-4 text-blue-300 shrink-0 my-1 sm:my-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Architecture Components Explorer */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-4">
            Key Components of MongoDB Architecture
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
            {mongoArchitectureComponents.map(c => {
              const isSelected = selectedComp === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() => setSelectedComp(c.name)}
                  className={`py-2 px-2.5 rounded-xl font-mono text-xs font-bold transition-all truncate ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-blue-950 dark:text-slate-300 hover:bg-blue-50/50 hover:border-blue-300'
                  }`}
                >
                  {c.name}
                </button>
              );
            })}
          </div>

          {/* Active Component Details */}
          {(() => {
            const comp = mongoArchitectureComponents.find(c => c.name === selectedComp)!;
            return (
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/60 shadow-sm animate-in fade-in duration-150">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-blue-50 dark:border-slate-800 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-black text-blue-700 dark:text-blue-400">
                      {comp.name}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      (RDBMS Equivalent: <strong className="text-blue-950 dark:text-slate-300">{comp.rdbmsEquivalent}</strong>)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-2 font-medium">
                  {comp.description}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {comp.details}
                </p>
              </div>
            );
          })()}
        </div>

        {/* MongoDB Features Grid */}
        <div>
          <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-4">
            MongoDB Features (Section 9.8.1)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {mongoFeatures.map(feat => (
              <div
                key={feat.title}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800 w-fit mb-3 border border-blue-100 dark:border-slate-700">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  <h4 className="text-xs font-bold text-blue-950 dark:text-white mb-1.5">
                    {feat.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {feat.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-blue-50 dark:border-slate-800 text-[10px] text-blue-700 dark:text-slate-400 font-medium">
                  {feat.notesDetail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
