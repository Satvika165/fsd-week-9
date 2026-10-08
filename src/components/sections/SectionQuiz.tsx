import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { quizQuestions } from '../../data/quizData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SectionQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentQ.id] !== undefined) return;

    const updated = { ...selectedAnswers, [currentQ.id]: optionIndex };
    setSelectedAnswers(updated);
    setShowExplanation(true);

    if (currentIndex === totalQuestions - 1) {
      const correctCount = Object.entries(updated).filter(
        ([qid, ansIdx]) => {
          const q = quizQuestions.find(item => item.id === Number(qid));
          return q && q.correctAnswer === ansIdx;
        }
      ).length;
      if (correctCount >= 10) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowExplanation(selectedAnswers[quizQuestions[currentIndex + 1].id] !== undefined);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowExplanation(selectedAnswers[quizQuestions[currentIndex - 1].id] !== undefined);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct += 1;
      }
    });
    return {
      correct,
      incorrect: Object.keys(selectedAnswers).length - correct,
      unanswered: totalQuestions - Object.keys(selectedAnswers).length,
      percentage: Math.round((correct / totalQuestions) * 100)
    };
  };

  const results = calculateScore();

  return (
    <section id="quiz-section" className="py-12 border-t border-blue-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader
          badge="TOPIC 13"
          title="Interactive Assessment Quiz"
          subtitle="Test your Week 9 comprehension with 15 multiple-choice questions grounded directly in the textbook and lecture notes."
          icon={<HelpCircle className="h-3.5 w-3.5" />}
        />

        {!isFinished ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-md">
            {/* Progress Header */}
            <div className="flex items-center justify-between pb-4 border-b border-blue-50 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-slate-800 font-bold text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-slate-700">
                  {currentQ.topicTag}
                </span>
              </div>
              <div className="text-xs font-mono font-bold text-blue-700 dark:text-slate-400 bg-blue-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                Score: {results.correct} / {Object.keys(selectedAnswers).length}
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg font-extrabold text-blue-950 dark:text-white mb-6 leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, idx) => {
                const isChosen = selectedAnswers[currentQ.id] === idx;
                const hasAnswered = selectedAnswers[currentQ.id] !== undefined;
                const isCorrect = idx === currentQ.correctAnswer;

                let buttonStyle = 'bg-blue-50/40 hover:bg-blue-50 dark:bg-slate-800/70 border-blue-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-300';

                if (hasAnswered) {
                  if (isCorrect) {
                    buttonStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
                  } else if (isChosen && !isCorrect) {
                    buttonStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-200 line-through ring-1 ring-rose-500';
                  } else {
                    buttonStyle = 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered}
                    className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between ${buttonStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-700 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 shadow-xs">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="font-medium">{opt}</span>
                    </div>

                    {hasAnswered && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 ml-2" />
                    )}
                    {hasAnswered && isChosen && !isCorrect && (
                      <XCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Area */}
            {showExplanation && (
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-950 dark:text-slate-300 mb-6 animate-in fade-in duration-150">
                <span className="font-bold text-blue-900 dark:text-blue-300 block mb-1">
                  Explanation:
                </span>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-blue-50 dark:border-slate-800">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none"
              >
                Previous
              </button>

              <div className="flex items-center gap-2">
                {currentIndex < totalQuestions - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={selectedAnswers[currentQ.id] === undefined}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <span>Next Question</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsFinished(true)}
                    disabled={selectedAnswers[currentQ.id] === undefined}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <span>View Score Report</span>
                    <Award className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Final Results Card */
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 shadow-lg text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-black text-blue-950 dark:text-white">
              Quiz Completed!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
              Review your final Week 9 examination readiness metrics below.
            </p>

            {/* Score Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto mb-8 text-left">
              <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">Total Score</span>
                <span className="text-xl font-black text-blue-700 dark:text-blue-400 font-mono">
                  {results.correct} / {totalQuestions}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700">
                <span className="text-[10px] font-bold uppercase text-slate-500 block">Percentage</span>
                <span className="text-xl font-black text-blue-700 dark:text-emerald-400 font-mono">
                  {results.percentage}%
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-slate-800/60 border border-emerald-200 dark:border-slate-700">
                <span className="text-[10px] font-bold uppercase text-emerald-700 block">Correct</span>
                <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                  {results.correct}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-slate-800/60 border border-rose-200 dark:border-slate-700">
                <span className="text-[10px] font-bold uppercase text-rose-700 block">Incorrect</span>
                <span className="text-xl font-black text-rose-600 dark:text-rose-400 font-mono">
                  {results.incorrect}
                </span>
              </div>
            </div>

            {/* Detailed Question Review */}
            <div className="text-left max-h-80 overflow-y-auto mb-8 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
              <h4 className="text-xs font-bold text-blue-950 dark:text-slate-200 uppercase tracking-wider mb-2">
                Answer Key &amp; Explanations Review
              </h4>
              {quizQuestions.map(q => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div key={q.id} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-xs">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-bold text-slate-900 dark:text-slate-200">
                        {q.id}. {q.question}
                      </span>
                      {isCorrect ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0">
                          Correct
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 shrink-0">
                          Incorrect
                        </span>
                      )}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-[11px] mt-1">
                      <strong>Correct Answer:</strong> {q.options[q.correctAnswer]}
                    </div>
                    <div className="text-slate-500 text-[10px] italic mt-0.5">
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Restart Button */}
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retry Quiz</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
