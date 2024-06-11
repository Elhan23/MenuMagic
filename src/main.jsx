import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import "./i18n";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="336613887615-iefih0eh2gmddanivvcg3g57brnd41j2.apps.googleusercontent.com">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
