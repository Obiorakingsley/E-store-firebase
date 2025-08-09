import React, { useEffect, useState } from "react";
import jbl from "../assets/images/popular/headphone.jpg";
import "./Styles/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const Products = () => {
  const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   async function fetchProducts() {
  //     const res = await fetch("/data.json");
  //     const data = await res.json();
  //     setProduct(data.products);
  //   }
  //   fetchProducts();
  // }, []);
  // console.log(product);
  const navItems = [
    "All",
    "Phones & Tablets",
    "Home & Office",
    "Appliances",
    "Fassion",
    "Eletronics",
    " Beauty",
  ];

  return (
    <div className="products-container">
      <h2>Browse by categories</h2>
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
    </div>
  );
};

export default Products;

// Auto-calculated: ((originalPrice - price)/originalPrice)
