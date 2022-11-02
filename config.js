// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz6mAVxEKvhg753L8zkot9afhGc-BUJUg",
  authDomain: "universidade-1476f.firebaseapp.com",
  projectId: "universidade-1476f",
  storageBucket: "universidade-1476f.appspot.com",
  messagingSenderId: "364982728385",
  appId: "1:364982728385:web:bb4f961e3875592ff1c640",
  measurementId: "G-DTNFS2JCTN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;