import React from 'react';

export default function IBeauty() {
  const products = [
    { src: "/images/iBeauty1.png", name: "Black Rice Hyaluronic Toner 30ml", price: "₱400.00" },
    { src: "/images/iBeauty2.png", name: "Black Rice Toner for Sensitive Skin", price: "₱400.00" },
    { src: "/images/iBeauty3.png", name: "Hydrating Facial Mist", price: "₱350.00" },
    { src: "/images/iBeauty4.png", name: "Vitamin C Serum", price: "₱500.00" },
    { src: "/images/iBeauty5.png", name: "Moisturizing Gel Cream", price: "₱450.00" },
    { src: "/images/iBeauty6.png", name: "SPF 50+ Sunscreen", price: "₱380.00" },
    { src: "/images/iBeauty7.png", name: "Aloe Vera Soothing Gel", price: "₱300.00" },
    { src: "/images/iBeauty8.png", name: "Collagen Firming Mask", price: "₱480.00" },
    { src: "/images/iBeauty9.png", name: "Exfoliating Toner", price: "₱420.00" }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-iBeauty text-black p-6 mt-[93%]">
      <h1 className="text-2xl font-bold mb-6">iBeauty PAGE</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-8">
  {products.map((product, index) => (
    <div key={index} className="flex flex-col items-center w-80 p-4 rounded-lg">
      <img src={product.src} alt={product.name} className="w-80 h-[400px] object-cover" />
      <p className="text-md font-semibold text-black mt-2">{product.name}</p>
      <p className="text-lg font-bold text-gray-700">{product.price}</p>
    </div>
  ))}
</div>
    </div>
  );
}
