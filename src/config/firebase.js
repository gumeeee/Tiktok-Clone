// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJLIFZzcr4KxWedpVsUIXLcGX54XSo_dc",
  authDomain: "tiktok---jornada-69c1e.firebaseapp.com",
  projectId: "tiktok---jornada-69c1e",
  storageBucket: "tiktok---jornada-69c1e.appspot.com",
  messagingSenderId: "18126558177",
  appId: "1:18126558177:web:b9fdde0cb5a2def9bef8a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
