import { Link } from "react-router-dom";
import { classNames } from "shared";
import { useTheme } from "shared/contexts/theme-context";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};
