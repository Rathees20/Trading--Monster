import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import logoUrl from "./assets/logo.jpeg";

// Ensure favicon uses the project logo (works in build too)
const ensureFavicon = () => {
  const head = document.head || document.getElementsByTagName("head")[0];
  if (!head) return;
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    head.appendChild(link);
  }
  link.type = "image/jpeg";
  link.href = logoUrl;
};
ensureFavicon();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

