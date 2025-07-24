import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterChitFund from './components/RegisterChitFund';
import RegisterUser from './components/RegisterUser';
import FundDetails from './FundDetails';
import UserTrans from './components/UserTrans';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-chit-fund" element={<RegisterChitFund />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/fund/:id" element={<FundDetails />} />
        <Route path="/user" element={<UserTrans/>}/>
      </Routes>
    </Router>
  );
}

export default App;
