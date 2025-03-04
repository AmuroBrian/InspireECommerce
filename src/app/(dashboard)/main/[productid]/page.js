"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useParams } from "next/navigation";
import { auth, db } from "./../../../../../script/firebaseConfig"; // Import Firebase Auth
import { doc, collection, addDoc } from "firebase/firestore";
import products from "../../../data/products";

const Page = () => {
    const { productid } = useParams();
    const product = products.find((p) => p.productid === productid);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        contactNumber: "",
        email: "",
    });

    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!product) {
        return <div className="text-center text-red-600 font-bold mt-10">Product Not Found</div>;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser; // Get authenticated user
        if (!user) {
            setModalMessage("You must be logged in to place an order.");
            setIsModalOpen(true);
            return;
        }

        const newOrder = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: `${formData.address1}, ${formData.address2 || "N/A"}, ${formData.city}`,
            contactNumber: formData.contactNumber,
            email: formData.email,
            productName: product.name,
            productPrice: product.price.includes("To be discussed") ? product.price : `PHP ${product.price}`,
            productDescription: product.description,
            status: "Pending",
            timestamp: new Date(),
        };

        try {
            // Upload order to Firestore inside users/{userId}/shippingstatus
            const userRef = doc(db, "users", user.uid);
            const shippingStatusRef = collection(userRef, "shippingstatus");
            await addDoc(shippingStatusRef, newOrder);

            console.log("Order added to Firestore");

            setModalMessage("Your order has been successfully submitted!");
            setIsModalOpen(true);

            // Send confirmation email
            emailjs.send(
                "service_hhneua7",
                "template_3wrgnxq",
                {
                    ...newOrder,
                },
                "8nV8GppQ82RWajpEo"
            );

        } catch (error) {
            console.error("Error adding order to Firestore:", error);
            setModalMessage("Failed to submit order. Please try again.");
            setIsModalOpen(true);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center bg-backgroundColor">
            <div className="w-full max-w-7xl pt-[100px]">
                <h2 className="text-2xl font-bold text-center mb-6">CHECKOUT</h2>
                <div className="flex flex-wrap">
                    {/* Product Section */}
                    <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
                        <div className="w-full flex justify-center items-center"><div className="w-1/2 h-[200px] border-2 border-gray-300 rounded-lg overflow-hidden flex justify-center items-center">
                            <img src={product.imgsrc} alt={product.name} className="w-full h-full object-center" />
                        </div></div>

                        <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                        <p className={`mt-2 text-lg ${product.price.includes("To be discussed") ? "text-gray-600" : "text-green-500"}`}>
                            {product.price.includes("To be discussed") ? product.price : `PHP ${product.price}`}
                        </p>
                        <p><strong>PRODUCT DESCRIPTION:</strong> {product.description}</p>
                        <p><strong>INFORMATION:</strong> {product.info}</p>
                        <p><strong>USAGE:</strong> {product.usage}</p>
                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-1/2 p-4">
                        <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex gap-4">
                                <input type="text" name="firstName" placeholder="First Name" className="w-1/2 p-2 border border-gray-300 rounded-lg" onChange={handleChange} required />
                                <input type="text" name="lastName" placeholder="Last Name" className="w-1/2 p-2 border border-gray-300 rounded-lg" onChange={handleChange} required />
                            </div>
                            <input type="text" name="address1" placeholder="Address 1" className="w-full p-2 border border-gray-300 rounded-lg" onChange={handleChange} required />
                            <input type="text" name="city" placeholder="City" className="w-full p-2 border border-gray-300 rounded-lg" onChange={handleChange} required />
                            <input type="text" name="contactNumber" placeholder="Contact Number" className="w-full p-2 border border-gray-300 rounded-lg" onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded-lg" onChange={handleChange} required />
                            <button type="submit" className="w-full bg-secondaryColor text-white font-bold p-2 rounded-lg cursor-pointer hover:bg-transparent hover:border-secondaryColor hover:border-2 hover:border-solid hover:text-black">Submit Order</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="mb-4 text-lg font-semibold">{modalMessage}</p>
                        <button onClick={() => setIsModalOpen(false)} className="w-full bg-secondaryColor text-white font-bold px-4 py-2 rounded-md">OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
