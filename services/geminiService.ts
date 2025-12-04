import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse, Source } from "../types";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateFlashcardData = async (word: string): Promise<GeminiResponse> => {
  // 1. Generate Text Content with Web Search
  const textResponse = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Using Google Search, find the precise definition, part of speech, phonetic transcription (IPA), and a simple example sentence for the English word: "${word}".
    Also suggest a relevant single emoji.
    Translation should be in Arabic.
    
    Return the result strictly as a valid JSON object with the following keys:
    - word (Capitalized English word)
    - partOfSpeech (e.g., Noun, Verb, Adjective)
    - translation (Arabic translation)
    - phonetic (IPA)
    - emoji (Single emoji character)
    - example (Simple English sentence)
    
    Do not include markdown formatting or explanations. Just the raw JSON string.`,
    config: {
      tools: [{ googleSearch: {} }]
    }
  });

  let textData: any = {};
  const rawText = textResponse.text || "{}";
  
  try {
      // Robust JSON extraction
      const jsonStart = rawText.indexOf('{');
      const jsonEnd = rawText.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1) {
          const jsonStr = rawText.substring(jsonStart, jsonEnd + 1);
          textData = JSON.parse(jsonStr);
      } else {
          textData = JSON.parse(rawText);
      }
  } catch (e) {
      console.error("Failed to parse text response", rawText);
      throw new Error("Failed to generate valid content");
  }

  // Extract Sources (Grounding Metadata)
  const sources: Source[] = [];
  const chunks = textResponse.candidates?.[0]?.groundingMetadata?.groundingChunks;
  if (chunks) {
    chunks.forEach((chunk: any) => {
      if (chunk.web) {
        sources.push({ uri: chunk.web.uri, title: chunk.web.title });
      }
    });
  }

  // 2. Generate Real Image
  // Using gemini-2.5-flash-image for generation
  let imageUrl = "";
  try {
    const finalWord = textData.word || word;
    const imageResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
            parts: [{ 
                text: `Create a simple, colorful, vector-art style illustration of "${finalWord}". 
                The image should be suitable for an educational flashcard. 
                Isolated on a white background. No text, letters, or words in the image.` 
            }]
        }
    });
    
    const candidates = imageResponse.candidates;
    if (candidates && candidates[0] && candidates[0].content && candidates[0].content.parts) {
        for (const part of candidates[0].content.parts) {
            if (part.inlineData) {
                imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                break;
            }
        }
    }
  } catch (e) {
      console.error("Failed to generate image", e);
  }

  return {
    en: textData.word || word,
    ar: textData.translation || "",
    partOfSpeech: textData.partOfSpeech || "",
    phonetic: textData.phonetic || "",
    emoji: textData.emoji || "📝",
    example: textData.example || "",
    imageUrl: imageUrl, // Can be empty string if failed
    sources: sources.length > 0 ? sources : undefined
  };
};