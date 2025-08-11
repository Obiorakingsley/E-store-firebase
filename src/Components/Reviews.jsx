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

const Reviews = () => {
  const [newColection, setNewCollection] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/data.json");
      const data = await res.json();
      setNewCollection(data.products);
    }
    fetchProducts();
  }, []);

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
        {newColection.map((item, id) => {
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
                  {item.reviews.images.map((img, index) => {
                    return <img key={index} src={img} width={70} height={70} />;
                  })}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
