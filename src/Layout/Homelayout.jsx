import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollIntoView from "../Components/Utils/ScrollIntoView";

const Homelayout = () => {
  return (
    <>
      <ScrollIntoView />
      <Navbar />
      <Outlet />
      <ToastContainer style={{ zIndex: "10000" }} />
      <Footer />
    </>
  );
};

export default Homelayout;
