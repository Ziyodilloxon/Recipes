import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmmvIyojOPFxMqZ1LfAATgkPS2ikI1kOI",
  authDomain: "recipes-fd5b9.firebaseapp.com",
  projectId: "recipes-fd5b9",
  storageBucket: "recipes-fd5b9.appspot.com",
  messagingSenderId: "168378768312",
  appId: "1:168378768312:web:d9e6464a26aaa5e4134d4d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
