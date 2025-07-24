import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Card}  from './Card';
import {CardContent} from './CardContent';
import {Separator} from './Separator';

const UserTrans = () => {
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    transactions: [
      { id: 1, type: "deposit", amount: 5000, date: "2025-07-01", chitFundName: "Alpha Fund" },
      { id: 2, type: "loaned", amount: 2000, date: "2025-07-05", chitFundName: "Alpha Fund" },
      { id: 3, type: "deposit", amount: 3000, date: "2025-07-10", chitFundName: "Beta Fund" },
      { id: 4, type: "loaned", amount: 1500, date: "2025-07-15", chitFundName: "Beta Fund" },
    ],
  };

  const deposits = user.transactions.filter(tx => tx.type === 'deposit');
  const loaned = user.transactions.filter(tx => tx.type === 'loaned');

  return (
    <div className="flex flex-col min-h-screen bg-[#f1f3f4]">
      <div className="flex items-center justify-between p-6 bg-white shadow-md">
        <button onClick={() => navigate(-1)} className="text-sm text-blue-600 hover:underline">← Back</button>
        <div className="text-2xl font-semibold text-[#202124]">User Dashboard</div>
        <div></div> {/* Placeholder for spacing */}
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-lg text-[#5f6368] mb-8">👤 {user.name}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-md text-[#188038] font-medium mb-2">💰 Deposits</h3>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {deposits.map(tx => (
                <Card key={tx.id} className="bg-white rounded-2xl shadow border border-[#dadce0] hover:shadow-md transition-shadow">
                  <CardContent className="p-4 space-y-2">
                    <p className="font-semibold text-[#188038] text-sm">₹{tx.amount}</p>
                    <p className="text-xs text-[#5f6368]">{tx.date}</p>
                    <p className="text-xs text-[#5f6368]">🏦 {tx.chitFundName}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md text-[#d93025] font-medium mb-2">📤 Loaned</h3>
            <Separator className="mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {loaned.map(tx => (
                <Card key={tx.id} className="bg-white rounded-2xl shadow border border-[#dadce0] hover:shadow-md transition-shadow">
                  <CardContent className="p-4 space-y-2">
                    <p className="font-semibold text-[#d93025] text-sm">₹{tx.amount}</p>
                    <p className="text-xs text-[#5f6368]">{tx.date}</p>
                    <p className="text-xs text-[#5f6368]">🏦 {tx.chitFundName}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTrans;

