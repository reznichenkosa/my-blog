import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export interface ThemeContextProps {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
