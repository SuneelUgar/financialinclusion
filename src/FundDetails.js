import React from 'react';
import { useParams } from 'react-router-dom';

const FundDetails = () => {
  const { id } = useParams();

  // In real app, fetch details using id
  return (
    <div style={{ padding: '40px' }}>
      <h2>Chit Fund Details</h2>
      <p><strong>Fund ID:</strong> {id}</p>
      <p>More details about the fund can be shown here...</p>
    </div>
  );
};

export default FundDetails;
