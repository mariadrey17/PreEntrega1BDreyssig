// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5hnX1fLdveVNEjqrnkCOo_CIGNIZBqRo",
  authDomain: "proyectofinal-5e6de.firebaseapp.com",
  projectId: "proyectofinal-5e6de",
  storageBucket: "proyectofinal-5e6de.appspot.com",
  messagingSenderId: "375425842853",
  appId: "1:375425842853:web:59918b4a864015bba6174c",
  measurementId: "G-LE2Q9LCVKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
