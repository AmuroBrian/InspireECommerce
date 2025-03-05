import React from 'react'

export const AboutInspire = () => {
  return (
    
    <div className="flex items-center justify-center w-full h-screen bg-blue-200">
    <div className="max-w-6xl flex items-center w-full px-10">
      {/* Left Side - Text */}
      <div className="w-1/2 pr-10">
        <h2 className="text-4xl font-bold text-gray-900">About Inspire Next Global Inc.</h2>
        <p className="mt-4 text-gray-700 text-lg">
        Inspire Next Global Inc. is a visionary management and company with diverse interests spanning construction and development, healthcare and pharmaceuticals, gaming and entertainment, agriculture trading, and specialized services - serving both private and public sector In true adherence to the Conglomerate Model, it orshestrates a cohesive ecosystem, where the company operates as the central financial hub, capitalizing and harmonizing its subsidiaries and affiliates to drive innovation, efficiency and collaboration.
        This forward-thinking entity is on a mission to make a direct and meaningful impact on the lives of individuals, while also wielding its influence to create positive shifts in geopolitics.
        Simultaenously, it remains dedicated to delivering substantial returns to its valued shareholders.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src="/images/PSE.jpg"
          alt="Hands holding drinks"
          className="max-w-md"
        />
      </div>
    </div>
  </div>
  )
}
