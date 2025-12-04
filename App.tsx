import React, { useState, useEffect } from 'react';
import { Wand2, Image as ImageIcon, BrainCircuit, BookOpen } from 'lucide-react';
import { AppTab, FlashcardData } from './types';
import Generator from './components/Generator';
import Gallery from './components/Gallery';
import Quiz from './components/Quiz';
import Curriculum from './components/Curriculum';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.GENERATOR);
  const [savedCards, setSavedCards] = useState<FlashcardData[]>([]);
  const [autoGenWord, setAutoGenWord] = useState<string | null>(null);

  // Curriculum State (Lifted up to persist navigation)
  const [curriculumGrade, setCurriculumGrade] = useState<string | null>(null);
  const [curriculumUnit, setCurriculumUnit] = useState<string | null>(null);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('flashcards-ai');
    if (saved) {
      try {
        setSavedCards(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load cards", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('flashcards-ai', JSON.stringify(savedCards));
  }, [savedCards]);

  const handleSaveCard = (card: FlashcardData) => {
    // If saving an existing card (update), remove the old one first
    setSavedCards(prev => {
        const filtered = prev.filter(c => c.en.toLowerCase() !== card.en.toLowerCase());
        return [card, ...filtered];
    });
  };

  const handleDeleteCard = (id: string) => {
    setSavedCards(prev => prev.filter(c => c.id !== id));
  };

  const handleClearAll = () => {
    setSavedCards([]);
  };

  const handleSelectCurriculumWord = (word: string) => {
    setAutoGenWord(word);
    setActiveTab(AppTab.GENERATOR);
  };

  const handleBackToCurriculum = () => {
    setAutoGenWord(null);
    setActiveTab(AppTab.CURRICULUM);
  };

  return (
    <div className="min-h-screen py-6 px-4 pb-20 md:pb-6 flex flex-col">
      <div className="max-w-md mx-auto w-full flex-grow">
        
        {/* Header */}
        <header className="text-center text-white mb-8">
          <h1 className="text-4xl font-black mb-2 flex items-center justify-center gap-3 drop-shadow-md">
            <span className="text-5xl drop-shadow-lg">🎴</span> Genius Cards
          </h1>
          <p className="text-white/90 font-cairo text-lg font-medium drop-shadow-sm">
            تعلم الإنجليزية بذكاء مع الذكاء الاصطناعي
          </p>
        </header>

        {/* Navigation Tabs - Glassmorphism */}
        <div className="grid grid-cols-4 gap-2 p-1 rounded-2xl mb-6">
          <button
            onClick={() => setActiveTab(AppTab.GENERATOR)}
            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md border ${
              activeTab === AppTab.GENERATOR 
                ? 'bg-white text-primary shadow-xl border-white scale-105 z-10' 
                : 'bg-white/10 text-white/90 border-white/10 hover:bg-white/20 hover:border-white/30'
            }`}
          >
            <Wand2 size={20} /> المولد
          </button>
          <button
            onClick={() => setActiveTab(AppTab.CURRICULUM)}
            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md border ${
              activeTab === AppTab.CURRICULUM
                ? 'bg-white text-primary shadow-xl border-white scale-105 z-10' 
                : 'bg-white/10 text-white/90 border-white/10 hover:bg-white/20 hover:border-white/30'
            }`}
          >
            <BookOpen size={20} /> المناهج
          </button>
          <button
            onClick={() => setActiveTab(AppTab.GALLERY)}
            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md border ${
              activeTab === AppTab.GALLERY
                ? 'bg-white text-primary shadow-xl border-white scale-105 z-10' 
                : 'bg-white/10 text-white/90 border-white/10 hover:bg-white/20 hover:border-white/30'
            }`}
          >
            <ImageIcon size={20} /> المعرض
          </button>
          <button
            onClick={() => setActiveTab(AppTab.QUIZ)}
            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 backdrop-blur-md border ${
              activeTab === AppTab.QUIZ
                ? 'bg-white text-primary shadow-xl border-white scale-105 z-10' 
                : 'bg-white/10 text-white/90 border-white/10 hover:bg-white/20 hover:border-white/30'
            }`}
          >
            <BrainCircuit size={20} /> اختبار
          </button>
        </div>

        {/* Main Content Area */}
        <main>
          {activeTab === AppTab.GENERATOR ? (
            <Generator 
              onSave={handleSaveCard} 
              savedCards={savedCards} 
              autoGenWord={autoGenWord}
              onBack={curriculumUnit ? handleBackToCurriculum : undefined}
            />
          ) : activeTab === AppTab.CURRICULUM ? (
            <Curriculum 
                onSelectWord={handleSelectCurriculumWord} 
                selectedGrade={curriculumGrade}
                setSelectedGrade={setCurriculumGrade}
                selectedUnit={curriculumUnit}
                setSelectedUnit={setCurriculumUnit}
            />
          ) : activeTab === AppTab.GALLERY ? (
            <Gallery 
              cards={savedCards} 
              onDelete={handleDeleteCard} 
              onClear={handleClearAll} 
            />
          ) : (
            <Quiz cards={savedCards} />
          )}
        </main>
      </div>

      {/* Custom Footer */}
      <footer className="text-center mt-12 w-full pb-8">
        
        {/* Important Links Section */}
        <div className="mb-8 w-full max-w-xl mx-auto px-4">
            <h3 className="text-white text-lg font-bold mb-4 font-cairo border-b border-white/20 pb-2 inline-block px-8">روابط مهمة</h3>
            <div className="grid grid-cols-2 gap-3">
                <a href="https://anwermes.github.io/englishmaster5-9/" target="_blank" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-white transition-all duration-300 backdrop-blur-sm group active:scale-95 text-center hover:scale-105 hover:shadow-xl hover:shadow-black/20">
                    <i className="fas fa-book-open text-yellow-300 text-2xl group-hover:scale-110 transition-transform"></i>
                    <span className="font-bold text-sm">موقع الحلول والقواعد</span>
                </a>
                <a href="https://anwermes.github.io/flashcardsgames/" target="_blank" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-white transition-all duration-300 backdrop-blur-sm group active:scale-95 text-center hover:scale-105 hover:shadow-xl hover:shadow-black/20">
                    <i className="fas fa-gamepad text-green-300 text-2xl group-hover:scale-110 transition-transform"></i>
                    <span className="font-bold text-sm">ألعاب تفاعلية</span>
                </a>
                <a href="https://t.me/+afSETaZ232AzMmY0" target="_blank" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-white transition-all duration-300 backdrop-blur-sm group active:scale-95 text-center hover:scale-105 hover:shadow-xl hover:shadow-black/20">
                    <i className="fab fa-telegram text-blue-300 text-2xl group-hover:scale-110 transition-transform"></i>
                    <span className="font-bold text-sm">قناة التيليجرام</span>
                </a>
                <a href="https://keeplearning.unrwa.org/" target="_blank" className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-white transition-all duration-300 backdrop-blur-sm group active:scale-95 text-center hover:scale-105 hover:shadow-xl hover:shadow-black/20">
                    <i className="fas fa-graduation-cap text-orange-300 text-2xl group-hover:scale-110 transition-transform"></i>
                    <span className="font-bold text-sm">منصة التعلم الرقمي</span>
                </a>
            </div>
        </div>

        <div className="social-links">
            <a href="https://facebook.com/Dreamer231" target="_blank" className="fb" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://t.me/anwermes" target="_blank" className="tg" aria-label="Telegram">
                <i className="fab fa-telegram-plane"></i>
            </a>
            <a href="https://wa.me/970599160308" target="_blank" className="wa" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
        <div className="copyright">© 2025 English For Grade 5-9 | المعلم أنور عايش مسمح</div>
      </footer>
    </div>
  );
};

export default App;