import React from "react";
import coffeeImage from "../assets/coffee_image.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${coffeeImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover the Best Coffee with Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white mb-8">
          Bean Scene is a coffee shop that provides quality coffee to boost your
          productivity and mood.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
