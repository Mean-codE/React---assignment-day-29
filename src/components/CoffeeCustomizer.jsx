import React, { useState } from "react";

const CoffeeCustomizer = () => {
  const [size, setSize] = useState("medium");
  const [milk, setMilk] = useState("regular");
  const [shots, setShots] = useState(1);
  const [sweetness, setSweetness] = useState(50);

  const sizes = [
    { id: "small", name: "Small", price: 1.0 },
    { id: "medium", name: "Medium", price: 1.5 },
    { id: "large", name: "Large", price: 2.0 },
  ];

  const milkOptions = [
    { id: "regular", name: "Regular Milk" },
    { id: "skim", name: "Skim Milk" },
    { id: "almond", name: "Almond Milk" },
    { id: "oat", name: "Oat Milk" },
    { id: "none", name: "No Milk" },
  ];

  const calculatePrice = () => {
    const basePrice = 4.0;
    const sizePrice = sizes.find((s) => s.id === size)?.price || 0;
    const shotsPrice = (shots - 1) * 0.5;
    return (basePrice + sizePrice + shotsPrice).toFixed(2);
  };

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Custom</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6">
              Build Your Perfect Coffee
            </h2>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Size</h3>
              <div className="flex space-x-4">
                {sizes.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSize(option.id)}
                    className={`px-4 py-2 rounded-lg border ${
                      size === option.id
                        ? "bg-yellow-500 text-white border-yellow-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {option.name} (+${option.price})
                  </button>
                ))}
              </div>
            </div>

            {/* Milk Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Milk</h3>
              <div className="grid grid-cols-2 gap-3">
                {milkOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setMilk(option.id)}
                    className={`px-4 py-2 rounded-lg border ${
                      milk === option.id
                        ? "bg-yellow-500 text-white border-yellow-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Espresso Shots */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Espresso Shots</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShots(Math.max(1, shots - 1))}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl"
                >
                  -
                </button>
                <span className="text-lg font-medium">{shots}</span>
                <button
                  onClick={() => setShots(Math.min(4, shots + 1))}
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl"
                >
                  +
                </button>
                <span className="text-sm text-gray-500">
                  ($0.50 each extra)
                </span>
              </div>
            </div>

            {/* Sweetness */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Sweetness</h3>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">Less</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sweetness}
                  onChange={(e) => setSweetness(e.target.value)}
                  className="flex-1"
                />
                <span className="text-sm text-gray-500">More</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:w-1/2 bg-yellow-50 p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-6">Your Custom Coffee</h3>

            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Size:</span>
                <span>{sizes.find((s) => s.id === size)?.name}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Milk:</span>
                <span>{milkOptions.find((m) => m.id === milk)?.name}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Espresso Shots:</span>
                <span>{shots}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sweetness:</span>
                <span>{sweetness}%</span>
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total:</span>
                <span>${calculatePrice()}</span>
              </div>
              <button className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeCustomizer;
