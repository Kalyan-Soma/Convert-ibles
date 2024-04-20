import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="px-4 pt-12 pb-4 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold text-center">Convert-ibles!</h1>
        <p className="mb-6 text-center">
          Your go-to solution for easy conversions.
        </p>
      </div>
      <div className="flex-grow pt-12">
        <div className="flex flex-wrap justify-center gap-8 px-4">
          <div className="max-w-sm overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-cyan-200 via-light-blue-300 to-blue-200">
            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-2xl">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Currency Conversion
              </div>
              <p className="text-gray-700">
                Convert currencies with real-time rates and stay up-to-date with
                the global markets.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #CurrencyExchange
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #GlobalFinance
              </span>
            </div>
            <div className="flex justify-center px-6 py-4">
              <Link to="/ActualCurrencyConversion">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  Let's Convert
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-orange-200 via-orange-300 to-yellow-300">
            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-2xl">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Weight Conversion
              </div>
              <p>
                Easily switch between different weight units for recipes,
                shipments, and more.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #WeightConversion
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #CookingScales
              </span>
            </div>
            <div className="flex justify-center px-6 py-4">
              <Link to="/WeightConversion">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  Let's Convert
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-red-300 via-red-400 to-orange-300">
            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-2xl">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Length Conversion
              </div>
              <p>
                Transition between metric and imperial lengths for construction,
                travel, and crafts.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #LengthMeasurement
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #TravelReady
              </span>
            </div>
            <div className="flex justify-center px-6 py-4">
              <Link to="/LengthConversion">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  Let's Convert
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-200">
            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-2xl">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Speed Conversion
              </div>
              <p>
                Adapt pace units for running, driving, or wind speed with a
                simple click.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #SpeedCheck
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #PaceYourRace
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #TravelSpeed
              </span>
            </div>
            <div className="flex justify-center px-6 py-4">
              <Link to="/SpeedConversion">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  Let's Convert
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-gray-300 via-purple-300 to-pink-300">
            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-2xl">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Area Conversion
              </div>
              <p>
                Calculate land area for real estate, agriculture, or outdoor
                planning.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #AreaCalculator
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #RealEstateTools
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #LandscapingDesigns
              </span>
            </div>
            <div className="flex justify-center px-6 py-4">
              <Link to="/AreaConversion">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  Let's Convert
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="max-w-sm overflow-hidden shadow-lg rounded-2xl bg-gradient-to-r from-teal-200 via-teal-300 to-green-300">
            <div className="px-6 py-4 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-t-2xl">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Currency & Crypto Conversion
              </div>
              <p className="text-gray-700">
                Convert both traditional and crypto currencies with real-time
                rates and stay up-to-date with the global markets.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #Forex
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #CurrencyExchange
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                #TravelMoney
              </span>
            </div>
            <div className="flex justify-center px-6 py-4">
              <Link to="/CurrencyConversion">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  Let's Convert
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="px-4 py-2 mt-4 text-center text-gray-900 bg-gray-100 shadow-inner">
        © {new Date().getFullYear()} Whatcha lookin at, stranger. All rights
        reserved.
      </footer>
    </div>
  );
};

export default Homepage;
