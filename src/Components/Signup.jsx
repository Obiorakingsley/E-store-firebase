import React from "react";
import { Link } from "react-router-dom";
import "./Styles/signup.css";
import { FaFacebook } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="signup-form">
      <div className="signup-background">
        <div className="signup-icon">
          <img src="/user1.png" alt="" width={35} height={35} />
        </div>
      </div>
      <div className="signup">
        <form className="form">
          <h1>CREATE ACCOUNT</h1>
          <div className="signup-container">
            <div className="input">
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="name">Email</label>
              <input type="email" />
            </div>
            <div className="input">
              <label htmlFor="name">Password</label>
              <input type="password" />
            </div>
            <div className="input">
              <label htmlFor="name">Confirm Password</label>
              <input type="password" />
            </div>

            <button>Sign Up</button>
          </div>
          <p style={{ textAlign: "center", marginBottom: "1.2rem" }}>
            Already have an account? &nbsp;
            <span style={{ textDecoration: "underline" }}>
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
          <div className="alt-signup">
            <p>Or</p>
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

export default Signup;
