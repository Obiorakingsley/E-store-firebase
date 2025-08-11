import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Popular from "./Components/Popularproduct.jsx";
import Products from "./Components/Products.jsx";
import Flashsales from "./Components/Flashsales.jsx";
import Bestseller from "./Components/Bestseller.jsx";
import Newcolection from "./Components/Newcolection.jsx";
import Reviews from "./Components/Reviews.jsx";
import Footer from "./Components/Footer.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Products />
      <Flashsales />
      <Bestseller />
      <Newcolection />
      <Reviews />
      <Footer />
    </>
  );
};

export default App;
