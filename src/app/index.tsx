import { useTheme } from "shared/contexts/theme-context";
import { Navbar } from "widgets/navbar";
import { AppRouter } from "./providers/router";
import cn from "classnames";
import "./styles/index.scss";
import { Sidebar } from "widgets/sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
