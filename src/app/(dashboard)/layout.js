import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import SideNav from "./components/SideNav";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex">
        {/* Sidebar on the left */}
        <SideNav />

        {/* Main content area */}
        <main className="flex-1 flex items-center justify-center bg-white text-white p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
