import React, { Fragment, useState, useContext } from "react";
import "./Auth.css";
import loginContext from "../../LoginContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export const Auth = () => {
  let navigate = useNavigate();
  const [succesfullRegistry, setSuccesfullRegistry] = useState();
  const [succesfullLogin, setSuccesfullLogin] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const newUserHandler = (event) => {
    const { name, value } = event.target;
    let newUserRef = { ...newUser, [name]: value };
    setNewUser(newUserRef);
  };

  const registerHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7261/api/User/AddNewUser", newUser, {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
      })
      .then((response) => {
        console.log(response.data);
        console.log("you are succesfully registered");
        setSuccesfullRegistry(true);
        setNewUser({ fullName: "", email: "", password: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [loginRequest, setLoginRequest] = useState({
    email: "",
    password: "",
  });

  const loginRequestHandler = (event) => {
    const { name, value } = event.target;
    let loginRequestRef = { ...loginRequest, [name]: value };
    setLoginRequest(loginRequestRef);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:7261/api/Auth/login", loginRequest)
      .then((response) => {
        localStorage.setItem("Token", response.data);
        if (response.data !== null) {
          getRole();
        }   
        setLoginRequest({ email: "", password: "" });
        navigate("/employee");
      })
      .catch((e) => {
        console.log(e.message);
        setFailedLogin(true);
      });
  };

  const getRole = () => {
    axios
      .get(
        "https://localhost:7261/api/Role/GetRoleByEmail/" + loginRequest.email,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      )
      .then((response) => {
        const userRole = response.data;
        localStorage.setItem("Role", userRole);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Fragment>
      <h1 className="title">
        Welcome to Employee Information Management System
      </h1>
      <hr></hr>
      {authMode === "signin" ? (
        <div>
          <div className="Auth-form-container">
            <form
              onSubmit={loginSubmitHandler.bind(this)}
              className="Auth-form"
            >
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center mt-3">
                  Not registered yet?{" "}
                  <span
                    className="link-primary"
                    style={{ cursor: "pointer" }}
                    onClick={changeAuthMode}
                  >
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    name="email"
                    value={loginRequest.email}
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    onChange={loginRequestHandler.bind(this)}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    name="password"
                    value={loginRequest.password}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={loginRequestHandler.bind(this)}
                    required
                  />
                </div>
                <div className="d-grid gap-2 mt-5">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          {failedLogin && (
            <SweetAlert
              danger
              confirmBtnText="Ok"
              confirmBtnBsStyle="danger"
              title="You are not registered yet! Please sign up first!.."
              onConfirm={() => setFailedLogin(false)}
            >
              Please click "OK" to close
            </SweetAlert>
          )}
          {succesfullLogin && (
            <SweetAlert
              success
              confirmBtnText="Ok"
              confirmBtnBsStyle="success"
              title="You logged in succesfully. Click on Ok to close!..."
              onConfirm={() => {
                setSuccesfullLogin(false);
              }}
            >
              Please click "OK" to close
            </SweetAlert>
          )}
        </div>
      ) : (
        <div>
          <div className="Auth-form-container sign-in">
            <form
              className="Auth-form sign-in"
              onSubmit={registerHandler.bind(this)}
            >
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign Up</h3>
                <div className="text-center mt-3">
                  Already registered?{" "}
                  <span
                    className="link-primary"
                    style={{ cursor: "pointer" }}
                    onClick={changeAuthMode}
                  >
                    Sign In
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Full Name</label>
                  <input
                    value={newUser.fullName}
                    type="text"
                    name="fullName"
                    className="form-control mt-1"
                    placeholder="e.g Cetin Arslan"
                    required
                    onChange={newUserHandler.bind(this)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    value={newUser.email}
                    type="email"
                    name="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    required
                    onChange={newUserHandler.bind(this)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    value={newUser.password}
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    required
                    onChange={newUserHandler.bind(this)}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          {succesfullRegistry && (
            <SweetAlert
              success
              confirmBtnText="Ok"
              confirmBtnBsStyle="success"
              title="You are registered succesfully!"
              onConfirm={() => setSuccesfullRegistry(false)}
            >
              Please click "OK" to close
            </SweetAlert>
          )}
        </div>
      )}
    </Fragment>
  );
};
