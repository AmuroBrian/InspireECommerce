import Image from "next/image";
import Hero from "./components/hero"; // Correctly import Hero

export default function Home() {
  return (
    <div>
      <Hero /> {/* Correct usage of the Hero component */}
    </div>
  );
}
