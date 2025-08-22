import React from "react";
import { useOutletContext } from "react-router-dom";

const ProductDescription = () => {
  const product = useOutletContext();
  return (
    <div className="product-details-description">
      {product ? (
        <>
          <p>
            <b>Type:</b> {product.type}
          </p>
          <p>
            <b>Brand:</b> {product.brand}
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              wordSpacing: "1.5px",
              lineHeight: "1.2",
            }}
          >
            <b>Description:</b> {product.description}
          </p>
          <h3>"{product.shortDescription}"</h3>
        </>
      ) : null}
    </div>
  );
};

export default ProductDescription;
