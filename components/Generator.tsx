import React, { useState, useEffect } from 'react';
import { Wand2, Loader2, AlertCircle, ArrowRight } from 'lucide-react';
import { generateFlashcardData } from '../services/geminiService';
import { FlashcardData } from '../types';
import Flashcard from './Flashcard';

interface GeneratorProps {
  onSave: (card: FlashcardData) => void;
  savedCards: FlashcardData[];
  autoGenWord?: string | null;
  onBack?: () => void;
}

const QUICK_WORDS = ['Apple', 'Galaxy', 'Resilience', 'Serendipity', 'Mountain', 'Code', 'Future', 'Peace'];

const Generator: React.FC<GeneratorProps> = ({ onSave, savedCards, autoGenWord, onBack }) => {
  const [inputWord, setInputWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentCard, setCurrentCard] = useState<FlashcardData | null>(null);
  const [error, setError] = useState('');

  // Auto-generate effect
  useEffect(() => {
    if (autoGenWord) {
      setInputWord(autoGenWord);
      handleGenerate(autoGenWord);
    }
  }, [autoGenWord]);

  const handleGenerate = async (wordToUse: string = inputWord) => {
    const cleanWord = wordToUse.trim();
    if (!cleanWord) return;

    setLoading(true);
    setError('');
    setCurrentCard(null);

    try {
      const data = await generateFlashcardData(cleanWord);
      const newCard: FlashcardData = {
        id: Date.now().toString(),
        en: data.en,
        ar: data.ar,
        partOfSpeech: data.partOfSpeech,
        phonetic: data.phonetic,
        emoji: data.emoji,
        example: data.example,
        imageUrl: data.imageUrl,
        sources: data.sources,
        createdAt: Date.now()
      };
      setCurrentCard(newCard);
    } catch (err) {
      console.error(err);
      setError('Failed to generate card. Please check your internet connection or try again.');
    } finally {
      setLoading(false);
    }
  };

  const isSaved = currentCard ? savedCards.some(c => c.en.toLowerCase() === currentCard.en.toLowerCase()) : false;

  return (
    <div className="animate-fadeIn">
      {onBack && (
        <button 
          onClick={onBack}
          className="mb-4 flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-white/30 transition-all font-bold shadow-sm active:scale-95"
        >
          <ArrowRight size={20} /> عودة للقائمة
        </button>
      )}

      <div className="bg-white rounded-[2rem] shadow-xl p-8 mb-8">
        <label className="block text-gray-700 font-bold mb-3 mr-1 text-lg">
          أدخل كلمة إنجليزية:
        </label>
        
        <div className="relative mb-6">
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="مثال: Apple, Cat, Freedom..."
            className="w-full p-5 border-4 border-gray-100 rounded-2xl text-lg font-poppins focus:outline-none focus:border-primary transition-colors text-left dir-ltr placeholder:text-right"
          />
        </div>

        <button
          onClick={() => handleGenerate()}
          disabled={loading || !inputWord}
          className="w-full py-4 rounded-2xl font-bold text-xl shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-3 backdrop-blur-md border border-white/20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white hover:from-primary hover:to-secondary active:scale-95"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" /> جاري التوليد والبحث...
            </>
          ) : (
            <>
              <Wand2 /> توليد البطاقة
            </>
          )}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-100">
          <p className="text-gray-400 text-sm mb-3 font-semibold">كلمات سريعة:</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_WORDS.map((word) => (
              <button
                key={word}
                onClick={() => {
                  setInputWord(word);
                  handleGenerate(word);
                }}
                className="px-4 py-2 rounded-full font-poppins font-medium transition-all text-sm backdrop-blur-sm bg-gray-100/50 border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary/50 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>

      {currentCard && (
        <Flashcard card={currentCard} onSave={onSave} isSaved={isSaved} />
      )}
    </div>
  );
};

export default Generator;