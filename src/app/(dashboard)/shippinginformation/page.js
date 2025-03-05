"use client";

import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db, auth } from './../../../../script/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function ShippingInformation() {
    const [shippingList, setShippingList] = useState([]);
    const [shippingName, setShippingName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                fetchShippingData(currentUser);
            } else {
                setShippingList([]);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const fetchShippingData = async (user) => {
        try {
            const querySnapshot = await getDocs(collection(db, `users/${user.uid}/shippingInformation`));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setShippingList(data);
        } catch (err) {
            setError("Failed to load shipping information.");
        } finally {
            setLoading(false);
        }
    };

    const validateForm = () => {
        if (!shippingName || !firstName || !lastName || !shippingAddress || !contactNumber || !email) {
            setError("All fields are required.");
            return false;
        }
        if (!/^[0-9]+$/.test(contactNumber)) {
            setError("Contact number must contain only numbers.");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Invalid email format.");
            return false;
        }
        setError(null);
        return true;
    };

    const addShippingInfo = async () => {
        if (!validateForm() || !user) return;
        try {
            const docRef = await addDoc(collection(db, `users/${user.uid}/shippingInformation`), {
                shippingName, firstName, lastName, shippingAddress, contactNumber, email
            });
            setShippingList([...shippingList, { id: docRef.id, shippingName, firstName, lastName, shippingAddress, contactNumber, email }]);
            closeModal();
        } catch (err) {
            setError("Failed to add shipping information.");
        }
    };

    const updateShippingInfo = async (id) => {
        if (!validateForm() || !user) return;
        try {
            const shippingDoc = doc(db, `users/${user.uid}/shippingInformation`, id);
            await updateDoc(shippingDoc, { shippingName, firstName, lastName, shippingAddress, contactNumber, email });
            setShippingList(shippingList.map(item => item.id === id ? { ...item, shippingName, firstName, lastName, shippingAddress, contactNumber, email } : item));
            setEditingId(null);
            closeModal();
        } catch (err) {
            setError("Failed to update shipping information.");
        }
    };

    const deleteShippingInfo = async (id) => {
        if (!user) return;
        try {
            await deleteDoc(doc(db, `users/${user.uid}/shippingInformation`, id));
            setShippingList(shippingList.filter(item => item.id !== id));
        } catch (err) {
            setError("Failed to delete shipping information.");
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        clearForm();
    };

    const clearForm = () => {
        setShippingName('');
        setFirstName('');
        setLastName('');
        setShippingAddress('');
        setContactNumber('');
        setEmail('');
        setEditingId(null);
        setError(null);
    };

    return (
        <div className="w-full h-full mt-[150px] mx-10 flex flex-col items-center justify-start">
            <h2 className="text-2xl font-bold mb-4 text-center">Shipping Information</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4">+</button>
            {loading ? <p>Loading...</p> : (
                <ul className="mt-4 w-full">
                    {shippingList.map(info => (
                        <li key={info.id} className="border p-4 mb-2 w-full">
                            <strong>{info.shippingName}</strong>
                            <p><strong>First Name:</strong> {info.firstName}</p>
                            <p><strong>Last Name:</strong> {info.lastName}</p>
                            <p><strong>Shipping Address:</strong> {info.shippingAddress}</p>
                            <p><strong>Contact Number:</strong> {info.contactNumber}</p>
                            <p><strong>Email:</strong> {info.email}</p>
                            <div className="flex gap-2 mt-2">
                                <button onClick={() => { setEditingId(info.id); setShippingName(info.shippingName); setFirstName(info.firstName); setLastName(info.lastName); setShippingAddress(info.shippingAddress); setContactNumber(info.contactNumber); setEmail(info.email); openModal(); }} className="bg-yellow-500 text-white p-2 rounded">Edit</button>
                                <button onClick={() => deleteShippingInfo(info.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
                        <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit' : 'Add'} Shipping Information</h2>
                        <input type="text" value={shippingName} onChange={(e) => setShippingName(e.target.value)} placeholder="Shipping Name" className="border p-2 w-full mb-2" />
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="border p-2 w-full mb-2" />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="border p-2 w-full mb-2" />
                        <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} placeholder="Shipping Address" className="border p-2 w-full mb-2" />
                        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" className="border p-2 w-full mb-2" />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
                        <button onClick={editingId ? () => updateShippingInfo(editingId) : addShippingInfo} className="bg-blue-500 text-white p-2 rounded w-full">{editingId ? 'Update' : 'Add'}</button>
                        <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded w-full mt-2">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
