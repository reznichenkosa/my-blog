import { FC, PropsWithChildren, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "shared/contexts/theme/theme-context";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const setNewTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme: setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
