import React from "react";
import { useOutletContext } from "react-router-dom";

const Productinfo = () => {
  const product = useOutletContext();
  return (
    <div className="product-details-info">
      {product ? (
        <>
          <p>
            <b>Weight: </b>
            {product.weight}
          </p>
          <p>
            <b>Sizes: </b>
            {product.sizes
              ? product.sizes.map((size) => <span>&nbsp; {size}</span>)
              : null}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <h3>Dimensions: </h3>
            <p>{product.dimensions.length},</p>
            <p> {product.dimensions.width},</p>
            <p> {product.dimensions.height}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Productinfo;
