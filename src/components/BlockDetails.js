// BlockDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blockData = {
  'block-alpha': {
    id: '001',
    name: 'Block Alpha',
    date: '2025-07-22',
    transactions: [
      { id: 1, name: 'Payment to Flipkart', amount: '₹1,299', date: '2025-07-22' },
      { id: 2, name: 'Zomato Order', amount: '₹520', date: '2025-07-21' },
      { id: 3, name: 'Mobile Recharge', amount: '₹299', date: '2025-07-20' },
      { id: 4, name: 'Cab to Office', amount: '₹250', date: '2025-07-20' },
      { id: 5, name: 'Electricity Bill', amount: '₹850', date: '2025-07-19' },
    ],
  },
  'block-beta': {
    id: '002',
    name: 'Block Beta',
    date: '2025-07-21',
    transactions: [
      { id: 6, name: 'Netflix Subscription', amount: '₹499', date: '2025-07-18' },
      { id: 7, name: 'Transfer to Rahul', amount: '₹5,000', date: '2025-07-17' },
      { id: 8, name: 'Amazon Purchase', amount: '₹1,100', date: '2025-07-16' },
      { id: 9, name: 'Food Delivery', amount: '₹430', date: '2025-07-15' },
      { id: 10, name: 'Credit Card Payment', amount: '₹3,200', date: '2025-07-15' },
    ],
  },
  'block-gamma': {
    id: '003',
    name: 'Block Gamma',
    date: '2025-07-20',
    transactions: [
      { id: 11, name: 'Spotify', amount: '₹199', date: '2025-07-14' },
      { id: 12, name: 'Transfer to Priya', amount: '₹2,000', date: '2025-07-13' },
      { id: 13, name: 'Swiggy Order', amount: '₹640', date: '2025-07-12' },
      { id: 14, name: 'Metro Card Recharge', amount: '₹150', date: '2025-07-11' },
      { id: 15, name: 'Fuel', amount: '₹2,500', date: '2025-07-10' },
      { id: 15, name: 'Fuel', amount: '₹2,500', date: '2025-07-10' },
      { id: 15, name: 'Fuel', amount: '₹2,500', date: '2025-07-10' },
      { id: 15, name: 'Fuel', amount: '₹2,500', date: '2025-07-10' }
    ],
  },
};

const BlockDetails = () => {
  const { blockId } = useParams();
  const block = blockData[blockId];

  if (!block) {
    return <p style={{ padding: '40px' }}>Block not found.</p>;
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#2c3e50' }}>{block.name} Details</h2>
      <p><strong>Block ID:</strong> {block.id}</p>
      <p><strong>Created On:</strong> {block.date}</p>

      <h3 style={{ marginTop: '30px' }}>Transactions</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {block.transactions.map(txn => (
          <li
            key={txn.id}
            style={{
              backgroundColor: '#f8f9fa',
              marginBottom: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              borderLeft: '4px solid #3498db',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <strong>{txn.name}</strong>
              <div style={{ fontSize: '0.85rem', color: '#555' }}>{txn.date}</div>
            </div>
            <div style={{ color: '#e67e22', fontWeight: 'bold' }}>{txn.amount}</div>
          </li>
        ))}
      </ul>

      <Link to="/pending-transactions" style={{ color: '#3498db', textDecoration: 'none' }}>
        ← Back to Pending Transactions
      </Link>
    </div>
  );
};

export default BlockDetails;
