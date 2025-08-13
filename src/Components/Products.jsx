import React, { Suspense } from "react";
import "./Styles/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Product from "./Product.jsx";
import { FaChevronRight } from "react-icons/fa6";
import { Await, Link, defer, useLoaderData } from "react-router-dom";

export async function loader() {
  try {
    const res = await fetch("./items.json");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = res.json();
    return defer({ promise: data });
  } catch (err) {
    return new Promise("Error fetching data");
  }
}

const Products = () => {
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
    return (
      <div className="products-container">
        <div className="navbar-top">
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
        <div className="product-grid">
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode]}
            className="swiper-product"
          >
            {data.products.map((item, index) => {
              return (
                <SwiperSlide key={index} className="product-item">
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
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
