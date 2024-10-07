// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzYHkHEeWqVCB1W0HnhPP1Qce4tayimN8",
  authDomain: "fir-8f783.firebaseapp.com",
  projectId: "fir-8f783",
  storageBucket: "fir-8f783.appspot.com",
  messagingSenderId: "314111059732",
  appId: "1:314111059732:web:623362d48b0a2b4dfa4401",
  measurementId: "G-SRKDTDR5ER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
