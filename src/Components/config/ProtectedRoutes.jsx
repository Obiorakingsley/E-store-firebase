import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoutes;
