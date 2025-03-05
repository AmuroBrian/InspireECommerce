"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useParams } from "next/navigation";
import { auth, db } from "./../../../../../script/firebaseConfig";
import { doc, collection, addDoc, getDocs, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import products from "../../../data/products";

const Page = () => {
    const { productid } = useParams();
    const product = products.find((p) => p.productid === productid);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        shippingAddress: "",
        contactNumber: "",
        email: "",
        shippingMethod: "", // Added for selected shipping method
    });

    const fetchShippingDetails = async (userId, shippingId) => {
        if (!userId || !shippingId) return;

        try {
            const shippingDocRef = doc(db, "users", userId, "shippingInformation", shippingId);
            const shippingDocSnap = await getDoc(shippingDocRef);

            if (shippingDocSnap.exists()) {
                const shippingData = shippingDocSnap.data();
                setFormData(prevFormData => ({
                    ...prevFormData,
                    firstName: shippingData.firstName || "",
                    lastName: shippingData.lastName || "",
                    shippingAddress: shippingData.shippingAddress || "",
                    contactNumber: shippingData.contactNumber || "",
                    email: shippingData.email || "",
                    shippingMethod: shippingData.shippingName || ""
                }));
            }
        } catch (error) {
            console.error("Error fetching shipping details:", error);
        }
    };


    const [quantity, setQuantity] = useState(1);
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOptionsData, setShippingOptionsData] = useState([]); // Store both name & ID

    useEffect(() => {
        const fetchShippingOptions = async (user) => {
            if (!user) return;

            try {
                const shippingRef = collection(db, "users", user.uid, "shippingInformation");
                const shippingSnapshot = await getDocs(shippingRef);

                const shippingMethods = shippingSnapshot.docs.map(doc => ({
                    id: doc.id,
                    shippingName: doc.data().shippingName
                }));

                setShippingOptionsData(shippingMethods);
                setShippingOptions(shippingMethods.map(method => method.shippingName));

                // Set first method as default and fetch details
                if (shippingMethods.length > 0) {
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        shippingMethod: shippingMethods[0].shippingName
                    }));
                    fetchShippingDetails(user.uid, shippingMethods[0].id);
                }
            } catch (error) {
                console.error("Error fetching shipping methods:", error);
            }
        };


        const fetchShippingDetails = async (userId, shippingId) => {
            if (!userId || !shippingId) return;

            try {
                const shippingDocRef = doc(db, "users", userId, "shippingInformation", shippingId);
                const shippingDocSnap = await getDoc(shippingDocRef);

                if (shippingDocSnap.exists()) {
                    const shippingData = shippingDocSnap.data();
                    setFormData(prevFormData => ({
                        ...prevFormData,
                        firstName: shippingData.firstName || "",
                        lastName: shippingData.lastName || "",
                        shippingAddress: shippingData.shippingAddress || "",
                        contactNumber: shippingData.contactNumber || "",
                        email: shippingData.email || "",
                        shippingMethod: shippingData.shippingName || ""
                    }));
                }
            } catch (error) {
                console.error("Error fetching shipping details:", error);
            }
        };


        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) fetchShippingOptions(user);
        });

        return () => unsubscribe();
    }, []);




    if (!product) {
        return <div className="text-center text-red-600 font-bold mt-10">Product Not Found</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

        // Fetch shipping details when shipping method changes
        if (name === "shippingMethod") {
            // Find the selected method's document ID
            const selectedMethod = shippingOptionsData.find(option => option.shippingName === value);

            if (selectedMethod) {
                fetchShippingDetails(auth.currentUser.uid, selectedMethod.id);
            }
        }
    };



    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        if (!user) {
            setModalMessage("You must be logged in to place an order.");
            setIsModalOpen(true);
            return;
        }

        const selectedMethod = shippingOptionsData.find(option => option.shippingName === formData.shippingMethod);

        if (!selectedMethod) {
            setModalMessage("Please select a valid shipping method.");
            setIsModalOpen(true);
            return;
        }

        try {
            // Fetch the latest shipping details before submitting
            const shippingDocRef = doc(db, "users", user.uid, "shippingInformation", selectedMethod.id);
            const shippingDocSnap = await getDoc(shippingDocRef);

            if (!shippingDocSnap.exists()) {
                setModalMessage("Selected shipping method not found.");
                setIsModalOpen(true);
                return;
            }

            const shippingData = shippingDocSnap.data();

            const totalPrice = product.price.includes("To be discussed")
                ? product.price
                : `PHP ${parseFloat(product.price) * quantity}`;

            console.log(shippingData);

            const newOrder = {
                firstName: shippingData.firstName,
                lastName: shippingData.lastName,
                shippingAddress: shippingData.shippingAddress,
                contactNumber: shippingData.contactNumber,
                email: shippingData.email,
                shippingMethod: shippingData.shippingName,
                productName: product.name,
                productPrice: totalPrice,
                productDescription: product.description,
                status: "Pending",
                timestamp: new Date(),
            };

            // Save the order to Firestore
            const userRef = doc(db, "users", user.uid);
            const shippingStatusRef = collection(userRef, "shippingstatus");
            await addDoc(shippingStatusRef, newOrder);

            // Show success message
            setModalMessage("Your order has been successfully submitted!");
            setIsModalOpen(true);

            // Send email confirmation
            await emailjs.send(
                "service_hhneua7",
                "template_3wrgnxq",
                newOrder,
                "8nV8GppQ82RWajpEo"
            );

        } catch (error) {
            console.error("Error adding order to Firestore:", error);
            setModalMessage("Failed to submit order. Please try again.");
            setIsModalOpen(true);
        }
    };


    return (
        <div className="w-full h-full flex flex-col items-center bg-white">
            <div className="w-full h-full max-w-7xl pt-[100px]">
                <h2 className="text-2xl font-bold text-center mb-6">CHECKOUT</h2>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
                        <div className="w-full flex justify-center items-center">
                            <div className="w-1/2 h-[200px] border-2 border-gray-300 rounded-lg overflow-hidden flex justify-center items-center">
                                <img src={product.imgsrc} alt={product.name} className="w-full h-full object-center" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                        <p className={`mt-2 text-lg ${product.price.includes("To be discussed") ? "text-gray-600" : "text-secondaryColor"}`}>
                            {product.price.includes("To be discussed") ? product.price : `PHP ${product.price}`}
                        </p>
                        <p><strong>PRODUCT DESCRIPTION:</strong> {product.description}</p>
                        <p><strong>INFORMATION:</strong> {product.info}</p>
                        <p><strong>USAGE:</strong> {product.usage}</p>

                        <div className="mt-4 flex items-center">
                            <button className="px-3 py-1 border rounded" onClick={() => handleQuantityChange(-1)}>-</button>
                            <span className="px-4">{quantity}</span>
                            <button className="px-3 py-1 border rounded" onClick={() => handleQuantityChange(1)}>+</button>
                        </div>

                        <div className="mt-4">
                            <label className="block font-semibold">Shipping Method:</label>
                            <select name="shippingMethod" value={formData.shippingMethod} onChange={handleChange} className="w-full p-2 border rounded">
                                {shippingOptions.length > 0 ? (
                                    shippingOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))
                                ) : (
                                    <option value="">No available shipping methods</option>
                                )}
                            </select>
                        </div>

                        <button onClick={handleSubmit} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
