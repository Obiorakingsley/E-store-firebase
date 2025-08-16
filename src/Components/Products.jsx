import React, { Suspense } from "react";
import "./Styles/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Product from "./Product.jsx";
import { FaChevronRight } from "react-icons/fa6";
import { Await, Link, useLoaderData } from "react-router-dom";

const Products = ({ isHome = false }) => {
  const products = useLoaderData();

  const navItems = [
    "All",
    "Phones & Tablets",
    "Home & Office",
    "Appliances",
    "Fassion",
    "Eletronics",
    " Beauty",
  ];

  function renderData(data) {
    const dataItems = data.products.map((item) => item);
    const items = isHome ? dataItems : dataItems.slice(0, 8);

    return (
      <div className={`products-container ${isHome ? "min-height" : null}`}>
        <div className={` ${isHome ? "hidden" : "navbar-top"}`}>
          <h2>Browse by categories</h2>
          <Link to={"/products"}>
            <span className="flex">
              More
              <FaChevronRight size={10} />
            </span>
          </Link>
        </div>
        <div className="products-navbar">
          <nav>
            <Swiper
              slidesPerView="auto"
              spaceBetween={15}
              freeMode={true}
              modules={[FreeMode]}
              className="swiper-navbar"
            >
              {navItems.map((item, index) => (
                <SwiperSlide key={index} className="nav-item">
                  <button>{item}</button>
                </SwiperSlide>
              ))}
            </Swiper>
          </nav>
        </div>

        {isHome ? (
          <div className="display-grid">
            {items.map((item) => (
              <Link to={`${item.id}`}>
                <Product
                  name={item.name}
                  shortDescription={item.shortDescription}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  discountPercentage={item.discountPercentage}
                  rating={item.rating}
                  key={item.id}
                  id={item.id}
                  images={item.images}
                />
              </Link>
            ))}
          </div>
        ) : (
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode]}
            className="swiper-product"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="product-item">
                <Link to={`products/${item.id}`}>
                  <Product
                    name={item.name}
                    shortDescription={item.shortDescription}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    discountPercentage={item.discountPercentage}
                    rating={item.rating}
                    key={item.id}
                    id={item.id}
                    images={item.images}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    );
  }

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Await
        resolve={products.promise}
        errorElement={<h1>Error Loading Product</h1>}
      >
        {renderData}
      </Await>
    </Suspense>
  );
};

export default Products;

// Auto-calculated: ((originalPrice - price)/originalPrice)
