import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/data/translations';

export type Language = 'pt' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get nested translation value
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
};

// Deep merge to ensure missing keys fall back to PT
const deepMerge = (base: any, override: any): any => {
  if (!override) return base;
  const result: any = Array.isArray(base) ? [...base] : { ...base };
  for (const key of Object.keys(override)) {
    const baseVal = (base ?? {})[key];
    const overVal = override[key];
    if (overVal && typeof overVal === 'object' && !Array.isArray(overVal)) {
      result[key] = deepMerge(baseVal ?? {}, overVal);
    } else {
      result[key] = overVal;
    }
  }
  return result;
};

// Helper function to get translations
const getTranslations = (lang: Language) => {
  return deepMerge(translations.pt, translations[lang]);
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['pt', 'en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Translation function with nested key support
  const t = (key: string): string => {
    const currentTranslations = getTranslations(language);
    return getNestedValue(currentTranslations, key) || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
