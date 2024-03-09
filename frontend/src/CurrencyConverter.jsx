import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(50);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isFromAmount, setIsFromAmount] = useState(true);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await fetch("http://localhost:8080/currencies");
      if (!response.ok) throw new Error("Failed to fetch currencies");
      const currencies = await response.json();
      currencies.sort();
      setCurrencies(currencies);
      const defaultFromCurrency = "USD";
      const defaultToCurrency = "EUR";

      if (currencies.includes(defaultFromCurrency)) {
        setFromCurrency(defaultFromCurrency);
      } else if (currencies.length > 0) {
        setFromCurrency(currencies[0]);
      }

      if (currencies.includes(defaultToCurrency)) {
        setToCurrency(defaultToCurrency);
      } else if (currencies.length > 1) {
        setToCurrency(currencies[1]);
      }
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency && (amount || convertedAmount))
      convertCurrency();
  }, [fromCurrency, toCurrency, amount, convertedAmount, isFromAmount]);

  const handleAmountChange = (e, isFrom) => {
    setIsFromAmount(isFrom);
    if (isFrom) {
      setAmount(e.target.value);
      setConvertedAmount("");
    } else {
      setConvertedAmount(e.target.value);
      setAmount("");
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setIsFromAmount(!isFromAmount);
  };

  const convertCurrency = async () => {
    console.log("Converting currency...");
    try {
      const response = await fetch(
        `http://localhost:8080/convert?amount=${amount}&sourceCurrency=${fromCurrency}&targetCurrency=${toCurrency}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Conversion result:", data);
      setConvertedAmount(parseFloat(data.convertedAmount).toFixed(2));
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

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
              value={isFromAmount ? amount : convertedAmount || ""}
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
              value={!isFromAmount ? amount : convertedAmount || ""}
              onChange={(e) => handleAmountChange(e, false)}
              className="w-2/5 border-gray-300 rounded-lg shadow-sm input input-bordered"
              readOnly={isFromAmount}
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

export default CurrencyConverter;
test;
