import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import ActualCurrencyConverter from "./ActualCurrencyConverter";
import WeightConverter from "./WeightConversion";
import SpeedConverter from "./SpeedConverter";
import AreaConverter from "./AreaConverter";
import LengthConverter from "./LengthConverter";

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
        <Route path="/SpeedConversion" element={<SpeedConverter />} />
        <Route path="/AreaConversion" element={<AreaConverter />} />
        <Route path="/LengthConversion" element={<LengthConverter />} />
      </Routes>
    </div>
  );
}

export default App;
