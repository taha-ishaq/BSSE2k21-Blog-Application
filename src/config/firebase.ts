// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAm_MAGirnCXjtWPCyzzUk-_OLu1-BBzs",
  authDomain: "first-app-a64ff.firebaseapp.com",
  projectId: "first-app-a64ff",
  storageBucket: "first-app-a64ff.appspot.com",
  messagingSenderId: "729744593122",
  appId: "1:729744593122:web:b5ff06c0280bbf8ea2cebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);