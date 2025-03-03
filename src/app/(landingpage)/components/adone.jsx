"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function Card({ children, className }) {
  return (
    <div className={`p-6 bg-transparent shadow-black shadow-lg rounded-2xl transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

function Button({ children, onClick, className }) {
  return (
    <button
      className={`px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg font-bold tracking-wide transition duration-300 bg-transparent shadow-black shadow-md text-white border border-white hover:bg-white hover:text-black ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Adone() {
  const [category, setCategory] = useState("ifresh");

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-8 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <motion.h1 
        className="text-4xl sm:text-5xl font-extrabold mb-6 text-black tracking-wide font-serif"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        iBeauty: iFresh & Ageless
      </motion.h1>
      
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <Button onClick={() => setCategory("ifresh")}>iFresh</Button>
        <Button onClick={() => setCategory("ageless")}>Ageless</Button>
      </div>
      
      <motion.div
        key={category}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xs sm:max-w-lg min-h-[300px] sm:min-h-[350px]" // Fixed height for stability
      >
        <Card>
          <CardContent>
            {category === "ifresh" ? (
              <div>
                <motion.h2 
                  className="text-2xl sm:text-3xl font-bold font-sans tracking-wide text-black"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  iFresh: Revitalize Your Skin
                </motion.h2>
                <motion.p 
                  className="mt-2 text-base sm:text-lg font-light font-mono text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Our iFresh collection brings a burst of hydration and radiance to your skin.
                  Experience the refreshing glow with natural ingredients.
                </motion.p>
              </div>
            ) : (
              <div>
                <motion.h2 
                  className="text-2xl sm:text-3xl font-bold font-serif tracking-wide text-black"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Ageless: Timeless Beauty
                </motion.h2>
                <motion.p 
                  className="mt-2 text-base sm:text-lg font-light font-mono text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Ageless by iBeauty is designed to nourish and rejuvenate your skin,
                  keeping it youthful and vibrant for years to come.
                </motion.p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Adone;
