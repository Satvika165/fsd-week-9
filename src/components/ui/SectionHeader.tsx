import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  icon
}) => {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-800 mb-3 shadow-xs">
        {icon && <span className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400">{icon}</span>}
        <span>{badge}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-950 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
