import React, { useEffect, useState } from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const CurrentParticipants = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const fundName = query.get("name");
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [potValue, setPotValue] = useState(0);
  const [loanedAmount, setLoanedAmount] = useState(0);
  const [topContributors, setTopContributors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ user: "", amount: "" });
  const [showAddParticipantModal, setShowAddParticipantModal] = useState(false);
  const [newParticipant, setNewParticipant] = useState("");

  useEffect(() => {
    if (!fundName) return;

    const fetchFundDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND}/funds/getFundByName/${encodeURIComponent(fundName)}`
        );

        const data = response.data;

        setMembers(data.participants || []);
        setPotValue(data.fundValue || 0);
        setLoanedAmount(data.loanValue || 0);
        setTopContributors(Array.isArray(data.highestContributor) ? data.highestContributor : []);
      } catch (err) {
        console.error("Error loading fund details", err);
      }
    };

    fetchFundDetails();
  }, [fundName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.user.trim() || !formData.amount) {
      alert("Please fill user and amount");
      return;
    }

    try {
      const url = `${process.env.REACT_APP_BACKEND}/transactions/addTransaction`;
      await axios.post(url, {
        transactionAmount: Number(formData.amount),
        userName: formData.user.trim(),
        fundName,
      });

      alert("Transaction added successfully");
      setShowModal(false);
      setFormData({ user: "", amount: "" });
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Failed to add transaction");
    }
  };

  const goToUserTrans = (userName) => {
    navigate("/user", { state: { userName } });
  };

  return (
    <div className="p-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen font-sans">
      <div className="bg-slate-700 p-5 rounded-xl shadow-lg mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">{fundName}</h2>
          <p className="text-sm text-slate-300">Fund Overview</p>
        </div>
        <button
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100"
          onClick={() => setShowModal(true)}
        >
          + Add trx
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-700 p-4 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-3">Members</h3>
          <div className="space-y-3 overflow-y-auto max-h-80 pr-2">
            {members.map((m, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-2 rounded-md hover:bg-slate-600 cursor-pointer"
                onClick={() => goToUserTrans(m)}
              >
                <FaUserCircle className="text-blue-400 text-2xl" />
                <span className="text-white font-medium">{m}</span>
              </div>
            ))}
          </div>
          <button
            className="text-sm text-blue-300 mt-4 underline"
            onClick={() => setShowAddParticipantModal(true)}
          >
            + Add Participant
          </button>
        </div>

        <div className="bg-slate-700 p-5 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-3">Group Summary</h3>
          <div className="mb-4">
            <div className="flex justify-between py-2 border-b border-slate-600">
              <span className="text-green-400 font-medium">Pot Value</span>
              <span className="text-green-300 font-semibold">₹ {potValue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-600">
              <span className="text-red-400 font-medium">Loaned Amount</span>
              <span className="text-red-300 font-semibold">₹ {loanedAmount.toLocaleString()}</span>
            </div>
          </div>
          <div>
            <span className="text-blue-300 font-medium">Top Contributors</span>
            <ul className="mt-2 space-y-1">
              {topContributors.map((c, index) => (
                <li key={index} className="flex items-center space-x-2 text-white">
                  <FaStar className="text-yellow-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Transaction Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 rounded-xl p-6 w-full max-w-md shadow-2xl">
            <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
            <input
              type="text"
              name="user"
              placeholder="User"
              value={formData.user}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Participant Modal */}
      {showAddParticipantModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-gray-800 rounded-xl p-6 w-full max-w-sm shadow-2xl">
            <h3 className="text-lg font-semibold mb-4">Add New Participant</h3>
            <input
              type="text"
              placeholder="Participant Name"
              value={newParticipant}
              onChange={(e) => setNewParticipant(e.target.value)}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg"
                onClick={() => setShowAddParticipantModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                disabled={!newParticipant.trim()}
                onClick={async () => {
                  const url = `${process.env.REACT_APP_BACKEND}/funds/addUserToFund`;
                  try {
                    await axios.post(url, {
                      name: newParticipant.trim(),
                      fname: fundName,
                    });
                    setMembers([...members, newParticipant.trim()]);
                    setNewParticipant("");
                    setShowAddParticipantModal(false);
                  } catch (err) {
                    console.error("Failed to add participant:", err);
                    alert("Error adding participant.");
                  }
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentParticipants;
