import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CurrencyConversion" element={<CurrencyConverter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
