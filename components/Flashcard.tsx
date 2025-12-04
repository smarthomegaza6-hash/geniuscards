import React, { useState, useEffect } from 'react';
import { Volume2, Bookmark, Download, Check, Loader2, ExternalLink, Link as LinkIcon } from 'lucide-react';
import { FlashcardData } from '../types';
import { speakText } from '../utils/speech';
import { generateCardImage } from '../utils/canvasGenerator';

interface FlashcardProps {
  card: FlashcardData;
  onSave: (card: FlashcardData) => void;
  isSaved?: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ card, onSave, isSaved = false }) => {
  const [downloading, setDownloading] = useState(false);
  const [currentImage, setCurrentImage] = useState(card.imageUrl);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [tempUrl, setTempUrl] = useState('');

  // Update local state when card prop changes
  useEffect(() => {
    setCurrentImage(card.imageUrl);
  }, [card]);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // Use currentImage for the download
      const cardToDownload = { ...card, imageUrl: currentImage };
      const dataUrl = await generateCardImage(cardToDownload);
      if (dataUrl) {
        const link = document.createElement('a');
        link.download = `Flashcard-${card.en}.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (e) {
      console.error("Download failed", e);
    } finally {
      setDownloading(false);
    }
  };

  const handleSave = () => {
    // Save with the manually updated image if one exists
    onSave({ ...card, imageUrl: currentImage });
  };

  const glassBtnClass = "w-16 h-16 rounded-2xl backdrop-blur-md border shadow-lg transition-all duration-300 flex items-center justify-center hover:-translate-y-1 active:scale-95";

  return (
    // Beautiful Frame Wrapper
    <div className="relative mb-8 group transform transition-all duration-500 ease-in-out hover:scale-[1.03]">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-[2.2rem] opacity-30 blur group-hover:opacity-60 transition duration-500"></div>
      
      {/* Gradient Border Frame */}
      <div className="relative p-[6px] rounded-[2.2rem] bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 shadow-2xl">
        
        {/* Main Card Content */}
        <div className="bg-white rounded-[2rem] overflow-hidden relative h-full">
          
          {/* Image Area */}
          <div className="h-80 bg-white flex items-center justify-center relative overflow-hidden group border-b border-gray-100">
            
            {/* Manual Image Input Button */}
            <button 
                onClick={() => { setTempUrl(currentImage || ''); setShowUrlInput(true); }}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/20 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all hover:bg-black/40 active:scale-90"
                title="Change Image URL"
            >
                <LinkIcon size={20} />
            </button>

            {/* URL Input Modal Overlay */}
            {showUrlInput && (
                <div className="absolute inset-0 z-20 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-6 animate-fadeIn">
                    <div className="w-full max-w-sm">
                        <h4 className="text-gray-700 font-bold mb-2 text-lg">Add Custom Image URL</h4>
                        <input 
                            type="text" 
                            value={tempUrl}
                            onChange={(e) => setTempUrl(e.target.value)}
                            placeholder="Paste image link here..."
                            className="w-full p-4 rounded-xl border-2 border-gray-200 mb-3 focus:border-primary outline-none bg-white font-poppins text-sm"
                            autoFocus
                        />
                        <div className="flex gap-3">
                            <button 
                                onClick={() => { setCurrentImage(tempUrl); setShowUrlInput(false); }}
                                className="flex-1 py-3 rounded-xl bg-primary text-white font-bold shadow-lg active:scale-95 transition-transform"
                            >
                                Update
                            </button>
                            <button 
                                onClick={() => setShowUrlInput(false)}
                                className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 active:scale-95 transition-transform"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {currentImage ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-50">
                <img 
                  src={currentImage} 
                  alt={`Illustration of ${card.en}`} 
                  className="max-w-full max-h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                      setCurrentImage('');
                  }}
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
                <span className="text-9xl filter drop-shadow-lg animate-bounce select-none">
                  {card.emoji}
                </span>
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="p-8 text-center space-y-4">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <h2 className="font-poppins text-5xl font-bold text-primary capitalize tracking-tight">
                  {card.en}
                </h2>
              </div>
              <div className="flex items-center justify-center gap-3">
                {card.partOfSpeech && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-poppins font-semibold">
                    {card.partOfSpeech}
                  </span>
                )}
                <p className="font-poppins text-gray-400 text-xl italic">{card.phonetic}</p>
              </div>
            </div>

            <h3 className="font-cairo text-4xl font-bold text-gray-800 dir-rtl">
              {card.ar}
            </h3>

            <div className="bg-gray-50 p-5 rounded-2xl text-left border border-gray-100 mt-6 shadow-sm">
              <small className="block text-primary font-bold mb-1 font-poppins uppercase tracking-wider text-xs">Example</small>
              <p className="text-gray-700 font-poppins text-lg leading-relaxed">{card.example}</p>
            </div>

            {/* Sources */}
            {card.sources && card.sources.length > 0 && (
              <div className="text-xs text-gray-400 text-left pt-3 border-t border-gray-100 mt-4">
                <span className="font-bold mr-1 text-gray-500">Source:</span>
                {card.sources.slice(0, 2).map((source, idx) => (
                  <a 
                    key={idx} 
                    href={source.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-primary underline decoration-dotted mr-3 transition-colors truncate max-w-[150px] align-bottom"
                  >
                    {source.title || new URL(source.uri).hostname} <ExternalLink size={10} className="ml-1" />
                  </a>
                ))}
              </div>
            )}

            {/* Actions with Glass Style */}
            <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <button 
                onClick={() => speakText(card.en)}
                className={`${glassBtnClass} bg-blue-50/50 border-blue-100 text-blue-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:bg-blue-600`}
                title="Listen"
              >
                <Volume2 size={28} />
              </button>
              
              <button 
                onClick={handleSave}
                disabled={isSaved}
                className={`${glassBtnClass} ${
                  isSaved 
                    ? 'bg-green-100 text-green-600 border-green-200 cursor-default shadow-none' 
                    : 'bg-emerald-50/50 border-emerald-100 text-emerald-600 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 active:bg-emerald-600'
                }`}
                title="Save to Gallery"
              >
                {isSaved ? <Check size={28} /> : <Bookmark size={28} />}
              </button>

              <button 
                onClick={handleDownload}
                disabled={downloading}
                className={`${glassBtnClass} bg-pink-50/50 border-pink-100 text-pink-600 hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/30 active:bg-pink-600 disabled:opacity-50`}
                title="Download Image"
              >
                {downloading ? <Loader2 className="animate-spin" size={28} /> : <Download size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;