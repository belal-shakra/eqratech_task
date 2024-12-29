import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextProvider from "./contexts/ContextProvider";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <App />
    </ContextProvider>
  </React.StrictMode>
);
