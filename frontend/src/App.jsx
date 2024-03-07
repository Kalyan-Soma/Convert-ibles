import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CurrencyConverter from "./CurrencyConverter";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/converter" element={<CurrencyConverter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
