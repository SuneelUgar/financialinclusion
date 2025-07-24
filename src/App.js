import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component imports
import Home from "./components/Home";
import RegisterChitFund from "./components/RegisterChitFund";
import RegisterUser from "./components/RegisterUser";
import FundDetails from "./FundDetails";
import PendingTransactions from "./components/PendingTransactions";
import BlockDetails from "./components/BlockDetails";
import UserTrans from "./components/UserTrans";
import CurrentParticipants from "./components/CurrentParticipants";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-chit-fund" element={<RegisterChitFund />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/fund/:id" element={<FundDetails />} />
        <Route path="/pending-transactions" element={<PendingTransactions />} />
        <Route path="/blocks/:blockId" element={<BlockDetails />} />
        <Route path="/user" element={<UserTrans />} />
        <Route path="/participants" element={<CurrentParticipants />} />{" "}
        {/* ✅ Added this */}
      </Routes>
    </Router>
  );
}

export default App;
