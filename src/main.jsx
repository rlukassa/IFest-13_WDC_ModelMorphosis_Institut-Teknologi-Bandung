import React from "react";
import { createRoot } from "react-dom/client"; // Gunakan createRoot dari react-dom/client
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

import ScrolltoTop from "./components/ScrolltoTop.jsx";

import "bootstrap/dist/css/bootstrap.min.css"; // import dari web bootstrap
import "./dist/css/main.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const root = createRoot(document.getElementById("root")); // Buat root dengan createRoot

root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrolltoTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
