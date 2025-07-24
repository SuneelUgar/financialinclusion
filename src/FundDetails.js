import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const FundDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goToUserPage = () => {
    navigate('/user'); // Adjust the path as per your routing setup
  };
  // In real app, fetch details using id
  return (
    <div style={{ padding: '40px' }}>
      <h2>Chit Fund Details</h2>
      <p><strong>Fund ID:</strong> {id}</p>
      <p>More details about the fund can be shown here...</p>
      <button onClick={goToUserPage} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Go to User Page
      </button>
    </div>
  );
};

export default FundDetails;
