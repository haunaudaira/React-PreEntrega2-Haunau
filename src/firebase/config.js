// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9o6rNOuNjYkQZPohTX_7vHhV7H5vQxcQ",
    authDomain: "vetcare-store.firebaseapp.com",
    projectId: "vetcare-store",
    storageBucket: "vetcare-store.appspot.com",
    messagingSenderId: "754707673716",
    appId: "1:754707673716:web:0d5d55d3df8ee1e5795721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);