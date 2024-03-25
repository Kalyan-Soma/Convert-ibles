import React, { useState, useEffect } from "react";
import "./App.css";
import logoSvg from "./logo.svg";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(30);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isFromAmount, setIsFromAmount] = useState(true);

  const apiUrl =
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(`${apiUrl}/currencies`);
        if (!response.ok) throw new Error("Failed to fetch currencies");
        const currencies = await response.json();
        currencies.sort();
        setCurrencies(currencies);
        setFromCurrency(currencies.includes("USD") ? "USD" : currencies[0]);
        setToCurrency(currencies.includes("EUR") ? "EUR" : currencies[1]);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, [apiUrl]);

  useEffect(() => {
    if (fromCurrency && toCurrency && (amount || convertedAmount)) {
      convertCurrency();
    }
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
        `${apiUrl}/convert?amount=${
          isFromAmount ? amount : convertedAmount
        }&sourceCurrency=${fromCurrency}&targetCurrency=${toCurrency}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Conversion result:", data);
      if (isFromAmount) {
        setConvertedAmount(parseFloat(data.convertedAmount).toFixed(2));
      } else {
        setAmount(parseFloat(data.convertedAmount).toFixed(2));
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="top-0 z-10 w-full bg-white shadow">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="/CurrencyConversion"
                  className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900"
                >
                  <img
                    src={logoSvg}
                    alt="Currency Converter Logo"
                    className="w-8 h-8 mr-2"
                  />
                  <span className="font-bold">Currency Converter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center flex-grow px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-200 via-light-blue-300 to-blue-200">
        <div className="w-full max-w-md p-5 my-4 bg-white shadow rounded-2xl md:my-8">
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
      <footer className="bottom-0 w-full p-4 text-white bg-gray-800">
        <div className="grid max-w-6xl grid-cols-1 gap-4 mx-auto md:grid-cols-4">
          <div>
            <h3 className="mb-2 text-lg font-bold">Currency Converter</h3>
            <p>
              Convert currencies with real-time rates and stay up-to-date with
              the global markets.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Contributors</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Susreeja Diddi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kalyan Soma
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Aneesh Prodduturu
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Related Content</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Weight Conversion
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Length Conversion
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Speed Conversion
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Area Conversion
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Connect</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/aneeshpavan"
                  target="_blank"
                  className="hover:underline"
                >
                  @Aneesh on GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kalyan-Soma"
                  target="_blank"
                  className="hover:underline"
                >
                  @Kalyan on GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/susreejadiddi"
                  target="_blank"
                  className="hover:underline"
                >
                  @Susreeja on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CurrencyConverter;
