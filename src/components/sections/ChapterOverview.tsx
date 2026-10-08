import React from 'react';
import { Shield, TestTube, Database, Zap, FileSpreadsheet, Search, ArrowUpRight } from 'lucide-react';

interface TopicCard {
  title: string;
  icon: React.ReactNode;
  desc: string;
  targetId: string;
  tag: string;
}

export const ChapterOverview: React.FC = () => {
  const topics: TopicCard[] = [
    {
      title: "Spring Security",
      icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      desc: "Application-level security framework securing REST endpoints with authentication, authorization, and filters.",
      targetId: "security-section",
      tag: "REST API Protection"
    },
    {
      title: "JUnit Testing",
      icon: <TestTube className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      desc: "Verification and validation framework for Java developers with lifecycle annotations and Assert methods.",
      targetId: "junit-section",
      tag: "Automated QA"
    },
    {
      title: "NoSQL Architecture",
      icon: <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      desc: "Non-relational, schema-free databases designed for Big Data: Key-Value, Columnar, Graph, and Document models.",
      targetId: "nosql-section",
      tag: "4 DB Models"
    },
    {
      title: "CAP & BASE Theorems",
      icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      desc: "Distributed trade-offs (Consistency vs Availability vs Partition Tolerance) and the BASE eventual consistency paradigm.",
      targetId: "cap-base-section",
      tag: "Distributed Systems"
    },
    {
      title: "MongoDB & Data Modeling",
      icon: <FileSpreadsheet className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      desc: "Document database with BSON storage, 16MB limits, embedded vs normalized models, and mongosh CLI.",
      targetId: "mongodb-section",
      tag: "Document Database"
    },
    {
      title: "MongoDB Operators",
      icon: <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      desc: "Rich query operators including comparison ($gt, $in), logical ($and, $or), and array operators ($all, $elemMatch).",
      targetId: "operators-section",
      tag: "Query Engine"
    }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="overview" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 inline-block">
            Chapter Syllabus At A Glance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 dark:text-white mt-3">
            Core Pillars of Week 9
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Click any topic below to jump directly to detailed theory, diagrams, and code implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map(t => (
            <button
              key={t.title}
              onClick={() => scrollTo(t.targetId)}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-left transition-all duration-200 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-800 hover:-translate-y-0.5 group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40">
                  {t.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-slate-700">
                  {t.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-blue-950 dark:text-white mt-4 flex items-center justify-between">
                <span>{t.title}</span>
                <ArrowUpRight className="h-4 w-4 text-blue-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {t.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
