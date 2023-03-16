import { type FC, type PropsWithChildren, useState, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from 'shared/contexts/theme-context'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'light'

interface ThemeProviderProps {
  initialTheme?: Theme
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const setNewTheme = (newTheme: Theme): void => {
    setTheme(newTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
