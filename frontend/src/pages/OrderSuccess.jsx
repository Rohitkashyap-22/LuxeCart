import React from "react";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const orderData = sessionStorage.getItem("latestOrder");
  const order = JSON.parse(orderData);

  return (
    <div className="order-success-container">
      <div className="success-message">
        <img src="/tickmark.jpg" alt="confirmation image" />
        <h1>Order Placed Successfully!</h1>
        <h2>Thank you for shopping with LuxeCart.</h2>
        <p>We've received your order. Order will ship in 5-7 business days.</p>
        <p>Order ID: #ABC786</p>
      </div>

      <div className="shipping-address">
        <h2>Shipping Address</h2>
        <p id="name">{order.customer.fullname}</p>
        <p>Email: {order.customer.email}</p>
        <p>Mob. No.: {order.customer.phone}</p>
        <p>Address: {order.customer.address}, {order.customer.city}-{order.customer.pincode}, {order.customer.state}, {order.customer.country}</p>
      </div>

      <div className="success-order-summary">
        <OrderSummary
          orderItems={order.items}
          page="ordersuccess"
          shipping={order.shipping}
          subtotal={order.subtotal}
          paymentMethod={order.paymentMethod}
        />
      </div>

      <div className="continue-shopping">
        <Link to="/products">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
