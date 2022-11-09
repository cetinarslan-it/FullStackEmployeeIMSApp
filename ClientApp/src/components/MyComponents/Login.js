import React from "react";
import "./Login.css";
import { signInWithGoogle } from "../../Firebase";

export const Login = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Employee Information Management System</h1>
      <hr></hr>
      <br />
      <button className="btn btn-google" 
              onClick={signInWithGoogle}>
        Click to sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("photo")} alt=""></img>
    </div>
  );
};
