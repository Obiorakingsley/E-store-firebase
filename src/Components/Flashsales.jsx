import React, { useState, useEffect, Suspense } from "react";
import Flashcountdown from "./Flashcountdown";
import { Line } from "rc-progress";
import { FaMinus } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import "./Styles/Flashsales.css";
import { Await, useLoaderData } from "react-router-dom";

const Flashsales = () => {
  const products = useLoaderData();

  function renderData(data) {
    return (
      <>
        <Flashcountdown />
        <div className="flash-sales-container">
          {data.products.map((item) => {
            let subName = item.name;

            subName = subName.substring(0, 35) + "...";
            return (
              <div key={item.id} className="flash-sales-item">
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
            );
          })}
        </div>
      </>
    );
  }
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
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
