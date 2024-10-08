// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAluCHOaYqvbHogJHIz6IyTPJCHGsab7qI",
  authDomain: "disaster-management-6b205.firebaseapp.com",
  databaseURL: "https://disaster-management-6b205-default-rtdb.firebaseio.com/",
  projectId: "disaster-management-6b205",
  storageBucket: "disaster-management-6b205.appspot.com",
  messagingSenderId: "426376897158",
  appId: "1:426376897158:web:1560016e2167b0867d6707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { db, ref, set ,auth, firestore };


export default firebaseConfig