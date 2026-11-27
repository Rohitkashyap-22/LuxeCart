import "./Cart.css";
import OrderSummary from "../components/OrderSummary";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeFromCart, addToCart, minusToCart } =
    useContext(CartContext);

    const shipping = 50;

     // Calculate total price of all cart items
     const subtotal = cartItems.reduce((total, item) =>{
          return total + item.price * item.quantity
     },0);

     // Show empty cart UI when there are no products
     if (cartItems.length === 0) {
     return (
          <div className="empty-cart">
               <img src="/cartImage.jpg" alt="Empty Cart" />
               <h1>Your Cart is Empty</h1>
               <Link to="/products">Continue Shopping</Link>
          </div>
     )}

     return (
          <div className="cart">
               <h2>Shopping Cart</h2>

               <div className="cart-summary">
               <div className="item-container">
                    {cartItems.map((item) => (
                         <div key={item.id} className="itemcard">
                              <img src={item.image} alt={item.name} />

                              <div className="description">
                                   <h4>{item.name}</h4>
                                   <p>Description</p>
                                   <h4>${item.price}</h4>
                              </div>

                              <div className="btn-section">
                                   <button onClick={() => removeFromCart(item)}>Remove</button>

                                   <div className="add-remove">
                                        <button onClick={() => addToCart(item)}>+</button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => minusToCart(item)}>-</button>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>

               <OrderSummary page="cart" shipping={shipping} subtotal={subtotal} />
               </div>
          </div>
     )
};

export default Cart;
