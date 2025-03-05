"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      prevIndex - itemsPerSlide < 0
        ? (products.length - itemsPerSlide + prevIndex) % products.length
        : prevIndex - itemsPerSlide
    );
  };

  return (
    <div className="relative w-full h-[450px] mx-auto bg-white p-6 overflow-hidden">
      <div
        className={`${
    isSmallScreen
      ? "grid grid-cols-2 gap-4 overflow-y-auto max-h-[450px] p-2"
      : "h-full flex justify-center gap-4 overflow-hidden"
  }`}
      >
        {isSmallScreen
          ? products.map((product, index) => (
              <div key={index} className="p-2 flex justify-center">
                <div className="border rounded-lg p-2 shadow-lg bg-white max-w-xs mx-auto h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-2 text-gray-900 text-center">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-700 font-medium p-3 text-center">
                    {product.price}
                  </p>
                  <p className="text-md text-black mt-2 line-clamp-2 text-left">
                    {product.description}
                  </p>
                </div>
              </div>
            ))
          : loopedProducts.slice(currentIndex, currentIndex + itemsPerSlide).map((product, index) => (
              <div key={index} className="w-1/4 p-4">
                <div className="border rounded-lg p-5 shadow-lg bg-white max-w-[250px] h-full">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="text-lg font-semibold mt-2 text-black text-center">{product.name}</h3>
                  <p className="text-black font-medium p-1 text-center">{product.price}</p>
                  <p className="text-md text-black mt-2 line-clamp-2 text-left">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
      </div>

      {!isSmallScreen && (
        <>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-20 text-white p-2 rounded-full shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-20 text-white p-2 rounded-full shadow-lg"
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
