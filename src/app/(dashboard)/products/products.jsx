"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/Card";

const products = [
  {
    id: 1,
    name: "YBY Morning Mask (7pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    price: 210,
  },

  {
    id: 2,
    name: "YBY Morning Mask (30pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    price: 730,
  },

  {
    id: 3,
    name: "YBY Night Mask (7pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    price: 210,
  },
  
  {
    id: 4,
    name: "YBY Night Mask (30pcs)",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture, protects skin from external stimuli, and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use. It has two variations which are for Daily Morning Mask and for Daily Night Mask to help achieve the effect. You Be You offers two types of packages, one contains 7 mask sheets, the other contains 30 mask sheets.",
    price: 730,
  },

  {
    id: 5,
    name: "YBY Cleansing Gel",
    image: "./images/b2.jpg",
    description: "An extra-ordinary facial mask that provides essential moisture,protects skin from external stimuli,and has deep cleansing formula.",
    info: "You Be You contains natural ingredients that makes it excellent for daily use.",
    price: 730,
  },

  {
    id: 6,
    name: "PUCCU Lipstick Bloody Red",
    image: "./images/b2.jpg",
    description: "\"A red beyond red\" that will allowyou to discover a new you thatgoes beyond your current self.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    price: 635,
  },
  {
    id: 7,
    name: "PUCCU Lipstick Berry Flamingo",
    image: "./images/b2.jpg",
    description: "deep pink that exudes\"dignified confidence\" and isloved throughout the ages.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    price: 635,
  },
  {
    id: 8,
    name: "PUCCU Lipstick Sparky Blood Orange",
    image: "./images/b2.jpg",
    description: "A coral that has the juiciness ofearly summer, yetstill shines brightly in reality.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    price: 635,
  },
  {
    id: 9,
    name: "PUCCU Lipstick Princess Piggy",
    image: "./images/b2.jpg",
    description: "Captivating nude colors foran \"irresistible charm\".",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    price: 635,
  },

  {
    id: 10,
    name: "FOM Toner",
    image: "./images/b2.jpg",
    description: "A pink that is both sweet andmature, and is loved by allwomen.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    price: 799,
  },
  {
    id: 11,
    name: "FOM Aqua Serum",
    image: "./images/b2.jpg",
    description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
    info: "A true moisturizing lip serumthat perfects your natural lips.",
    price: 1299,
  },
  {
    id: 12,
    name: "FOM Cream",
    image: "./images/b2.jpg",
    description: "Unlock radiant, hydrated skin with the perfect blend of Emulsion Cream and Aqua Serum.",
    info: "This moment signifies the introduction of the world's first and only cosmetics line uniquely formulated with two exceptionally rare and valuable ingredients, setting a new standard in beauty and skincare innovation.",
    price: 1699,
  },
  {
    id: 13,
    name: "Clinience Vit C",
    image: "./images/b2.jpg",
    description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
    info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
    price: 3499,
  },
  {
    id: 14,
    name: "Clinience Cytokines",
    image: "./images/b2.jpg",
    description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
    info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
    price: 11499,
  },
  {
    id: 15,
    name: "Clinience NMN",
    image: "./images/b2.jpg",
    description: "Clinience is a supplementbrand that utilizes advancedliposome technology,developed in collaborationwith Japanese medical andresearch institutions, toensure high precision andsuperior quality.",
    info: "For Vitamin C, take 1 to 3 tablets per day.For 5-ALA, take 4 to 8 sticks per day withwith water or lukewarm water.",
    price: 11499,
  },
  {
    id: 16,
    name: "Dermashot",
    image: "./images/b2.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 7600,
  },
  {
    id: 17,
    name: "Pure Exom",
    image: "./images/b2.jpg",
    description: "loremsimply dummy text of the printing and typesetting industry.",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 7125,
  },


];

const AnimatedCard = ({ name, image, description }) => {
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
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProductPage = () => {
  return (
    <div className="flex flex-wrap justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:px-32">
        {products.map((product) => (
          <AnimatedCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
