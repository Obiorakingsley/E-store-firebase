import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Popularproduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/free-mode";
import img1 from "/fashion.jpg";
import img2 from "/cross-bag.jpg";
import img3 from "/laptop2.jpg";
import img4 from "/laptop.jpg";
import img5 from "/powerbank.jpg";
import img6 from "/shoes.jpg";
import img7 from "/slipper1.jpg";
import img8 from "/mouse.jpg";
import img9 from "/suit.jpg";
import { FaChevronRight } from "react-icons/fa";

const Popularproduct = () => {
  const arrayImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="product-deals">
      <div className="product-nav">
        <h2>Popular product</h2>
        <Link to={"/products"}>
          <p>
            view all <FaChevronRight />
          </p>
        </Link>
      </div>
      <div className="slider">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          spaceBetween={10}
          // breakpoints={{
          //   320: {
          //     slidesPerView: 2,
          //   },
          //   640: {
          //     slidesPerView: 3,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //   },
          //   1024: {
          //     slidesPerView: 4,
          //   },
          // }}
          centeredSlides={true}
          //freeMode={true}
          grabCursor={true}
          //loop={true}
          slidesPerView="auto"
          //autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="popular-swiper"
        >
          {arrayImg.map((img, index) => {
            return (
              <SwiperSlide className="swiper-item" key={index}>
                <img src={img} alt="" width={140} height={140} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Popularproduct;
