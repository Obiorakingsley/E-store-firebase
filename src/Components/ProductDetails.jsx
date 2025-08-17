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
import { cartContext } from "./Cartcontext";

import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const { cart, addToCart, increaseItemQuantity, decreaseItemQuantity } =
    useContext(cartContext);

  const currentItem = cart.filter((item) => item.id === id);

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
            {product.images &&
              product.images.map((img, index) => {
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
          <p>{product.subCategory}</p>
          <p className="info-name">{product.name}</p>
          <div className="item-rating">
            <StarRatings
              starRatedColor="#ffba52ff"
              starDimension="18px"
              rating={product.rating}
              numberOfStars={5}
              starSpacing="2px"
              name="rating"
            />
            <p>{product.rating}</p>
            <p>({product.reviewCount} Reviews)</p>
          </div>
          <div className="item-price">
            <p className="info-price">${product.price}</p>
            <p className="info-original-price">${product.originalPrice}</p>
          </div>
          <p className="info-description">{product.description}</p>
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
            <button
              onClick={() => {
                decreaseItemQuantity(product);
              }}
              className="decrease-quantity-btn"
            >
              <FaMinus />
            </button>
            <p style={{ fontSize: "1.2rem", color: "#000" }}>
              {currentItem[0].quantity}
            </p>
            <button
              onClick={() => {
                increaseItemQuantity(product);
              }}
              className="increase-quantity-btn"
            >
              <FaPlus />
            </button>
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="add-item-cart"
            >
              Add To Cart
            </button>
            <button className="checkout-item">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
