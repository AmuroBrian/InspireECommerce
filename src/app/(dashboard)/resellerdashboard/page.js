"use client";

import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';

export default function ResellerDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [popupMessage, setPopupMessage] = useState(""); // Handles registration messages
    const [showPopup, setShowPopup] = useState(false); // Controls popup visibility

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        contactNumber: '',
        email: ''
    });

    // Disable scrolling when popup is active
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showPopup]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setPopupMessage("Registration in Progress...");
        setShowPopup(true); // Show popup when submitting

        const serviceID = "service_z6qvfqz";
        const templateID = "template_9ebkyrs";
        const publicKey = "xlclVHCWc_GaLtZ37";

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(() => {
                setTimeout(() => {
                    setPopupMessage("Successfully Registered!");

                    setTimeout(() => {
                        setShowPopup(false); // Hide popup
                        setPopupMessage(""); // Clear message
                        setIsModalOpen(false); // Close modal
                        setFormData({ firstName: '', lastName: '', address: '', contactNumber: '', email: '' });
                    }, 3000); // Hide after 3 seconds
                }, 2000); // Delay before showing success message
            })
            .catch(() => {
                setPopupMessage("Failed to submit. Please try again.");
                setTimeout(() => {
                    setShowPopup(false);
                    setPopupMessage("");
                }, 3000); // Hide error message after 3 seconds
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center text-center z-0">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('images/beauty.jpg')" }}
            ></div>

            {/* Overlay Content */}
            {!isModalOpen && (
                <div className="relative z-10 text-white">
                    <h1 className="text-3xl font-bold text-black">DO YOU WANT TO BECOME A RESELLER</h1>
                    <button
                        className="mt-6 px-6 py-3 bg-secondaryColor text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        CLICK HERE
                    </button>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold text-center mb-4">Agent Information Sheet</h2>

                        <form className="space-y-3">
                            <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border rounded" onChange={handleChange} value={formData.firstName} />
                            <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border rounded" onChange={handleChange} value={formData.lastName} />
                            <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded" onChange={handleChange} value={formData.address} />
                            <input type="text" name="contactNumber" placeholder="Contact Number" className="w-full p-2 border rounded" onChange={handleChange} value={formData.contactNumber} />
                            <input type="email" name="email" placeholder="Email Address" className="w-full p-2 border rounded" onChange={handleChange} value={formData.email} />
                        </form>

                        <div className="flex justify-between mt-4">
                            <button
                                className="w-1/3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "SUBMIT"}
                            </button>

                            <button
                                className="w-1/3 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                onClick={() => setIsModalOpen(false)}
                                disabled={loading}
                            >
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Popup Message */}
            {showPopup && <Popup message={popupMessage} />}
        </div>
    );
}

// Popup Component (Centered & Blocks Interaction)
const Popup = ({ message }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
            <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg text-center text-lg font-bold">
                {message}
            </div>
        </div>
    );
};
