import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-form">
      <div className="login-background">
        <div className="login-icon">
          <img src="/user1.png" alt="" width={35} height={35} />
        </div>
      </div>
      <div className="login">
        <form className="form">
          <h1>LOGIN</h1>
          <div className="login-container">
            <div className="input">
              <label htmlFor="name">Email</label>
              <input id="name" name="email" type="name" />
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
            </div>

            <button>Sign Up</button>
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
            <p>Or sign in with</p>
            <div className="alt-link">
              <Link to={"/"}>
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

export default Login;
