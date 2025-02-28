"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const Products = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const itemsPerSlide = 4;
  const controls = useAnimation();
  const carouselControls = useAnimation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 1.5;
      const blueLine = document.querySelector(".blue-line");
      const items = document.querySelectorAll(".product-item");

      if (blueLine) {
        const rect = blueLine.getBoundingClientRect();
        controls.start({ x: rect.top < triggerHeight ? 0 : "100%", transition: { duration: 0.8 } });
      }

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < triggerHeight) {
          carouselControls.start((i) =>
            i === index
              ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.2 } }
              : {}
          );
        } else {
          carouselControls.start((i) =>
            i === index
              ? { x: 100, opacity: 0, transition: { duration: 0.5, delay: i * 0.2 } }
              : {}
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, carouselControls]);

  return (
    <div className="relative w-full mx-auto bg-white p-6 overflow-x-hidden">
      {/* Blue Animated Line */}
      <motion.div className="blue-line h-1 bg-[#74abdb] w-full" initial={{ x: "100vw" }} animate={controls} />

      {/* IBeauty Title with Hover Animation */}
      <div className="flex justify-center items-center mb-8">
        <motion.span
          className="text-5xl font-extrabold text-black"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ꧁
        </motion.span>
        <motion.h1
          className="animated-title mx-4 text-4xl font-bold text-gray-800"
          whileHover={{ scale: 1.1, color: "#74abdb" }}
          transition={{ duration: 0.3 }}
        >
          IBeauty
        </motion.h1>

        <motion.span
          className="text-5xl font-extrabold text-black"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ꧂
        </motion.span>
      </div>

      {/* Product Carousel */}
<div className={`flex ${isSmallScreen ? "flex-col" : "h-[400px] overflow-hidden"} carousel-container`}>
  {isSmallScreen
    ? products.map((product, index) => (
        <motion.div
          key={index}
          className="w-full p-4 product-item"
          initial={{ x: -100, opacity: 0 }}
          animate={carouselControls}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          custom={index}
        >
          <div className="border rounded-lg mt-10 shadow-lg bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2 text-black">{product.name}</h3>
            <p className="text-black font-medium">{product.price}</p>
          </div>
        </motion.div>
      ))
    : loopedProducts.slice(currentIndex, currentIndex + itemsPerSlide).map((product, index) => (
        <motion.div
          key={index}
          className="w-1/4 p-4 product-item"
          initial={{ opacity: 0, y: 50 }}
          animate={carouselControls}
          custom={index}
        >
          <div className="border rounded-lg p-5 shadow-lg bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2 text-black">{product.name}</h3>
            <p className="text-black font-medium p-3">{product.price}</p>
          </div>
        </motion.div>
      ))}
</div>


      {/* Navigation Arrows */}
      {!isSmallScreen && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Products;
