"use client";

import React, { useState } from "react";

const Checkout = () => {
  const product = {
    name: "YBY Morning Mask (7pcs)",
    image: "./images/b2.jpg",
    description:
      "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use.",
    price: 210,
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
      </div>

      {/* Product Details Section */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-gray-500 mt-2">{product.info}</p>
          <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
        </div>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center">
          <button onClick={handleDecrease} className="px-3 py-1 bg-gray-300 rounded-l">-</button>
          <span className="px-4 py-1 border">{quantity}</span>
          <button onClick={handleIncrease} className="px-3 py-1 bg-gray-300 rounded-r">+</button>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button className="w-full bg-[#003087] text-white py-2 rounded">Pay with PayPal</button>
          <button className="w-full bg-red-500 text-white py-2 rounded">Discuss via Email</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
