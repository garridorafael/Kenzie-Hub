import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UseProvider } from "./providers/userProvider.jsx";
import { TechProvider } from "./providers/techProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TechProvider>
        <UseProvider>
          <App />
        </UseProvider>
      </TechProvider>
    </BrowserRouter>
  </React.StrictMode>
);
