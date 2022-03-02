// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, sendEmailVerification, signOut, GoogleAuthProvider, updateProfile } from 'firebase/auth'
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

export const logOff = () => {
  signOut(auth);
}



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore();


export const storage = getStorage();


export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });


export const googleAuth = async (type) => {
  await signInWithPopup(auth, provider);
}


export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function uploadLessonFile(file) {
  const storageRef = ref(storage, "lesson-banners/" + file.name);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("File uploaded");
  })
}


export const getProfileUrl = async () => {

  const storageRef = ref(storage, "users/" + auth.currentUser.uid + "/profile/" + "profile-picture");

}

export const uploadProfileFile = async (file) => {
  const storageRef = ref(storage, "users/" + auth.currentUser.uid + "/profile/" + "profile-picture");

  uploadBytes(storageRef, file).then((snapshot) => {
    getDownloadURL(storageRef).then((link) => {
      updateProfile(auth.currentUser, {
        photoURL: link
      })
    });
  });

};

export const fetchUserData = async (uid) => {

  const docRef = doc(database, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  }
  return null;
}

export async function isProfileSetupDone(uid) {
  const docRef = doc(database, "users/", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(docSnap.data());
    if (
      docSnap.get("setupDone") === null ||
      docSnap.get("setupDone") === false
    ) {
      return false;
    }
    else {
      return true;
    }
  }
}





export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function verifyEmail(currentUser) {
  return sendEmailVerification(currentUser);
}

