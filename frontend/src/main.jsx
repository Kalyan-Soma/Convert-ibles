import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/converter" element={<CurrencyConverter />} />
        {/* Add more routes here as you create new pages */}
      </Routes>
    </Router>
  </React.StrictMode>
);
