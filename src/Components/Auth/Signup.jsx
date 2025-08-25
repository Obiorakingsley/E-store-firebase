import React, { use, useState } from "react";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import "./signup.css";
import { FaFacebook } from "react-icons/fa";

import { auth, googleProvider } from "../config/firebase";
import { useAuth } from "../Contexts/AuthContext";

const Signup = () => {
  const {
    currentUser,
    isLoading,
    setIsLoading,
    signUpError,
    setSignUpError,
    signUpWithEmailAndPassword,
    signInWithGoogle,
    signInError,
    setSignInError,
  } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    setSignInError("");
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email && !password && !name)
        return setSignUpError("Please fill in all fields");

      setIsLoading(true);
      setSignUpError("");

      await signUpWithEmailAndPassword(auth, email, password);

      if (!currentUser) {
        return;
      } else {
        navigate("/login");
      }
    } catch (error) {
      return console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(currentUser?.email);

  return (
    <div className="signup-form">
      <div className="signup-background">
        <div className="signup-icon">
          <img src="/user1.png" alt="" width={35} height={35} />
        </div>
      </div>
      <div className="signup">
        <form onSubmit={handleSubmit} method="post" className="form">
          <h1>CREATE ACCOUNT</h1>
          <div className="signup-container">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" />
            </div>
            <p style={{ color: "red" }}>
              {signUpError}
              {signInError}
            </p>
            <button
              className="signup-btn"
              disabled={isLoading}
              style={isLoading ? { backgroundColor: "#a06035d3" } : null}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              marginBottom: "1.2rem",
              color: "green",
            }}
          >
            Already have an account? &nbsp;
            <Link className="login-redirect" to={"/login"}>
              Login
            </Link>
          </p>
          <div className="alt-signup">
            <p>Or</p>
            <div className="alt-link">
              <div
                onClick={async () => {
                  await signInWithGoogle(auth, googleProvider);
                  if (!currentUser) {
                    return;
                  } else {
                    navigate("/");
                  }
                }}
                className="google-signup"
              >
                <img src="/google.png" alt="" width={23} height={23} />
              </div>
              <p>Sign Up with Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
