import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./pages/app/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="mx-auto md:max-w-4xl">
      <RouterProvider router={routes} />
    </div>
  </React.StrictMode>
);
