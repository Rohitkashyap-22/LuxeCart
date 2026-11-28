import { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add a product to cart or increase its quantity if it already exists
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    let newCartItems;

    if (existingItem) {
      // Increase quantity of the existing product
      newCartItems = cartItems.map((elem) =>
        elem.id === product.id
          ? { ...elem, quantity: elem.quantity + 1 }
          : elem,
      );
    } else {
      // Add new product with initial quantity of 1
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(newCartItems);
  };

  // Decrease product quantity and remove it if quantity becomes 0
  const minusToCart = (product) => {
    let newCartItems = cartItems.map((elem) => {
      if (elem.id === product.id) {
        return { ...elem, quantity: elem.quantity - 1 };
      }

      return elem;
    });

    // Keep only products with quantity greater than 0
    newCartItems = newCartItems.filter((elem) => elem.quantity > 0);

    setCartItems(newCartItems);
  };

  // Remove a product completely from the cart
  const removeFromCart = (product) => {
    const newCartItems = cartItems.filter((elem) => elem.id !== product.id);

    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        minusToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
