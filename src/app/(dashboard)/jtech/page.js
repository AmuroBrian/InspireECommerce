"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "@/app/data/products";

export default function JTech() {
  const jTechProducts = products.filter((p) => p.category === "jtech");

  return (
    <div className="w-full h-full bg-backgroundColor text-gray-800 flex flex-col items-center pt-[100px] px-4 sm:px-6 md:px-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-8 tracking-widest text-center">
        JTech PAGE
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl">
        {jTechProducts.map((product, index) => (
          <motion.div
            key={product.productid}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // 👈 Added hover zoom effect
            className="flex flex-col w-full p-4 rounded-lg shadow-lg shadow-cyan-500/50 transition-transform duration-300 cursor-pointer"
          >
            <Link href={`/jtech/${product.productid}`} passHref className="w-full flex-grow">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={product.imgsrc}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </Link>
            <div className="mt-auto flex flex-col items-center">
              <p className="text-md sm:text-lg font-semibold text-cyan-300 mt-3 text-center">
                {product.name}
              </p>
              <p className="text-lg sm:text-xl font-bold text-cyan-500">
                {product.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='w-full h-[100px] sm:h-[100px] md:h-[100px]'></div>
    </div>
  );
}
