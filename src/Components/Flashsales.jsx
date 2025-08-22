import React, { Suspense, useEffect } from "react";
import Flashcountdown from "./Utils/Flashcountdown";
import { Line } from "rc-progress";
import { FaMinus } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import "./Styles/Flashsales.css";
import { Await, Link, useLoaderData, useLocation } from "react-router-dom";
import Spinners from "./Utils/Spinners";

const Flashsales = ({ isHome }) => {
  const products = useLoaderData();

  function renderData(data) {
    const dataItems = data.products.filter((item) => item.purchases > 500);
    const items = dataItems;
    return (
      <>
        <Flashcountdown />
        <div
          className="flash-sales-container"
          style={isHome ? { minHeight: "85vh" } : null}
        >
          <div className="flash-sales-grid">
            {items.map((item) => {
              let subName = item.name;

              subName = subName.substring(0, 35) + "...";
              return (
                <Link key={item.id} to={`/products/${item.id}`}>
                  <div className="flash-sales-item">
                    <img src={item.images[0]} alt="" width={90} height={90} />
                    <span className=" flex discount">
                      <FaMinus size={5} />
                      {item.discountPercentage}%
                    </span>
                    <p className="name">{subName}</p>
                    <div className="price-container">
                      <p className="flex price">$ {item.price}</p>

                      <b>
                        <span className="flex original-price">
                          $ {item.originalPrice}
                        </span>
                      </b>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  return (
    <Suspense fallback={isHome && <Spinners />}>
      <Await
        resolve={products.promise}
        errorElement={<h2>Error Loading Product</h2>}
      >
        {renderData}
      </Await>
    </Suspense>
  );
};

export default Flashsales;

/* 
      <p className="name">{subName}</p>

      
        <StarRatings
          starRatedColor="gold"
          starDimension="18px"
          rating={rating}
          numberOfStars={5}
          starSpacing="2px"
          name="rating"
        />
         */
