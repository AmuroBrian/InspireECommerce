"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const pages = [
  "A Look into the Brand's Origins: It is no secret I-Beauty was established from a love of innovation and excellence within the skincare industry ecosystem. From the onset, the brand set out to use the latest scientific breakthroughs alongside nature’s best ingredients to manufacture products that do not only work but transform patients' skin.",
  "The PUCCU Revolution: Perhaps, one of I-Beauty’s much-awaited items, PUCCU, is about to enter the personal care market. Thanks to a multi-disciplinary dedicated team of experts, PUCCU's advanced formula coupled with eco-friendly packaging epitomizes the brand's purity and sustainability ethos. The name PUCCU is derived from an old popular word that translates to 'pure and clean' affirming the brand's commitment to providing natural skincare solutions.",
  "Clinience – Bridging Science and Nature: Clinience embodies I-Beauty’s vision to integrate state-of-the-art scientific research with natural healing traditions. This research and development-driven product range is designed to meet most skincare needs including anti-aging and hydration. 'Clinience' is a term that intertwines the words 'clinical' and 'experience' which captures the brand's focus on clinical outcomes and satisfaction.",
  "FOM Line – Formula of Miracles: The FOM product line, which includes a cream, lotion, and serum, offers a comprehensive skincare routine designed to rejuvenate and nourish the skin. Standing for 'Formula of Miracles,' the FOM series promises transformative effects, thanks to its meticulously researched, high-performance ingredients. This line is poised to become a staple in the skincare market, exemplifying I-Beauty's commitment to quality and innovation."
];

export default function Adone() {
  const [pageIndex, setPageIndex] = useState(0);
  const [mobileHeight, setMobileHeight] = useState(200);
  const [desktopHeight, setDesktopHeight] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setMobileHeight(400);
      } else {
        setDesktopHeight(600);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextPage = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-6 lg:p-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      {/* Information Sections */}
      <div className="text-left w-full lg:w-1/3">
        <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4 lg:mb-6 text-center font-cursive transition duration-300 ease-in-out hover:text-pink-500 hover:scale-110">
          I-BEAUTY
        </h1>
        <div className="p-6 rounded-md bg-yellow-200/50 mb-6">
          <h2 className="text-xl lg:text-2xl font-bold text-black">IFRESH</h2>
          <p className="text-sm lg:text-base text-justify text-black">
            Our IFRESH collection brings a burst of hydration and radiance to your skin. Experience the refreshing glow with natural ingredients.
          </p>
        </div>
        <div className="p-6 rounded-md bg-yellow-200/50">
          <h2 className="text-xl lg:text-2xl font-bold text-black">AGELESS</h2>
          <p className="text-sm lg:text-base text-justify text-black">
            Our AGELESS collection brings a burst of hydration and radiance to your skin. Experience the refreshing glow with natural ingredients.
          </p>
        </div>
      </div>

      {/* Dynamic Page Content */}
      <div
        className="relative flex items-center justify-center p-6 lg:p-8 text-center text-black rounded-2xl shadow-lg border-2 border-black cursor-pointer bg-cover bg-center mt-6 lg:mt-0"
        style={{
          backgroundImage:
            pageIndex === 0
              ? "url('/images/cover.jpg')"
              : "linear-gradient(to right, #FFC0CB, #FF69B4)",
          width: "90%",
          maxWidth: "500px",
          height: window.innerWidth < 1024 ? `${mobileHeight}px` : `${desktopHeight}px`,
          objectFit: "cover",
        }}
        onClick={handleNextPage}
      >
        {pageIndex === 0 ? (
          <h1 className="absolute bottom-4 lg:bottom-8 text-2xl lg:text-5xl font-bold text-white">
            LEARN MORE
          </h1>
        ) : (
          <h1 className="text-sm lg:text-lg font-bold p-4 text-justify">
            {pages[pageIndex]}
          </h1>
        )}
      </div>
    </div>
  );
}
