import React from 'react';

const AboutEcommerce = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen bg-blue-100 p-6 gap-6">
      
      <div className="flex justify-center items-center">
        <img 
          src="/images/ecomm.jpg" 
          alt="E-commerce Products" 
          className="w-full md:w-[700px] h-auto md:h-[500px] object-cover rounded-lg"
        />
      </div>
      
      <div className="p-4 md:p-10 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center md:text-left">About Inshop</h2> 
        
        <p className="mt-4 text-gray-700 text-center md:text-left text-lg">
          Welcome to Inshop by Inspire Next Global Inc., your premier e-commerce destination for high-quality beauty, skincare, and technology products. 
          We are dedicated to providing a seamless shopping experience, offering a curated selection of products that enhance both personal well-being 
          and professional efficiency.
        </p>
        
        <p className="mt-4 text-gray-700 text-center md:text-left text-lg">
          At Inshop, we believe in the perfect blend of innovation and self-care, ensuring that our customers have access to top-tier beauty essentials and cutting-edge technology solutions. 
          Whether you're looking to elevate your skincare routine or optimize your workflow, we bring you the best products to support your lifestyle and business needs.
        </p>
        
        <p className="mt-4 text-gray-700 text-center md:text-left text-lg">
          Shop with confidence at Inshop, where quality, convenience, and innovation come together.
        </p>
      </div>
    </div>
  );
}

export default AboutEcommerce;

