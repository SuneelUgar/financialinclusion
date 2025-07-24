import React from 'react';
import { Link } from 'react-router-dom';

const transactions = [
  { id: 1, name: 'Payment to Flipkart', amount: '₹1,299', date: '2025-07-22' },
  { id: 2, name: 'Electricity Bill', amount: '₹850', date: '2025-07-20' },
  { id: 3, name: 'Subscription: Netflix', amount: '₹499', date: '2025-07-18' },
  { id: 4, name: 'Transfer to Rahul', amount: '₹5,000', date: '2025-07-17' },
  { id: 5, name: 'Credit Card Payment', amount: '₹3,200', date: '2025-07-15' },
];

const blocks = ['Block Alpha', 'Block Beta', 'Block Gamma'];

const PendingTransactions = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Pending Transactions</h1>

      <ul style={styles.list}>
        {transactions.map(txn => (
          <li key={txn.id} style={styles.item}>
            <div>
              <strong>{txn.name}</strong>
              <div style={styles.date}>{txn.date}</div>
            </div>
            <div style={styles.amount}>{txn.amount}</div>
          </li>
        ))}
      </ul>

      <div style={styles.blocksSection}>
        <div style={styles.blockStat}>
          <div style={styles.circle}></div>
          <div>
            <div style={styles.statLabel}>Total Blocks</div>
            <div style={styles.statValue}>{blocks.length}</div>
          </div>
        </div>

        <h2 style={styles.subheading}>Blocks Created:</h2>
        <ul style={styles.blockList}>
          {blocks.map((block, index) => {
            const blockId = block.toLowerCase().replace(/\s+/g, '-');
            return (
              <li key={index} style={styles.blockItem}>
                <Link to={`/blocks/${blockId}`} style={styles.link}>
                  • {block}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '650px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#fefefe',
    borderRadius: '10px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
  },
  heading: { textAlign: 'center', color: '#222', marginBottom: '30px' },
  list: { listStyle: 'none', padding: 0, marginBottom: '40px' },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '12px',
    borderLeft: '4px solid #3498db',
  },
  date: { fontSize: '0.85rem', color: '#777', marginTop: '4px' },
  amount: { fontWeight: 'bold', color: '#e67e22' },
  blocksSection: { borderTop: '1px solid #ddd', paddingTop: '30px' },
  blockStat: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: '#ecf0f1',
    padding: '15px 20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: 'inset 0 0 4px rgba(0,0,0,0.05)',
  },
  circle: { width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#3498db' },
  statLabel: { fontSize: '0.9rem', color: '#555', marginBottom: '4px' },
  statValue: { fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50' },
  subheading: { fontSize: '1.1rem', marginBottom: '10px', color: '#2c3e50' },
  blockList: { listStyleType: 'none', paddingLeft: '10px' },
  blockItem: { fontSize: '1rem', color: '#34495e', marginBottom: '6px' },
  link: { textDecoration: 'none', color: '#2980b9', fontWeight: '500' },
};

export default PendingTransactions;
