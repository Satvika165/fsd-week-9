import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'java',
  title,
  showLineNumbers = true
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950 text-slate-100 shadow-md">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="h-4 w-4 text-blue-400" />
          <span className="font-mono font-medium text-slate-300">
            {title || language.toUpperCase()}
          </span>
          {language && (
            <span className="rounded bg-blue-950 px-2 py-0.5 text-[10px] font-semibold text-blue-300 border border-blue-800/60 uppercase">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy code to clipboard"
          className="flex items-center gap-1.5 rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="overflow-x-auto p-4 text-[13px] font-mono leading-relaxed">
        <pre className="table w-full">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-slate-900/40">
                {showLineNumbers && (
                  <td className="w-10 select-none pr-4 text-right text-slate-600 text-xs font-mono">
                    {idx + 1}
                  </td>
                )}
                <td className="whitespace-pre text-slate-200">
                  {/* Basic syntax colorization based on keywords */}
                  {highlightSyntax(line, language)}
                </td>
              </tr>
            ))}
          </tbody>
        </pre>
      </div>
    </div>
  );
};

function highlightSyntax(line: string, language: string): React.ReactNode {
  // If line is empty or whitespace
  if (!line.trim()) return <span> </span>;

  // Comments
  if (line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('<!--')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  // Annotations
  if (line.trim().startsWith('@')) {
    return <span className="text-amber-400 font-medium">{line}</span>;
  }

  // XML / HTML tags
  if (language === 'xml' || language === 'html') {
    return <span className="text-cyan-300">{line}</span>;
  }

  // JSON keys
  if (language === 'json') {
    const parts = line.split(':');
    if (parts.length > 1) {
      return (
        <>
          <span className="text-sky-300 font-medium">{parts[0]}:</span>
          <span className="text-emerald-300">{parts.slice(1).join(':')}</span>
        </>
      );
    }
  }

  // Default color
  return <span>{line}</span>;
}
