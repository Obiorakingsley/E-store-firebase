import React from "react";
import { Link, useLoaderData, Await } from "react-router-dom";
import "./Styles/Popularproduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";

import { Suspense } from "react";
import Spinners from "./Utils/Spinners";

const Popularproduct = () => {
  const products = useLoaderData();
  function renderData(items) {
    const dataItem = items ? items.filter((item) => item.views > 1300) : null;
    const popularProduct = dataItem;
    return (
      <>
        <div className="product-deals">
          <div className="product-nav">
            <h2>Popular product</h2>
          </div>
          <div className="slider">
            <Swiper
              modules={[Autoplay, Pagination, Navigation, FreeMode]}
              spaceBetween={10}
              centeredSlides={true}
              freeMode={true}
              grabCursor={true}
              //loop={true}
              slidesPerView="auto"
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              className="popular-swiper"
            >
              {popularProduct
                ? popularProduct.map((item) => {
                    return (
                      <SwiperSlide className="swiper-item" key={item.id}>
                        <Link key={item.id} to={`products/${item.id}`}>
                          <img
                            src={`/${item.images[0]}`}
                            alt=""
                            width={140}
                            height={140}
                          />
                        </Link>
                      </SwiperSlide>
                    );
                  })
                : null}
            </Swiper>
          </div>
        </div>
      </>
    );
  }
  return (
    <Suspense fallback={<Spinners />}>
      <Await
        resolve={products.promise}
        errorElement={<h1>Error Loading Product</h1>}
      >
        {renderData}
      </Await>
    </Suspense>
  );
};

export default Popularproduct;
