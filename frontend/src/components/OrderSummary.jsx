import "./OrderSummary.css"

import { Link } from "react-router-dom";

const OrderSummary = ({orderItems, page, shipping, subtotal}) => {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>

      {page === "checkout" &&
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

      <p>Subtotal: ${subtotal} </p>
      <p>Shipping: ${shipping} </p>
      <h4>Total: ${subtotal + shipping} </h4>
      {page === "checkout" && <Link to="/checkout">Place Order</Link>}
      {page === "cart" && <Link to="/checkout">Checkout</Link>}
    </div>
  );
}

export default OrderSummary