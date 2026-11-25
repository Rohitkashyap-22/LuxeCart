import "./Cart.css";
import {cartItems} from "../data/product";
import OrderSummary from "../components/OrderSummary";


const Cart = () => {

  const shipping = 50;
  const subtotal = cartItems.reduce((acc,current)=>{
      return acc += (current.price * current.quantity)
    }, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-summary">
        <div className="item-container">
          {cartItems.map((item) => {
            return (
              <div key={item.id} className="itemcard">
                <img src={item.image} alt="" />
                <div className="description">
                  <h4>{item.name}</h4>
                  <p>description</p>
                  <p>Quantity: {item.quantity}</p>
                  <h4>${item.price}</h4>
                </div>
                <button>Remove</button>
              </div>
            );
          })}
        </div>

        <OrderSummary page="cart" shipping={shipping} subtotal={subtotal}/>

      </div>
    </div>
  );
};

export default Cart;
