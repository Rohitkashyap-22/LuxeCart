import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
    <nav className="navbar">
      <h2>LuxeCart</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <input type="text" placeholder="Search..." />
        <Link to="/cart">Cart</Link>
		    <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;