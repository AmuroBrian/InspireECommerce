"use client"; 

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const backgrounds = [
  "bg-[#DEB887]",
  "bg-[#FA8072]",
  "bg-[#8FBC8F]",
  "bg-[#BDB76B]",
  "bg-[#87CEFA]"
];

const gridSize = 6;
const fullText = "Welcome to InShop" || "Default Text";


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoChange, setAutoChange] = useState(true);
  const [animateKey, setAnimateKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState("");
  const deleteSpeed = 100;
  const pauseTime = 2000;

  const typingSpeed = 150;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      console.log("Is Mobile:", window.innerWidth <= 640);
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  useEffect(() => {
    let i = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) {
          isDeleting = true;
          setTimeout(type, pauseTime); // Pause before deleting
          return;
        }
      } else {
        setText(fullText.substring(0, i - 1));
        i--;
        if (i === 0) {
          isDeleting = false;
        }
      }
      setTimeout(type, isDeleting ? deleteSpeed : typingSpeed);
    };

    type();
  }, []);
  
  
  
  

  useEffect(() => {
    if (!autoChange) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
      setAnimateKey((prevKey) => prevKey + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoChange]);

  const nextBackground = () => {
    setAutoChange(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    setAnimateKey((prevKey) => prevKey + 1);
    setTimeout(() => setAutoChange(true), 5000);
  };

  const prevBackground = () => {
    setAutoChange(false);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1));
    setAnimateKey((prevKey) => prevKey + 1);
    setTimeout(() => setAutoChange(true), 5000);
  };
  
  return (
    <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
       {!isMobile && (
  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 w-full h-full">


    {[...Array(gridSize * gridSize)].map((_, i) => (
      <motion.div
        key={`${animateKey}-${i}`}
        className={`w-full h-full ${backgrounds[currentIndex]}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: (Math.floor(i / gridSize) + (i % gridSize)) * 0.05,
        }}
      />
    ))}


    {/* pure exom left*/}
  {backgrounds[currentIndex] === "bg-[#DEB887]" && (
        <div className="absolute top-10 right-10 text-black text-right max-w-md">
          <h2 className="text-6xl font-bold text-center">PURE EXOM</h2>
          <p className="text-2xl font-semibold mt-2 text-center">EXOSOME POWDER</p>
          <div className="mt-6 text-base space-y-8 text-center">
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">STEP 1</p>
              <p className="text-justify w-3/4">Prepare exosome-containing human stem cell supernatant, saline, and a nebulizer for aspiration.</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">STEP 2</p>
              <p className="text-justify w-3/4">Add a small amount of purified water (approximately 8cc) to the exosome-containing human stem cell supernatant and slowly dissolve.</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">STEP 3</p>
              <p className="text-justify w-3/4">The solution is placed into a nebulizer and inhaled slowly through the nose for about 15 minutes.</p>
            </div>
          </div>
        </div>
      )}
      {backgrounds[currentIndex] === "bg-[#DEB887]" && (
        <div className="absolute mt-20 left-10 flex items-center gap-6 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg ">
          <img src="/images/heroimage.png" alt="Exosome Powder" className="w-96 h-96 object-contain" />
          <div className="text-black text-left text-sm max-w-sm">
            <h2 className="text-4xl font-bold text-center text-white">PURE EXOM</h2>
            {/* <p className="text-xl font-semibold text-center text-white">EXOSOME POWDER</p> */}
            <p className="text-white mb-4">Exosome-containing adipose-derived stem cell supernatant powder | Made in Japan</p>
            <p className="text-white">For best results, it is advisable to use with an inhaler to enhance absorption and effectiveness.</p>
          </div>
        </div>
      )}



   {/* puccu right */}
      {backgrounds[currentIndex] === "bg-[#FA8072]" && (
        <div className="absolute top-10 left-12 text-white text-left max-w-md">
          <h2 className="text-6xl font-bold text-black text-center">PUCCU</h2>
          <p className="text-2xl font-semibold mt-2 text-black">COLOR LIPS SERUM</p>
          <div className="mt-6 text-base space-y-4 text-left">
            <p className="text-black"><strong>001 BEYOND RED:</strong> </p>
            <p className="text-black">A red beyond red that will allow you to discover a new you that goes beyond your current self.</p>
            <p className="text-black"><strong>002 BERRY FLAMINGO:</strong></p>
            <p className="text-black"> A deep pink that exudes "dignified confidence" and is loved throughout the ages.</p>
            <p className="text-black"><strong>003 SPARKY BLOOD ORANGE:</strong></p>
            <p className="text-black"> A coral that has the juiciness of early summer, yet still shines brightly in reality.</p>
            <p className="text-black"><strong>004 PRINCESS PIGGY:</strong> </p>
            <p className="text-black">Captivating nude colors for an "irresistible charm".</p>
          </div>
        </div>
      )}

     {backgrounds[currentIndex] === "bg-[#FA8072]" && ( 
  <div className="absolute mt-20 right-10 flex items-center gap-6 p-4 bg-black bg-opacity-50 rounded-lg shadow-lg">
    <div className="text-white text-left text-sm max-w-sm">
      <h2 className="text-4xl font-bold text-white mt-5">PUCCU</h2>
      {/* <p className="text-xl font-semibold text-white">EXOSOME POWDER</p> */}
      <p className="mb-4">A true moisturizing lip serum that perfects your natural lips.</p>
      <p>Patented encapsulated Vitamin C, Three Botanical Oils, Amino Acids-Based Plumping Ingredients.</p>
    </div>
    <img src="/images/heroimage2.png" alt="Puccu Color Lips Serum" className="w-96 h-96 object-contain" />
  </div>
      )}


 {/* you left*/}
       {backgrounds[currentIndex] === "bg-[#8FBC8F]" && (
        <div className="absolute top-10 right-10 text-black text-right max-w-md">
          <h2 className="text-6xl font-bold text-center mt-10">YOU</h2>
          <div className="mt-6 text-base space-y-8 text-center">
            <div className="flex flex-col items-center text-justify">
            <p className="text-black mb-5"><strong>You Be You DAILY MORNING MASK</strong> </p>
            <p className="mb-5">Provides essential moisture for morning skin, protects the skin from external stimuli,and enhances makeup application.</p>
            <p className="text-black mb-5"><strong>You Be You DAILY NIGHT MASK</strong> </p>
            <p className="mb-5">At night, it provides "calming" and "moisturizing" benefits to the skin after a long day, while promoting skin turnover.</p>
            <p className="text-black mb-5"><strong>You Be You DAILY MANNAN CLEANSING GEL</strong> </p>
            <p className="mb-5">100% plant-based mannan scrub, making it gentle and low-irritation on the skin.
            Features the excellent adsorption power of Moroccan lava clay, providing deep cleansing to remove old dead skin cells and dirt from deep within the pores.</p>
            
            </div>
          </div>
        </div>
      )}
      {backgrounds[currentIndex] === "bg-[#8FBC8F]" && (
        <div className="absolute mt-20 left-10 flex items-center gap-6 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
          <img src="/images/heroimage3.png" alt="Exosome Powder" className="w-96 h-96 object-contain" />
          <div className="text-black text-left text-sm max-w-sm">
            <h2 className="text-4xl font-bold text-center text-white mb-5">YOU</h2>
            {/* <p className="text-xl font-semibold text-center text-white">EXOSOME POWDER</p> */}
            <p className="mb-5 text-white">You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect.</p>
            <p className="mb-5 text-white"> You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.</p>
          </div>
        </div>
      )}



      {/* clienieght right */}
      {backgrounds[currentIndex] === "bg-[#87CEFA]" && (
              <div className="absolute top-10 left-12 text-white text-left max-w-md">
                <h2 className="text-6xl font-bold text-black text-center">Clinience</h2>
                <p className="text-2xl font-semibold mt-2 text-black">Liposome vitamin c</p>
                <div className="mt-6 text-base space-y-4 text-left">
                  <p className="text-black">The vitamin C used at Clinience is "Quali-C®" manufactured by the British company DSM at a factory in Scotland. Quali-C® is vitamin C produced from non-genetically modified corn grown in Europe, and is recognized as a high-quality vitamin C by global standards.</p>
                  <p className="text-black">Ingredients: Vitamin C, trehalose, lecithin (derived from soybeans), emulsifier, sweetener (stevia), flavoring, pH adjuster, sugar-transferred hesperidin</p>
                  <p className="text-black">Shape: Powder (stick type)</p>
                  <p className="text-black">Contents: 30 pieces (contents per piece: 2g) *Trial: 7 pieces</p>
                  <p className="text-black">How to eat: Take 1 to 3 bottles per day with water or lukewarm water.</p> 
                </div>
              </div>
            )}

      {backgrounds[currentIndex] === "bg-[#87CEFA]" && ( 
        <div className="absolute mt-20 right-10 flex items-center gap-6 p-4 bg-black bg-opacity-50 rounded-lg shadow-lg">
          <div className="text-white text-left text-sm max-w-sm">
            <h2 className="text-4xl font-bold text-white mt-5">Clinience</h2>
            
            <p className=" font-semibold mt-2 text-white text-left mb-5">Contains 1,000mg of domestically produced liposomal vitamin C per packet</p>
            {/* <p className="text-xl font-semibold text-white">EXOSOME POWDER</p> */}
            <p className="mb-4">Vitamin C (Quali®-C) made by DSM in the UK from non-genetically modified corn is made into liposomes and 1,000mg is included in each packet.</p>
            <p>Our unique hybrid liposomes are high-precision, high-quality domestic liposomes created in a Japanese laboratory.</p>
          </div>
          <img src="/images/heroimage4.png" alt="Puccu Color Lips Serum" className="w-96 h-96 object-contain" />
        </div>
      )}



       {/* Natural Edge Series left*/}
       {backgrounds[currentIndex] === "bg-[#BDB76B]" && (
        <div className="absolute top-10 right-10 text-black text-right max-w-md">
          <h2 className="text-6xl font-bold text-center mt-10">Natural Edge Series</h2>
          <h2 className="text-2xl font-bold text-center mt-5">Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.</h2>
          <div className="mt-6 text-base space-y-8 text-center">
            <div className="flex flex-col items-center text-justify">
            
            <p className="mb-5">This moment signifies the introduction of the world's first and only cosmetics line uniquely formulated with two exceptionally rare and valuable ingredients, setting a new standard in beauty and skincare innovation.</p>

            </div>
          </div>
        </div>
      )}
      {backgrounds[currentIndex] === "bg-[#BDB76B]" && (
        <div className="absolute mt-20 left-10 flex items-center gap-6 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
          <img src="/images/heroimage5.png" alt="Exosome Powder" className="w-96 h-96 object-contain" />
          <div className="text-black text-left text-sm max-w-sm">
            <h2 className="text-4xl font-bold text-center text-white mb-5">Natural Edge Series</h2>
            {/* <p className="text-xl font-semibold text-center text-white">EXOSOME POWDER</p> */}
            <p className="mb-5 text-white">Fucoxanthin, Gold, Horse umbilical cord extract, Hyaluronic Acid, Moringa Oleifera Seed Oil, Water, Horse amniotic membrane extract, Glycerin, Xanthan Gum, Lavender Oil and Pentylene Glycol.</p>
           
          </div>
        </div>
      )}


      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <button onClick={prevBackground} className="bg-white text-black bg-opacity-10 px-4 py-2 rounded-md shadow-md">◀</button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <button onClick={nextBackground} className="bg-white text-black bg-opacity-10 px-4 py-2 rounded-md shadow-md">▶</button>
            </div>

        </div>

        
      )}

{isMobile && (
  <div 
    className="absolute w-full h-full bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: "url('/images/heromobile1.jpg')" }} // Background image
  >
    <span 
      className="text-black text-3xl font-bold whitespace-nowrap"
      style={{
        position: "absolute", // Keeps text in place
        top: "30%", // Positions text lower, adjust as needed
        left: "50%",
        transform: "translateX(-50%)", // Center the text horizontally
        
        padding: "5px 15px", // Adds spacing around text
        borderRadius: "5px" // Smooth corners
      }}
    >
      {text}
    </span>
  </div>
)}



     
    </div>
  );
}