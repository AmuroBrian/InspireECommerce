"use client";

import React from "react";
import { motion } from "framer-motion";
import products from "@/app/data/products";

// Petal Animation Variants
const petalVariants = {
  initial: { y: 0, x: 0, rotate: 0, opacity: 0.8 },
  animate: {
    y: [0, 20, -15, 10, -10, 0],
    x: [0, -10, 10, -5, 5, 0],
    rotate: [0, 15, -15, 10, -10, 0],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

// Floating SVG Petal Component
const Petal = ({ index }) => {
  return (
    <motion.svg
      key={index}
      className="absolute w-6 h-6 text-pink-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        top: `-10%`, // Start above the screen
        left: `${Math.random() * 100}%`, // Random horizontal position
      }}
      animate={{
        y: ["-10%", "110%"], // Moves down the screen
        x: ["0%", "-10%", "10%", "0%"], // Side swaying
        rotate: [0, 15, -15, 0], // Slight rotation
      }}
      transition={{
        duration: 6 + Math.random() * 3, // Random speed
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <path d="M12 2C13.1 2 16 5 16 9C16 14 12 22 12 22C12 22 8 14 8 9C8 5 10.9 2 12 2Z" />
    </motion.svg>
  );
};

export default function IBeauty() {
  // Filter products into categories
  const categories = {
    Ageless: products.filter(
      (product) => product.subcategories.toLowerCase() === "ageless"
    ),
    iFresh: products.filter(
      (product) => product.subcategories.toLowerCase() === "ifresh"
    ),
  };

  return (
    <div className="w-full h-full bg-white text-gray-800 flex flex-col items-center px-4 sm:px-6 md:px-10">
      {/* Cherry Blossom Petals (SVG Animation) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <Petal key={index} index={index} />
        ))}
      </div>

      {/* Floating Emoji Petals */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-10 text-pink-400 z-10"
          style={{
            top: `${10 + index * 15}%`,
            left: `${index * 20 + 5}%`,
          }}
          variants={petalVariants}
          initial="initial"
          animate="animate"
        >
          🌸
        </motion.div>
      ))}

      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-pink-300 via-white to-pink-200 opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full text-gray-800 flex flex-col items-center pt-[100px] px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl font-bold text-black mb-6 tracking-wider">
          iBeauty
        </h1>

        {Object.entries(categories).map(([category, products], index) => (
          <div key={index} className="w-full max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-semibold text-secondaryColor mt-10 mb-4">
              {category} Collection
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center w-full p-4 rounded-lg shadow-sm shadow-rose-300/50 transition-transform duration-300 cursor-pointer bg-opacity-80 bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <a href={`ibeauty/${product.productid}`} className="w-full flex-grow block">
                    <img
                      src={product.imgsrc}
                      alt={product.name}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </a>
                  <div className="mt-auto flex flex-col items-center">
                    <p className="text-md font-semibold text-black mt-2">{product.name}</p>
                  </div>
                  <p className="text-md text-black mt-2 w-full break-words line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-md font-bold text-secondaryColor self-start pt-2">
                    ₱{product.price}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="w-full h-[100px] sm:h-[100px]"></div>
      </div>
    </div>
  );
}
