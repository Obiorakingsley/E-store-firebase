import React, { useContext, useEffect } from "react";
import { cartContext } from "../Contexts/Cartcontext";
import "./Cart.css";
import { FaMinus, FaPlus, FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import Products from "../Products/Products";

const Cart = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
  } = useContext(cartContext);

  function createOrder() {
    if (cart && currentUser) {
      return localStorage.setItem("order", JSON.stringify(cart));
    }
  }

  const totalQuantity = cart
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : null;

  const totalPrice = cart
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : null;

  const originalPrice = cart
    ? cart.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)
    : null;

  const discountPrice = cart
    ? cart.reduce(
        (sum, item) =>
          sum +
          Math.floor(
            item.discountPercentage * item.originalPrice * item.quantity
          ) /
            100,
        0
      )
    : null;

  return (
    <>
      {totalQuantity > 0 ? (
        <>
          <div className="cart-nav">
            <button
              onClick={() => {
                navigate(-1) || navigate("/");
              }}
              style={{
                border: "none",

                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <FaArrowLeft size={25} />
            </button>

            <button
              onClick={() => {
                clearCart();
              }}
              className="clear-cart"
            >
              Clear cart
            </button>
          </div>
          <div className="cart-container">
            <div className="cart-summary">
              {cart &&
                cart.map((item) => {
                  return (
                    <div className="cart-item-card" key={item?.id}>
                      <div className="flex-item">
                        <img
                          src={`/${item.images && item.images[0]}`}
                          alt=""
                          width={100}
                          height={100}
                        />
                        <div className="cart-summary-details">
                          <p className="cart-item-name">{item.name}</p>
                          <div className="cart-item-price">
                            <p className="cart-price">${item.price}</p>
                            <p className="cart-original-price">
                              ${item.originalPrice}
                            </p>
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
                          <p style={{ fontSize: "1rem" }}>{item.quantity}</p>
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
              <h3>cart: ({totalQuantity})</h3>
              <div className="order">
                <div className="total">
                  <p>Item (s) total</p>
                  <p
                    style={{
                      color: "#0000006b",
                      fontWeight: "bold",
                      textDecoration: "line-through",
                    }}
                  >
                    ${originalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="item-discount">
                  <p>item (s) discount</p>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "#ff4800ff",
                    }}
                  >
                    -{Math.floor(discountPrice)}
                  </p>
                </div>
              </div>
              <div className="order-total">
                <h2>Order total</h2>
                <h3>${totalPrice.toFixed(2)}</h3>
              </div>
              <button
                onClick={() => {
                  !currentUser ? navigate("/login") : navigate("/order");
                  createOrder();
                  toast.success("Successfully placed an order");
                }}
                className="checkout-btn"
              >
                Checkout ($ {totalPrice.toFixed(2)})
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <img src="/empty-cart.png" alt="" width={150} height={150} />
          <h2>Your shopping cart is empty</h2>
          <Link to={"/"}>
            <button>Start shoping</button>
          </Link>
          <Products emptyCart={true} />
        </div>
      )}
    </>
  );
};

export default Cart;
