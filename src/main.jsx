import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/css/main.css";
import "./app/css/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/providers/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// react router dom
// tailwind css
// redux toolkit
