import React, { useState } from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const participants = [
  { name: "Aditi" },
  { name: "Jahnavi" },
  { name: "Chahat" },
  { name: "Suneel" },
  { name: "Srijan" },
  { name: "Sangam" },
];

const CurrentParticipants = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    user: "",
    account: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowModal(false);
    setFormData({ user: "", account: "", type: "" });
  };

  const goToUserTrans = (userName) => {
    navigate("/user", {
      state: {
        userName,
      },
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-3xl font-semibold py-4 px-8 rounded-2xl shadow-lg flex justify-between items-center">
        <h2>Current Participants</h2>
        <button
          className="bg-white text-blue-600 font-medium py-1 px-4 rounded-lg hover:bg-gray-200"
          onClick={() => setShowModal(true)}
        >
          + Add trx
        </button>
      </div>

      {/* Participant List */}
      <div className="mt-6 space-y-3 max-w-md">
        {participants.map((p, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg transition duration-200 hover:shadow-lg hover:shadow-blue-400 bg-transparent cursor-pointer"
            onClick={() => goToUserTrans(p.name)}
          >
            <FaUserCircle className="text-blue-600 text-2xl" />
            <span className="text-gray-800 font-medium text-base">
              {p.name}
            </span>
          </div>
        ))}
      </div>

      {/* Group Summary */}
      <div className="mt-10 max-w-md">
        <div className="bg-blue-50 border border-blue-400 p-5 rounded-xl shadow-md">
          <h3 className="text-blue-800 font-semibold text-lg mb-3">
            Group Summary
          </h3>
          <div className="flex justify-between mb-2">
            <span className="text-green-700 font-medium">Pot Value</span>
            <span className="text-green-900 font-semibold">₹ 1,20,000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-red-600 font-medium">Loaned Amount</span>
            <span className="text-red-800 font-semibold">₹ 40,000</span>
          </div>
          <div className="mt-4">
            <span className="text-blue-700 font-medium">Top Contributors</span>
            <ul className="mt-2 space-y-1">
              {participants.slice(0, 5).map((p, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <FaStar className="text-yellow-400" />
                  <span>{p.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Add Transaction
            </h3>

            <input
              type="text"
              name="user"
              placeholder="User"
              value={formData.user}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />

            <input
              type="text"
              name="account"
              placeholder="Account"
              value={formData.account}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />

            <input
              type="text"
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />

            <div className="flex justify-end space-x-3 pt-2">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
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
