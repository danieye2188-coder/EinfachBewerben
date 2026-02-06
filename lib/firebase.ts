// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyChwROiWs14Y_zQyHglXyYTmYx5F4RChfI",
  authDomain: "einfachbewerben-b33a4.firebaseapp.com",
  projectId: "einfachbewerben-b33a4",
  storageBucket: "einfachbewerben-b33a4.firebasestorage.app",
  messagingSenderId: "602480927093",
  appId: "1:602480927093:web:9b89b6038f8119299ff33c",
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);

// Exporte für später
export const auth = getAuth(app);
export const db = getFirestore(app);

