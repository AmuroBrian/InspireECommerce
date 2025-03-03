import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Products2 from "./components/Products2";
import Adone from "./components/adone";
import AdTwo from "./components/adtwo";
import JTech from "./components/jtech";
import Footer from "./components/footer";

const dummyProducts = [
  { image: "/images/YBYNightMask(30pcs).png", name: "YBY NightMask (30pcs)", price: "PHP:730.00" },
  { image: "/images/YBYMorningMask(30pcs).png", name: "YBY Morning Mask(30pcs)", price: "PHP:730.00" },
  { image: "/images/YBYMorningMask(7pcs).png", name: "YBY Morning Mask", price: "PHP:210.00" },
  { image: "/images/YBYNightMask(7pcs).png", name: "YBY Night Mask (7pcs)", price: "PHP:210.00" },
  { image: "/images/stemsaicream.png", name: "Stem Sai Cream", price: "$30" },
  { image: "/images/stemsaiserum.png", name: "Stemsai Serum", price: "$30" },
  { image: "/images/clinienceVitC.png", name: "Clinience Vitamin C", price: "$40" },
  { image: "/images/berryflamingo.png", name: "Puccu Berry Flamingo", price: "PHP:635.00" },
  { image: "/images/beyondred.png", name: "Puccu Beyond Red", price: "PHP:635.00" },
  { image: "/images/princesspiggy.png", name: "Puccu Princess Piggy", price: "PHP:635.00" },
  { image: "/images/cliniencecytokines.png", name: "Clinience Cytokines", price: "$50" },
  { image: "/images/cliniencenmn.png", name: "Clinience NMN", price: "$50" },
  // { image: "/images/b2.jpg", name: "FOM Aqua Serum", price: "PHP:1299.00" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-white w-full overflow-x-hidden ">
     
      <AdTwo/>
      
      <JTech/>
      <Adone/>
      <Products products={dummyProducts} /> {/* Fixed prop name */}
      <Footer/>
      {/* <Products2 products={dummyProducts} />  */}
      
      </div>
    
    </div>
  );
}
