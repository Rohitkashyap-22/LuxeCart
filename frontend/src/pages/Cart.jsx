import './Cart.css'

const cartItems = [
  {
    id: 1,
    name: "Bangles",
    category: "Accessories",
    price: 799,
    image: "/products/Bangles.jpg",
    quantity: 2,
  },
  {
    id: 2,
    name: "Bracelete",
    category: "Accessories",
    price: 999,
    image: "/products/Bracelete.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Handbag",
    category: "Fashion",
    price: 1499,
    image: "/products/Handbag.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Scarf",
    category: "Fashion",
    price: 599,
    image: "/products/scarf.jpg",
    quantity: 2,
  },
  {
    id: 5,
    name: "Shoes",
    category: "Footwear",
    price: 1999,
    image: "/products/Shoes.jpg",
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-summary">
          <div className="item-container">
            {cartItems.map((item) => {
              return (
                  <div key={item.id} className="itemcard">
                    <img src={item.image} alt="" />
                    <div className='description'>
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
        
        <div className="summary">
          <h3>Order Summary</h3>
          <p>Subtotal: $ </p>
          <p>Shipping: $ </p>
          <h4>Total: $ </h4>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart