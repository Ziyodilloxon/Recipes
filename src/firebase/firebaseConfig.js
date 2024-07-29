import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6JlGjjr8keLOxBat8TrSdBNHZH_dFXpY",
  authDomain: "recipes-13022.firebaseapp.com",
  projectId: "recipes-13022",
  storageBucket: "recipes-13022.appspot.com",
  messagingSenderId: "369333579578",
  appId: "1:369333579578:web:8dd7b439e78dd7f4b42a03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
