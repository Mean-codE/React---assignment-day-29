import React from "react";

const CatalogueItem = ({ name, description, price, image }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-yellow-600">${price}</span>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogueItem;
