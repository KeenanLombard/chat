import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
const auth = getAuth(app);

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};

export const getEmployeeById = async (id) => {
  const docRef = doc(db, "employees", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, data: docSnap.data() };
  }
};

export const addEmployee = async (payload) => {
  const querySnapshot = await getDocs(collection(db, "employees"));
  const number = querySnapshot.size + 1;
  let end;
  if (number < 10) {
    end = "00" + number.toString();
  } else if (number < 100) {
    end = "0" + number.toString();
  }
  let id = payload.fname.substring(0, 1) + payload.lname.substring(0, 1) + end;
  id = id.toUpperCase();
  await setDoc(doc(db, "employees", id), {
    fname: payload.fname,
    lname: payload.lname,
    department: payload.department,
    email: payload.email,
    position: payload.position,
    status: false,
    tasks_completed: 0,
    performance_rating: 0,
    hours_worked: 0,
  });
};

export const deleteEmployee = async (id) => {
  await deleteDoc(doc(db, "employees", id));
};

export const getAllEmployees = async () => {
  let array = [];
  const querySnapshot = await getDocs(collection(db, "employees"));
  querySnapshot.forEach((doc) => {
    array.push({ id: doc.id, data: doc.data() });
  });
  return array;
};
