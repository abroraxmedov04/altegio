import { ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainWrapper = (routes) => {
  return routes.map((route) => ({
    ...route,
    element: (
      <div className="flex flex-col min-h-screen">
        <ScrollRestoration />
        <Header />
        <main className="flex-[100%]  flex flex-col">{route.element}</main>
        <Footer />
      </div>
    ),
  }));
};

export default MainWrapper;
