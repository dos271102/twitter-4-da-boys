// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYmCssinA6hlAYEeoCsPb9sb43gEpOHIk",
  authDomain: "twitter-4-da-boys.firebaseapp.com",
  projectId: "twitter-4-da-boys",
  storageBucket: "twitter-4-da-boys.appspot.com",
  messagingSenderId: "690476221479",
  appId: "1:690476221479:web:da0158e680b99dafca3a02"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };