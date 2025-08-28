import React, { Suspense, useEffect, useState, useContext } from "react";
import "./OrderTracking.css";
import { cartContext } from "../Contexts/Cartcontext";
import { FaCircleCheck } from "react-icons/fa6";

const OrderTracking = ({ orderId }) => {
  const { cart } = useContext(cartContext);

  // Format todays date
  const date = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(" ", ", ");

  //Delivery date

  const deliveryDate = new Date();
  deliveryDate.setDate(date.getDate() + 7);

  const formatDeliveryDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(deliveryDate)
    .replace(" ", ", ");

  const [order, setOrder] = useState(null);

  const totalQuantity = order
    ? order.reduce((sum, item) => sum + item.quantity, 0)
    : null;

  const totalPrice = order
    ? order.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : null;

  useEffect(() => {
    const fetchOrder = async () => {
      const orders = JSON.parse(localStorage.getItem("order")) || [];
      setOrder(orders);
    };
    fetchOrder();
  }, [cart]);
  return (
    <div className="order-container">
      <h1>Order Tracking</h1>
      <div className="order-tracking">
        <div className="track">
          <p className="step">
            Order placed
            <FaCircleCheck color="green" />
          </p>
          <span>{formattedDate}</span>
        </div>
        <div className="track">
          <p className="step">
            Order packed
            <FaCircleCheck color="green" />
          </p>
          <span>{formattedDate}</span>
        </div>
        <div className="track">
          <p className="step">
            Order delivered
            <FaCircleCheck color="gray" />
          </p>
          <span>{formatDeliveryDate}</span>
        </div>
      </div>

      <div className="order-products">
        <h2>Order Items</h2>
        {order?.map((item) => {
          return (
            <div className="order-items">
              <img src={item?.images[0]} alt="" width={100} height={100} />
              <div className="order-item-details">
                <h3>{item.name}</h3>
                <p>Qty: {item.quantity}</p>
                <p>${item.price}</p>
              </div>
            </div>
          );
        })}
        <div className="total-orders">
          <h2>Total</h2>
          <p className="total">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
