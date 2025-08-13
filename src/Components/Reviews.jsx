import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/Reviews.css";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import StarRatings from "react-star-ratings";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

const Reviews = () => {
  const products = useLoaderData();

  function renderData(reviews) {
    const items = reviews.products.map((item, id) => {
      return item;
    });

    const product = items.slice(0, 3);
    return (
      <div className="reviews-container">
        <div className="navbar-review">
          <h2>
            <span className="no-wrap">Over 350+ Customer</span>
            <br /> reviews from our clients
          </h2>
          <h3>What our clients say</h3>
        </div>
        <Swiper
          navigation
          centeredSlides={true}
          grabCursor={true}
          slidesPerView="auto"
          //autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          spaceBetween={15}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper-review"
        >
          {product.map((item, id) => {
            let subName = item.name;
            subName = subName.substring(0, 20) + "...";
            return (
              <SwiperSlide key={id} className="reviews-item">
                <div className="reviews-card">
                  <div className="rating">
                    <StarRatings
                      starRatedColor="gold"
                      starDimension="18px"
                      rating={item.rating}
                      numberOfStars={5}
                      starSpacing="2px"
                      name="rating"
                    />
                    <span className="ratint-count">{item.rating}</span>
                  </div>
                  <div className="user-review">
                    <img
                      src={item.reviews.user.image}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <p className="name">{item.reviews.user.name}</p>
                    <p>{item.reviews.date}</p>
                  </div>
                  <p className="center">{item.reviews.title}</p>
                  <p className="review-text center">{item.reviews.body}</p>
                  <div className="reviews-images">
                    {item.images.map((img, index) => {
                      return (
                        <img key={index} src={img} width={70} height={70} />
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
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

export default Reviews;
