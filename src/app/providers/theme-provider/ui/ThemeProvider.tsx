import { type FC, type PropsWithChildren, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from 'shared/contexts/theme-context'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const setNewTheme = (newTheme: Theme): void => {
    setTheme(newTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
