import { createContext, FC, PropsWithChildren, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = "theme";

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
