import "./Home.css";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const productList = products.slice(0, 4);

  return (
    <>
      <div className="hero">
        <div>
          <h1>Discover Your Style</h1>
          <p>
            Each strand thoughtfully designed to match your vibe. Crafted with
            premium material.
          </p>
          <button>Shop Now</button>
        </div>
        <img src="/theme.jpg" alt="theme profile pic" />
      </div>

      <div className="category">
        <h2>Shop By Category</h2>
        <div className="category-container">
          <div className="category-card">
            <img src="./men.jpg" alt="Men" />
            <h2>Men</h2>
            <p>Explore Collection</p>
          </div>
          <div className="category-card">
            <img src="./women.jpg" alt="Women" />
            <h2>Women</h2>
            <p>Explore Collection</p>
          </div>
          <div className="category-card">
            <img src="./accessory.jpg" alt="Accessories" />
            <h2>Accessories</h2>
            <p>Explore Collection</p>
          </div>
        </div>
      </div>

      <div className="featured">
        <h2>Featured Products</h2>
        <div className="featured-container">
          {productList.map((elem) => {
            return (
              <ProductCard
                key={elem.id}
                product={elem}
                buttonType="addToCart"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
