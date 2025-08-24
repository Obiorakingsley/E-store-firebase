import React, { use, useState } from "react";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import "./signup.css";
import { FaFacebook } from "react-icons/fa";

import { auth } from "../config/firebase";
import { useAuth } from "../Contexts/AuthContext";

const Signup = () => {
  const {
    currentUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    signUpWithEmailAndPassword,
  } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email && !password && !name)
        return setError("Please fill in all fields");

      setIsLoading(true);
      setError("");

      await signUpWithEmailAndPassword(auth, email, password);

      return navigate("/login");
    } catch (error) {
      console.error(error.message);
      return { error: error.message };
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
            <p style={{ color: "red" }}>{error}</p>
            <button
              disabled={isLoading}
              style={isLoading ? { backgroundColor: "#a06035d3" } : null}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>

          <p style={{ textAlign: "center", marginBottom: "1.2rem" }}>
            Already have an account? &nbsp;
            <Link className="login-redirect" to={"/login"}>
              Login
            </Link>
          </p>
          <div className="alt-signup">
            <p>Or</p>
            <div className="alt-link">
              <Link to={""}>
                <img src="/google.png" alt="" width={25} height={25} />
              </Link>

              <Link to={"/"}>
                <FaFacebook color="blue" size={25} />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
