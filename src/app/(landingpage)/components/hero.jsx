"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/b1.jpeg", name: "beauty", link: "#" },
  { src: "/images/b2.jpg", name: "beauty", link: "#" },
  { src: "/images/t1.jpg", name: "beauty", link: "#" },
  { src: "/images/t2.jpg", name: "beauty", link: "#" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const fullText = "Welcome to InShop";

  // Check if screen size is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Infinite Typing Effect with Pause After Full Text
  useEffect(() => {
    if (!isMobile) return;

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === fullText.length) {
      // Pause for 5 seconds after full text is typed
      setTimeout(() => setIsDeleting(true), 5000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      // Pause for 1 second before retyping starts again
      setTimeout(() => setIsDeleting(false), 1000);
      return;
    }

    const timeout = setTimeout(() => {
      setText(fullText.slice(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isMobile]);

  // Auto-change image every 5 seconds
  useEffect(() => {
    if (isMobile) return; // Stop carousel on mobile

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  // Manual navigation
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black z-0">
      {isMobile ? (
        // Mobile view with typewriter effect
        <h1 className="text-white text-4xl font-bold">
          {text}
          <span className="animate-blink">|</span>
        </h1>
      ) : (
        // Desktop view with carousel
        <>
          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Left (Previous) Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-20 hover:bg-opacity-80 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full transition-opacity duration-300 z-20"
          >
            ◀
          </button>

          {/* Right (Next) Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-20 hover:bg-opacity-80 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full transition-opacity duration-300 z-20"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}
