import { LOCAL_STORAGE_THEME_KEY } from "./../providers/ThemeProvider";
import { useContext } from "react";
import { ThemeContext } from "./../providers/ThemeProvider";
import { Theme } from "./../providers/ThemeProvider";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
