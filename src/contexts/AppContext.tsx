import { useEffect, useState, type ReactNode } from 'react'
import { AppContext, type Language, type Theme } from './useAppContext'
export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('dark')
  useEffect(() => { document.documentElement.lang = selectedLanguage }, [selectedLanguage])
  return <AppContext.Provider value={{
    selectedLanguage,
    theme,
    toggleLanguage: () => setSelectedLanguage(previous => previous === 'en' ? 'fr' : 'en'),
    toggleTheme: () => setTheme(previous => previous === 'dark' ? 'light' : 'dark'),
    isDark: theme === 'dark',
  }}>{children}</AppContext.Provider>
}
