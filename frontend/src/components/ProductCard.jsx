import { Link } from 'react-router-dom';
import "./ProductCard.css";

const ProductCard = ({product, buttonType}) => {
     return (
          <div className="product-card">
               
               <img src={product.image} alt={product.name} />
               <h4>{product.name}</h4>
               <p>{product.category}</p>
               <p>${product.price}</p>
               { buttonType === "details" 
                    ? <Link to={`${product.id}`}>View Details</Link>
                    : <button>Add to Cart</button>
               }
               
          </div>
     );
}

export default ProductCard