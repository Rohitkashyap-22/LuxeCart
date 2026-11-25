const orders = [
  {
    orderId: "1001",
    customer: "Rahul Sharma",
    date: "24 Nov 2026",
    items: 2,
    amount: 799,
    status: "Delivered",
  },
  {
    orderId: "1001",
    customer: "Rahul Sharma",
    date: "24 Nov 2026",
    items: 2,
    amount: 799,
    status: "Delivered",
  },
  {
    orderId: "1002",
    customer: "Aman Verma",
    date: "23 Nov 2026",
    items: 1,
    amount: 999,
    status: "Pending",
  },
  {
    orderId: "1003",
    customer: "Priya Singh",
    date: "22 Nov 2026",
    items: 3,
    amount: 1499,
    status: "Shipped",
  },
  {
    orderId: "1004",
    customer: "Neha Gupta",
    date: "21 Nov 2026",
    items: 2,
    amount: 2598,
    status: "Processing",
  },
  {
    orderId: "1005",
    customer: "Vikas Kumar",
    date: "20 Nov 2026",
    items: 1,
    amount: 1999,
    status: "Cancelled",
  },
  {
    orderId: "1006",
    customer: "Anjali Mehta",
    date: "19 Nov 2026",
    items: 2,
    amount: 2098,
    status: "Delivered",
  },
  {
    orderId: "1007",
    customer: "Karan Malhotra",
    date: "18 Nov 2026",
    items: 1,
    amount: 599,
    status: "Shipped",
  },
  {
    orderId: "1008",
    customer: "Sneha Joshi",
    date: "17 Nov 2026",
    items: 3,
    amount: 4297,
    status: "Pending",
  },
];

import "./AdminOrders.css";

const AdminOrders = () => {
  return (
    <div className="orders-page">
      {/* Page Heading */}
      <div className="orders-header">
        <h2>Orders</h2>
        <p>Manage and track all customer orders</p>
      </div>

      {/* order Summary */}
      <div className="orders-stats">
        <div className="orders-stat-card">
          <p>Total Orders</p>
          <h3>8</h3>
        </div>

        <div className="orders-stat-card">
          <p>Pending</p>
          <h3>2</h3>
        </div>

        <div className="orders-stat-card">
          <p>Processing</p>
          <h3>1</h3>
        </div>

        <div className="orders-stat-card">
          <p>Delivered</p>
          <h3>2</h3>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="orders-filters">
        <input
          type="text"
          name="orders-search"
          id="orders-search"
          placeholder="Search Order ID or Customer..."
        />
        <div className="orders-sort">
          <select name="status" id="status" defaultValue="">
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <select name="dates" id="dates" defaultValue="">
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="last-7-days">Last 7 Days</option>
            <option value="last-30-days">Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="order-table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((elem) => (
              <tr key={elem.orderId}>
                <td>{elem.orderId}</td>
                <td>{elem.customer}</td>
                <td>{elem.date}</td>
                <td>{elem.items}</td>
                <td>{elem.amount}</td>
                <td>{elem.status}</td>
                <td><button>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
