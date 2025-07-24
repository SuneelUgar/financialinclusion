import React from 'react';
import './UserTrans.css'; // 👈 Import the CSS file

const UserTrans = () => {
  // Simulated user data
  const user = {
    name: "John Doe",
    transactions: [
      { id: 1, type: "deposit", amount: 5000, date: "2025-07-01", chitFundName: "Alpha Fund" },
      { id: 2, type: "loaned", amount: 2000, date: "2025-07-05", chitFundName: "Alpha Fund" },
      { id: 3, type: "deposit", amount: 3000, date: "2025-07-10", chitFundName: "Beta Fund" },
      { id: 4, type: "loaned", amount: 1500, date: "2025-07-15", chitFundName: "Beta Fund" },
    ],
  };

  const deposits = user.transactions.filter(tx => tx.type === 'deposit');
  const loaned = user.transactions.filter(tx => tx.type === 'loaned');

  return (
    <div className="user-container">
      <h1 className="user-header">User Dashboard</h1>
      <h2 className="user-subheader">👤 {user.name}</h2>

      <div className="user-section">
        <h3 className="user-section-title">💰 Deposits</h3>
        <div className="card-list">
          {deposits.map(tx => (
            <div key={tx.id} className="card">
              <p><strong>₹{tx.amount}</strong></p>
              <p>{tx.date}</p>
              <p>🏦 {tx.chitFundName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="user-section">
        <h3 className="user-section-title">📤 Loaned</h3>
        <div className="card-list">
          {loaned.map(tx => (
            <div key={tx.id} className="card card-loan">
              <p><strong>₹{tx.amount}</strong></p>
              <p>{tx.date}</p>
              <p>🏦 {tx.chitFundName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserTrans;
