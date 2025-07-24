import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Dummy list of funds for example
  const funds = [
    { id: 1, name: 'Alpha Chit Fund' },
    { id: 2, name: 'Beta Chit Group' },
    { id: 3, name: 'Gamma Finance Club' }
  ];

  const goToFundDetails = (id) => {
    navigate(`/fund/${id}`);
  };

  return (
    <div className="home-container">
     <div className="app-bar">
  <div className="title-wrapper">
    <span className="app-title">CHIT FUND APPLICATION</span>
  </div>
  <img src="assets/mylogo1.jpg" alt="Logo" className="app-logo" />
</div>

      <div className="button-section">
        <button onClick={() => navigate('/register-chit-fund')} className="nav-button">
          Register Chit Fund
        </button>
        <button onClick={() => navigate('/register-user')} className="nav-button">
          Register User
        </button>
      </div>

      <div className="fund-list-section">
        <h3>Registered Chit Funds</h3>
        <ul className="fund-list">
          {funds.map((fund) => (
            <li
              key={fund.id}
              className="fund-item"
              onClick={() => goToFundDetails(fund.id)}
            >
              {fund.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
