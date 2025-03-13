"use client";
import React from 'react';
import { Globe, Phone, Mail, Facebook, Instagram, Music } from "lucide-react";

const logos = [
  { src: "/images/ibeutylogo.png", label: "iBeauty" },
  { src: "/images/holding2.png", label: "Inspire" },
  // { src: "/logo3.png", label: "Brand 3" }
];

function Footer() {
  return (
    <div className="w-full bg-white text-black shadow-xl border-t-2 border-black p-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {/* Contact Us Section */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-stone-950">
        Contact Us
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center ">
        {/* Left Side: Contact Information */}
        <div className="space-y-3">
          <h2 className="text-base sm:text-lg md:text-xl font-medium flex items-center">
            <Globe className="mr-2 text-blue-500" size={24} />
            Website: 
            <a href="https://inspirenextglobal.com" className="ml-1 text-blue-500 hover:underline">
              inspirenextglobal.com
            </a>
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl font-medium flex items-center">
            <Globe className="mr-2 text-blue-500" size={24} />
            Website: 
            <a href="https://inspireholding.ph" className="ml-1 text-blue-500 hover:underline">
              inspireholdings.ph
            </a>
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl font-medium flex items-center">
            <Phone className="mr-2 text-blue-500" size={24} />
            Telephone No: <span className="ml-1">02-8538-5054 / 02-7750605 / +639946529009</span>
          </h2>
        </div>

        {/* Middle: Social & Email */}
        <div className="space-y-3">
          <h2 className="text-base sm:text-lg md:text-xl font-medium flex items-center">
            <Mail className="mr-2 text-blue-500" size={24} />
            Email: 
            <a href="mailto:info@inspirenextglobal.com" className="ml-1 text-blue-500 hover:underline">
              info@inspireholdings.ph
            </a>
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl font-medium flex items-center">
            <Facebook className="mr-2 text-blue-500" size={24} />
            Facebook: <span className="ml-1">Inspire Next Global Inc.</span>
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl font-medium flex items-center">
            <Instagram className="mr-2 text-blue-500" size={24} />
            Instagram: <span className="ml-1">@inspire.next.global.inc</span>
          </h2>
          <h2 className="text-base sm:text-lg md:text-xl font-medium flex items-center">
            <Music className="mr-2 text-blue-500" size={24} />
            TikTok: <span className="ml-1">@inspire.next.glob</span>
          </h2>
        </div>

        {/* Right Side: Logo Section */}
        <div className="flex justify-end items-center gap-20 mr-10">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={logo.src} alt={logo.label} className="w-40 h-40 object-contain" />
              {/* <p className="mt-2 text-sm font-medium text-gray-700">{logo.label}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
