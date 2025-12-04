import React, { useState } from 'react';
import { RotateCw, Check, X, Trophy } from 'lucide-react';
import { FlashcardData } from '../types';

interface QuizProps {
  cards: FlashcardData[];
}

const Quiz: React.FC<QuizProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Shuffle cards on first load if we were to implement a full game, 
  // but for now simple sequential review is good.

  if (cards.length === 0) {
    return (
      <div className="text-center py-16 bg-white/10 rounded-[2rem] border-2 border-white/20 text-white animate-fadeIn">
        <Trophy size={64} className="mx-auto mb-4 opacity-50" />
        <h3 className="text-2xl font-bold mb-2">Quiz Mode Locked</h3>
        <p className="opacity-80">Generate and save at least one card to start the quiz!</p>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 text-center animate-fadeIn">
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={48} className="text-yellow-600" />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-4">Quiz Completed!</h2>
        <p className="text-gray-600 text-xl mb-8">
          You remembered <span className="font-bold text-green-600">{score}</span> out of <span className="font-bold">{cards.length}</span> cards.
        </p>
        <button
          onClick={() => {
            setCurrentIndex(0);
            setScore(0);
            setCompleted(false);
            setIsFlipped(false);
          }}
          className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  const handleNext = (remembered: boolean) => {
    if (remembered) setScore(s => s + 1);
    
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(i => i + 1);
      } else {
        setCompleted(true);
      }
    }, 300);
  };

  return (
    <div className="animate-fadeIn max-w-md mx-auto">
      {/* Progress Bar */}
      <div className="mb-6 flex items-center gap-2">
        <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${((currentIndex) / cards.length) * 100}%` }}
          />
        </div>
        <span className="text-white font-bold text-sm">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      {/* Card Flip Container */}
      <div 
        className="relative w-full h-[500px] cursor-pointer perspective-1000 group transition-transform duration-500 hover:scale-[1.03]"
        onClick={() => !isFlipped && setIsFlipped(true)}
      >
        <div 
          className={`relative w-full h-full transition-all duration-700 ease-in-out transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Front of Card */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border-4 border-white/50">
            <div className="h-1/2 bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
               {/* Subtle gradient overlay for depth */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50 pointer-events-none"></div>
               
              {currentCard.imageUrl ? (
                <img 
                  src={currentCard.imageUrl} 
                  alt="Quiz" 
                  className="max-h-full object-contain drop-shadow-md transform transition-transform group-hover:scale-105 duration-700"
                />
              ) : (
                <span className="text-8xl filter drop-shadow-lg transform transition-transform group-hover:scale-110 duration-500">{currentCard.emoji}</span>
              )}
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <h2 className="text-4xl font-bold text-primary mb-2 drop-shadow-sm">{currentCard.en}</h2>
              <p className="text-gray-400 italic mb-6">{currentCard.partOfSpeech}</p>
              <div className="animate-pulse text-sm text-gray-400 flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                <RotateCw size={14} /> Tap to flip
              </div>
            </div>
          </div>

          {/* Back of Card */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-[2rem] shadow-2xl overflow-hidden rotate-y-180 flex flex-col border-4 border-white/50">
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
              <div>
                <h3 className="text-5xl font-bold text-gray-800 font-cairo mb-3 drop-shadow-sm">{currentCard.ar}</h3>
                <p className="text-gray-500 font-poppins italic text-xl">{currentCard.phonetic}</p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-2xl w-full border border-blue-100 shadow-inner">
                 <p className="text-gray-700 text-lg font-poppins leading-relaxed">"{currentCard.example}"</p>
              </div>
            </div>
            
            {/* Answer Buttons */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 grid grid-cols-2 gap-4">
               <button
                 onClick={(e) => { e.stopPropagation(); handleNext(false); }}
                 className="py-4 bg-red-100/80 text-red-600 rounded-2xl font-bold hover:bg-red-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-sm"
               >
                 <X size={20} /> I Forgot
               </button>
               <button
                 onClick={(e) => { e.stopPropagation(); handleNext(true); }}
                 className="py-4 bg-green-100/80 text-green-600 rounded-2xl font-bold hover:bg-green-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-sm"
               >
                 <Check size={20} /> I Knew It
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;