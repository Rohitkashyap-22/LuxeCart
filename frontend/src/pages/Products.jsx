import "./Products.css";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [params] = useSearchParams();
  const searchValue = (params.get("search") || "").trim().toLowerCase();
  const [selectedCategory, setSelectedCategory] = useState("allCategories");

  // extract selected category
  const handleSelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  // filter original products on the basis of selected category dropdown
  const categoryProducts = products.filter((elem) => {
    return (
      selectedCategory === "allCategories" ||
      elem.category.toLowerCase() === selectedCategory
    )
  });

  // filter the filtered (selected category products) further on the basis of search query
  const filteredProducts = searchValue
    ? categoryProducts.filter((elem) => {
        return (
          elem.category.toLowerCase().includes(searchValue) ||
          elem.name.toLowerCase().includes(searchValue)
        );
      })
    : categoryProducts;

  return (
    <>
      <select
        id="product-select"
        name="product"
        value={selectedCategory}
        onChange={handleSelect}
      >
        <option value="allCategories">All Categories</option>
        <option value="accessories">Accessories</option>
        <option value="footwear">Footwear</option>
        <option value="clothing">Clothing</option>
      </select>

      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((elem) => {
            return (
              <ProductCard key={elem.id} product={elem} buttonType="details" />
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
};

export default Products;
