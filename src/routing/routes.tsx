import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const MainLayout = lazy(() => import("@layouts/MainLayout"));
const HomePage = lazy(() => import("@pages/HomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
