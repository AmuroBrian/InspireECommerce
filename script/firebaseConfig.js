// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD62vnksliMH1RsDnxiyZc3NN8RWh1S1FA",
    authDomain: "ecommerce-ee900.firebaseapp.com",
    projectId: "ecommerce-ee900",
    storageBucket: "ecommerce-ee900.appspot.com", // Fixed storageBucket URL
    messagingSenderId: "983245224301",
    appId: "1:983245224301:web:9b3891dbd482ae230b4264",
    measurementId: "G-GLFKN96SSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export { app, auth };
