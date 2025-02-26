"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";

export default function SidebarNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const userName = "User"; // Replace with Firebase fetched user

//   const categories = [
//     "Dashboard", "iBeauty", "J-Tech", "Transaction History", "Shipping Status",
//     "Reseller Dashboard", "Settings", "Logout"
//   ];

  const categories = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "iBeauty", path: "/ibeauty" },
    { name: "J-Tech", path: "/J-Tech" },
    { name: "Transaction History", path: "/Transaction History" },
    { name: "Shipping Status", path: "/Shipping Status" },
    { name: "Reseller Dashboard", path: "/Reseller Dashboard" },
    { name: "Settings", path: "/Settings" },
    { name: "Logout", path: "/" }
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navigation Bar */}
      <nav className="bg-white bg-sky-700 p-4 shadow-md w-full fixed top-0 z-50 h-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-2xl bg-white bg-sky-700 p-2 rounded-md shadow-md"
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
            <div className="flex items-center text-black dark:text-white text-lg font-semibold">
              <img src="/images/InspireWalletLogo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <span className="ml-2">Inspire</span>
            </div>
          </div>

          {/* User Profile */}
          <div className="relative flex items-center gap-3">
            <span className="text-black dark:text-white">Hi, {userName}</span>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="text-xl bg-white bg-sky-700 p-2 rounded-md shadow-md"
            >
              <User />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-24 w-48 bg-white bg-sky-700 shadow-md rounded-md p-2">
                <p className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer">Profile</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed top-0 left-0 h-full w-60 bg-sky-800 text-white p-5 shadow-lg"
      >
        <ul className="mt-16 space-y-4">
          {categories.map((category, index) => (
            <li key={index} className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">
              <Link href={category.path}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </motion.aside>

      
    </div>
  );
}
