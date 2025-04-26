import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">Cofeeku</h3>
          <p className="text-sm">
            &copy; 2027 Cofeeku, Inc. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@cofeeku.com" className="text-yellow-500">
              info@cofeeku.com
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-yellow-500 text-sm"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-gray-400 hover:text-yellow-500 text-sm"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-yellow-500 text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
