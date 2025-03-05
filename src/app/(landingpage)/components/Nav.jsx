"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import RegisterModal from "./Register";
import LoginModal from "./Login";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (  
    <>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
        <img
              src="/images/logoinpire.png"
              alt="Logo"
              className="w-50 h-10 object-contain cursor-pointer"
              onClick={() => router.back()}
            />
        </div>


        {/* Navigation Links */}
        <div className="flex space-x-4">
        {pathname === "/" && (
                <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
              )}

        {pathname === "/about" && (
                <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
              )}
      
          <button onClick={() => setIsModalOpen(true)} className="text-gray-700 hover:text-blue-500">Register</button>
          <button onClick={() => setIsLoginOpen(true)} className="text-gray-700 hover:text-blue-500">
            Login
          </button>
        </div>
      </nav>

      {/* Register Modal */}
      {isModalOpen && <RegisterModal onClose={() => setIsModalOpen(false)} />}

      {/* Login Modal */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}
