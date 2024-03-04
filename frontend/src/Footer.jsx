import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full p-4 text-white bg-gray-800">
      <div className="grid max-w-6xl grid-cols-1 gap-4 mx-auto md:grid-cols-4">
        <div>
          <h3 className="mb-2 text-lg font-bold">Currency Converter</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sit fugiat doloribus quia nisi? Molestias laudantium reiciendis
            expedita, autem vel dolore veritatis quas labore natus! Iste
            aspernatur soluta id tempora.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Contributors</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                2
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                3
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Related Content</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                PDF Converter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                JPG Converter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                File Compressor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bla bla blaaa
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold">Connect</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                @Contributor on Insta
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                @Contributor on GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
