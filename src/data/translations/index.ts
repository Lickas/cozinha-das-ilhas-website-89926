import { pt } from './pt';
import { en } from './en';
import { fr } from './fr';

export const translations = {
  pt,
  en,
  fr
};

export type TranslationKey = keyof typeof pt;
export type NestedTranslationKey = string;