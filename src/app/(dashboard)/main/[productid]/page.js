"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { auth, db } from "./../../../../../script/firebaseConfig";
import { doc, collection, addDoc } from "firebase/firestore";
import products from "../../../data/products";

const Page = () => {
    const { productid } = useParams();
    const product = products.find((p) => p.productid === productid);

    const [quantity, setQuantity] = useState(1);
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    if (!product) {
        return <div className="flex justify-center items-center h-screen text-red-600 font-bold text-2xl">Product Not Found</div>;
    }

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const user = auth.currentUser;
        if (!user) {
            setModalMessage("You must be logged in to place an order.");
            setIsModalOpen(true);
            setLoading(false);
            return;
        }

        try {
            const totalPrice = product.price.includes("To be discussed")
                ? product.price
                : `PHP ${parseFloat(product.price) * quantity}`;

            const newOrder = {
                productName: product.name,
                productPrice: product.price,
                productQuantity: quantity,
                message: "REQUEST RECEIVED",
                status: "PENDING",
            };

            const userRef = doc(db, "users", user.uid);
            const shippingStatusRef = collection(userRef, "shippingstatus");
            await addDoc(shippingStatusRef, newOrder);

            const cartOrder = {
                productName: product.name,
                productPrice: product.price,
                quantity: quantity,
                productImg: product.imgsrc,
            };

            const cartRef = collection(userRef, "userCart");
            await addDoc(cartRef, cartOrder);

            setModalMessage("Your order has been successfully submitted!");
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error adding order to Firestore:", error);
            setModalMessage("Failed to submit order. Please try again.");
            setIsModalOpen(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start bg-white px-6">
            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Checkout</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex justify-center">
                        <img src={product.imgsrc} alt={product.name} className="w-72 h-72 object-cover rounded-lg border border-gray-300" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                        <p className={`mt-2 text-xl ${product.price.includes("To be discussed") ? "text-gray-600" : "text-green-600 font-bold"}`}>
                            {product.price.includes("To be discussed") ? product.price : `PHP ${product.price}`}
                        </p>
                        <p className="mt-4 text-gray-700"><strong>Description:</strong> {product.description}</p>
                        <p className="mt-2 text-gray-700"><strong>Information:</strong> {product.info}</p>
                        <p className="mt-2 text-gray-700"><strong>Usage:</strong> {product.usage}</p>
                        <div className="mt-4 flex items-center space-x-4">
                            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => handleQuantityChange(-1)}>-</button>
                            <span className="text-lg font-bold">{quantity}</span>
                            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className={`mt-6 w-full px-6 py-3 rounded-lg font-bold transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
                        <h3 className="text-lg font-bold mb-4">Notification</h3>
                        <p>{modalMessage}</p>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-blue-700" onClick={() => setIsModalOpen(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
