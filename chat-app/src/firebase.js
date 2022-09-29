// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB4gtRT5t0IE2zD7mwCY1LdRx0kz6_t4Wg",
  authDomain: "reactchatfirebase-d8ec5.firebaseapp.com",
  projectId: "reactchatfirebase-d8ec5",
  storageBucket: "reactchatfirebase-d8ec5.appspot.com",
  messagingSenderId: "150028265982",
  appId: "1:150028265982:web:965c4553d3bede751cf8af",
  measurementId: "G-HBE2FP5D6T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);