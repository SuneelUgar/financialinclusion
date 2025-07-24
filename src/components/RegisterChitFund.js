import React, { useState } from 'react';
import './RegisterChitFund.css';

const RegisterChitFund = () => {
  const [selectedFund, setSelectedFund] = useState('');

  return (
    <div className="register-container">
      <h2 className="register-title">📋 Register Chit Fund</h2>
      <div className="form-group">
        <label htmlFor="fund-select">Select Fund:</label>
        <select
          id="fund-select"
          value={selectedFund}
          onChange={(e) => setSelectedFund(e.target.value)}
        >
          <option value="">-- Choose Fund --</option>
          <option value="FundA">Fund A</option>
          <option value="FundB">Fund B</option>
          <option value="FundC">Fund C</option>
        </select>
      </div>
    </div>
  );
};

export default RegisterChitFund;
