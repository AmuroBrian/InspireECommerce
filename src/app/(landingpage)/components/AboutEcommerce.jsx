import React from 'react';

const AboutEcommerce = () => {
  return (
    <div className="flex flex-row-reverse justify-center items-center min-h-screen bg-blue-100 p-6">
        
       
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-left text-gray-900">About Inshop</h1> 

          <p className="mt-4 text-gray-700 text-left text-xl">
          Welcome to Inshop by Inspire Next Global Inc., your premier e-commerce destination for high-quality beauty, skincare, and technology products. 
          We are dedicated to providing a seamless shopping experience, offering a curated selection of products that enhance both personal well-being 
          and professional efficiency.
          </p>

          <p className="mt-4 text-gray-700 text-left text-xl">
          At Inshop, we believe in the perfect blend of innovation and self-care, ensuring that our customers have access to top-tier beauty essentials and cutting-edge technology solutions. 
          Whether you're looking to elevate your skincare routine or optimize your workflow, we bring you the best products to support your lifestyle and business needs.
          </p>

          <p className="mt-4 text-gray-700 text-left text-xl">
           Shop with confidence at Inshop, where quality, convenience, and innovation come together.
          </p>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img src="/images/ecomm.jpg" alt="E-commerce Products" className="w-[700px] h-[500px] object-cover rounded-lg"/>
        </div>

    </div>
  );
}

export default AboutEcommerce;
