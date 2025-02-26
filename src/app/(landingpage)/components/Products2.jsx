"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Products2 = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;

  const getLoopedProducts = () => {
    if (products.length <= itemsPerSlide) return products;
    return [...products, ...products.slice(0, itemsPerSlide)];
  };

  const loopedProducts = getLoopedProducts();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 ? (products.length - itemsPerSlide + prevIndex) % products.length : prevIndex - itemsPerSlide
    );
  };

  useEffect(() => {
    const revealOnScroll = () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center  bg-gray-300">
      {/* Animated JTECH Text */}
      
      <div className="text flex text-6xl font-bold relative z-10">
        {"JTECH".split("").map((char, index) => (
          <div key={index} className="wrapper px-2 pt-5">
            <div className="letter transition ease-out duration-1000 text-gray-400">{char}</div>
            <div className="shadow text-gray-900 transform  transition ease-in duration-5000">{char}</div>
          </div>
        ))}
      </div>
      
      {/* Product Carousel */}
      <div className="relative w-full mx-auto bg-white p-6">
        <div className="blue-line"></div>
        <div className="flex overflow-hidden">
          {loopedProducts.slice(currentIndex, currentIndex + itemsPerSlide).map((product, index) => (
            <motion.div
              key={index}
              className="w-1/4 p-4 fade-in"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="border rounded-lg p-4 shadow-lg bg-[#74abdb]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-2 text-black">{product.name}</h3>
                <p className="text-black font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-10 text-white p-2 rounded-full shadow-lg"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-10 text-white p-2 rounded-full shadow-lg"
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>
      </div>

      <style jsx>{`
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30vh;
          z-index: 100;
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 75%,
            rgba(255, 255, 255, 0.9) 80%,
            rgba(255, 255, 255, 0.25) 95%,
            rgba(255, 255, 255, 0) 100%
          );
        }
        .wrapper:hover .letter {
          transform: translateY(-200%);
        }
        .wrapper:hover .shadow {
          opacity: 0;
          transform: translateY(200%);
        }
        .blue-line {
          width: 100%;
          height: 4px;
          background-color: #74abdb;
        }
      `}</style>
    </div>
  );
};

export default Products2;
