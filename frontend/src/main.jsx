import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import ActualCurrencyConverter from "./ActualCurrencyConverter";
import WeightConverter from "./WeightConversion";
import SpeedConverter from "./SpeedConverter";
import AreaConverter from "./AreaConverter";
import LengthConverter from "./LengthConverter";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CurrencyConversion" element={<CurrencyConverter />} />
        <Route
          path="/ActualCurrencyConversion"
          element={<ActualCurrencyConverter />}
        />
        <Route path="/WeightConversion" element={<WeightConverter />} />
        <Route path="/SpeedConversion" element={<SpeedConverter />} />
        <Route path="/AreaConversion" element={<AreaConverter />} />
        <Route path="/LengthConversion" element={<LengthConverter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

root.render(<App />);
