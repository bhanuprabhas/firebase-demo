// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase Config object from the Firebase console
const firebaseConfig = {
    apiKey: "AIzaSyA8aEwe4tfZqQokQuO8Ka_tWFOthBF_SBA",
    authDomain: "fir-demo-c88f2.firebaseapp.com",
    projectId: "fir-demo-c88f2",
    storageBucket: "fir-demo-c88f2.appspot.com",
    messagingSenderId: "484894574686",
    appId: "1:484894574686:web:4457985071ec386b898ccf",
    measurementId: "G-WVH25EXF57"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig); // <-- this initializes Firebase correctly
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; // <-- Ensure you're exporting the auth and db instances
