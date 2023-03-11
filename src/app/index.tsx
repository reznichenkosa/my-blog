import { useTheme } from "shared/contexts/theme-context";
import { Navbar } from "widgets/navbar";
import { AppRouter } from "./providers/router";
import cn from "classnames";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
