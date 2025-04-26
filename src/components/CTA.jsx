import React from "react";
import cupImage from "../assets/cup.png";

const CTA = () => {
  return (
    <section className="bg-[#603809] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
          <h2 className="text-4xl font-bold mb-6">
            Get a Chance to Have an Amazing Morning
          </h2>
          <p className="mb-8 text-lg">
            We are giving you a one-time opportunity to experience a better life
            with coffee.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-full transition">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={cupImage}
            alt="Coffee Cup"
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
