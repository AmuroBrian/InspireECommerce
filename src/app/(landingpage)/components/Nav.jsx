"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import RegisterModal from "./Register";
import LoginModal from "./Login";


export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logoinpire.png" alt="Logo" width={120} height={30} />
          <span className="text-xl font-bold text-customBlue"></span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
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
