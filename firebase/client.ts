// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH2oKtLDT-ib3-0mY9s8BbpbJYPRc9q-c",
  authDomain: "ai-interview-2a3f6.firebaseapp.com",
  projectId: "ai-interview-2a3f6",
  storageBucket: "ai-interview-2a3f6.firebasestorage.app",
  messagingSenderId: "625187974369",
  appId: "1:625187974369:web:20f4d65c1bdae67f6a9ba0",
  measurementId: "G-RJ5FNV5YZK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);