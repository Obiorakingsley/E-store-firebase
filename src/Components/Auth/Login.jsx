import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../Contexts/AuthContext";
import { auth, googleProvider } from "../config/firebase";

const Login = () => {
  const {
    loginError,
    signInWithGoogle,
    signInError,
    logOut,
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

    try {
      setSignInError("");
      const formData = new FormData(e.target);

      const email = formData.get("email");
      const password = formData.get("password");

      if (!email && !password)
        return setLoginError("Please fill in all fields");
      setIsLoading(true);
      setLoginError("");

      // Sign in with email and password
      await logInWithEmailAndPassword(auth, email, password);
      console.log(currentUser);

      if (!currentUser) {
        return;
      } else {
        navigate("/");
      }

      //await logOut(auth);
      //console.log("signed out");
    } catch (error) {
      return console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  console.log(currentUser);

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
              <label htmlFor="name">Email</label>
              <input
                id="name"
                name="email"
                type="name"
                autoFocus
                autoComplete=""
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
              style={isLoading ? { backgroundColor: "#a06035d3" } : null}
            >
              Log in
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
                  await signInWithGoogle(auth, googleProvider);
                  if (!currentUser) {
                    return;
                  } else {
                    navigate("/");
                  }
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
