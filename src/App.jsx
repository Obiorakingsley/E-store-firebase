import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Popular from "./Components/Popularproduct.jsx";
import Products from "./Components/Products.jsx";
import Flashsales from "./Components/Flashsales.jsx";
import Bestseller from "./Components/Bestseller.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Products />
      <Flashsales />
      <Bestseller />
    </>
  );
};

export default App;
