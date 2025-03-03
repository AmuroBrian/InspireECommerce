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
            <div className="w-full flex flex-col justify-start">
                <div className="w-full text-2xl text-center font-bold">CHECKOUT</div>
                <div className="w-full flex justify-center p-3">
                    <div className="w-1/2 h-[200px] flex flex-col items-center justify-start p-4">
                        <div className="w-1/3 border-2 border-black border-solid rounded-lg bg-secondaryColor flex justify-center items-center"><img src={product.imgsrc} alt={product.name} className="w-full" /></div>
                        <div className="p-2 font-bold text-2xl">{product.name}</div>
                        <div className="flex flex-col items-start">
                            <div><span className="font-bold">PRODUCT DESCRIPTION:</span><br></br>{product.description}</div>
                            <br></br>
                            <div><span className="font-bold">INGREDIENTS:</span><br></br>{product.info}</div>
                            <br></br>
                            <div><span className="font-bold">USAGE:</span><br></br>{product.usage}</div>
                            <div className="w-full h-[200px]"></div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-cols flex-col items-start border-2 border-black border-solid p-4">
                        <div className="text-left w-full text-4xl flex items-start"><span className={(product.price === "To be discussed with a representative of Inspire Next Global Inc.") ? "text-black text-2xl flex items-center" : "text-green-500"}>{(product.price === "To be discussed with a representative of Inspire Next Global Inc.") ? product.price : "PHP " + product.price}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
