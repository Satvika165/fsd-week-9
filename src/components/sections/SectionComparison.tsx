import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { mysqlVsMongodb10Marks, rdbmsVsMongodbCore } from '../../data/comparisonData';
import { Scale, Award } from 'lucide-react';

export const SectionComparison: React.FC = () => {
  return (
    <section id="comparison-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 11"
          title="Comparative Analysis: MySQL vs. MongoDB"
          subtitle="Comprehensive 10-point examination comparison assessing relational schema constraints against document-oriented flexibility."
          icon={<Scale className="h-3.5 w-3.5" />}
        />

        {/* 10 Marks Exam Question Callout */}
        <div className="mb-6 p-4 rounded-2xl bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex items-center justify-between flex-wrap gap-2 shadow-xs">
          <div className="flex items-center gap-2.5">
            <Award className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
            <div>
              <span className="font-extrabold text-xs text-blue-950 dark:text-blue-300 uppercase tracking-wider block">
                Official Examination Question (10 Marks)
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                Appeared in <strong>DECEMBER 2023</strong>, <strong>MAY 2024</strong>, and <strong>DECEMBER 2024</strong> diploma exams.
              </p>
            </div>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-600 text-white font-mono shadow-sm">
            10 MARKS QUESTION
          </span>
        </div>

        {/* The 10-Point Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm mb-10">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-blue-200 dark:border-slate-800 bg-blue-50/80 dark:bg-slate-800/80 text-blue-950 dark:text-white">
                <th className="p-3.5 font-bold w-1/4">Comparison Criteria</th>
                <th className="p-3.5 font-bold text-blue-800 dark:text-blue-300 w-3/8 bg-blue-100/40 dark:bg-blue-950/30">
                  MySQL (Relational Database)
                </th>
                <th className="p-3.5 font-bold text-blue-950 dark:text-white w-3/8">
                  MongoDB (NoSQL Document Database)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {mysqlVsMongodb10Marks.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 dark:hover:bg-slate-800/30">
                  <td className="p-3.5 font-bold text-blue-950 dark:text-slate-100">
                    {row.attribute}
                  </td>
                  <td className="p-3.5 bg-blue-50/20 dark:bg-blue-950/10">
                    {row.mysql}
                  </td>
                  <td className="p-3.5 font-semibold text-blue-950 dark:text-slate-200">
                    {row.mongodb}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* General RDBMS vs MongoDB Core Table */}
        <div>
          <h4 className="text-sm font-bold text-blue-950 dark:text-white uppercase tracking-wider mb-3">
            Architectural Summary: RDBMS vs. MongoDB (Section 9.8.1)
          </h4>
          <div className="overflow-x-auto rounded-xl border border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-blue-100 dark:border-slate-800 bg-blue-50/60 dark:bg-slate-800/60 font-semibold text-blue-950 dark:text-slate-300">
                  <th className="p-3">Dimension</th>
                  <th className="p-3 text-slate-700 dark:text-slate-300">RDBMS</th>
                  <th className="p-3 text-blue-700 dark:text-blue-400 font-bold">MongoDB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                {rdbmsVsMongodbCore.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/20 dark:hover:bg-slate-800/20">
                    <td className="p-3 font-bold text-blue-950 dark:text-slate-200">{row.attribute}</td>
                    <td className="p-3">{row.mysql}</td>
                    <td className="p-3 font-semibold text-blue-950 dark:text-slate-200">{row.mongodb}</td>
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
