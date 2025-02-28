import React from "react";

const IBeautyGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg w-full">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-full p-4 rounded-lg shadow-lg shadow-rose-300/50 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <a href={product.link} className="w-full">
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
          <p className="text-md font-semibold text-rose-500 mt-2">
            {product.name}
          </p>
          <p className="text-lg font-bold text-rose-700">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default IBeautyGrid;
