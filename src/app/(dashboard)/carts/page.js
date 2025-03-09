"use client";

import React, { useEffect, useState } from "react";
import { db, auth } from "./../../../../script/firebaseConfig";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import emailjs from "@emailjs/browser";

export default function Cart() {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState(null);
    const [shippingOptions, setShippingOptions] = useState([]);
    const [selectedShipping, setSelectedShipping] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!user) return;
            const cartRef = collection(db, "users", user.uid, "userCart");
            try {
                const snapshot = await getDocs(cartRef);
                setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };
        if (user) fetchCartItems();
    }, [user]);

    useEffect(() => {
        const fetchShippingInfo = async () => {
            if (!user) return;
            const shippingRef = collection(db, "users", user.uid, "shippingInformation");
            try {
                const snapshot = await getDocs(shippingRef);
                setShippingOptions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching shipping information:", error);
            }
        };
        if (user) fetchShippingInfo();
    }, [user]);

    const handleRemove = async (orderId) => {
        if (!user) return;
        try {
            await deleteDoc(doc(db, "users", user.uid, "userCart", orderId));
            setOrders((prev) => prev.filter((order) => order.id !== orderId));
            alert("Item successfully removed!");
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    const handleSubmitOrder = async () => {
        if (!orders.length) return alert("Your cart is empty.");
        if (!selectedShipping) return alert("Please select a shipping address.");

        setLoading(true);
        const grandTotal = orders.reduce((total, order) => total + order.productPrice * order.quantity, 0).toFixed(2);
        const orderDetails = orders.map((order, index) => `${index + 1}. ${order.productName} - PHP ${order.productPrice} x ${order.quantity} = PHP ${(order.productPrice * order.quantity).toFixed(2)}`).join("\n");
        const emailParams = {
            user_email: user?.email || "No email provided",
            order_details: orderDetails,
            grand_total: `PHP ${grandTotal}`,
            shipping_details: `Name: ${selectedShipping.firstName} ${selectedShipping.lastName}\nEmail: ${selectedShipping.email}\nPhone: ${selectedShipping.contactNumber}\nAddress: ${selectedShipping.shippingAddress}`,
        };

        try {
            await emailjs.send("service_hhneua7", "template_afluwi8", emailParams, "8nV8GppQ82RWajpEo");
            setShowSuccessModal(true);

            const cartRef = collection(db, "users", user.uid, "userCart");
            const snapshot = await getDocs(cartRef);
            snapshot.docs.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });
            setOrders([]);
        } catch (error) {
            console.error("Error sending email or clearing cart:", error);
            alert("Failed to submit order.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-white flex flex-col md:flex-row gap-6 px-4">
            {loading && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg">Processing order...</div>}
            {showSuccessModal && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">Order Submitted Successfully!</h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg" onClick={() => setShowSuccessModal(false)}>Close</button>
                </div>
            </div>}
            <div className="w-full md:w-3/5 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
                {orders.length === 0 ? <p className="text-lg text-gray-600">No items in your cart.</p> : orders.map((order) => (
                    <div key={order.id} className="flex flex-col md:flex-row items-center justify-between p-4 border-b">
                        <img src={order.productImg} alt="Product" className="w-32 h-32 object-cover rounded-lg" />
                        <div className="flex flex-col md:w-2/3 text-center md:text-left mt-4 md:mt-0">
                            <p className="text-xl font-bold">{order.productName}</p>
                            <p className="text-gray-600">Price: <span className="font-semibold">PHP {order.productPrice}</span></p>
                            <p className="text-gray-600">Quantity: <span className="font-semibold">{order.quantity}</span></p>
                            <p className="text-gray-800 font-semibold">Total: PHP {(order.productPrice * order.quantity).toFixed(2)}</p>
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg mt-4 md:mt-0 transition" onClick={() => handleRemove(order.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="w-full md:w-2/5 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
                <select className="w-full p-3 border rounded-md mb-4 mt-2" onChange={(e) => setSelectedShipping(shippingOptions.find((info) => info.id === e.target.value))}>
                    <option value="">-- Choose an Address --</option>
                    {shippingOptions.map((info) => (
                        <option key={info.id} value={info.id}>{info.shippingName}</option>
                    ))}
                </select>
                {selectedShipping && <div className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="text-lg font-semibold">{selectedShipping.firstName} {selectedShipping.lastName}</h3>
                    <p>Shipping Address: {selectedShipping.shippingAddress}</p>
                    <p>Email Address: {selectedShipping.email}</p>
                    <p>Phone: {selectedShipping.contactNumber}</p>
                </div>}
                <button className="w-full bg-jtechSecondaryColor hover:bg-blue-700 text-white py-3 mt-6 rounded-lg text-lg font-semibold transition" onClick={handleSubmitOrder}>Submit Order</button>
            </div>
        </div>
    );
}
