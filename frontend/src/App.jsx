import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch available currencies from the API
  useEffect(() => {
    const fetchCurrencies = async () => {
      // Adjust the URL to your API endpoint for fetching currencies
      const response = await fetch("http://localhost:8080/currencies");
      const data = await response.json();
      const currencyCodes = Object.keys(data);
      setCurrencies(currencyCodes);
      // Initialize default currencies
      if (currencyCodes.length > 1) {
        setFromCurrency(currencyCodes[0]);
        setToCurrency(currencyCodes[1]);
      }
    };
    fetchCurrencies();
  }, []);

  const handleAmountChange = (e, isFrom) => {
    const value = e.target.value;
    setAmount(value);
    if (isFrom) {
      convertCurrency(value, fromCurrency, toCurrency);
    } else {
      // If you're setting the converted amount manually, you may need a reverse conversion or adjustment here
    }
  };

  const convertCurrency = async (amount, sourceCurrency, targetCurrency) => {
    try {
      const response = await fetch(
        `http://localhost:8080/convert?amount=${amount}&sourceCurrency=${sourceCurrency}&targetCurrency=${targetCurrency}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setConvertedAmount(data); // Assuming the backend directly returns the converted amount
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    convertCurrency(amount, toCurrency, fromCurrency);
  };

  // Automatically convert currency whenever relevant states change
  useEffect(() => {
    if (fromCurrency && toCurrency) {
      convertCurrency(amount, fromCurrency, toCurrency);
    }
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center flex-grow px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-5 my-4 bg-white rounded-lg shadow md:my-8">
          <h1 className="mb-16 text-2xl font-bold text-center text-gray-800">
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
