import React, { useState } from 'react';
import { Sun, Moon, Search, Menu, X, BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Topics', href: '#overview' },
    { label: 'Revision', href: '#revision-section' },
    { label: 'Quiz', href: '#quiz-section' },
    { label: 'Important Questions', href: '#questions-section' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-wider text-blue-950 dark:text-white flex items-center gap-1.5">
                FSD <span className="text-blue-600 dark:text-blue-400">•</span> WEEK 9
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400 -mt-0.5">
                Diploma Learning Portal
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 bg-blue-50/80 hover:bg-blue-100 dark:bg-slate-800 dark:hover:bg-slate-700 hover:text-blue-700 transition-colors border border-blue-200/80 dark:border-slate-700/60"
              aria-label="Search portal contents"
            >
              <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-600 rounded text-blue-600 dark:text-slate-400">
                Ctrl+K
              </kbd>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700/60"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-blue-700" />
              )}
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in slide-in-from-top duration-150">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
