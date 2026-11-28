import "./OrderSummary.css"

import { Link } from "react-router-dom";

const OrderSummary = ({orderItems, page, shipping, subtotal, paymentMethod}) => {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>

      {(page === "checkout" || page === "ordersuccess") &&
        orderItems.map((item) => {
          return (
            <div key={item.id} className="order-itemcard">
              <img src={item.image} alt="" />
              <div>
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
              </div>
              <h4>${item.price * item.quantity}</h4>
            </div>
          );
        })}

      <p>
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </p>

      <p>
        <span>Shipping</span>
        <span>${shipping}</span>
      </p>

      {page === "ordersuccess" && (
        <p>
          <span>Payment Method</span>
          <span>{paymentMethod}</span>
        </p>
      )}

      <h4>
        <span>Total</span>
        <span>${subtotal + shipping}</span>
      </h4>

      {page === "checkout" && (
        <button type="submit" form="checkout-form">
          Place Order
        </button>
      )}

      {page === "cart" && <Link to="/checkout">Checkout</Link>}
    </div>
  );
}

export default OrderSummary