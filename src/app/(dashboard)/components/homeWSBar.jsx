"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { name: "YBY Morning Mask (7pcs)", price: 210, image: "/images/YBYMorningMask(7pcs).png" },
  { name: "YBY Morning Mask (30pcs)", price: 730, image: "/images/YBYMorningMask(30pcs).png" },
  { name: "YBY Night Mask (7pcs)", price: 210, image: "/images/YBYNightMask(7pcs).png" },
  { name: "YBY Night Mask (30pcs)", price: 730, image: "/images/YBYNightMask(30pcs).png" },
  { name: "YBY Cleansing Gel", price: 730, image: "/images/iBeauty1.png" },
  { name: "PUCCU Lipstick Bloody Red", price: 635, image: "/images/beyondred.png" },
  { name: "PUCCU Lipstick Berry Flamingo", price: 635, image: "/images/berryflamingo.png" },
  { name: "PUCCU Lipstick Sparky Blood Orange", price: 635, image: "/images/iBeauty4.png" },
  { name: "PUCCU Lipstick Princess Piggy", price: 635, image: "/images/princesspiggy.png" },
  { name: "FOM Toner", price: 799, image: "/images/iBeauty6.png" },
  { name: "FOM Aqua Serum", price: 1299, image: "/images/iBeauty7.png" },
  { name: "FOM Cream", price: 1699, image: "/images/iBeauty8.png" },
  { name: "Clinience Vit C", price: 3499, image: "/images/clinienceVitC.png" },
  { name: "Clinience Cytokines", price: 11499, image: "/images/cliniencecytokines.png" },
  { name: "Clinience NMN", price: 11499, image: "/images/cliniencenmn.png" },
  { name: "Dermashot", price: 7600, image: "/images/iBeauty3.png" },
  { name: "Pure Exom", price: 7125, image: "/images/iBeauty4.png" },
  { name: "FOM Pack", price: 2800, image: "/images/iBeauty5.png" },
  { name: "YBY Cleansing Gelle", price: 700, image: "/images/iBeauty6.png" },
  { name: "Alpha-HT", price: 1000, image: "/images/alpha-ht.png" },
  { name: "Desknet's NEO", price: 1000, image: "/images/Desknet'sNEO.png" },
  { name: "SQRC® (Security QR Code)", price: 1000, image: "/images/SecurityQRCode.png" },
  { name: "Stem sai Serum", price: 1000, image: "/images/stemsaiserum.png" },
  { name: "Stem sai Cream", price: 1000, image: "/images/stemsaicream.png" },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedProducts, setDisplayedProducts] = useState([...products]);
  const containerRef = useRef(null);

  const filteredProducts = displayedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#daf1ff] flex flex-col items-center py-10 px-4">
      
      <div className="w-full max-w-2xl flex items-center mt-10 mb-6">
  {/* Dashboard Label */}
  <span className="text-xl font-semibold text-gray-800  p-2 rounded-lg">Dashboard</span>
  
  {/* Search Input */}
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border border-gray-300 p-3 rounded-lg w-full shadow-md text-gray-700 focus:ring-2 focus:ring-blue-500"
  />
</div>

      
      <div
        ref={containerRef}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl place-items-center z-0"
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Link key={index} href={`/product/${encodeURIComponent(product.name)}`} passHref>
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-transparent  flex flex-col items-center transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover mb-2 rounded-md"
                />
                <p className="font-semibold text-center text-sm sm:text-base">{product.name}</p>
                <p className="text-gray-600 text-xs sm:text-sm">Price: ₱{product.price}</p>
              </motion.div>
            </Link>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-500 col-span-4 text-center"
          >
            No products found.
          </motion.p>
        )}
      </div>
    </div>
  );
}