"use client";

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from './../../../../script/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                fetchTransactions(currentUser.uid);
            } else {
                setUser(null);
                setTransactions([]);
            }
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    const fetchTransactions = async (userId) => {
        try {
            const transactionsRef = collection(db, `users/${userId}/transactionhistory`);
            const snapshot = await getDocs(transactionsRef);

            const transactionList = snapshot.docs.map(doc => {
                const data = doc.data();

                // Convert Firestore timestamp to readable date
                const formattedDate = data.date?.toDate ? data.date.toDate().toLocaleString() : 'N/A';

                return {
                    id: data.id,
                    Date: formattedDate,
                    Product: data.product || 'N/A',
                    Type: data.type || 'N/A',
                    Quantity: data.quantity || 0,
                    TotalAmount: data.amount || 0
                };
            });

            setTransactions(transactionList);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    return (
        <div className='w-full h-full flex flex-col items-center p-4 bg-backgroundColor'>
            <div className='w-full h-[80px]'></div>
            <h2 className='text-xl font-bold mb-4'>Transaction History</h2>
            <div className='w-full max-w-4xl bg-white shadow-md rounded-lg p-4'>
                <table className='w-full border-collapse border border-gray-200'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border p-2'>Transaction ID</th>
                            <th className='border p-2'>Date</th>
                            <th className='border p-2'>Product</th>
                            <th className='border p-2'>Type</th>
                            <th className='border p-2'>Quantity</th>
                            <th className='border p-2'>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => (
                                <tr key={transaction.id} className='text-center'>
                                    <td className='border p-2'>{transaction.id}</td>
                                    <td className='border p-2'>{transaction.Date}</td>
                                    <td className='border p-2'>{transaction.Product}</td>
                                    <td className='border p-2'>{transaction.Type}</td>
                                    <td className='border p-2'>{transaction.Quantity}</td>
                                    <td className='border p-2'>₱{transaction.TotalAmount}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan='6' className='p-4 text-center'>No transactions found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
