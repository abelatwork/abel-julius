// @copyright 2026 Abel-Julius
// @license Apache-2.0

//Node modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//CSS link
import "./index.css";

//Components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
