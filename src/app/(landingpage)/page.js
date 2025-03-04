import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Products2 from "./components/Products2";
import Adone from "./components/adone";
import AdTwo from "./components/adtwo";
import JTech from "./components/jtech";
import Footer from "./components/footer";

const dummyProducts = [
  { image: "/images/YBYMorningMask(7pcs).png", name: "YBY Morning Mask (7pcs)", price: "₱ 210" },
  { image: "/images/YBYNightMask(7pcs).png", name: "YBY Night Mask (7pcs)", price: "₱ 210" },
  { image: "/images/YBYNightMask(30pcs).png", name: "YBY NightMask (30pcs)", price: "₱ 730" },
  { image: "/images/YBYMorningMask(30pcs).png", name: "YBY Morning Mask(30pcs)", price: "₱ 730" },
  { image: "/images/berryflamingo.png", name: "Puccu Berry Flamingo", price: "₱ 635" },
  { image: "/images/beyondred.png", name: "Puccu Beyond Red", price: "₱ 635" },
  { image: "/images/bloodyorange.png", name: "Puccu Bloody Orange", price: "₱ 635" },
  { image: "/images/princesspiggy.png", name: "Puccu Princess Piggy", price: "₱ 635" },
  { image: "/images/StemSaiLotion.png", name: "Stem Sai Lotion", price: "₱ 7,125" },
  { image: "/images/stemsaicream.png", name: "Stem Sai Cream", price: "₱ 7,125" },
  { image: "/images/stemsaiserum.png", name: "Stemsai Serum", price: "₱ 7,125" },
  { image: "/images/clinienceVitC.png", name: "Clinience Ceramide", price: "₱ 3,499" },
  { image: "/images/cliniencecytokines.png", name: "Clinience Cytokines", price: "₱11,499" },
  { image: "/images/cliniencenmn.png", name: "Clinience NMN", price: "₱ 11,499" },
  // { image: "/images/b2.jpg", name: "FOM Aqua Serum", price: "PHP:1299.00" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Products products={dummyProducts} /> {/* Fixed prop name */}
      <div className="bg-white w-full overflow-x-hidden ">
      <AdTwo/>
      
      <JTech/>
      <Adone/>
     
      
      <Footer/>
      {/* <Products2 products={dummyProducts} />  */}
      
      </div>
    
    </div>
  );
}
