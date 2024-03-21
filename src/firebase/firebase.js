import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";

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
const db = getFirestore(app);

export const getEmployeeById = async () => {
  const docRef = doc(db, "employees", "KL001");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

export const getAllEmployees = async () => {
  const querySnapshot = await getDocs(collection(db, "employees"));
  return querySnapshot;
};
