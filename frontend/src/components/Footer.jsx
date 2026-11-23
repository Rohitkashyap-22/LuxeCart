import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <h2>LuxeCart.</h2>
      <p>Discover your style. Shop with confidence.</p>
      <div className="container">
        <div className="links">
          <h4>Quick Links</h4>
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Cart</a>
          <a href="">My Orders</a>
        </div>
        <div className="links">
          <h4>Contact Us</h4>
          <a href="">Email: support@luxecart.com</a>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
        </div>
      </div>
      <h5>© 2026 LuxeCart. All Rights Reserved.</h5>
    </div>
  );
};

export default Footer;
