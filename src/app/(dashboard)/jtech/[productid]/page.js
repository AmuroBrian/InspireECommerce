"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { auth, db } from "./../../../../../script/firebaseConfig";
import { doc, collection, addDoc } from "firebase/firestore";
import products from "../../../data/products";



const ImageGallery = ({ product, selectedImage, onSelectImage }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const visibleImages = 4;

    const handlePrev = () => {
        if (startIndex > 0) setStartIndex(startIndex - 1);
    };

    const handleNext = () => {
        if (startIndex + visibleImages < product.imageGallery.length) setStartIndex(startIndex + 1);
    };

    const openModal = (img) => {
        setModalImage(img);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <>
            {/* Image Grid */}
            {product.imageGallery.length > 1 && (
                <div className="relative w-full flex justify-center mt-4">
                    {product.imageGallery.length > 5 && (
                        <button 
                            onClick={handlePrev} 
                            className={`absolute left-0 px-2 py-1 bg-gray-300 rounded ${startIndex === 0 ? "opacity-30 cursor-not-allowed" : ""}`} 
                            disabled={startIndex === 0}
                        >
                            ◀
                        </button>
                    )}
                    <div className="grid grid-cols-4 gap-2">
                        {product.imageGallery.slice(startIndex, startIndex + visibleImages).map((img, index) => {
                            const isSelected = selectedImage === img;

                            return (
                                <button
                                    key={index + startIndex}
                                    onClick={() => {
                                        onSelectImage(img, index + startIndex);
                                        openModal(img);
                                    }}
                                    className={`w-16 h-16 border rounded-lg overflow-hidden transition-all duration-200 ${
                                        isSelected ? "border-blue-500" : "border-gray-300 hover:border-blue-500"
                                    }`}
                                >
                                    <img src={img} alt={`Angle ${index}`} className="w-full h-full object-cover" />
                                </button>
                            );
                        })}
                    </div>
                    {product.imageGallery.length > 5 && (
                        <button 
                            onClick={handleNext} 
                            className={`absolute right-0 px-2 py-1 bg-gray-300 rounded ${startIndex + visibleImages >= product.imageGallery.length ? "opacity-30 cursor-not-allowed" : ""}`} 
                            disabled={startIndex + visibleImages >= product.imageGallery.length}
                        >
                            ▶
                        </button>
                    )}
                </div>
            )}

            {/* Image Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm pt-16" onClick={closeModal}>
                    <div className="relative max-w-2xl w-[50%] p-4">
                        <img 
                            src={modalImage} 
                            alt="Selected" 
                            className="w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                        />
                        <button 
                            className="absolute top-2 right-2 bg-grey p-2 rounded-full shadow-md"
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};



const Page = () => {
    const { productid } = useParams();
    const product = products.find((p) => p.productid === productid);
    
    const [quantity, setQuantity] = useState(1);
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(product?.imgsrc);
    // const [currentIndex, setCurrentIndex] = useState(0);

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
            const newOrder = {
                productName: product.name,
                productPrice: product.price,
                productQuantity: quantity,
                message: "REQUEST RECEIVED",
                status: "PENDING",
            };

            const userRef = doc(db, "users", user.uid);
            await addDoc(collection(userRef, "shippingstatus"), newOrder);

            await addDoc(collection(userRef, "userCart"), {
                productName: product.name,
                productPrice: product.price,
                quantity: quantity,
                productImg: selectedImage,
            });

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
                    <div className="flex flex-col items-center">
                        <div className="w-72 h-72 border border-gray-300 rounded-lg overflow-hidden">
                            <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <ImageGallery product={product} selectedImage={selectedImage} onSelectImage={setSelectedImage} />
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
                        <button onClick={handleSubmit} className={`mt-6 w-full px-6 py-3 rounded-lg font-bold transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`} disabled={loading}>
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
