import React from 'react';
import { Trash2, Volume2, FolderOpen } from 'lucide-react';
import { FlashcardData } from '../types';
import { speakText } from '../utils/speech';

interface GalleryProps {
  cards: FlashcardData[];
  onDelete: (id: string) => void;
  onClear: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ cards, onDelete, onClear }) => {
  if (cards.length === 0) {
    return (
      <div className="text-center py-16 bg-white/10 rounded-[2rem] border-2 border-white/20 text-white animate-fadeIn">
        <FolderOpen size={64} className="mx-auto mb-4 opacity-50" />
        <h3 className="text-2xl font-bold mb-2">لا توجد بطاقات محفوظة</h3>
        <p className="opacity-80">قم بتوليد بطاقات جديدة وحفظها هنا</p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-6 text-white px-2">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="bg-white/20 p-2 rounded-lg text-sm font-poppins">{cards.length}</span>
           بطاقاتي المحفوظة
        </h2>
        <button 
          onClick={() => {
            if(window.confirm('هل أنت متأكد من حذف جميع البطاقات؟')) onClear();
          }}
          className="px-4 py-2 bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 text-red-100 rounded-xl text-sm font-bold transition-all active:scale-95 flex items-center gap-2 backdrop-blur-sm shadow-sm"
        >
          <Trash2 size={16} /> حذف الكل
        </button>
      </div>

      <div className="grid gap-4">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-3xl overflow-hidden shadow-lg flex h-32 hover:translate-y-[-2px] transition-transform">
            {/* Left side (Image or Emoji) */}
            <div className="w-32 bg-gray-50 relative border-r border-gray-100">
               {card.imageUrl ? (
                   <img src={card.imageUrl} alt={card.en} className="w-full h-full object-contain p-2" />
               ) : (
                   <div className="bg-gradient-to-br from-primary to-secondary w-full h-full flex items-center justify-center text-4xl">
                       {card.emoji}
                   </div>
               )}
            </div>
            
            {/* Right side (Content) */}
            <div className="flex-1 p-4 flex justify-between items-center">
              <div className="overflow-hidden">
                <h3 className="font-poppins font-bold text-xl text-primary truncate">{card.en}</h3>
                <p className="font-cairo text-gray-500 font-semibold truncate">{card.ar}</p>
              </div>
              
              <div className="flex flex-col gap-2 ml-2">
                <button 
                  onClick={() => speakText(card.en)}
                  className="w-9 h-9 rounded-xl backdrop-blur-sm bg-blue-50/50 border border-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-90"
                >
                  <Volume2 size={16} />
                </button>
                <button 
                  onClick={() => onDelete(card.id)}
                  className="w-9 h-9 rounded-xl backdrop-blur-sm bg-red-50/50 border border-red-100 text-red-600 flex items-center justify-center hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30 transition-all active:scale-90"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;