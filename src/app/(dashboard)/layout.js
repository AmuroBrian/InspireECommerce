import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";


export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
     
      <body
        className={"w-full"}
      >
        {children}
      </body>
    </html>
  );
}
