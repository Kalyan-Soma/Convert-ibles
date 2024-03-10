import React from "react";
import logoSvg from "./logo.svg"; // Import your SVG logo file

const Header = () => {
  return (
    <nav className="top-0 z-10 w-full bg-white shadow">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="/converter"
                className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900"
              >
                {/* Use the imported SVG file directly */}
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
  );
};

export default Header;
