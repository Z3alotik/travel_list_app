import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import FlashCardsApp from "./Flashcards";
import AccApp from "./Accordion/components/AccApp";
import TipCalculator from "./TipCalculator/components/TipCalculator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FlashCardsApp /> */}
    {/* <AccApp /> */}
    <TipCalculator />
  </React.StrictMode>
);
