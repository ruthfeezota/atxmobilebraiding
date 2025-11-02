// firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // For Firestore (modular)
// import { getAnalytics } from "firebase/analytics"; // You can uncomment this if you need analytics

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_cprBSvXBL7Ii-2wiLR_Z8EPzEIad3Io",
  authDomain: "austin-mobile-hair-braiding.firebaseapp.com",
  projectId: "austin-mobile-hair-braiding",
  storageBucket: "austin-mobile-hair-braiding.firebasestorage.app",
  messagingSenderId: "117043542327",
  appId: "1:117043542327:web:2968aa26662505f05fc2b2",
  measurementId: "G-DRMZBGTTJZ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore and export it
// const analytics = getAnalytics(app); // Uncomment if you need analytics

export { app, db, collection, addDoc }; // Export both app and db