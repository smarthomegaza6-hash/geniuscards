import React from 'react';
import { Book, ChevronLeft, Layers, GraduationCap } from 'lucide-react';
import { curriculumData } from '../data/curriculum';

interface CurriculumProps {
  onSelectWord: (word: string) => void;
  selectedGrade: string | null;
  setSelectedGrade: (grade: string | null) => void;
  selectedUnit: string | null;
  setSelectedUnit: (unit: string | null) => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ 
  onSelectWord, 
  selectedGrade, 
  setSelectedGrade, 
  selectedUnit, 
  setSelectedUnit 
}) => {
  const grades = Object.keys(curriculumData);
  
  const handleBack = () => {
    if (selectedUnit) {
      setSelectedUnit(null);
    } else if (selectedGrade) {
      setSelectedGrade(null);
    }
  };

  return (
    <div className="animate-fadeIn pb-8">
      {/* Navigation Header */}
      {(selectedGrade || selectedUnit) && (
        <div className="flex items-center gap-3 mb-6 bg-white/20 p-3 rounded-xl backdrop-blur-sm text-white">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="font-bold text-lg">
            {selectedGrade && !selectedUnit && `Grade ${selectedGrade}`}
            {selectedUnit && `Grade ${selectedGrade} - Unit ${selectedUnit}`}
          </div>
        </div>
      )}

      {/* Grade Selection */}
      {!selectedGrade && (
        <div className="grid grid-cols-2 gap-4">
          {grades.map(grade => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className="bg-white rounded-[2rem] p-6 shadow-lg hover:scale-[1.02] transition-transform text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <GraduationCap size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Grade {grade}</h3>
              <p className="text-gray-400 text-sm mt-1">{Object.keys(curriculumData[grade]).length} Units</p>
            </button>
          ))}
        </div>
      )}

      {/* Unit Selection */}
      {selectedGrade && !selectedUnit && (
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(curriculumData[selectedGrade]).map(unit => (
            <button
              key={unit}
              onClick={() => setSelectedUnit(unit)}
              className="bg-white rounded-[2rem] p-6 shadow-lg hover:scale-[1.02] transition-transform text-center group"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                <Layers size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Unit {unit}</h3>
              <p className="text-gray-400 text-sm mt-1">{curriculumData[selectedGrade][unit].length} Words</p>
            </button>
          ))}
        </div>
      )}

      {/* Word Selection */}
      {selectedGrade && selectedUnit && (
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-gray-600 text-center">
            Select a word to generate card
          </div>
          <div className="divide-y divide-gray-100">
            {curriculumData[selectedGrade][selectedUnit].map((item, idx) => (
              <button
                key={idx}
                onClick={() => onSelectWord(item.en)}
                className="w-full p-4 flex items-center justify-between hover:bg-blue-50 transition-colors text-left group"
              >
                <div>
                  <div className="font-bold text-gray-800 font-poppins text-lg">{item.en}</div>
                  <div className="text-sm text-gray-400 italic">{item.pro}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary font-cairo text-lg">{item.ar}</div>
                  <div className="text-xs text-gray-400">Tap to generate</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Curriculum;