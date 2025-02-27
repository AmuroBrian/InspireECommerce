"use client";

import React, { useState } from "react";

const products = [
  { name: "YBY Morning Mask (7pcs)", price: 210, image: "/images/b1.jpeg" },
  { name: "YBY Morning Mask (30pcs)", price: 730, image: "/images/b2.jpg" },
  { name: "YBY Night Mask (7pcs)", price: 210, image: "/images/t1.jpg" },
  { name: "YBY Night Mask (30pcs)", price: 730, image: "/images/t2.jpg" },
  { name: "YBY Cleansing Gel", price: 730, image: "/images/b1.jpeg" },
  { name: "PUCCU Lipstick Bloody Red", price: 635, image: "/images/b1.jpeg" },
  { name: "PUCCU Lipstick Berry Flamingo", price: 635, image: "/images/b2.jpg" },
  { name: "PUCCU Lipstick Sparky Blood Orange", price: 635, image: "/images/t1.jpg" },
  { name: "PUCCU Lipstick Princess Piggy", price: 635, image: "/images/t2.jpg" },
  { name: "FOM Toner", price: 799, image: "/images/b1.jpeg" },
  { name: "FOM Aqua Serum", price: 1299, image: "/images/b2.jpg" },
  { name: "FOM Cream", price: 1699, image: "/images/t1.jpg" },
  { name: "Clinience Vit C", price: 3499, image: "/images/t2.jpg" },
  { name: "Clinience Cytokines", price: 11499, image: "/images/b1.jpeg" },
  { name: "Clinience NMN", price: 11499, image: "/images/b2.jpg" },
  { name: "Dermashot", price: 7600, image: "/images/t1.jpg" },
  { name: "Pure Exom", price: 7125, image: "/images/t2.jpg" },
  { name: "FOM Pack", price: 2800, image: "/images/b1.jpeg" },
  { name: "YBY Cleansing Gel", price: 700, image: "/images/b2.jpg" },
  { name: "Alpha-HT", price: 1000, image: "/images/t1.jpg" },
  { name: "Desknet's NEO", price: 1000, image: "/images/t2.jpg" },
  { name: "SQRC® (Security QR Code)", price: 1000, image: "/images/b1.jpeg" },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      {/* Search Bar */}
      <div className="w-full max-w-2xl flex justify-center mt-20 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full shadow-md text-gray-700 focus:ring-2 focus:ring-blue-500"
        />
      </div>

    {/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product, index) => (
      <div key={index} className="p-4 rounded-lg bg-transparent  flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-2 rounded-md" />
        <p className="font-semibold text-center">{product.name}</p>
        <p className="text-gray-600">Price: ₱{product.price}</p>
      </div>
    ))
  ) : (
    <p className="text-gray-500 col-span-4">No products found.</p>
  )}
</div>


    </div>
  );
}
