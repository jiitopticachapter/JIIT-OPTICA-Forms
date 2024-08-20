import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
