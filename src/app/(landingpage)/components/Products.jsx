"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Products = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const itemsPerSlide = 4;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 ? (products.length - itemsPerSlide + prevIndex) % products.length : prevIndex - itemsPerSlide
    );
  };

  return (
    <div className="relative w-full mx-auto bg-white p-6">
      {isSmallScreen ? (
        // Grid layout for small screens
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="border rounded-lg shadow-lg bg-white p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2 text-black">{product.name}</h3>
              <p className="text-black font-medium">{product.price}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        // Carousel for large screens
        <div className="relative flex h-[400px] overflow-hidden">
          {products.slice(currentIndex, currentIndex + itemsPerSlide).map((product, index) => (
            <motion.div
              key={index}
              className="w-1/4 p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="border rounded-lg p-5 shadow-lg bg-white">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-lg font-semibold mt-2 text-black">{product.name}</h3>
                <p className="text-black font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-50 text-white p-2 rounded-full" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-50 text-white p-2 rounded-full" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
