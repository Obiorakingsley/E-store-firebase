import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjmSJcWZtAw-vOQsQ3fVEgniXtSr0KDCs",
  authDomain: "e-store-792c2.firebaseapp.com",
  projectId: "e-store-792c2",
  storageBucket: "e-store-792c2.firebasestorage.app",
  messagingSenderId: "881814252721",
  appId: "1:881814252721:web:917d2bac9a9908b7fc0690",
  measurementId: "G-GM57281CL3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
