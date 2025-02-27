"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card";
import { useRouter } from "next/navigation";


const products = [
  {
    id: 1,
    name: "YBY Morning Mask (7pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 210,
    
  },

  {
    id: 2,
    name: "YBY Morning Mask (30pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 730,
  },

  {
    id: 3,
    name: "YBY Night Mask (7pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 210,
  },
  
  {
    id: 4,
    name: "YBY Night Mask (30pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 730,
  },

  {
    id: 5,
    name: "YBY Cleansing Gel",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture,protects skin from external stimuli,and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 730,
  },

  {
    id: 6,
    name: "PUCCU Lipstick Bloody Red",
    image: "./images/b2.jpg",
    description: "\"A red beyond red\" that will allowyou to discover a new you thatgoes beyond your current self.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 635,
  },
  {
    id: 7,
    name: "PUCCU Lipstick Berry Flamingo",
    image: "./images/b2.jpg",
    description: "deep pink that exudes\"dignified confidence\" and isloved throughout the ages.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 635,
  },
  {
    id: 8,
    name: "PUCCU Lipstick Sparky Blood Orange",
    image: "./images/b2.jpg",
    description: "A coral that has the juiciness ofearly summer, yetstill shines brightly in reality.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 635,
  },
  {
    id: 9,
    name: "PUCCU Lipstick Princess Piggy",
    image: "./images/b2.jpg",
    description: "Captivating nude colors foran \"irresistible charm\".",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 635,
  },

  {
    id: 10,
    name: "FOM Toner",
    image: "./images/b2.jpg",
    description: "A pink that is both sweet andmature, and is loved by allwomen.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 799,
  },
  {
    id: 11,
    name: "FOM Aqua Serum",
    image: "./images/b2.jpg",
    description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 1299,
  },
  {
    id: 12,
    name: "FOM Cream",
    image: "./images/b2.jpg",
    description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
    info: "This moment signifies the introduction of the world's first and only cosmetics line uniquely formulated with two exceptionally rare and valuable ingredients, setting a new standard in beauty and skincare innovation.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 1699,
  },
  {
    id: 13,
    name: "Clinience Ceramide",
    image: "./images/b2.jpg",
    description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
    info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 3499,
  },
  {
    id: 14,
    name: "Clinience Cytokines",
    image: "./images/b2.jpg",
    description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
    info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 11499,
  },
  {
    id: 15,
    name: "Clinience NMN",
    image: "./images/b2.jpg",
    description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
    info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 11499,
  },
  {
    id: 16,
    name: "Dermashot",
    image: "./images/b2.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 7600,
  },
  {
    id: 17,
    name: "Pure Exom",
    image: "./images/b2.jpg",
    description: "loremsimply dummy text of the printing and typesetting industry.",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 7125,
  },

  {
    id: 18,
    name: "FOM Pack",
    image: "./images/b2.jpg",
    description: "loremsimply dummy text of the printing and typesetting industry.",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 2800,
  },

  {
    id: 19,
    name: "YBY Cleansing Gel*",
    image: "./images/b2.jpg",
    description: "loremsimply dummy text of the printing and typesetting industry.",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    use: "Apply a small amount of the product to the face and massage gently. Rinse with water.",
    price: 700,
  },

  {
    id: 20,
    name: "Aplha-HT",
    image: "./images/b2.jpg",
    description: "Alpha-HT is committed to transforming the way we power our world. By integrating a-HT technology, our air coolers provide a sustainable, cost-effective solution for a more comfortable and ecofriendly future, while reducing your energy consumption.",
    info: "By installing this device in the copper (UID) pipe of the ventilation system, power consumption can be reduced by 15% to 35%. Should be installed in the liquid pipeline between the condensation unit and the expansion valve.",
    use: "To be discussed with a representative of Inspire Next Global Inc.",
    //price: 700,
  },

  {
    id: 21,
    name: "Desknet's NEO",
    image: "./images/b2.jpg",
    description: "Desknet's NEO is a cloud-based groupware popular in Japan, offering businesses a customizable platform for collaboration, communication, and workflow management.",
    info: "Offers features such as file sharing, virtual meetings, task management, approval processes, calendar integration, and internal communication.",
    use: "To be discussed with a representative of Inspire Next Global Inc.",
    //price: 700,
  },

  {
    id: 22,
    name: "SQRC® (Security QR Code)",
    image: "./images/b2.jpg",
    description: "A single QR Code can store both public and private data, with the private data accessible only through a specialized reader equipped with a cryptographic key, ensuring secure data protection. Since SQRC visually resembles a standard QR Code, it helps prevent forgery and tampering.",
    info: "A single code carries two types of data: public and private. Public data is accessible to anyone with a standard QR Code reader, while private data is encrypted and can only be accessed by a specialized reader equipped with a cryptographic key.",
    use: "To be discussed with a representative of Inspire Next Global Inc.",
    //price: 700,
  },


];

const AnimatedCard = ({ name, image, description, info, price, use }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full p-4"
    >
      <Card className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition h-full flex flex-col">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <CardContent className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-center">{name}</h3>
          <p className="text-md font-bold text-gray-600 mt-2">{price}</p>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          <p className="text-sm text-gray-600 mt-2">{info}</p>
          <p className="text-sm text-gray-600 mt-2">{use}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProductPage = () => {

  const router = useRouter();

  const handleCheckout = (product) => {
    const productQuery = encodeURIComponent(JSON.stringify(product));
    router.push(`/checkout?product=${productQuery}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8">
    {products.map((product) => (
      <div
        key={product.id}
        className="border rounded-lg p-4 shadow-md cursor-pointer"
        onClick={() => handleCheckout(product)}
      >
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-bold mt-2">${product.price}</p>
      </div>
    ))}
  </div>
  );
};

export default ProductPage;
