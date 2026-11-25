const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    joinedDate: "10 Oct 2026",
    totalOrders: 5,
    totalSpent: 4500,
    status: "Active",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "9876543211",
    joinedDate: "15 Oct 2026",
    totalOrders: 3,
    totalSpent: 2800,
    status: "Active",
  },
  {
    id: 3,
    name: "Aman Verma",
    email: "aman@example.com",
    phone: "9876543212",
    joinedDate: "20 Oct 2026",
    totalOrders: 1,
    totalSpent: 999,
    status: "Active",
  },
  {
    id: 4,
    name: "Neha Gupta",
    email: "neha@example.com",
    phone: "9876543213",
    joinedDate: "25 Oct 2026",
    totalOrders: 0,
    totalSpent: 0,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Vikas Kumar",
    email: "vikas@example.com",
    phone: "9876543214",
    joinedDate: "28 Oct 2026",
    totalOrders: 4,
    totalSpent: 5200,
    status: "Active",
  },
  {
    id: 6,
    name: "Anjali Mehta",
    email: "anjali@example.com",
    phone: "9876543215",
    joinedDate: "02 Nov 2026",
    totalOrders: 2,
    totalSpent: 2098,
    status: "Active",
  },
  {
    id: 7,
    name: "Karan Malhotra",
    email: "karan@example.com",
    phone: "9876543216",
    joinedDate: "05 Nov 2026",
    totalOrders: 0,
    totalSpent: 0,
    status: "Inactive",
  },
  {
    id: 8,
    name: "Sneha Joshi",
    email: "sneha@example.com",
    phone: "9876543217",
    joinedDate: "10 Nov 2026",
    totalOrders: 6,
    totalSpent: 6500,
    status: "Active",
  },
];

import "./AdminCustomers.css";

const AdminCustomers = () => {
  return (
    <div className="customers-page">
      {/* Page Heading */}
      <div className="customers-header">
        <h2>Customers</h2>
        <p>Manage and view your store customers</p>
      </div>

      {/* Customer Summary */}
      <div className="customer-stats">
        <div className="customer-stat-card">
          <p>Total Customers</p>
          <h3>8</h3>
        </div>

        <div className="customer-stat-card">
          <p>Active Customers</p>
          <h3>6</h3>
        </div>

        <div className="customer-stat-card">
          <p>Inactive Customers</p>
          <h3>2</h3>
        </div>

        <div className="customer-stat-card">
          <p>Total Orders</p>
          <h3>21</h3>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="customers-filters">
        <input
          type="text"
          name="customer-search"
          id="customer-search"
          placeholder="Search Customer Name or Email..."
        />

        <div className="customer-sort">
          <select name="status" id="customer-status" defaultValue="">
            <option value="">All Customers</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Customers Table */}
      <div className="customer-table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Joined Date</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.phone}</td>
                <td>{elem.joinedDate}</td>
                <td>{elem.totalOrders}</td>
                <td>${elem.totalSpent}</td>
                <td>{elem.status}</td>
                <td>
                  <button>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomers;
