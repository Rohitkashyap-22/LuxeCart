import { Outlet, useLocation, NavLink } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const x = useLocation();

  return (
    <>
      <h1>AdminLayout</h1>
      <div className="admin-container">
        <div className="admin-sidebar">

          <h2>LuxeCart</h2>

          <div className="admin-navigation">
            <NavLink to="/admin" end>Dashboard</NavLink>
            <NavLink to="/admin/products">Products</NavLink>
            <NavLink to="/admin/orders">Orders</NavLink>
            <NavLink to="/customers">Customers</NavLink>
            <NavLink to="/login">Logout</NavLink>
          </div>

        </div>
        <div className="admin-main">

          <header className="admin-header">
            <h3>Admin Panel</h3>
          </header>

          <div className="admin-content">
            <Outlet />
          </div>

        </div>
      </div>
    </>
  );
};

export default AdminLayout;
