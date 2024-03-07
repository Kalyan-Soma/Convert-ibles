import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Convert-TING</h1>
        <p className="mb-8">
          Your go-to solution for easy currency conversions.
        </p>
        <Link to="/converter">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Start Converting
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
