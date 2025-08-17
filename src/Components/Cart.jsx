import React, { useContext, useEffect } from "react";
import { cartContext } from "./Cartcontext";
import "./Styles/Cart.css";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaTrashAlt,
  FaPercentage,
} from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } =
    useContext(cartContext);

  return (
    <div className="cart-container">
      <div className="cart-summary">
        {cart.map((item) => {
          return (
            <div className="cart-item-card" key={item.id}>
              <div className="flex-item">
                <img
                  src={`/${item.images[0]}`}
                  alt=""
                  width={120}
                  height={120}
                />
                <div className="cart-summary-details">
                  <p className="cart-item-name">{item.name}</p>
                  <div className="cart-item-price">
                    <p className="cart-price">${item.price}</p>
                    <p className="cart-original-price">${item.originalPrice}</p>
                    <p className="cart-item-percentage">
                      <FaMinus size={10} />
                      {item.discountPercentage}%
                    </p>
                  </div>
                  <p>
                    Quantity:<b>{item.quantity}</b>
                  </p>
                </div>
              </div>
              <div className="cart-update">
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                  className="delete-item-cart"
                >
                  <FaTrashAlt
                    className="delete-icon"
                    size={17}
                    color="#030303ff"
                  />
                </button>
                <div className="update-quantity">
                  <button
                    onClick={() => {
                      decreaseItemQuantity(item);
                    }}
                  >
                    <FaMinus size={10} />
                  </button>
                  <p style={{ fontSize: "1rem" }}>1</p>
                  <button
                    onClick={() => {
                      increaseItemQuantity(item);
                    }}
                  >
                    <FaPlus size={10} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order">
          <div className="total">
            <p>Item (s) total</p>
            <p>$54</p>
          </div>
          <div className="item-discount">
            <p>item (s) discount</p>
            <p>$52</p>
          </div>
        </div>
        <div className="order-total">
          <h2>Order total</h2>
          <h3>$57</h3>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
