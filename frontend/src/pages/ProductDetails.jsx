import { useParams } from "react-router-dom";
import { products } from "../data/product";
import './ProductDetails.css'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
	const { id } = useParams();
	const currentProduct = products.find((elem) => elem.id === Number(id));
  const {addToCart} = useContext(CartContext)

	if (!currentProduct) {
		return <h2>Product not found!</h2>;
	}
	return (
    <div className="details">
      <img src={currentProduct.image} alt={currentProduct.name} />
      <div>
        <h2>{currentProduct.name}</h2>
        <p>Price: ${currentProduct.price}</p>
        <p>Category: {currentProduct.category}</p>
        <button onClick={() => addToCart(currentProduct)}>
          Add to Cart
          </button>
      </div>
    </div>
  );
};

export default ProductDetails;
