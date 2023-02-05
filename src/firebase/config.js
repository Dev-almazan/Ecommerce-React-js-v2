

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBOvMSxhhJKOwLwfQB7pAZfSP5oEyh2GhI",
  authDomain: "ecommerce-react-82c8e.firebaseapp.com",
  projectId: "ecommerce-react-82c8e",
  storageBucket: "ecommerce-react-82c8e.appspot.com",
  messagingSenderId: "55249068804",
  appId: "1:55249068804:web:849048e353b32d8fe5e651",
  measurementId: "G-12NLYFSN4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
