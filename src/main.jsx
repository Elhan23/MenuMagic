import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import './i18n';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
