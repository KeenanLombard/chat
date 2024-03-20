// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3FY24O-yxWdm1TdxInD6yt52E7kdU7hA",
  authDomain: "chat-450f4.firebaseapp.com",
  projectId: "chat-450f4",
  storageBucket: "chat-450f4.appspot.com",
  messagingSenderId: "98878752806",
  appId: "1:98878752806:web:32c42372139a3c2f32fee7",
  measurementId: "G-QMCW4C5835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
