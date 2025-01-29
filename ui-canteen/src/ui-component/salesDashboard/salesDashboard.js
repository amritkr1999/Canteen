import React, { useState, useEffect } from 'react';
import '../../assets/css/canteenDashboard.css';

const CanteenDashboard = () => {
  const [orders, setOrders] = useState([
    // Sample order data (replace with actual data fetching)
    { id: 1, items: 'Burger x2, Fries', customer: 'User A', amount: 50, status: 'pending' },
    { id: 2, items: 'Pizza', customer: 'User B', amount: 30, status: 'completed' },
    // ... more order data
  ]);

  const [pendingPayments, setPendingPayments] = useState([
    // Sample pending payments data
    { customer: 'User A', amount: 50 },
    // ...
  ]);

  const [stock, setStock] = useState([
    // Sample stock data
    { item: 'Burger', quantity: 20 },
    { item: 'Fries', quantity: 30 },
    { item: 'Pizza', quantity: 15 },
    // ...
  ]);

  useEffect(() => {
    // Fetch order data, pending payments, and stock from your API here
    // Example:
    // fetch('/api/orders')
    //   .then(res => res.json())
    //   .then(data => setOrders(data));

    // ... similar fetches for pending payments and stock

    // For now, using placeholder data
  }, []);

  const handleOrderStatusChange = (orderId, newStatus) => {
    // Update the order status in your backend API
    // Example:
    // fetch(`/api/orders/${orderId}`, {
    //   method: 'PUT',
    //   body: JSON.stringify({ status: newStatus })
    // })
    //   .then(res => { ... });

    // Update the state to reflect the change (for UI update)
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="canteen-dashboard-container">
      <h2>Canteen Dashboard</h2>

      <div className="orders-section">
        <h3>Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Items</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th> {/* Add action column */}
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.items}</td>
                <td>{order.customer}</td>
                <td>₹{order.amount}</td>
                <td>{order.status}</td>
                <td>
                  {order.status === 'pending' && (
                    <button onClick={() => handleOrderStatusChange(order.id, 'completed')}>
                      Mark as Completed
                    </button>
                  )}
                  {/* Add other actions as needed (e.g., "Cancel") */}
                </td>
              </tr>
            ))}
            {orders.length === 0 && <tr><td colSpan="6">No orders yet.</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="payments-section">
        <h3>Pending Payments</h3>
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {pendingPayments.map((payment, index) => (
              <tr key={index}> {/* Use index as key for now, improve if you have a unique ID */}
                <td>{payment.customer}</td>
                <td>₹{payment.amount}</td>
              </tr>
            ))}
            {pendingPayments.length === 0 && <tr><td colSpan="2">No pending payments.</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="stock-section">
        <h3>Available Stock</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((item, index) => (
              <tr key={index}> {/* Use index as key for now, improve if you have a unique ID */}
                <td>{item.item}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
            {stock.length === 0 && <tr><td colSpan="2">No stock information available.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CanteenDashboard;