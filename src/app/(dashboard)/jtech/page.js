import React from 'react';

export default function JTech() {
  const products = [
    { src: "/images/jTech1.png", name: "Gaming Mouse", price: "₱1,500.00" },
    { src: "/images/jTech2.png", name: "Mechanical Keyboard", price: "₱3,200.00" },
    { src: "/images/jTech3.png", name: "Wireless Headset", price: "₱2,800.00" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-backgroundColor text-white p-6 mt-28">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6 tracking-widest">JTech PAGE</h1>

      {/* Image Grid (3 Columns, 1 Row) */}
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center w-80 p-4 rounded-lg shadow-lg shadow-cyan-500/50 transition-transform duration-300 hover:scale-110">
            <img
              src={product.src}
              alt={product.name}
              className="w-80 h-[400px] object-cover rounded-lg"
            />
            <p className="text-md font-semibold text-cyan-300 mt-2">{product.name}</p>
            <p className="text-lg font-bold text-cyan-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
