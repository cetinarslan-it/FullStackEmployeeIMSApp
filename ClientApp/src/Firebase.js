import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA-mItVINKRQ_-_OzNL6t5fsaGZRtZfH98",
  authDomain: "employeeimsproj.firebaseapp.com",
  projectId: "employeeimsproj",
  storageBucket: "employeeimsproj.appspot.com",
  messagingSenderId: "447866002780",
  appId: "1:447866002780:web:3deda30c4c6ee179bdb599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
 
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);