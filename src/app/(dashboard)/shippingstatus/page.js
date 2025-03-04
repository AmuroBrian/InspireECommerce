"use client";

import React, { useEffect, useState } from "react";
import { db, auth } from "./../../../../script/firebaseConfig"; // Use correct path
import { doc, collection, getDocs } from "firebase/firestore";

export default function ShippingStatus() {
    const [orders, setOrders] = useState([]); // Store orders fetched from Firestore
    const user = auth.currentUser; // Get the logged-in user

    useEffect(() => {
        const fetchShippingStatus = async () => {
            if (!user) return;

            const userId = user.uid;
            const shippingRef = collection(db, "users", userId, "shippingstatus");

            try {
                const snapshot = await getDocs(shippingRef);
                const fetchedOrders = snapshot.docs
                    .map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    .filter(order => order.id !== "init"); // Exclude orders with status "init"

                setOrders(fetchedOrders); // Store filtered orders in state
            } catch (error) {
                console.error("Error fetching shipping status:", error);
            }
        };

        fetchShippingStatus();
    }, [user]); // Fetch data when user logs in or component mounts

    return (
        <div className="w-full h-full flex flex-col items-center p-10 mt-[100px] bg-backgroundColor">
            <h2 className="text-2xl font-bold mb-4">Shipping Status</h2>
            {orders.length === 0 ? (
                <p>No valid orders to display.</p>
            ) : (
                <div className="w-full max-w-4xl space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
                            <h3 className="font-semibold text-lg">{order.productName}</h3>
                            <p className="text-gray-600">Price: {order.productPrice}</p>
                            <p className="text-gray-600">Ordered by: {order.firstName} {order.lastName}</p>
                            <p className="text-gray-600">Address: {order.address}</p>
                            <p className="text-gray-600">Status: {order.status || "Pending"}</p>
                            <p className="text-gray-600">Message: {order.message}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
