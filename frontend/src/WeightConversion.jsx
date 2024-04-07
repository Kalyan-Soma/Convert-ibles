import React, { useState } from "react";
import "./App.css";
import logoSvg from "./logo.svg";

function WeightConverter() {
  // Define available weight units
  const units = ["kg", "g", "lb", "oz"];

  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lb");
  const [amount, setAmount] = useState(0.1);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isFromAmount, setIsFromAmount] = useState(true);

  // Weight conversion function
  const convertWeight = (amount, sourceUnit, targetUnit) => {
    const unitConversions = {
      kg: {
        g: amount * 1000,
        lb: amount * 2.20462,
        oz: amount * 35.274,
      },
      g: {
        kg: amount / 1000,
        lb: amount / 453.592,
        oz: amount / 28.3495,
      },
      lb: {
        kg: amount / 2.20462,
        g: amount * 453.592,
        oz: amount * 16,
      },
      oz: {
        kg: amount / 35.274,
        g: amount * 28.3495,
        lb: amount / 16,
      },
    };

    return unitConversions[sourceUnit][targetUnit];
  };

  const handleAmountChange = (e, isFrom) => {
    setIsFromAmount(isFrom);
    if (isFrom) {
      setAmount(e.target.value);
      setConvertedAmount(
        convertWeight(e.target.value, fromUnit, toUnit).toFixed(2)
      );
    } else {
      setConvertedAmount(e.target.value);
      setAmount(convertWeight(e.target.value, toUnit, fromUnit).toFixed(2));
    }
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setIsFromAmount(!isFromAmount);
    setAmount(convertedAmount);
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
                  <span className="font-bold">Weight Converter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center flex-grow px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-200 via-orange-300 to-yellow-300">
        <div className="w-full max-w-md p-5 my-4 bg-white shadow rounded-2xl md:my-8">
          <h1 className="mb-16 text-2xl font-bold text-center text-gray-800">
            Weight Converter
          </h1>
          <div className="flex items-center justify-between mb-4">
            <input
              type="number"
              value={isFromAmount ? amount : convertedAmount}
              onChange={(e) => handleAmountChange(e, true)}
              className="w-2/5 border-gray-300 rounded-lg shadow-sm input input-bordered"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-1/3 border-gray-300 rounded-lg shadow-sm select select-bordered"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={swapUnits}
            className="px-2 py-1 mb-4 text-gray-800 bg-gray-200 rounded-full btn hover:bg-gray-300"
          >
            Swap
          </button>

          <div className="flex items-center justify-between">
            <input
              type="number"
              value={!isFromAmount ? amount : convertedAmount}
              onChange={(e) => handleAmountChange(e, false)}
              className="w-2/5 border-gray-300 rounded-lg shadow-sm input input-bordered"
            />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-1/3 border-gray-300 rounded-lg shadow-sm select select-bordered"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <footer className="bottom-0 w-full p-4 text-white bg-gray-800">
        <div className="grid max-w-6xl grid-cols-1 gap-4 mx-auto md:grid-cols-4">
          <div>
            <h3 className="mb-2 text-lg font-bold">Weight Converter</h3>
            <p>
              Easily switch between different weight units for recipes,
              shipments, and more.
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

export default WeightConverter;
