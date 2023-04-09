import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDyLnpcZWTJZANhhrnq5KuhnN6Xjbf04EY",
  authDomain: "comi51155-joel-frydman.firebaseapp.com",
  projectId: "comi51155-joel-frydman",
  storageBucket: "comi51155-joel-frydman.appspot.com",
  messagingSenderId: "537695164669",
  appId: "1:537695164669:web:b7ea5134a12d0fa35a0694"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()