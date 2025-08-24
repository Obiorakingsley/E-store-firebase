import React, { Suspense } from "react";
import Homelayout from "./Layout/Homelayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FlashsalesPage from "./pages/FlashsalesPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import HomeSearchPage from "./pages/HomeSearchPage.jsx";

import loaders from "./Components/Utils/Loader.jsx";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDescription from "./Components/Productdetails/ProductDescription.jsx";
import Productinfo from "./Components/Productdetails/Productinfo.jsx";
import Productreviews from "./Components/Productdetails/Productreviews.jsx";
import Error from "./Components/Error.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Homelayout />}
        loader={loaders}
        errorElement={<Error />}
      >
        <Route index element={<HomePage />} loader={loaders} />
        <Route path="account" element={<AccountPage />} />
        <Route path="cart" element={<CartPage />} loader={loaders} />
        <Route
          path="flash-sales"
          element={<FlashsalesPage />}
          loader={loaders}
        />
        <Route path="products" element={<ProductsPage />} loader={loaders} />
        <Route
          path="products/:id"
          element={<ProductDetailsPage />}
          loader={loaders}
        >
          <Route index element={<ProductDescription />} />
          <Route path="info" element={<Productinfo />} />
          <Route path="review" element={<Productreviews />} />
        </Route>
        <Route
          path="search-product"
          element={<HomeSearchPage />}
          loader={loaders}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="search" element={<SearchPage loader={loaders} />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
    </>
  )
);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
