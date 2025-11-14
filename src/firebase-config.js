// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJZkasBPc3FpvheStudJssugZlum6CgbI",
  authDomain: "bellofashesapp2.firebaseapp.com",
  projectId: "bellofashesapp2",
  storageBucket: "bellofashesapp2.firebasestorage.app",
  messagingSenderId: "363393966145",
  appId: "1:363393966145:web:caca785ae962073bee66c0",
  measurementId: "G-WZ1NSCKJP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Messaging instance
export const messaging = getMessaging(app);