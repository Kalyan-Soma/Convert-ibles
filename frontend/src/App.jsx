import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currencies, setCurrencies] = useState(["USD", "EUR", "GBP"]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState();
  const [isFromAmount, setIsFromAmount] = useState(true);

  const handleAmountChange = (e, isFrom) => {
    setIsFromAmount(isFrom);
    setAmount(e.target.value);
  };

  const calculateConversion = () => {
    const conversionRate = 0.85; // Example: USD to EUR
    if (isFromAmount) {
      setConvertedAmount(amount * conversionRate);
    } else {
      setAmount(convertedAmount / conversionRate);
    }
  };

  useEffect(calculateConversion, [
    amount,
    fromCurrency,
    toCurrency,
    isFromAmount,
  ]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setIsFromAmount(!isFromAmount);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-md p-5 bg-white rounded-lg shadow">
          <h1 className="mb-20 text-2xl font-bold text-center text-gray-800">
            Currency Converter
          </h1>
          <div className="flex items-center justify-between mb-4">
            <input
              type="number"
              value={isFromAmount ? amount : convertedAmount}
              onChange={(e) => handleAmountChange(e, true)}
              className="w-2/5 border-gray-300 rounded-lg shadow-sm input input-bordered"
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-1/3 border-gray-300 rounded-lg shadow-sm select select-bordered"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={swapCurrencies}
            className="px-2 py-1 mb-4 text-gray-800 bg-gray-200 rounded-full btn hover:bg-gray-300"
          >
            Swap
          </button>

          <div className="flex items-center justify-between">
            <input
              type="number"
              value={isFromAmount ? convertedAmount : amount}
              onChange={(e) => handleAmountChange(e, false)}
              className="w-2/5 border-gray-300 rounded-lg shadow-sm input input-bordered"
              readOnly={!isFromAmount}
            />
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-1/3 border-gray-300 rounded-lg shadow-sm select select-bordered"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
