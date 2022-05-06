// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Iz3xqWewFw46VxxU7BIrxONYOxo2CrM",
  authDomain: "warehouse-management-c58a2.firebaseapp.com",
  projectId: "warehouse-management-c58a2",
  storageBucket: "warehouse-management-c58a2.appspot.com",
  messagingSenderId: "1083898844162",
  appId: "1:1083898844162:web:c75ef3f6a433c7469c031b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
