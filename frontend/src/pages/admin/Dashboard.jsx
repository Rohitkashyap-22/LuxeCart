const orders = [
  {
    orderId: "1001",
    customer: "Rahul Sharma",
    date: "24 Nov 2026",
    amount: 799,
    status: "Delivered",
  },
  {
    orderId: "1002",
    customer: "Aman Verma",
    date: "23 Nov 2026",
    amount: 1499,
    status: "Pending",
  },
  {
    orderId: "1003",
    customer: "Priya Singh",
    date: "23 Nov 2026",
    amount: 999,
    status: "Shipped",
  },
  {
    orderId: "1004",
    customer: "Neha Gupta",
    date: "22 Nov 2026",
    amount: 2499,
    status: "Processing",
  },
  {
    orderId: "1005",
    customer: "Karan Mehta",
    date: "21 Nov 2026",
    amount: 599,
    status: "Pending",
  },
];
import "./Dashboard.css";
import { NavLink } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <h2>Dashboard</h2>
        <p>Welcome back, Admin! Here's what's happening with your store.</p>
      </div>

      <div className="store-summary">
        <div className="store-summary-card">
          <p>Total Products</p>
          <h3>120</h3>
          <p>Products in store</p>
        </div>
        <div className="store-summary-card">
          <p>Total Orders</p>
          <h3>400</h3>
          <p>All orders</p>
        </div>
        <div className="store-summary-card">
          <p>Pending Orders</p>
          <h3>18</h3>
          <p>Awaiting processing</p>
        </div>
        <div className="store-summary-card">
          <p>Total Revenue</p>
          <h3>$24,000</h3>
          <p>Total sales</p>
        </div>
      </div>
      <h3 className="table-heading">Recent Orders</h3>
      <table className="recent-orders">
        
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((elem) => {
            return (
              <tr key={elem.orderId}>
                <td>#{elem.orderId}</td>
                <td>{elem.customer}</td>
                <td>{elem.date}</td>
                <td>${elem.amount}</td>
                <td>{elem.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="quick-action">
        <NavLink to="/admin/orders">View All Orders</NavLink>
        <NavLink to="/admin/products">+Add Product</NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
