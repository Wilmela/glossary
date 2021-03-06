import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles/index.css";
import 'aos/dist/aos.css';

import { GlossaryProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <GlossaryProvider>
    <App />
  </GlossaryProvider>
);
