import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.scss";

/**
 * Application entry point
 * Creates React root and renders the main App component with StrictMode enabled
 * StrictMode helps identify potential problems in the application during development
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
