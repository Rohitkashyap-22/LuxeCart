import './Home.css'

const Home = () => {
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
        <div className='featured-container'>
          <div className="product">
            <img src="./sneakers.jpg" alt="sneakers" />
            <h3>Sneakers</h3>
            <p>$400</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="./watch.jpg" alt="watch" />
            <h3>Watch</h3>
            <p>$800</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="./handbag.jpg" alt="handbag" />
            <h3>Handbag</h3>
            <p>$300</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src="./shirt.jpg" alt="tshirt" />
            <h3>Shirt</h3>
            <p>$300</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home