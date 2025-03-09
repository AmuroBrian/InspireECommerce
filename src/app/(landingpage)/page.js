import Image from "next/image";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Products2 from "./components/Products2";
import Adone from "./components/adone";
import AdTwo from "./components/adtwo";
import JTech from "./components/jtech";
import Footer from "./components/footer";

const dummyProducts = [
  { image: "/images/YBYMorningMask(7pcs).png", name: "YBY Morning Mask (7pcs)", price: "₱ 210", description:"An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula."},
  { image: "/images/YBYNightMask(7pcs).png", name: "YBY Night Mask (7pcs)", price: "₱ 210",   description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula."},
  { image: "/images/YBYNightMask(30pcs).png", name: "YBY NightMask (30pcs)", price: "₱ 730",  description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula."},
  { image: "/images/YBYMorningMask(30pcs).png", name: "YBY Morning Mask(30pcs)", price: "₱ 730",  description: "At night, it provides \"calming\" and \"moisturizing\" benefits to the skin after a long day, while promoting skin turnover."},
  { image: "/images/berryflamingo.png", name: "Puccu Berry Flamingo", price: "₱ 635",  description: "A deep pink that exudes\"dignified confidence\" and is loved throughout the ages." },
  { image: "/images/beyondred.png", name: "Puccu Beyond Red", price: "₱ 635",  description: "\"A red beyond red\" that will allow you to discover a new you that goes beyond your current self."},
  { image: "/images/bloodyorange.png", name: "Puccu Bloody Orange", price: "₱ 635",  description: "A coral that has the juiciness of early summer, yet still shines brightly in reality."},
  { image: "/images/princesspiggy.png", name: "Puccu Princess Piggy", price: "₱ 635", description: "Captivating nude colors for an \"irresistible charm\"." },
  { image: "/images/StemSaiLotion.png", name: "Stem Sai Lotion", price: "₱ 7,125", description: "This lightweight, fragrant Stem Sai Lotion hydrates, smooths, and refines your skin, while gettou leaf extract adds a calming touch for a relaxing skincare experience."},
  { image: "/images/stemsaicream.png", name: "Stem Sai Cream", price: "₱ 7,125", description: "This Stem Sai Cream offers a luxe, lightweight texture that locks in moisture and forms a protective barrier, leaving your skin soft and smooth."},
  { image: "/images/stemsaiserum.png", name: "Stemsai Serum", price: "₱ 7,125", description: "This rich Stem Sai Serum, packed with high-concentration exosomes and luxe ingredients, deeply hydrates and smooths without any sticky residue, leaving your skin flawlessly nourished." },
  { image: "/images/clinienceVitC.png", name: "Clinience Ceramide", price: "₱ 3,499",  description: "Pineceram®, a plant ceramide derived from pineapple that is attracting attention as a \“sunscreen you can drink\”, is liposome-encapsulated and 1200μg is contained in each packet."},
  { image: "/images/cliniencecytokines.png", name: "Clinience Cytokines", price: "₱11,499", description: "The highest quality human umbilical cord-derived stem cell culture supernatant is liposome-encapsulated and made into a supplement. It has been processed using a special freeze-drying method that allows it to be stored at room temperature and taken orally."},
  { image: "/images/cliniencenmn.png", name: "Clinience NMN", price: "₱ 11,499", description: "Liposomal NMN (nicotinamide mononucleotide) made in the UK to pharmaceutical grade purity of 99.9% is combined with 150mg in 4 capsules" },
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
