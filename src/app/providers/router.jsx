import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import NotFoundPage from "../../pages/notfound/NotFoundPage";
import MainWrapper from "../../global/MainWrapper";

export const router = createBrowserRouter(
  MainWrapper([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ])
);
