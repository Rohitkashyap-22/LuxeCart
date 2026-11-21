import './Navbar.css';

const Navbar = () => {
	return (
    <nav className="navbar">
      <h2>LuxeCart</h2>

      <div>
        <a href="">Home</a>
        <a href="">Products</a>
        <input type="text" placeholder="Search..." />
        <a href="">Cart</a>
		<a href=''>Login</a>
      </div>
    </nav>
  );
}

export default Navbar;