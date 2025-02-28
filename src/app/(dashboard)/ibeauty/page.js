import React from 'react';

export default function IBeauty() {
  const products = [
    {
      src: "/images/iBeauty1.png",
      name: "Black Rice Hyaluronic Toner 30ml",
      price: "₱400.00",
      link: "/product/black-rice-hyaluronic-toner"
    },
    {
      src: "/images/iBeauty2.png",
      name: "Black Rice Toner for Sensitive Skin",
      price: "₱400.00",
      link: "/product/black-rice-toner-sensitive"
    },
    {
      src: "/images/iBeauty3.png",
      name: "Hydrating Facial Mist",
      price: "₱350.00",
      link: "/product/hydrating-facial-mist"
    },
    {
      src: "/images/iBeauty4.png",
      name: "Vitamin C Serum",
      price: "₱500.00",
      link: "/product/vitamin-c-serum"
    },
    {
      src: "/images/iBeauty5.png",
      name: "Moisturizing Gel Cream",
      price: "₱450.00",
      link: "/product/moisturizing-gel-cream"
    },
    {
      src: "/images/iBeauty6.png",
      name: "SPF 50+ Sunscreen",
      price: "₱380.00",
      link: "/product/spf-50-sunscreen"
    },
    {
      src: "/images/iBeauty7.png",
      name: "Aloe Vera Soothing Gel",
      price: "₱300.00",
      link: "/product/aloe-vera-soothing-gel"
    },
    {
      src: "/images/iBeauty8.png",
      name: "Collagen Firming Mask",
      price: "₱480.00",
      link: "/product/collagen-firming-mask"
    },
    {
      src: "/images/iBeauty9.png",
      name: "Exfoliating Toner",
      price: "₱420.00",
      link: "/product/exfoliating-toner"
    }
  ];
//#92c8ef
  return (
    <div className='w-full h-full'>
      <div className='w-full flex flex-col items-center pt-[100px] bg-backgroundColor text-gray-800'>
        <h1 className="text-3xl font-bold text-rose-600 mb-6 tracking-wider">iBeauty</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full p-4 rounded-lg shadow-lg shadow-rose-300/50 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <a href={product.link} className="w-full">
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </a>
              <p className="text-md font-semibold text-rose-500 mt-2">
                {product.name}
              </p>
              <p className="text-lg font-bold text-rose-700">{product.price}</p>
            </div>
          ))}
        </div>
        <div className='w-full h-[100px]'></div>
      </div>
    </div>
  );
}
