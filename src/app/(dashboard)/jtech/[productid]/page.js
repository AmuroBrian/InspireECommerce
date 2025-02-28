"use client";

import React from "react";
import products from "../../../data/products";
import { useParams } from "next/navigation"; // ✅ Use useParams instead of useRouter

const Page = () => {
    const { productid } = useParams(); // ✅ Get dynamic productid from URL
    console.log("Product ID from URL:", productid); // Debugging

    // Find the product that matches the productId
    const product = products.find((p) => p.productid === productid);

    if (!product) {
        return <div className="text-center text-red-600 font-bold mt-10">Product Not Found</div>;
    }

    return (
        <div className="w-full h-full flex flex-col items-center pt-[100px] bg-backgroundColor text-gray-800">
            <div className="w-full text-2xl text-center font-bold">CHECKOUT</div>
            <div className="w-full h-[200px] flex justify-center items-center">
                <div className="w-1/2 h-[200px] border-solid border-black border-2 flex flex-col items-center justify-start p-4">
                    <img src={product.imgsrc} alt={product.name} className="w-full" />
                </div>
                <div className="w-1/2 h-[200px] border-solid border-black border-2 flex flex-cols items-center justify-start">

                </div>
            </div>
        </div>
    );
};

export default Page;
