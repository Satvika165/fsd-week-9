import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { CodeBlock } from '../ui/CodeBlock';
import {
  junitFundamentals,
  junitAnnotations,
  assertMethods,
  crudTestCode
} from '../../data/junitData';
import { TestTube, CheckCircle2, XCircle, Play, BookmarkCheck, FileCheck } from 'lucide-react';

export const SectionJunit: React.FC = () => {
  const [activeAnnotation, setActiveAnnotation] = useState<string>('@Test');

  return (
    <section id="junit-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 03"
          title="JUnit & Automated Unit Testing"
          subtitle="Verification and validation fundamentals for Java developers, lifecycle annotations, Assert class validations, and CRUD test suites."
          icon={<TestTube className="h-3.5 w-3.5" />}
        />

        {/* Fundamentals & Definitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm space-y-3">
            <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <TestTube className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Testing &amp; Unit Testing Definitions</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
              <span className="font-bold text-xs text-blue-950 dark:text-slate-200 block mb-0.5">
                Testing
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                {junitFundamentals.testingDef}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
              <span className="font-bold text-xs text-blue-950 dark:text-slate-200 block mb-0.5">
                Unit Testing &amp; Test Case
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                {junitFundamentals.unitTestingDef}
              </p>
              <p className="text-xs text-blue-800 dark:text-slate-400 mt-1 italic font-medium">
                &ldquo;{junitFundamentals.testCaseDef}&rdquo;
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-sm space-y-3">
            <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Play className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Manual vs. Automated Testing</span>
            </h4>
            {junitFundamentals.manualVsAutomated.map(item => (
              <div key={item.type} className="p-3 rounded-xl bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
                <span className="font-bold text-xs text-blue-800 dark:text-blue-300 block mb-0.5">
                  {item.type}
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
            {/* Visual Bar Indicator */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex-1 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center gap-2 text-xs text-emerald-900 dark:text-emerald-300 font-bold">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Green: Tests Passed Smoothly</span>
              </div>
              <div className="flex-1 p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 flex items-center gap-2 text-xs text-rose-900 dark:text-rose-300 font-bold">
                <XCircle className="h-4 w-4 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>Red: Test Broken / Failed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons to take up Unit Testing */}
        <div className="mb-10 p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40">
          <h4 className="text-sm font-bold text-blue-950 dark:text-blue-300 uppercase tracking-wider mb-3">
            Top Reasons to Take Up Unit Testing
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 dark:text-slate-300">
            {junitFundamentals.reasonsForUnitTesting.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50 shadow-xs">
                <BookmarkCheck className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Annotations Section */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-4 flex items-center gap-2">
            <span>JUnit Lifecycle Annotations</span>
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">(Click to inspect annotation details)</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
            {junitAnnotations.map(ann => (
              <button
                key={ann.annotation}
                onClick={() => setActiveAnnotation(ann.annotation)}
                className={`py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all ${
                  activeAnnotation === ann.annotation
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-blue-950 dark:text-slate-300 hover:bg-blue-50/50 hover:border-blue-300'
                }`}
              >
                {ann.annotation}
              </button>
            ))}
          </div>

          {/* Active Annotation Display */}
          {(() => {
            const current = junitAnnotations.find(a => a.annotation === activeAnnotation)!;
            return (
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/50 shadow-sm transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-blue-50 dark:border-slate-800 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-black text-blue-600 dark:text-blue-400">
                      {current.annotation}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                      {current.lifecycleStage}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                  {current.meaning}
                </p>
                <div className="p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs border border-slate-800">
                  <pre className="whitespace-pre-wrap">{current.exampleSnippet}</pre>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Assert Class Methods Section */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">
            Assert Class Methods
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
            JUnit provides the Assert class to evaluate expected conditions and compare test output against expected values.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-blue-200 dark:border-slate-800 bg-blue-50/80 dark:bg-slate-800/60 text-blue-950 dark:text-slate-300 font-bold">
                  <th className="p-3.5">Method Signature</th>
                  <th className="p-3.5">Condition Asserted</th>
                  <th className="p-3.5 font-mono">Example Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {assertMethods.map(item => (
                  <tr key={item.method} className="hover:bg-blue-50/40 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-mono text-blue-700 dark:text-blue-400 font-black whitespace-nowrap">
                      {item.method}{item.parameters}
                    </td>
                    <td className="p-3.5">
                      {item.description}
                    </td>
                    <td className="p-3.5 font-mono text-slate-600 dark:text-slate-400 bg-blue-50/30 dark:bg-slate-950/40 rounded">
                      {item.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CRUD Testing Example Code */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-blue-950 dark:text-white flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>CRUD Operations Unit Testing Suite</span>
            </h3>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
            Spring Boot integration test suite demonstrating automated tests for Create, Read, Update, and Delete operations using <code className="font-mono text-blue-600 dark:text-blue-400">@SpringBootTest</code> and repository mocks.
          </p>
          <CodeBlock
            code={crudTestCode}
            language="java"
            title="SpringbootFirstAppApplicationTests.java"
          />
        </div>
      </div>
    </section>
  );
};
