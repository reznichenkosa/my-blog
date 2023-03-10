import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.async";
import { MainPageLazy } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
