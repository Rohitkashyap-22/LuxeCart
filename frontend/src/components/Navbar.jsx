import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

  const Navbar = () => {
    const navigate = useNavigate();
    const [inp, setInp] = useState("");

    const handleChange = (e) => {
      setInp(e.target.value)
    }

    const handleSearch = (e) => {
      e.preventDefault();
      const value = inp.trim();
      navigate(`/products?search=${encodeURIComponent(value)}`);
    }


    return (
      <nav className="navbar">
        <h2>LuxeCart</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search-products"
              placeholder="Search..."
              value={inp}
              onChange={handleChange}
            />
            <button type='submit'>Search</button>
          </form>

          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    );
  }

  export default Navbar;