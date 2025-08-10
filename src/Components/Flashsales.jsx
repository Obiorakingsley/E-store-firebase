import React, { useState, useEffect } from "react";
import Flashcountdown from "./Flashcountdown";
import { Line } from "rc-progress";
import { FaMinus } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import "./Styles/Flashsales.css";

const Flashsales = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/data.json");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <Flashcountdown />
      <div className="flash-sales-container">
        {products.map((item) => {
          let subName = item.name;

          subName = subName.substring(0, 35) + "...";
          return (
            <div key={item.id} className="flash-sales-item">
              <img src={item.images} alt="" width={90} height={90} />
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
              <span className="stock">{item.stock} items left</span>
              <Line
                percent={item.stock}
                strokeWidth={4}
                trailWidth={4}
                strokeLinecap="round"
                strokeColor="orange"
              />
            </div>
          );
        })}
      </div>
    </>
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
