import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Products2 from "./components/Products2";

const dummyProducts = [
  { image: "/images/b1.jpeg", name: "Product 1", price: "$10" },
  { image: "/images/b2.jpg", name: "Product 2", price: "$20" },
  { image: "/images/t1.jpg", name: "Product 3", price: "$30" },
  { image: "/images/t2.jpg", name: "Product 4", price: "$40" },
  { image: "/images/b1.jpeg", name: "Product 5", price: "$50" },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-white w-full overflow-x-hidden ">
      
      <Products products={dummyProducts} /> {/* Fixed prop name */}
     
      <Products2 products={dummyProducts} /> {/* Fixed prop name */}
      </div>
    
    </div>
  );
}
