// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6Ffnz2kVILhnnpHvdnMaoewTjUdHVVME",
  authDomain: "clone-97635.firebaseapp.com",
  projectId: "clone-97635",
  storageBucket: "clone-97635.appspot.com",
  messagingSenderId: "510201932401",
  appId: "1:510201932401:web:348c6067d25c60eb5e09d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const signout=signOut(auth)
const provider = new GoogleAuthProvider();
export { auth, provider };
