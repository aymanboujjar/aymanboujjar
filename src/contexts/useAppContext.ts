import { createContext, useContext } from 'react'
export type Language = 'en' | 'fr'
export type Theme = 'light' | 'dark'
export interface AppContextType {
  selectedLanguage: Language
  theme: Theme
  toggleLanguage: () => void
  toggleTheme: () => void
  isDark: boolean
}
export const AppContext = createContext<AppContextType | undefined>(undefined)
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
  return context
}
