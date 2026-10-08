import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressBar } from './components/layout/ProgressBar';
import { Header } from './components/layout/Header';
import { TableOfContents } from './components/layout/TableOfContents';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/ui/SearchModal';

// Sections
import { Hero } from './components/sections/Hero';
import { ChapterOverview } from './components/sections/ChapterOverview';
import { SectionAcid } from './components/sections/SectionAcid';
import { SectionSpringSecurity } from './components/sections/SectionSpringSecurity';
import { SectionJunit } from './components/sections/SectionJunit';
import { SectionNoSql } from './components/sections/SectionNoSql';
import { SectionCapBase } from './components/sections/SectionCapBase';
import { SectionMongoDb } from './components/sections/SectionMongoDb';
import { SectionDataModeling } from './components/sections/SectionDataModeling';
import { SectionMongoTools } from './components/sections/SectionMongoTools';
import { SectionDataTypes } from './components/sections/SectionDataTypes';
import { SectionOperators } from './components/sections/SectionOperators';
import { SectionComparison } from './components/sections/SectionComparison';
import { SectionRevision } from './components/sections/SectionRevision';
import { SectionQuiz } from './components/sections/SectionQuiz';
import { SectionQuestions } from './components/sections/SectionQuestions';

export const AppContent: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fbff] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Reading Progress Bar */}
      <ProgressBar />

      {/* Sticky Main Header */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* Hero Header */}
      <Hero />

      {/* Main Chapter Content Container with Table of Contents Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-8 items-start">
          {/* Main Article Stream */}
          <main className="flex-1 min-w-0 space-y-2">
            <ChapterOverview />
            <SectionAcid />
            <SectionSpringSecurity />
            <SectionJunit />
            <SectionNoSql />
            <SectionCapBase />
            <SectionMongoDb />
            <SectionDataModeling />
            <SectionMongoTools />
            <SectionDataTypes />
            <SectionOperators />
            <SectionComparison />
            <SectionRevision />
            <SectionQuiz />
            <SectionQuestions />
          </main>

          {/* Sticky Table of Contents (Desktop Side Navigation) */}
          <TableOfContents />
        </div>
      </div>

      {/* Global Academic Footer */}
      <Footer />

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
