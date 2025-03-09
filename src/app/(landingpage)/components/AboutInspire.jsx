import React from 'react';

export const AboutInspire = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row-reverse items-center min-h-screen bg-blue-200 p-6 gap-6">
      {/* Image Section */}
      <div className="w-full flex justify-center items-center">
        <img
          src="/images/PSE.jpg"
          alt="Company Building"
          className="w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto object-cover rounded-lg"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full p-4 md:p-10 flex flex-col justify-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 text-left">
          About Inspire Next Global Inc.
        </h2>
        
        <p className="mt-4 text-gray-700 text-base md:text-lg lg:text-xl text-left">
          Inspire Next Global Inc. is a visionary management and company with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and specialized services—serving both private and public sectors. 
        </p>
        
        <p className="mt-4 text-gray-700 text-base md:text-lg lg:text-xl text-left">
          In true adherence to the Conglomerate Model, it orchestrates a cohesive ecosystem, where the company operates as the central financial hub, capitalizing and harmonizing its subsidiaries and affiliates to drive innovation, efficiency, and collaboration.
        </p>
        
        <p className="mt-4 text-gray-700 text-base md:text-lg lg:text-xl text-left">
          This forward-thinking entity is on a mission to make a direct and meaningful impact on the lives of individuals, while also wielding its influence to create positive shifts in geopolitics. Simultaneously, it remains dedicated to delivering substantial returns to its valued shareholders.
        </p>
      </div>
    </div>
  );
}

export default AboutInspire;