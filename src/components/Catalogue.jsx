import React from "react";
import CatalogueItem from "./CataloqueItem.jsx";
import coffeeImage from "../assets/coffee_image.png";
import Rectangle7 from "../assets/Rectangle 7.png";
import Rectangle9 from "../assets/Rectangle 9.png";
import Rectangle11 from "../assets/Rectangle 11.png";
const Catalogue = () => {
  const items = [
    {
      id: 1,
      name: "Cappuccino",
      description: "Coffee 50% | Milk 50%",
      price: "8.50",
      image: Rectangle7,
    },
    {
      id: 2,
      name: "Latte",
      description: "Coffee 30% | Milk 70%",
      price: "7.50",
      image: Rectangle9,
    },
    {
      id: 3,
      name: "Espresso",
      description: "Coffee 100%",
      price: "5.00",
      image: Rectangle11,
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <CatalogueItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
