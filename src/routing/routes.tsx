import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const MainLayout = lazy(() => import("@layouts/MainLayout"));
const HomePage = lazy(() => import("@pages/HomePage"));
const AboutMe = lazy(() => import("@pages/AboutMe"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/about-me",
        Component: AboutMe,
      },
    ],
  },
]);
