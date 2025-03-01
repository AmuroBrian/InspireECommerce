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

  return (
    <div className="min-h-screen bg-[#daf1ff] flex flex-col items-center py-10 px-4">
      
      <div className="w-full max-w-2xl flex items-center mt-10 mb-6">
  {/* Dashboard Label */}
  <span className="text-xl font-semibold text-gray-800  p-2 rounded-lg">Dashboard</span>
  
  {/* Search Input */}
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
          filteredProducts.map((product, index) => (
            <Link key={index} href={`/product/${encodeURIComponent(product.name)}`} passHref>
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-transparent  flex flex-col items-center transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={product.imgsrc}
                  alt={product.name}
                  className="w-35 h-35 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover mb-2 rounded-md"
                />
                <p className="font-semibold text-center text-sm sm:text-base">{product.name}</p>
                <p className="text-gray-600 text-xs sm:text-sm">Price: ₱{product.price}</p>
              </motion.div>
            </Link>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-500 col-span-4 text-center"
          >
            No products found.
          </motion.p>
        )}
      </div>
    </div>
  );
}