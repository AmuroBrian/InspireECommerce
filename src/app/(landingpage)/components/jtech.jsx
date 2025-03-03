"use client";

import React from 'react';

function JTech() {
  return (
    <div className="relative bg-gray-700 flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden w-full">
      {/* Animated Tech Background */}
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
        <div
          className="absolute top-1/4 left-0 w-full h-[2px] bg-cyan-500 opacity-30"
          style={{ animation: "line-move 4s linear infinite" }}
        ></div>
        <div
          className="absolute top-3/4 right-0 w-full h-[2px] bg-green-500 opacity-30"
          style={{ animation: "line-move 4s linear infinite" }}
        ></div>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {/* DeskNet NEO Card */}
        <div className="bg-transparent max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg shadow-white p-4">
          <img
            src="/images/destneo.jpg"
            alt="DeskNet NEO"
            className="w-full h-48 sm:h-64 object-fit transition-opacity duration-500 ease-in-out hover:opacity-80"
          />
          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white">DeskNet NEO</h2>
            <p className="text-white text-sm sm:text-lg font-light italic text-justify">
              Helps internal operations and communication in a company to run smoothly.
              Each application brings high functionality, ensuring the necessity of a groupware is met.
            </p>
          </div>
        </div>

        {/* SRQC Card */}
        <div className="bg-transparent max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg shadow-white p-4">
          <img
            src="/images/sqrc.jpg"
            alt="SRQC"
            className="w-full h-48 sm:h-64 object-fit object-center transition-opacity duration-500 ease-in-out hover:opacity-80"
          />
          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white">SRQC</h2>
            <p className="text-white text-sm sm:text-lg font-light italic text-justify">
              Secure QR Code is a more secure variant of the traditional QR code. It allows
              encrypted data storage, accessible only with proper authorization, providing enhanced security.
            </p>
          </div>
        </div>

        {/* Alpha HT Card */}
        <div className="bg-transparent max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg shadow-white p-4">
          <img
            src="/images/alphsh22.jpg"
            alt="Alpha HT"
            className="w-full h-48 sm:h-64 object-fit object-center transition-opacity duration-500 ease-in-out hover:opacity-80"
          />
          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-serif">Alpha HT</h2>
            <p className="text-white text-sm sm:text-lg font-light italic text-justify">
              Installing this device in the copper pipe of a ventilation system can reduce power consumption by 15%-35%.
            </p>
          </div>
        </div>
      </div>

      {/* Inline CSS Animations */}
      <style jsx>{`
        @keyframes move-dots {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        @keyframes line-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export default JTech;