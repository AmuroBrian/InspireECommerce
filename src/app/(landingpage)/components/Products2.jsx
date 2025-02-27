"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const Products = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const controls = useAnimation();
  const carouselControls = useAnimation();

  // Function to loop products for infinite scrolling
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

  // Scroll-triggered animations for the blue line & carousel
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 1.5;
      const blueLine = document.querySelector(".blue-line");
      const carousel = document.querySelector(".carousel-container");

      if (blueLine) {
        const rect = blueLine.getBoundingClientRect();
        if (rect.top < triggerHeight) {
          controls.start({ x: 0, transition: { duration: 0.8, ease: "easeOut" } });
        } else {
          controls.start({ x: "100%", transition: { duration: 0.8, ease: "easeIn" } });
        }
      }

      if (carousel) {
        const rect = carousel.getBoundingClientRect();
        if (rect.top < triggerHeight) {
          carouselControls.start((i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
          }));
        } else {
          carouselControls.start((i) => ({
            opacity: 0,
            y: 50,
            transition: { duration: 0.5, delay: i * 0.1, ease: "easeIn" },
          }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, carouselControls]);

  return (
    <div className="relative w-full mx-auto bg-white p-6">
      <style>{`
       .wrapper:hover .letter {
          transform: translateY(-200%);
        }
        .wrapper:hover .shadow {
          opacity: 0;
          transform: translateY(200%);
        }      `}</style>

      {/* Blue Line with Scroll Animation */}
      <motion.div
        className="blue-line h-1 bg-[#74abdb] w-full"
        initial={{ x: "100%" }}
        animate={controls}
      ></motion.div>

      <div className="flex justify-center items-center mb-8  text-6xl font-bold  z-10 ">
        {"JTECH".split("").map((char, index) => (
          <div key={index} className="wrapper px-2 pt-5">
            <div className="letter transition ease-out duration-1000 text-gray-400">{char}</div>
            <div className="shadow text-gray-900 transform transition ease-in duration-5000">{char}</div>
          </div>
        ))}
      </div>

      {/* Product Carousel with Scroll Animation */}
      <div className="flex overflow-hidden carousel-container">
        {loopedProducts.slice(currentIndex, currentIndex + itemsPerSlide).map((product, index) => (
          <motion.div
            key={index}
            className="w-1/4 p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={carouselControls}
            custom={index} // Custom index for staggered animation
          >
            <div className="border rounded-lg p-4 shadow-lg bg-white">
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
  );
};

export default Products;
