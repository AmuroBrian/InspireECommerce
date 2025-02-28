"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function JTech() {
  const router = useRouter();

  const products = [
    {
      id: "gaming-mouse",
      src: "/images/jTech1.png",
      name: "Gaming Mouse",
      price: "₱1,500.00",
      description: "High-precision gaming mouse with RGB lighting.",
      category: "JTech",
    },
    {
      id: "mechanical-keyboard",
      src: "/images/jTech2.png",
      name: "Mechanical Keyboard",
      price: "₱3,200.00",
      description: "RGB mechanical keyboard with hot-swappable switches.",
      category: "JTech",
    },
    {
      id: "wireless-headset",
      src: "/images/jTech3.png",
      name: "Wireless Headset",
      price: "₱2,800.00",
      description: "Noise-canceling wireless gaming headset.",
      category: "JTech",
    },
  ];


  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-backgroundColor text-white p-6 mt-28">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 tracking-widest">JTech PAGE</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center w-80 p-4 rounded-lg shadow-lg shadow-cyan-500/50 transition-transform duration-300 hover:scale-110">
            <div onClick={() => { router.push(`/jtech/${product.id}`) }}>
              <img
                src={product.src}
                alt={product.name}
                className="w-80 h-[400px] object-cover rounded-lg cursor-pointer"
              />
            </div>
            <p className="text-md font-semibold text-cyan-300 mt-2">{product.name}</p>
            <p className="text-lg font-bold text-cyan-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
