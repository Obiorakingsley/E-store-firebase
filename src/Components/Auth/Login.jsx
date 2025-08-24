import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../Contexts/AuthContext";

const Login = () => {
  const { error, setError } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const email = formData.get("email");
      const password = formData.get("password");

      if (!email && !password) return setError("Please fill in all fields");
    } catch (error) {
      console.error(error);
    }
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
            <p style={{ color: "red" }}>{error}</p>
            <button>Log in</button>
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
            <div className="alt-link">
              <Link to={"/"}>
                <img src="/google.png" alt="" width={25} height={25} />
              </Link>

              <Link to={"/"}>
                <FaFacebook color="blue" size={25} />
              </Link>
            </div>
            <Link to={"/signup"} className="signup-redirect">
              Dont have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
