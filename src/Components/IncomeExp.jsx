import React from 'react';

const IncomeExp = ({ totalIncome, totalExpenses }) => {
  return (
    <div className="flex justify-between mb-6">
      <div className="bg-green-600 p-4 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-semibold text-white">Total Income</h3>
        <p className="text-lg text-white">₹{totalIncome}</p>
      </div>
      <div className="bg-red-600 p-4 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-semibold text-white">Total Expenses</h3>
        <p className="text-lg text-white">₹{totalExpenses}</p>
      </div>
    </div>
  );
};

export default IncomeExp;
