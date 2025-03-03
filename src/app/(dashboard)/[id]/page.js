"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import products from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  const [id, setId] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (params?.id) {
      setId(params.id);
    }
  }, [params]);

  if (!id) {
    return <p className="text-center text-red-500">Loading...</p>;
  }

  const product = products.find((item) => item.productid.toString() === id);

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-6">
      <div className=" w-full bg-white shadow-lg rounded-lg p-6 flex gap-6">
        {/* Image on top left */}
        <div className="flex-shrink-0">
          <Image
            src={product.imgsrc}
            alt={product.name}
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Product details */}
        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-900 mt-2">₱{product.price}</p>
          <p className="text-gray-600 text-lg mt-2">{product.description}</p>
          <p className="text-gray-600 text-lg mt-2">{product.info}</p>
          <p className="text-xl font-semibold text-gray-900 mt-4">Usage</p>
          <p className="text-gray-600 text-lg mt-2">{product.usage}</p>

          {/* Back Button */}
          <Link href="/main">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
