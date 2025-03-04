"use client";

import React, { useState } from 'react';

export default function ResellerDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center text-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('images/reseller.jpg')" }}
            ></div>

            {/* Overlay Content (Hidden when modal is open) */}
            {!isModalOpen && (
                <div className="relative z-10 text-white">
                    <h1 className="text-3xl font-bold text-black">DO YOU WANT TO BECOME A RESELLER</h1>
                    <button
                        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        CLICK HERE
                    </button>
                </div>
            )}

            {/* Modal Container */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-center mb-4">Agent Information Sheet</h2>

                        <form className="space-y-3">
                            <input type="text" placeholder="First Name" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Address" className="w-full p-2 border rounded" />
                            <input type="text" placeholder="Contact Number" className="w-full p-2 border rounded" />
                            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" />
                        </form>

                        <div className="flex justify-between mt-4">
                            <button
                                className="w-1/3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-200"
                                onClick={() => { console.log("SUBMIT") }}
                            >
                                SUBMIT
                            </button>
                            <button
                                className="w-1/3 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                onClick={() => setIsModalOpen(false)}
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
