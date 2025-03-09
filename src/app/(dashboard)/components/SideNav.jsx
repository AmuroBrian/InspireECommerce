"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./../../../../script/firebaseConfig"; // Ensure correct Firebase config import

export default function SidebarNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [userName, setUserName] = useState("User");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    if (isLoggingOut) {
      const text = "Logging Out...";
      let index = 0;
      const interval = setInterval(() => {
        setAnimatedText(text.slice(0, index + 1));
        index = (index + 1) % (text.length + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isLoggingOut]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
    { name: "Cart", path: "/carts" },
    { name: "Shipping Status", path: "/shippingstatus" },
    { name: "Reseller Dashboard", path: "/resellerdashboard" },
    { name: "Shipping Information", path: "/shippinginformation" },
    { name: "Settings", path: "/settings" },
    { name: "Logout", path: "/" },
  ];

  const handleLogout = async () => {
    setIsLoggingOut(true);
    setTimeout(async () => {
      await signOut(auth);
      router.push("/");
    }, 3000);
  };

  return (
    <div className="relative h-screen overflow-hidden z-10">
      {/* Navbar */}
      <nav className="bg-secondaryColor p-4 shadow-md w-full fixed top-0 z-50 h-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Sidebar Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-2xl bg-secondaryColor p-2 rounded-md shadow-md text-black"
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </button>
            <div className="flex items-center text-black text-lg font-semibold">
              <img
                src="/images/logoinpire.png"
                alt="Logo"
                className="w-50 h-10 object-contain cursor-pointer"
                onClick={() => router.back()}
              />
            </div>
          </div>

          {/* User Greeting & Profile (Hidden on Mobile) */}
          <div className="relative flex items-center gap-3">
            {!isMobile && (
              <span className="text-black">{`${getGreeting()}, ${userName}`}</span>
            )}
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="text-xl bg-secondaryColor p-2 bottom-0 rounded-md shadow-md text-black"
            >
              <User />
            </button>
            {isProfileOpen && (
              <div className=" absolute right-0 top-12 w-48 bg-secondaryColor shadow-md rounded-md p-2">
                {/* Settings Option */}
                <p
                  className="p-2 hover:bg-jtechPrimaryColor hover:text-black rounded-md cursor-pointer text-white"
                  onClick={() => {
                    setIsProfileOpen(false);
                    router.push("/settings");
                  }}
                >
                  Settings
                </p>

                {/* Logout Option */}
                <p
                  className="p-2 hover:bg-jtechPrimaryColor hover:text-white rounded-md cursor-pointer text-white"
                  onClick={() => {
                    setIsProfileOpen(false);
                    setIsLogoutModalOpen(true); // Open logout confirmation modal
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="fixed top-0 left-0 h-full w-60 bg-secondaryColor text-white p-5 shadow-lg z-10"
      >
        <ul className="mt-16 space-y-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="p-2 hover:bg-jtechPrimaryColor hover:text-black rounded-md cursor-pointer flex items-center gap-2"
              onClick={() => {
                if (category.name === "Logout") {
                  setIsLogoutModalOpen(true);
                } else {
                  setIsSidebarOpen(false);
                  router.push(category.path);
                }
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </motion.aside>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center w-96 h-30 flex flex-col justify-between">
            {isLoggingOut ? (
              <>
                <div className="w-8 h-8 border-4 border-t-transparent border-gray-400 rounded-full animate-spin mx-auto mb-4"></div>
                <span>{animatedText}</span>
              </>
            ) : (
              <>
                <p className="text-lg font-medium mb-4">
                  Are you sure you want to logout?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Yes, Logout
                  </button>
                  <button
                    onClick={() => setIsLogoutModalOpen(false)}
                    className="bg-gray-300 px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
