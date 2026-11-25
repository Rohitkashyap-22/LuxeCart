import "./Products.css";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="products-container">
      {products.map((elem) => {
        return (
          <ProductCard key={elem.id} product={elem} buttonType="details" />
        );
      })}
    </div>
  );
};

export default Products;
