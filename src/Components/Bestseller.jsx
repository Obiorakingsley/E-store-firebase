import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/Bestseller.css";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Suspense } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { Link, useLoaderData, Await } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Spinners from "./Spinners";

const Bestseller = ({ isHome = false }) => {
  const products = useLoaderData();

  function renderData(bestseller) {
    const dataItems = bestseller.products.map((item, id) => item);
    const bestSellerItem = isHome ? dataItems : dataItems.slice(8, 17);
    return (
      <div className="best-seller-container">
        {!isHome ? (
          <div className="navbar-top">
            <h2>Top Sales</h2>
            <HashLink to={"/products#bestseller"}>
              <span className="flex">
                See All
                <FaChevronRight size={15} />
              </span>
            </HashLink>
          </div>
        ) : (
          <h2
            style={{
              textAlign: "center",
              backgroundColor: "#f0d9af",
              padding: ".8rem",
            }}
          >
            Top Sales
          </h2>
        )}
        {!isHome ? (
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode]}
            className="swiper-product"
          >
            {bestSellerItem.map((item, id) => {
              let subName = item.name;
              subName = subName.substring(0, 13) + "...";
              return (
                <SwiperSlide key={id} className="best-seller-item">
                  <Link to={isHome ? `${item.id}` : `products/${item.id}`}>
                    <div className="best-sales-item">
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
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="bestseller-grid-container">
            {bestSellerItem.map((item, id) => {
              let subName = item.name;
              subName = subName.substring(0, 13) + "...";
              return (
                <Link
                  key={item.id}
                  to={isHome ? `${item.id}` : `products/${item.id}`}
                >
                  <div className="best-sales-item">
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
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <Suspense>
      <Await
        resolve={products.promise}
        errorElement={<h1>Error Loading Product</h1>}
      >
        {renderData}
      </Await>
    </Suspense>
  );
};

export default Bestseller;
