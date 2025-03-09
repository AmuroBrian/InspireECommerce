"use client";

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from './../../../../script/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useMediaQuery } from 'react-responsive';

export default function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);
    const [user, setUser] = useState(null);

    // Check if the screen is small (less than 768px)
    const isMobile = useMediaQuery({ maxWidth: 768 });

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

        return () => unsubscribe();
    }, []);

    const fetchTransactions = async (userId) => {
        try {
            const transactionsRef = collection(db, `users/${userId}/transactionhistory`);
            const snapshot = await getDocs(transactionsRef);

            const transactionList = snapshot.docs.map(doc => {
                const data = doc.data();
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
        <div className='w-full h-full flex flex-col items-center justify-start px-4 bg-white'>
            <h2 className='text-xl font-bold mb-4'>Transaction History</h2>

            {isMobile ? (
                // ✅ Mobile View: Use Cards
                <div className='w-full max-w-md flex flex-col gap-4'>
                    {transactions.length > 0 ? (
                        transactions.map(transaction => (
                            <div key={transaction.id} className='bg-gray-100 shadow-md rounded-lg p-4'>
                                <p className='text-sm'><strong>ID:</strong> {transaction.id}</p>
                                <p className='text-sm'><strong>Date:</strong> {transaction.Date}</p>
                                <p className='text-sm'><strong>Product:</strong> {transaction.Product}</p>
                                <p className='text-sm'><strong>Type:</strong> {transaction.Type}</p>
                                <p className='text-sm'><strong>Quantity:</strong> {transaction.Quantity}</p>
                                <p className='text-sm'><strong>Total:</strong> ₱{transaction.TotalAmount}</p>
                            </div>
                        ))
                    ) : (
                        <p className='text-center p-4'>No transactions found</p>
                    )}
                </div>
            ) : (
                // ✅ Desktop View: Table
                <div className='w-full max-w-4xl bg-white shadow-md rounded-lg p-4 overflow-x-auto'>
                    <table className='w-full border-collapse border border-gray-200 min-w-[600px]'>
                        <thead>
                            <tr className='bg-gray-100 text-sm md:text-base'>
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
                                    <tr key={transaction.id} className='text-center text-sm md:text-base'>
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
            )}
        </div>
    );
}
