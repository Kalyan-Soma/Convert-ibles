import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import ActualCurrencyConverter from "./ActualCurrencyConverter";
import WeightConverter from "./WeightConversion";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CurrencyConversion" element={<CurrencyConverter />} />
        <Route
          path="/ActualCurrencyConversion"
          element={<ActualCurrencyConverter />}
        />
        <Route path="/WeightConversion" element={<WeightConverter />} />
      </Routes>
    </div>
  );
}

export default App;
