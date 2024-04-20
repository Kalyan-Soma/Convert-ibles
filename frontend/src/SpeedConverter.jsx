import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import logoSvg from "./logo.svg";

function SpeedConverter() {
  const units = ["km/h", "mph", "m/s"];
  const [sourceUnit, setSourceUnit] = useState("km/h");
  const [targetUnit, setTargetUnit] = useState("mph");
  const [amount, setAmount] = useState(8);
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isFromAmount, setIsFromAmount] = useState(true);

  const apiUrl =
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:8080";

  useEffect(() => {
    const performConversion = async () => {
      try {
        const response = await axios.get(`${apiUrl}/convert/speed`, {
          params: {
            amount: isFromAmount ? amount : convertedAmount,
            sourceUnit: isFromAmount ? sourceUnit : targetUnit,
            targetUnit: isFromAmount ? targetUnit : sourceUnit,
          },
        });
        if (response.data && response.data.convertedAmount !== undefined) {
          const result = response.data.convertedAmount.toFixed(2);
          if (isFromAmount) {
            setConvertedAmount(result);
          } else {
            setAmount(result);
          }
        }
      } catch (error) {
        console.error("Error during conversion", error);
        if (isFromAmount) {
          setConvertedAmount("Error");
        } else {
          setAmount("Error");
        }
      }
    };

    performConversion();
  }, [amount, sourceUnit, targetUnit, convertedAmount, isFromAmount, apiUrl]);

  const handleAmountChange = (e, isFrom) => {
    const value = e.target.value;
    setIsFromAmount(isFrom);
    if (isFrom) {
      setAmount(value);
    } else {
      setConvertedAmount(value);
    }
  };

  const swapUnits = async () => {
    console.log(`Swapping units: ${sourceUnit} to ${targetUnit}`);
    const newSourceUnit = targetUnit;
    const newTargetUnit = sourceUnit;
    const newAmount = convertedAmount;

    setSourceUnit(newSourceUnit);
    setTargetUnit(newTargetUnit);

    try {
      const response = await axios.get(`${apiUrl}/convert/speed`, {
        params: {
          amount: newAmount,
          sourceUnit: newSourceUnit,
          targetUnit: newTargetUnit,
        },
      });
      if (response.data && response.data.convertedAmount !== undefined) {
        setAmount(newAmount);
        setConvertedAmount(response.data.convertedAmount.toFixed(2));
      }
    } catch (error) {
      console.error("Error during conversion after swap", error);
      setConvertedAmount("Error");
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
                  <span className="font-bold">Speed Converter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center flex-grow px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-200">
        <div className="w-full max-w-md p-5 my-4 bg-white shadow rounded-2xl md:my-8">
          <h1 className="mb-16 text-2xl font-bold text-center text-gray-800">
            Speed Converter
          </h1>
          <div className="flex items-center justify-between mb-4">
            <input
              type="number"
              value={isFromAmount ? amount : convertedAmount}
              onChange={(e) => handleAmountChange(e, true)}
              className="w-2/5 border-gray-300 rounded-lg shadow-sm input input-bordered"
            />
            <select
              value={sourceUnit}
              onChange={(e) => setSourceUnit(e.target.value)}
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
              value={targetUnit}
              onChange={(e) => setTargetUnit(e.target.value)}
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
            <h3 className="mb-2 text-lg font-bold">Speed Converter</h3>
            <p>
              Quickly convert between different units of speed for travel,
              sports, or any other purposes.
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

export default SpeedConverter;
