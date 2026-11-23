import {Outlet, Link} from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <h2>AdminLayout</h2>
      <div>
        <div>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/orders">Orders</Link>
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default AdminLayout    