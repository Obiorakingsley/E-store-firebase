import React, { useEffect, useState } from "react";
import "./Styles/Productdetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles/Reviews.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css/pagination";
import StarRatings from "react-star-ratings";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [items, setProduct] = useState([]);
  const [selectedColor, setSelectedColor] = useState({
    hex: "#000000",
    name: "Black",
  });

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("/items.json");
      const data = await res.json();
      const dataItems = data.products.filter((item) => item.id === id);
      if (dataItems[0]) setProduct(dataItems[0]);
      if (dataItems[0].colors && dataItems[0].colors.length > 0) {
        setSelectedColor({
          hex: dataItems[0].colors[0].hex,
          name: dataItems[0].colors[0].name,
        });
      }
    }
    fetchProduct();
  }, []);
  console.log(items);

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-images">
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
            {items.images &&
              items.images.map((img, index) => {
                return (
                  <SwiperSlide key={index} className="details-item">
                    <div className="reviews-card">
                      <div className="details-images">
                        {
                          <img
                            src={`/${img}`}
                            alt=""
                            width={250}
                            height="auto"
                          />
                        }
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className="product-info">
          <p>{items.subCategory}</p>
          <p className="info-name">{items.name}</p>
          <div className="item-rating">
            <StarRatings
              starRatedColor="#ffba52ff"
              starDimension="18px"
              rating={items.rating}
              numberOfStars={5}
              starSpacing="2px"
              name="rating"
            />
            <p>{items.rating}</p>
            <p>({items.reviewCount} Reviews)</p>
          </div>
          <div className="item-price">
            <p className="info-price">${items.price}</p>
            <p className="info-original-price">${items.originalPrice}</p>
          </div>
          <p className="info-description">{items.description}</p>
          <div className="info-color">
            <span>
              <b>Color:</b> {selectedColor.name}
            </span>
            <label
              style={{
                display: "inline",
                width: "20px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  border: "3px solid #333333",
                  borderRadius: "50%",
                  height: "25px",
                  width: "25px",
                  opacity: "0.8",

                  backgroundColor: selectedColor.hex,
                }}
              />
              <input
                type="color"
                readOnly
                style={{ display: "none", width: "auto" }}
                value={selectedColor.hex}
              />
            </label>
          </div>
          <div className="add-remove-cart">
            <button className="decrease-quantity-btn">
              <FaMinus />
            </button>
            <p style={{ fontSize: "1.2rem" }}>4</p>
            <button className="increase-quantity-btn">
              <FaPlus />
            </button>
            <button className="add-item-cart">Add To Cart</button>
            <button className="checkout-item">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
