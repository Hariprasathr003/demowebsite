import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA42X5u3jefq2MLazJh96KedBfpu98HneE",
  authDomain: "simplewebpage-3aa9c.firebaseapp.com",
  projectId: "simplewebpage-3aa9c",
  storageBucket: "simplewebpage-3aa9c.firebasestorage.app",
  messagingSenderId: "1081198431961",
  appId: "1:1081198431961:web:cfb5a7c9c7d57e26aab8c8",
  measurementId: "G-XK6PRWW5E9",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
