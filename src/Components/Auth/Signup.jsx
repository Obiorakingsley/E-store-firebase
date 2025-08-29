import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signup.css";
import { auth, googleProvider } from "../config/firebase";
import { useAuth } from "../Contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

const Signup = () => {
  const {
    isLoading,

    signUpError,
    setSignUpError,
    signUpWithEmailAndPassword,
    signInWithGoogle,
    signInError,
  } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email && !password && !name)
      return setSignUpError("Please fill in all fields");

    setSignUpError("");

    await signUpWithEmailAndPassword(auth, name, email, password);

    const verify = onAuthStateChanged(auth, (user) => {
      user && navigate("/login");
    });
    return verify;
  }

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
              <input id="name" type="text" name="name" required />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" required />
            </div>
            <p style={{ color: "red" }}>{signUpError || signInError}</p>
            <button
              className="signup-btn"
              disabled={isLoading}
              style={isLoading ? { backgroundColor: "#6e6e6d79" } : null}
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
                  navigate("/");
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
