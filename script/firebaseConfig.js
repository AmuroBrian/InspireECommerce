// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD62vnksliMH1RsDnxiyZc3NN8RWh1S1FA",
    authDomain: "ecommerce-ee900.firebaseapp.com",
    projectId: "ecommerce-ee900",
    storageBucket: "ecommerce-ee900.firebasestorage.app",
    messagingSenderId: "983245224301",
    appId: "1:983245224301:web:9b3891dbd482ae230b4264",
    measurementId: "G-GLFKN96SSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);