import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img src="/error.png" alt="" height={200} width={200} />
      <h2>Temporary Loading Issue</h2>
      <h4>we're having trouble loading your products right now.</h4>
      <p>This might be due to a temporary Network issue.</p>
      <Link
        to={"/"}
        style={{
          backgroundColor: "indigo",
          color: "#fff",
          padding: ".8rem",
          margin: "1rem",
          borderRadius: "5px",
        }}
      >
        Try Again
      </Link>
    </div>
  );
};

export default Error;
