import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: "/",
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: "/about",
    element: <AboutPage />,
  },
};
