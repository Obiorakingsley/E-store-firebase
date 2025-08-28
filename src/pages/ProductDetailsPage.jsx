import ProductDetails from "../Components/Productdetails/ProductDetails";

import { useEffect } from "react";

const ProductDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <ProductDetails />;
};

export default ProductDetailsPage;
