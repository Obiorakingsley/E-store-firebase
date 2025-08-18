import React, { Suspense, useEffect } from "react";
import Flashcountdown from "./Flashcountdown";
import { Line } from "rc-progress";
import { FaMinus } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import "./Styles/Flashsales.css";
import { Await, Link, useLoaderData, useLocation } from "react-router-dom";
import Spinners from "./Spinners";

const Flashsales = ({ isHome = false }) => {
  const products = useLoaderData();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function renderData(data) {
    const dataItems = data.products.map((item) => item);
    const items = isHome ? dataItems : dataItems.slice(12, 20);
    return (
      <>
        <Flashcountdown />
        <div
          className={`flash-sales-container ${isHome ? "min-height" : null}`}
        >
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
                    <p className="flex price">
                      <FaNairaSign size={15} />
                      {item.price}
                    </p>

                    <b>
                      <span className="flex original-price">
                        <FaNairaSign size={15} />
                        {item.originalPrice}
                      </span>
                    </b>
                  </div>
                </div>
              </Link>
            );
          })}
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
