import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

import { useAuth } from "../Contexts/AuthContext";
import { auth, googleProvider } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const {
    loginError,
    signInWithGoogle,
    signInError,
    isLoading,
    setIsLoading,
    setLoginError,
    currentUser,
    logInWithEmailAndPassword,
    setSignInError,
  } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email && !password) return setLoginError("Please fill in all fields");

    setLoginError("");

    // Sign in with email and password
    await logInWithEmailAndPassword(auth, email, password);

    const verify = onAuthStateChanged(auth, (user) => {
      !loginError && user && navigate("/");
    });
    return verify;
  }

  return (
    <div className="login-form">
      <div className="login-background">
        <div className="login-icon">
          <img src="/user1.png" alt="" width={35} height={35} />
        </div>
      </div>
      <div className="login">
        <form onSubmit={handleSubmit} method="post" className="form">
          <h1>LOGIN</h1>
          <div className="login-container">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="name"
                autoFocus
                autoComplete="current-password"
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
            </div>
            <p style={{ color: "red" }}>
              {loginError}
              {signInError}
            </p>
            <button
              className="login-btn"
              disabled={isLoading}
              style={isLoading ? { backgroundColor: "#6e6e6d79" } : null}
            >
              {isLoading ? "Logging in" : "Log in"}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 .5rem",
              marginBottom: "1.5rem",
            }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
              htmlFor="check"
            >
              <input id="check" name="check" type="checkbox" />
              Remember me
            </label>
            <Link to={"/forgot-password"}>Forgot password?</Link>
          </div>

          <div className="alt-login">
            <span>Or</span>
            <div className="alt-login-btn">
              <div
                className="google-login"
                onClick={async () => {
                  setIsLoading(true);
                  await signInWithGoogle(auth, googleProvider);
                  setIsLoading(false);
                }}
              >
                <img src="/google.png" alt="" width={23} height={23} />
              </div>
              <Link to={"/signup"} className="signup-redirect">
                Dont have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
