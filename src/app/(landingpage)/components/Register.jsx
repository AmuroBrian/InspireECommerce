"use client";

import { useState } from "react";

export default function RegisterModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    onClose(); // Close modal after submitting
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Header with Centered Title and Close Button */}
        <div className="relative border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-800 text-center">Register</h2>
          <button
            onClick={onClose}
            className="absolute right-2 top-1 text-gray-600 hover:text-gray-900 text-lg"
          >
            ✕
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-black">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact No."
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
