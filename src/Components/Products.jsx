import React, { useEffect, useState } from "react";
import "./Styles/Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Product from "./Product.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/data.json");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);
  console.log(products);
  const navItems = [
    "All",
    "Phones & Tablets",
    "Home & Office",
    "Appliances",
    "Fassion",
    "Eletronics",
    " Beauty",
  ];

  const items = products.map((item) => {
    return (
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
    );
  });

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
      <div className="product-grid">
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          className="swiper-product"
        >
          {products.map((item, index) => {
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
};

export default Products;

// Auto-calculated: ((originalPrice - price)/originalPrice)
