"use client";
import React from 'react';
import { Globe, Phone, Mail, Facebook, Instagram, Music } from "lucide-react";

function Footer() {
  return (
    <div className="w-full bg-white text-black shadow-xl border-t-2 border-black p-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {/* Contact Us Section */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-stone-950">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
}

export default Footer;
