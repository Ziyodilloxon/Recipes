import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8TeLfovBC1rmx0nOF9kqnSE4cr3JKfn8",
  authDomain: "recipes-afc02.firebaseapp.com",
  projectId: "recipes-afc02",
  storageBucket: "recipes-afc02.appspot.com",
  messagingSenderId: "177554736238",
  appId: "1:177554736238:web:722cc54fe3248e4628527f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
