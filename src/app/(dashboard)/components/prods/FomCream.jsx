"use client";

import React, { useState } from "react";

const product = {
  id: 12,
  name: "FOM Cream",
  image: "./images/b2.jpg",
  description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
  info: "This moment signifies the introduction of the world's first and only cosmetics line uniquely formulated with two exceptionally rare and valuable ingredients, setting a new standard in beauty and skincare innovation.",
  use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
  price: 1699,
};

const FomCream = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-8 max-w-4xl mx-auto border rounded-lg shadow-lg">
      {/* Image on the left */}
      <div className="w-full md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
      </div>

      {/* Product details on the right */}
      <div className="w-full md:w-1/2 px-6">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-sm text-gray-600 mt-2">{product.info}</p>
        <p className="text-sm text-gray-600 mt-2 italic">{product.use}</p>
        <p className="text-lg font-semibold mt-4">PHP {product.price}</p>

        {/* Quantity Selector */}
        <div className="flex items-center mt-4">
          <button className="px-3 py-1 bg-gray-300 rounded-l" onClick={() => handleQuantityChange(-1)}>
            -
          </button>
          <span className="px-4 py-1 border">{quantity}</span>
          <button className="px-3 py-1 bg-gray-300 rounded-r" onClick={() => handleQuantityChange(1)}>
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="bg-[#003087] text-white px-6 py-2 rounded-md">Pay with PayPal</button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md">Discuss via Email</button>
        </div>
      </div>
    </div>
  );
};

export default FomCream;
