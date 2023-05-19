// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDZomspuTnoE6wnYN_HWOGUmxuXfZeWuU",
  authDomain: "nart-f1a98.firebaseapp.com",
  projectId: "nart-f1a98",
  storageBucket: "nart-f1a98.appspot.com",
  messagingSenderId: "897799091192",
  appId: "1:897799091192:web:e0cd7f399e12f18e4ddc0d",
  measurementId: "G-8BSE261111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth, analytics}