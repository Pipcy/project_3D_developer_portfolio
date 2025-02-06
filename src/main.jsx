import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import "./Theme/global.css";
import { ThemeProvider } from "./Theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <ThemeProvider>
  //   <App />
  // </ThemeProvider>
);
