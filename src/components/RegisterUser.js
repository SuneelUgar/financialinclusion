import React, { useState } from 'react';
import './RegisterUser.css';

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [pan, setPan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User registered:', { username, pan });
  };

  return (
    <div className="user-register-container">
      <h2 className="form-title">👤 Register User</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>PAN Card:</label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            required
            placeholder="Enter PAN"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default RegisterUser;
