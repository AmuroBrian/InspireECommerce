"use client";

import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";

export default function ResellerDashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [popupMessage, setPopupMessage] = useState(""); // Handles registration messages
    const [showPopup, setShowPopup] = useState(false); // Controls popup visibility

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        contactNumber: "",
        email: "",
        age: "",
        gender: "",
        birthday: "",
        referredBy: ""
    });

    // Disable scrolling when popup is active
    useEffect(() => {
        document.body.style.overflow = showPopup ? "hidden" : "auto";
    }, [showPopup]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setPopupMessage("Registration in Progress...");
        setShowPopup(true);

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_RESELLER;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then(() => {
                setPopupMessage("Successfully Registered!");
                setTimeout(() => {
                    setShowPopup(false);
                    setPopupMessage("");
                    setIsModalOpen(false);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        address: "",
                        contactNumber: "",
                        email: "",
                        age: "",
                        gender: "",
                        birthday: "",
                        referredBy: ""
                    });
                }, 3000);
            })
            .catch(() => {
                setPopupMessage("Failed to submit. Please try again.");
                setTimeout(() => {
                    setShowPopup(false);
                    setPopupMessage("");
                }, 3000);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-0">
            {/* Full-Screen Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
                style={{ backgroundImage: "url('images/beauty.jpg')" }}
            ></div>

            {/* Overlay Content */}
            {!isModalOpen && (
                <div className="relative z-10 text-white">
                    <h1 className="text-3xl font-bold text-black">
                        DO YOU WANT TO BECOME A RESELLER
                    </h1>
                    <button
                        className="mt-6 px-6 py-3 bg-secondaryColor text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        CLICK HERE
                    </button>
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 pt-16">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-[90%] md:w-[400px]">
                        <h2 className="text-xl font-bold text-center mb-4">
                            <div className="bg-pink-300 flex flex-col items-center p-4 rounded-md w-full h-24">
                                <img
                                    src="/images/ibeauty logo.png"
                                    alt="I-Beauty Logo"
                                    className="w-24 md:w-28 h-auto object-contain"
                                />
                                <span className="text-black text-sm font-semibold mt-1">
                                    AGENT INFORMATION SHEET
                                </span>
                            </div>
                        </h2>

                        <form className="space-y-3" onSubmit={handleSubmit}>
                            {/* First Name & Last Name */}
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="w-full md:w-1/2 p-2 border rounded"
                                    onChange={handleChange}
                                    value={formData.firstName}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="w-full md:w-1/2 p-2 border rounded"
                                    onChange={handleChange}
                                    value={formData.lastName}
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="w-full p-2 border rounded"
                                onChange={handleChange}
                                value={formData.address}
                                required
                            />

                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    name="contactNumber"
                                    placeholder="Contact Number"
                                    className="w-full p-2 border rounded"
                                    onChange={handleChange}
                                    value={formData.contactNumber}
                                    required
                                />
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    className="w-full p-2 border rounded"
                                    onChange={handleChange}
                                    value={formData.age}
                                    required
                                />
                            </div>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full p-2 border rounded"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />

                            <div className="flex flex-col md:flex-row gap-3">
                                <select
                                    name="gender"
                                    className="w-full p-2 border rounded"
                                    onChange={handleChange}
                                    value={formData.gender}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <input
                                    type="date"
                                    name="birthday"
                                    className="w-full p-2 border rounded"
                                    onChange={handleChange}
                                    value={formData.birthday}
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="referredBy"
                                placeholder="Referred by"
                                className="w-full p-2 border rounded"
                                onChange={handleChange}
                                value={formData.referredBy}
                            />

                            {/* Buttons */}
                            <div className="flex flex-col md:flex-row justify-between mt-4 gap-2">
                                <button
                                    type="submit"
                                    className="w-full md:w-1/3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "SUBMIT"}
                                </button>

                                <button
                                    type="button"
                                    className="w-full md:w-1/3 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                    onClick={() => setIsModalOpen(false)}
                                    disabled={loading}
                                >
                                    CLOSE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Popup Message */}
            {showPopup && <Popup message={popupMessage} />}
        </div>
    );
}

// Popup Component
const Popup = ({ message }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
            <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg text-center text-lg font-bold">
                {message}
            </div>
        </div>
    );
};
