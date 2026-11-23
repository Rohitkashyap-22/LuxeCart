import "./Products.css";
import { Link } from "react-router-dom";
import { products } from "../data/product";

const Products = () => {
  return (
    <div className="products-container">
      {products.map((elem) => {
        return (
          <div key={elem.id} className="products-card">
            <img src={elem.image} alt={elem.name} />
            <h4>{elem.name}</h4>
            <p>{elem.category}</p>
            <p>${elem.price}</p>
            <Link to={`${elem.id}`}>View Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
