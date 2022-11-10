import React, { useEffect, useState } from "react";
import axios from "axios";
import { Employee } from "./Employee";
import { signInWithGoogle } from "../../Firebase";
import "./Login.css";

export const Login = () => {
  const [userList, setUserList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  useEffect(() => {
    const getUsers = () => {
      axios
        .get("https://localhost:7261/api/User/GetAll")
        .then((response) => {
          setUserList(response.data);
        })
        .catch((error) => {
          setAlertErrorMessage(error.message);
          setShowAlertError(true);
        });
    };
    getUsers();
    
  }, []);

  useEffect(()=> setIsLoggedIn(userList.some((item) => item.email === clientEmail)));

  const handleClick = () => {
    signInWithGoogle()
      .then((result) => {
        const email = result.user.email;
        setClientEmail(email);
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  return (
    <div>
      {isLoggedIn ? (
        <Employee />
      ) : (
        <div className="text-center">
          <h1>Welcome to Employee Information Management System</h1>
          <hr></hr>
          <br />
          <button className="btn btn-google" onClick={handleClick}>
            Click to sign in with Google
          </button>
        </div>
      )}
    </div>
  );
};
