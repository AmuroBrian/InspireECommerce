"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./../../../../script/firebaseConfig"; // Ensure correct Firebase config import

export default function SidebarNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userName, setUserName] = useState("User");
  const router = useRouter();
  const db = getFirestore(app);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            setUserName(userSnap.data().firstname);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const categories = [
    { name: "Dashboard", path: "/main" },
    { name: "iBeauty", path: "/ibeauty" },
    { name: "J-Tech", path: "/jtech" },
    { name: "Transaction History", path: "/transactionhistory" },
    { name: "Shipping Status", path: "/shippingstatus" },
    { name: "Reseller Dashboard", path: "/resellerdashboard" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/" },
  ];

  return (
    <div className="relative h-screen overflow-hidden z-10">
      <nav className="bg-sky-700 p-4 shadow-md w-full fixed top-0 z-50 h-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-2xl bg-sky-700 p-2 rounded-md shadow-md text-white"
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
            <div className="flex items-center text-black dark:text-white text-lg font-semibold">
              <img
                src="/images/InspireWalletLogo.png"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="ml-2">Inspire</span>
            </div>
          </div>

          <div className="relative flex items-center gap-3">
            <span className="text-black dark:text-white">{`${getGreeting()}, ${userName}`}</span>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="text-xl bg-sky-700 p-2 rounded-md shadow-md text-white"
            >
              <User />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-24 w-48 bg-sky-700 shadow-md rounded-md p-2">
                <p className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                  Profile
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>

      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed top-0 left-0 h-full w-60 bg-sky-800 text-white p-5 shadow-lg"
      >
        <ul className="mt-16 space-y-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-700 rounded-md cursor-pointer"
              onClick={() => {
                setIsSidebarOpen(false);
                router.push(category.path);
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </motion.aside>
    </div>
  );
}
