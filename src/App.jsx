import React from "react";
import Homelayout from "./Layout/Homelayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FlashsalesPage from "./pages/FlashsalesPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Popular from "./Components/Popularproduct.jsx";
import Products from "./Components/Products.jsx";
import Flashsales from "./Components/Flashsales.jsx";
import Bestseller from "./Components/Bestseller.jsx";
import Newcolection from "./Components/Newcolection.jsx";
import Reviews from "./Components/Reviews.jsx";
import Footer from "./Components/Footer.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Homelayout />}>
      <Route index element={<HomePage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="flash-sales" element={<FlashsalesPage />} />
      <Route path="product" element={<ProductsPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;

{
  /* <>
      <Navbar />
      <Hero />
      <Popular />
      <Products />
      <Flashsales />
      <Bestseller />
      <Newcolection />
      <Reviews />
      <Footer />
    </> */
}
