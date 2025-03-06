"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "@/app/data/products";

export default function JTech() {
  const jTechProducts = products.filter((p) => p.category === "jtech");

  return (
    <div className='w-full h-full bg-white text-gray-800 flex flex-col items-center px-4 sm:px-6 md:px-10 z-0'>
      {/* Animated Tech Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-900 via-black to-black opacity-80"></div>
        <div
          className="absolute w-full h-full"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
            animation: "move-dots 10s linear infinite",
          }}
        ></div>
        <div
          className="absolute top-1/4 left-0 w-full h-[2px] bg-cyan-500 opacity-30"
          style={{ animation: "line-move 4s linear infinite" }}
        ></div>
        <div
          className="absolute top-3/4 right-0 w-full h-[2px] bg-green-500 opacity-30"
          style={{ animation: "line-move 4s linear infinite" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full text-white flex flex-col items-center pt-[100px] px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 tracking-widest text-center">
          JTech
        </h1>

                  {/* Product Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {jTechProducts.map((product, idx) => {
                        const isFirstRow = idx < 4; // First row condition
                        return (
                          <motion.div
                            key={idx}
                            className="flex flex-col items-center w-full p-4 rounded-lg shadow-sm shadow-white transition-transform duration-300 cursor-pointer bg-opacity-80 bg-white"
                            initial={isFirstRow ? { opacity: 1, y: -10 } : { opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                          >
                            <a href={`jtech/${product.productid}`} className="w-full flex-grow block">
                              <img src={product.imgsrc} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
                            </a>
                            <div className="mt-auto flex flex-col items-center">
                              <p className="text-md font-semibold text-black mt-2">{product.name}</p>
                            </div>
                            <p className="text-md text-black mt-2 w-full break-words line-clamp-2">{product.description}</p>
                            <p className="text-md font-bold text-secondaryColor self-start pt-2">₱{product.price}</p>
                          </motion.div>
                          );
                        })}
                      </div>
                    </div>
                

      {/* Inline CSS Animations */}
      <style jsx>{`
        @keyframes move-dots {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        @keyframes line-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
