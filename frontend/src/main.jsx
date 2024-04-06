import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import ActualCurrencyConverter from "./ActualCurrencyConverter";
import WeightConverter from "./WeightConversion"; // Import WeightConverter component
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
        <Route
          path="/WeightConversion" // Define route for weight conversion
          element={<WeightConverter />} // Render WeightConverter component
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

root.render(<App />);
