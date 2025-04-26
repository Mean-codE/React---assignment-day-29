import React from "react";
import logo from "../assets/Cofeeku.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-30">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 sm:px-8 md:px-12 lg:px-16">
        <img src={logo} alt="Cofeeku Logo" className="h-10" />
        <nav className="hidden md:flex space-x-8 font-semibold text-white">
          <a href="#hero" className="hover:text-yellow-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-500 transition">
            About Us
          </a>
          <a href="#products" className="hover:text-yellow-500 transition">
            Our Product
          </a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full transition">
            Menu
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
