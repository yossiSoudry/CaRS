import React from "react";
// import Reactdom from 'react-dom';

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/contextProvider";

// Reactdom.render(<App />, document.getElementById('root'));
import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <ContextProvider>
    <App tab="home" />
  </ContextProvider>
);
