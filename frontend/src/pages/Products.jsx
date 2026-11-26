import "./Products.css";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [params] = useSearchParams();
  const searchValue = (params.get("search") || "").trim().toLowerCase();

  const filteredProducts = searchValue
    ? products.filter((elem) => {
        return (
          elem.category.toLowerCase().includes(searchValue) ||
          elem.name.toLowerCase().includes(searchValue)
        );
      })
    : products; 

  return (
    <div className="products-container">
      {filteredProducts.length > 0 
        ? filteredProducts.map((elem) => {
            return (
              <ProductCard key={elem.id} product={elem} buttonType="details" />
            );
          })
        : <p>No products found.</p>
      }
    </div>
  );
};

export default Products;
