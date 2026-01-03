import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import favicon from "./assets/favicon.ico";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon"; // ✅ correct MIME type for .ico
link.href = favicon;
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
