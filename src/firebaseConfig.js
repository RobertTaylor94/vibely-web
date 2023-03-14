// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuJ9PambQKOI9ww8BWEjKF1dWSX_8eBuY",
  authDomain: "vibely-3b2bb.firebaseapp.com",
  projectId: "vibely-3b2bb",
  storageBucket: "vibely-3b2bb.appspot.com",
  messagingSenderId: "1184019330",
  appId: "1:1184019330:web:542ca6f1f7e874ea6e159b",
  measurementId: "G-ZRYD5714QP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);