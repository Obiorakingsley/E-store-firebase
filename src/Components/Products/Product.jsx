import React from "react";
import "./Product.css";
import { FaDollarSign, FaMinus, FaPlus } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import { Line } from "rc-progress";
import { useContext } from "react";
import { cartContext } from "../Contexts/Cartcontext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Product = (props) => {
  const { cart, addToCart, increaseItemQuantity, decreaseItemQuantity } =
    useContext(cartContext);

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

  const currentItem = cart.find((product) => product.id === item.id);
  const itemQuantity = currentItem
    ? cart.filter((product) => product.id === item.id)[0].quantity
    : 1;

  const found = cart.find((product) => product.id === item.id);

  let subName = name;
  subName = subName.substring(0, 30) + "...";

  return (
    <div className="item">
      <Link
        className="item-link"
        to={isHome ? `${item.id}` : `products/${item.id}`}
      >
        <img
          className="image"
          src={`/${images[0]}`}
          alt=""
          height={80}
          width={80}
        />
        <span className=" flex discount">
          <FaMinus size={5} />
          {discountPercentage}%
        </span>
        <p className="name">{subName}</p>

        <div className="price-container">
          <p className="flex price">
            <FaDollarSign size={15} />
            {price}
          </p>

          <b>
            <span className="flex original-price">
              <FaDollarSign size={15} />
              {originalPrice}
            </span>
          </b>
          <div className="rating-container">
            <StarRatings
              starRatedColor="gold"
              starDimension="18px"
              rating={rating}
              numberOfStars={5}
              starSpacing="2px"
              name="rating"
            />
            {item.rating}
          </div>
          <Line
            percent={76}
            strokeWidth={4}
            trailWidth={4}
            strokeLinecap="round"
            strokeColor="orange"
          />
        </div>
      </Link>
      {!found ? (
        <div className="btn-container">
          <button
            onClick={() => {
              addToCart(item);
              toast.success("Successfully added to cart");
            }}
            className="add-btn"
          >
            Add To Cart
          </button>
        </div>
      ) : (
        <div className="add-remove-cart">
          <button
            onClick={() => {
              decreaseItemQuantity(item);
            }}
            className="decrease-quantity-btn"
          >
            <FaMinus />
          </button>
          <p style={{ fontSize: "1.2rem", color: "#000" }}>{itemQuantity}</p>
          <button
            onClick={() => {
              increaseItemQuantity(item);
            }}
            className="increase-quantity-btn"
          >
            <FaPlus />
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
