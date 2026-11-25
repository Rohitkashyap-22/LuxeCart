const products = [
  {
    id: 1,
    name: "Bangles",
    category: "Accessories",
    price: 799,
    image: "/products/Bangles.jpg",
    stock: 25,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Bracelete",
    category: "Accessories",
    price: 999,
    image: "/products/Bracelete.jpg",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 3,
    name: "Handbag",
    category: "Fashion",
    price: 1499,
    image: "/products/Handbag.jpg",
    stock: 12,
    status: "In Stock",
  },
  {
    id: 4,
    name: "Scarf",
    category: "Fashion",
    price: 599,
    image: "/products/scarf.jpg",
    stock: 8,
    status: "In Stock",
  },
  {
    id: 5,
    name: "Shoes",
    category: "Footwear",
    price: 1999,
    image: "/products/Shoes.jpg",
    stock: 0,
    status: "Out of Stock",
  },
];

import "./AdminProducts.css";

const AdminProducts = () => {
  return (
    <div className="products-page">
      {/* Page Heading */}
      <div className="products-header">
        <div>
          <h2>Products</h2>
          <p>Manage your store products</p>
        </div>
        <button>+ Add Product</button>
      </div>

      {/* Product Summary */}
      <div className="product-stats">
        <div className="stat-card">
          <p>Total Products</p>
          <h3>5</h3>
        </div>

        <div className="stat-card">
          <p>In Stock</p>
          <h3>3</h3>
        </div>

        <div className="stat-card">
          <p>Out of Stock</p>
          <h3>2</h3>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="product-filters">
        <input
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products..."
        />
        <div className="filters">
          <select name="category" id="category" defaultValue="">
            <option value="">All Categories</option>
            <option value="accessories">Accessories</option>
            <option value="fashion">Fashion</option>
            <option value="footwear">Footwear</option>
          </select>

          <select name="stock" id="stock" defaultValue="">
            <option value="">All Stock</option>
            <option value="in-stock">In Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((elem) => (
              <tr key={elem.id}>
                <td>
                  <div className="product-info">
                    <img src={elem.image} alt={elem.name} />
                    <span>{elem.name}</span>
                  </div>
                </td>
                <td>{elem.category}</td>
                <td>${elem.price}</td>
                <td>{elem.stock}</td>
                <td>{elem.status}</td>
                <td className="actions">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
