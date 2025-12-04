export const speakText = (text: string) => {
  if (!window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB'; // British English preferred for educational clarity
  utterance.rate = 0.85; // Slightly slower for learning

  const voices = window.speechSynthesis.getVoices();
  // Try to find a high quality GB voice
  const gbVoice = voices.find(v => v.lang === 'en-GB' && v.name.includes('Google')) || 
                  voices.find(v => v.lang === 'en-GB');
  
  if (gbVoice) utterance.voice = gbVoice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};