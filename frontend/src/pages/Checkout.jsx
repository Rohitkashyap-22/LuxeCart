const orderItems = [
  {
    id: 1,
    name: "Bangles",
    price: 799,
    image: "/products/Bangles.jpg",
    quantity: 2,
  },
  {
    id: 2,
    name: "Bracelete",
    price: 999,
    image: "/products/Bracelete.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Handbag",
    price: 1499,
    image: "/products/Handbag.jpg",
    quantity: 1,
  },
];

import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {

  const shipping = 50;

  const subtotal = orderItems.reduce((acc,current)=>{
    return acc += (current.price * current.quantity)
  }, 0);

  return (
    <div className="checkout-container">
      <form className="checkout-form">
        <div className="address">
          <h3>Shipping Address</h3>

          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter Your Name"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="House no., Street, Area"
          />

          <div>
            <div className="cityandpin">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" placeholder="City" />
            </div>

            <div className="cityandpin">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Pincode"
                maxLength={6}
              />
            </div>
          </div>
        </div>

        <div className="payment">
          <h3>Payment Method</h3>

          <div>
            <input type="radio" id="cash" name="payment" value="cod" />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>

          <div>
            <input type="radio" id="online" name="payment" value="online" />
            <label htmlFor="online">Online Payment</label>
          </div>
        </div>
      </form>

      <div className="order-summary">
        <h3>Order Summary</h3>

        {orderItems.map((item)=>{
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
        <h4>Total: ${subtotal+shipping} </h4>
        <Link to="/checkout">Place Order</Link>
      </div>
    </div>
  );
};

export default Checkout;
