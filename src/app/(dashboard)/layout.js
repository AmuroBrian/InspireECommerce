import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import SideNav from "./components/SideNav";

// Apply fonts
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="w-full h-screen flex bg-[#daf1ff]">
        {/* Sidebar on the left */}
        <SideNav />
        <main className="flex-1 flex items-center justify-center bg-white text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
