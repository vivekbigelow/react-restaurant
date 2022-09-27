import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";

// Warning: StrictMode will render twice in dev mode. This catches subtle bugs.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
  <Toaster />
    <App />
  </BrowserRouter>
  </React.StrictMode>
)
