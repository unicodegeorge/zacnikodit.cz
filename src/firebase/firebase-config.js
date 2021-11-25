// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7NtVXvfEeqrjjJ-xEcuXk3Y1F2gnoWW0",
  authDomain: "naucsekodit.firebaseapp.com",
  databaseURL: "https://naucsekodit-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "naucsekodit",
  storageBucket: "naucsekodit.appspot.com",
  messagingSenderId: "670002147095",
  appId: "1:670002147095:web:bbea011b20756fb4da1152",
  measurementId: "G-PKXDQK41CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}