import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import ActualCurrencyConverter from "./ActualCurrencyConverter";

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
      </Routes>
    </div>
  );
}

export default App;
