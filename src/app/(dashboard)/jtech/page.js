import React from "react";
import Link from "next/link";
import products from "../../data/products";

export default function JTech() {
  const jTechProducts = products.filter((p) => p.category === "jtech");

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-backgroundColor text-white p-6 mt-28">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 tracking-widest">JTech PAGE</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jTechProducts.map((product) => (
          <div key={product.productid} className="flex flex-col items-center w-80 p-4 rounded-lg shadow-lg shadow-cyan-500/50 transition-transform duration-300 hover:scale-110">
            <Link href={`/jtech/${product.productid}`}>
              <img
                src={product.imgsrc}
                alt={product.name}
                className="w-80 h-[400px] object-cover rounded-lg cursor-pointer"
              />
            </Link>
            <p className="text-md font-semibold text-cyan-300 mt-2">{product.name}</p>
            <p className="text-lg font-bold text-cyan-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
