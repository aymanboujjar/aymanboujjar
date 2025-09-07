import React, { createContext, useContext, useState, type ReactNode, } from 'react';

export type Language = 'en' | 'fr';
export type Theme = 'light' | 'dark';

interface AppContextType {
  selectedLanguage: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');


  const toggleLanguage = () => {
    setSelectedLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const value: AppContextType = {
    selectedLanguage,
    theme,
    toggleLanguage,
    toggleTheme,
    isDark: theme === 'dark',
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};
