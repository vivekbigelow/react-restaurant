import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Warning: StrictMode will render twice in dev mode. This catches subtle bugs.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Oops! Sorry, an error occurred.</h1>}>
      <BrowserRouter>
        <Toaster />
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
