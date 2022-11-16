import React, { Fragment, useState } from "react";
import "./Auth.css";

export const Auth = (props) => {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <Fragment>
      <h1 className="title">
        Welcome to Employee Information Management System
      </h1>
      <hr></hr>
      {authMode === "signin" ? (
        <div className="Auth-form-container">
          <form className="Auth-form">
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
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  password?
                </a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="Auth-form-container sign-in">
          <form className="Auth-form sign-in">
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
                  type="email"
                  className="form-control mt-1"
                  placeholder="e.g Cetin Arslan"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
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
      )}
    </Fragment>
  );
};
