import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div className="bg-amber-400 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Current Balance</h2>
      <p className="text-xl text-white">₹{balance}</p>
    </div>
  );
};

export default Balance;
