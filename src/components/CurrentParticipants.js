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
  const [formData, setFormData] = useState({ user: "", account: "", type: "" });

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
        setTopContributors(data.highestContributor || []);
      } catch (err) {
        console.error("Error loading fund details", err);
      }
    };

    fetchFundDetails();
  }, [fundName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({ user: "", account: "", type: "" });
  };

  const goToUserTrans = (userName) => {
    navigate("/user", { state: { userName } });
  };

  return (
    <div className="p-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen font-sans">
      {/* Header */}
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

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Members */}
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
        </div>

        {/* Summary */}
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

      {/* Modal */}
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
              type="text"
              name="account"
              placeholder="Account"
              value={formData.account}
              onChange={handleChange}
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type}
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
    </div>
  );
};

export default CurrentParticipants;
