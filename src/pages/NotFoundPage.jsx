import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <FaExclamationTriangle
        color="#f7e700ff"
        size={70}
        className="exclamation"
      />
      <h1 className="heading">404 Not Found</h1>
      <h2 className="message">This page does not exist</h2>
      <Link to="/" className="link">
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
