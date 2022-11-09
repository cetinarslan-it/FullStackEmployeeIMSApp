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

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).
        then((result) => {            
          const name = result.user.displayName;
          const email = result.user.email;
          const photo = result.user.photoURL;

          localStorage.setItem("name", name)
          console.log(localStorage.getItem("name"));
          localStorage.setItem("email", email)
          console.log(localStorage.getItem("email"));
          localStorage.setItem("photo", photo)
          console.log(localStorage.getItem("photo"));
          
    })
    .catch((error) => {
        console.log(error);
    });
 };