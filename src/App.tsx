import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.async";
import { MainPageLazy } from "./pages/MainPage/MainPage.async";

export const App = () => {
  return (
    <div className="wrapper">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
