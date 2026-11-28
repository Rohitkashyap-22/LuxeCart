import "./Checkout.css";
import OrderSummary from "../components/OrderSummary";
import { useContext, useState } from "react";
import {CartContext} from "../context/CartContext"
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [ formData, setFormData ] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country:"",
    pincode: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Full Name
    if (formData.fullname.trim().length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }
    // Phone Number
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10 digit phone number");
      return;
    }
    // Pincode
    if (!/^[0-9]{6}$/.test(formData.pincode)) {
      alert("Please enter a valid 6 digit pincode");
      return;
    }
    // Address
    if (formData.address.trim() === "") {
      alert("Please enter your address");
      return;
    }
    // City
    if (formData.city.trim() === "") {
      alert("Please enter your city");
      return;
    }
    // State
    if (formData.state.trim() === "") {
      alert("Please enter your state");
      return;
    }
    //country
    if (formData.country.trim() === "") {
      alert("Please enter your country");
      return;
    }
    // Payment
    if (!formData.payment) {
      alert("Please select a payment method");
      return;
    }

    const order = {
      customer: formData,
      items: cartItems,
      subtotal: subtotal,
      shipping: shipping,
      total: subtotal + shipping,
      paymentMethod: formData.payment
    }

    sessionStorage.setItem("latestOrder", JSON.stringify(order))
    setCartItems([])
    navigate("/order-success")
  };

  const shipping = 50;
  const subtotal = cartItems.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  return (
    <div className="checkout-container">
      <form
        className="checkout-form"
        id="checkout-form"
        onSubmit={handleSubmit}
      >
        <div className="address">
          <h3>Shipping Address</h3>

          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter Your Name"
            value={formData.fullname}
            required
            minLength={3}
            onChange={handleChange}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            required
            maxLength={10}
            minLength={10}
            onChange={handleChange}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="House no., Street, Area"
            value={formData.address}
            required
            onChange={handleChange}
          />

          <div className="city-state-pin">
            <div className="cityandpin">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                required
                onChange={handleChange}
              />
            </div>

            <div className="cityandpin">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                required
                onChange={handleChange}
              />
            </div>

            <div className="cityandpin">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                minLength={6}
                maxLength={6}
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="India"
            value={formData.country}
            required
            onChange={handleChange}
          />
        </div>

        <div className="payment">
          <h3>Payment Method</h3>

          <div>
            <input
              type="radio"
              id="cash"
              name="payment"
              value="cod"
              checked={formData.payment === "cod"}
              required
              onChange={handleChange}
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>

          <div>
            <input
              type="radio"
              id="online"
              name="payment"
              value="online"
              checked={formData.payment === "online"}
              required
              onChange={handleChange}
            />
            <label htmlFor="online">Online Payment</label>
          </div>
        </div>
      </form>

      <OrderSummary
        orderItems={cartItems}
        page="checkout"
        shipping={shipping}
        subtotal={subtotal}
      />
    </div>
  );
};

export default Checkout;
