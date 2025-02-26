"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Products = ({ products = [] }) => {
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
    <div className="relative w-full mx-auto bg-white p-6 ">
      <style>{`
        @font-face {
          src: url("https://www.axis-praxis.org/fonts/webfonts/MetaVariableDemo-Set.woff2") format("woff2");
          font-family: "Meta";
          font-style: normal;
          font-weight: normal;
        }
        .animated-title {
          transition: all 0.5s;
          -webkit-text-stroke: 2px #000000;
          font-variation-settings: "wght" 900, "ital" 1;
          font-size: 4rem;
          text-align: center;
          color: transparent;
          font-family: "Meta", sans-serif;
          text-shadow: 5px 5px 0px #74abdb,
            
           
            20px 20px 5px #74abdb;
          cursor: pointer;
        }
        .animated-title:hover {
          font-variation-settings: "wght" 100, "ital" 0;
          text-shadow: none;
        }
        
        .blue-line {
          width: 100%;
          height: 4px;
          background-color: #74abdb;
        }
      `}</style>
      
      <div className="blue-line"></div>
      <div className="flex justify-center items-center mb-8">
        <span className="text-5xl font-extrabold text-black">꧁</span>
        <h1 className="animated-title mx-4">IBeauty</h1>
        <span className="text-5xl font-extrabold text-black">꧂</span>
      </div>
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
  );
};

export default Products;
