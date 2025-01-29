import React, { useState, useEffect } from 'react';
import '../../assets/css/dashboard.css'; // Import your CSS file for styling

const CustomerDashboard = () => {
  const [userDetails, setUserDetails] = useState({
    name: 'User Name', // Replace with actual user data
    balance: 100,      // Replace with actual user data
    // ... other user details
  });

  const [orderHistory, setOrderHistory] = useState([
    // Sample order history data (replace with actual data fetching)
    { id: 1, items: 'Burger, Fries', amount: 25, date: '2024-10-26' },
    { id: 2, items: 'Pizza', amount: 30, date: '2024-10-25' },
    // ... more order history
  ]);

  const [menu, setMenu] = useState([
    // Sample menu data (replace with actual data fetching)
    { id: 1, name: 'Burger', price: 15 },
    { id: 2, name: 'Fries', price: 10 },
    { id: 3, name: 'Pizza', price: 20 },
    // ... more menu items
  ]);

  useEffect(() => {
    // Fetch user details and order history from API here
    // Example using fetch:
    // fetch('/api/user')
    //   .then(res => res.json())
    //   .then(data => setUserDetails(data));

    // fetch('/api/orders')
    //   .then(res => res.json())
    //   .then(data => setOrderHistory(data));

    // fetch('/api/menu') // Fetch the menu
    //   .then(res => res.json())
    //   .then(data => setMenu(data));


    // For now, using placeholder data
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="dashboard-container">
      <div className="user-info">
        <h2>Welcome, {userDetails.name}!</h2>
        <p>Balance: ₹{userDetails.balance}</p>
        {/* Add other user details here */}
      </div>

      <div className="order-history">
        <h3>Order History</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Items</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.items}</td>
                <td>₹{order.amount}</td>
                <td>{order.date}</td>
              </tr>
            ))}
            {orderHistory.length === 0 && <tr><td colSpan="4">No orders yet.</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="menu">
        <h3>Menu</h3>
        <ul>
          {menu.map(item => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      </div>

      {/* Add other sections like "Make an Order" here */}
    </div>
  );
};

export default CustomerDashboard;