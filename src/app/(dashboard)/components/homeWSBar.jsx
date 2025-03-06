"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import products from "@/app/data/products";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([...products]);
  const containerRef = useRef(null);

  const filteredProducts = displayedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Adjust this based on your grid layout (e.g., 4 columns for large screens)
  const columns = 4; 

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 pt-24">
      <p className="text-xl font-bold text-gray-800 p-2 rounded-lg">
          Dashboard
        </p>
      <div className="w-full max-w-2xl flex items-center mt-10 mb-6">
        

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg w-full shadow-md text-gray-700 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl place-items-center z-0"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => {
            const isFirstRow = index < columns;

            return (
              <Link key={product.productid} href={`main/${product.productid}`} passHref>
                <motion.div
                  initial={isFirstRow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  whileInView={isFirstRow ? {} : { opacity: 1, y: 0 }}
                  viewport={isFirstRow ? {} : { once: false, amount: 0.2 }}
                  transition={isFirstRow ? {} : { duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  className="p-4 rounded-lg bg-white flex flex-col items-center transition-transform duration-300 cursor-pointer shadow-lg border border-gray-200"
                >
                  <img
                    src={product.imgsrc}
                    alt={product.name}
                    className="w-35 h-35 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover mb-2 rounded-md"
                  />
                  <p className="font-semibold text-center text-sm sm:text-base text-black">
                    {product.name}
                  </p>
                  <p className="text-md text-black mt-2 w-full break-words line-clamp-2 text-left">
                    {product.description}
                  </p>
                  <p className="text-md font-bold text-secondaryColor self-start pt-2">
                    ₱ {product.price}
                  </p>
                </motion.div>
              </Link>
            );
          })
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="text-gray-500 col-span-4 text-center"
          >
            No products found.
          </motion.p>
        )}
      </div>
    </div>
  );
}
