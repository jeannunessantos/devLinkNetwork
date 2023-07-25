



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBChVm7byek2IymNPn4vfK4PFOh1piloyo",
  authDomain: "reactlinks-b3230.firebaseapp.com",
  projectId: "reactlinks-b3230",
  storageBucket: "reactlinks-b3230.appspot.com",
  messagingSenderId: "846374887507",
  appId: "1:846374887507:web:61c8ce858f94fd0dea26a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth, db}