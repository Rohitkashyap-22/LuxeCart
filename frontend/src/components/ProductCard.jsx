import { Link } from 'react-router-dom';
import "./ProductCard.css";
import {useContext} from "react";
import {CartContext} from "../context/CartContext";

const ProductCard = ({product, buttonType}) => {

     const {addToCart} = useContext(CartContext)

     return (
          <div className="product-card">
               
               <img src={product.image} alt={product.name} />
               <h4>{product.name}</h4>
               <p>{product.category}</p>
               <p>${product.price}</p>
               { buttonType === "details" 
                    ? <Link to={`${product.id}`}>View Details</Link>
                    : <button onClick={()=>addToCart(product)}>Add to Cart</button>
               }
               
          </div>
     );
}

export default ProductCard