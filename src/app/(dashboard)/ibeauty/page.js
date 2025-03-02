"use client";

import React from 'react';
import { motion } from 'framer-motion';
import products from "@/app/data/products";

export default function IBeauty() {
  // Filter products into categories
  const categories = {
    Ageless: products.filter(product => product.subcategories.toLowerCase() === "ageless"),
    iFresh: products.filter(product => product.subcategories.toLowerCase() === "ifresh")
  };

  return (
    <div className='w-full h-full bg-backgroundColor text-gray-800 flex flex-col items-center pt-[100px] px-4 sm:px-6 md:px-10'>
      <h1 className="text-3xl font-bold text-rose-600 mb-6 tracking-wider">iBeauty</h1>

      {Object.entries(categories).map(([category, products], index) => (
        <div key={index} className="w-full max-w-screen-lg mx-auto">
          
          <h2 className="text-2xl font-semibold text-rose-700 mt-10 mb-4">{category} Collection</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center w-full p-4 rounded-lg shadow-lg shadow-rose-300/50 transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 }}} // Zoom effect on the entire card
              >
                <a href={product.link} className="w-full flex-grow block">
                  <img
                    src={product.imgsrc}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </a>
                <div className="mt-auto flex flex-col items-center">
                  <p className="text-md font-semibold text-rose-500 mt-2">{product.name}</p>
                  <p className="text-lg font-bold text-rose-700">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <div className='w-full h-[100px] sm:h-[100px]'></div>
    </div>
  );
}
