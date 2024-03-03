import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // States for the application
  const [isOpen, setIsOpen] = useState(false); // For toggling navigation on mobile
  const [currencies, setCurrencies] = useState(["USD", "EUR", "GBP"]); // Example currencies
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState();

  // Fetch conversion rates (simulate with a hardcoded value for now)
  useEffect(() => {
    // Simulate fetching conversion rate
    const conversionRate = 0.85; // Simulate converting USD to EUR
    setConvertedAmount(amount * conversionRate);
  }, [amount, fromCurrency, toCurrency]);

  // Toggle navigation for mobile
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Navigation - shown on large screens, toggleable on small screens */}
      <div
        className={`md:w-64 lg:block ${
          isOpen ? "block" : "hidden"
        } bg-gray-200 text-gray-700 p-4`}
      >
        <button
          className="md:hidden rounded-full bg-gray-300 text-gray-700 p-2 mb-4"
          onClick={toggleNav}
        >
          Close
        </button>
        {/* Navigation Items */}
        <nav>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            {/* Add more navigation items here */}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        <button
          className="md:hidden rounded-full bg-gray-300 text-gray-700 p-2 mb-4"
          onClick={toggleNav}
        >
          Menu
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Currency Converter</h1>

        {/* Currency Conversion Form */}
        <div className="mt-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input input-bordered w-full max-w-xs rounded-lg border-gray-300 shadow-sm"
          />
          <div className="mt-2">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="select select-bordered w-full max-w-xs rounded-lg border-gray-300 shadow-sm mt-2"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-2">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="select select-bordered w-full max-w-xs rounded-lg border-gray-300 shadow-sm mt-2"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Convert
            </button>
          </div>
        </div>

        {/* Display Converted Amount */}
        {convertedAmount && (
          <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-md">
            <p>
              Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
