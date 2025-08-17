import React from "react";
import "./Styles/Product.css";
import { FaNairaSign } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import { Line } from "rc-progress";
import { useContext } from "react";
import { cartContext } from "./Cartcontext";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { cart, addToCart } = useContext(cartContext);

  const {
    name,
    images,
    item,
    isHome,
    price,
    originalPrice,
    discountPercentage,
    rating,
  } = props;

  let subName = name;
  subName = subName.substring(0, 35) + "...";

  return (
    <div className="item">
      <Link to={isHome ? `${item.id}` : `products/${item.id}`}>
        <img
          className="image"
          src={`/${images[0]}`}
          alt=""
          height={100}
          width={100}
        />
        <span className=" flex discount">
          <FaMinus size={5} />
          {discountPercentage}%
        </span>
        <p className="name">{subName}</p>

        <div className="price-container">
          <p className="flex price">
            <FaNairaSign size={15} />
            {price}
          </p>

          <b>
            <span className="flex original-price">
              <FaNairaSign size={15} />
              {originalPrice}
            </span>
          </b>
          <StarRatings
            starRatedColor="gold"
            starDimension="18px"
            rating={rating}
            numberOfStars={5}
            starSpacing="2px"
            name="rating"
          />
          <Line
            percent={76}
            strokeWidth={4}
            trailWidth={4}
            strokeLinecap="round"
            strokeColor="orange"
          />
        </div>
      </Link>
      <div className="btn-container">
        <button
          onClick={() => {
            addToCart(item);
          }}
          className="add-btn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
