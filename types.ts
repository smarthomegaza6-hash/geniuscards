export interface Source {
  uri: string;
  title: string;
}

export interface GeminiResponse {
  en: string;
  ar: string;
  partOfSpeech: string;
  phonetic: string;
  emoji: string;
  example: string;
  imageUrl?: string;
  sources?: Source[];
}

export interface FlashcardData extends GeminiResponse {
  id: string;
  createdAt: number;
}

export enum AppTab {
  GENERATOR = 'GENERATOR',
  GALLERY = 'GALLERY',
  QUIZ = 'QUIZ',
  CURRICULUM = 'CURRICULUM'
}