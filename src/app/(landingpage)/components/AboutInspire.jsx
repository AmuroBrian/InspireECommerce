import React from 'react';

export const AboutInspire = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center min-h-screen bg-blue-200 p-6 gap-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/images/PSE.jpg"
          alt="Hands holding drinks"
          className="w-full md:max-w-md h-auto object-cover rounded-lg"
        />
      </div>
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center md:text-left">
          About Inspire Next Global Inc.
        </h2>
        
        <p className="mt-4 text-gray-700 text-center md:text-left text-lg">
          Inspire Next Global Inc. is a visionary management and company with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and specialized services—serving both private and public sectors. 
        </p>
        
        <p className="mt-4 text-gray-700 text-center md:text-left text-lg">
          In true adherence to the Conglomerate Model, it orchestrates a cohesive ecosystem, where the company operates as the central financial hub, capitalizing and harmonizing its subsidiaries and affiliates to drive innovation, efficiency, and collaboration.
        </p>
        
        <p className="mt-4 text-gray-700 text-center md:text-left text-lg">
          This forward-thinking entity is on a mission to make a direct and meaningful impact on the lives of individuals, while also wielding its influence to create positive shifts in geopolitics. Simultaneously, it remains dedicated to delivering substantial returns to its valued shareholders.
        </p>
      </div>
    </div>
  );
}

export default AboutInspire;