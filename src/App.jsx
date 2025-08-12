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
import HomeSearchPage from "./pages/HomeSearchPage.jsx";
import { loader } from "./Components/Products.jsx";
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
import NotFoundPage from "./pages/NotFoundPage.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homelayout />} loader={loader}>
        <Route index element={<HomePage />} loader={loader} />

        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="flash-sales" element={<FlashsalesPage />} />
        <Route path="products" element={<ProductsPage />} loader={loader} />
        <Route
          path="search-product"
          element={<HomeSearchPage />}
          loader={loader}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="search" element={<SearchPage />} />
    </>
  )
);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
