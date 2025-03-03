"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function AdTwo() {
  const [category, setCategory] = useState("innovation");
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 text-center bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-900 via-black to-black opacity-80"></div>
        <div
          className="absolute w-full h-full"
          style={{
            backgroundSize: "20px 20px",
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
            animation: "move-dots 10s linear infinite",
          }}
        ></div>
      </div>

      {/* Header */}
      <motion.h1
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-wide font-mono"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        JTech: Innovate. Create. Dominate.
      </motion.h1>

      {/* Category Buttons */}
      <motion.div
        className="relative z-10 flex flex-wrap gap-4 mb-6 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button
          className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-bold tracking-wide transition duration-300 bg-transparent shadow-md text-white border border-white hover:bg-white hover:text-black"
          onClick={() => setCategory("innovation")}
        >
          Innovation
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-lg font-bold tracking-wide transition duration-300 bg-transparent shadow-md text-white border border-white hover:bg-white hover:text-black"
          onClick={() => setCategory("technology")}
        >
          Technology
        </button>
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="relative z-10 w-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="p-6 bg-transparent shadow-white shadow-lg rounded-2xl transition-all duration-500 w-full max-w-xs sm:max-w-md md:max-w-lg min-h-[250px] flex items-center justify-center">
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {category === "innovation" ? (
              <div className="p-4 text-white text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Innovation: Future Begins Here
                </h2>
                <p className="mt-2 text-sm sm:text-lg font-light text-gray-300">
                  “Innovation is seeing what everybody has seen and thinking
                  what nobody has thought.”  
                  - Dr. Albert Szent-Györgyi
                </p>
              </div>
            ) : (
              <div className="p-4 text-white text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Technology: The Power of Tomorrow
                </h2>
                <p className="mt-2 text-sm sm:text-lg font-light text-gray-300">
                  “Technology is best when it brings people together.”  
                  - Matt Mullenweg
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Inline CSS Animations */}
      <style jsx>{`
        @keyframes move-dots {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
      `}</style>
    </motion.div>
  );
}

export default AdTwo;
