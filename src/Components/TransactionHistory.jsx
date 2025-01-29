import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Transaction History</h2>
      <ul>
        {transactions.map((txn, index) => (
          <li key={index} className="flex justify-between text-white mb-2">
            <span>{txn.description}</span>
            <span>{txn.type === 'income' ? '+' : '-'} ₹{txn.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
