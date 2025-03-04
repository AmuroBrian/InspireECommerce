"use client";

import React, { useState, useEffect } from 'react';
import { auth, db } from './../../../../script/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

export default function Settings() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        address: ''
    });

    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    // Password state
    const [changePassword, setChangePassword] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(userRef);
                if (docSnap.exists()) {
                    setUserData(docSnap.data());
                }
            }
            setLoading(false);
        };
        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        setIsEditing(false);
        try {
            const userRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(userRef, userData);
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile.");
        }
    };

    const handlePasswordChange = async () => {
        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        setIsUpdating(true);
        try {
            const user = auth.currentUser;
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);
            alert("Password updated successfully!");

            setChangePassword(false);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error("Error updating password:", error);
            alert("Failed to update password. Check your current password.");
        }
        setIsUpdating(false);
    };

    if (loading) return <div className="text-center">Loading...</div>;

    return (
        <div className="flex flex-col items-center justify-center w-full ">
            <div className='w-full h-[80px]'></div>
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">

                {/* Profile Information */}
                <div className="mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={userData.firstname}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={userData.lastname}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        disabled
                        className="w-full px-3 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={userData.contact}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>

                {/* Edit & Save Buttons */}
                <div className="flex justify-between mb-4">
                    {isEditing ? (
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-md"
                            onClick={handleUpdate}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="bg-secondaryColor text-white px-4 py-2 rounded-md"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                    )}
                    {isEditing && (
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    )}
                </div>

                {/* Change Password Section */}
                <button
                    className="bg-secondaryColor text-white px-4 py-2 rounded-md w-full"
                    onClick={() => setChangePassword(!changePassword)}
                >
                    {changePassword ? "Cancel Password Change" : "Change Password"}
                </button>

                {changePassword && (
                    <div className="mt-4 p-4 border rounded-lg bg-gray-100">
                        <div className="mb-4">
                            <label className="block text-gray-700">Current Password</label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                        </div>

                        <button
                            onClick={handlePasswordChange}
                            disabled={isUpdating}
                            className={`px-4 py-2 text-white rounded-md w-full ${isUpdating ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
                                }`}
                        >
                            {isUpdating ? "Updating..." : "Update Password"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
