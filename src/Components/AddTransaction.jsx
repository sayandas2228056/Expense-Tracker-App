import React, { useState } from 'react';

const AddTransaction = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, amount: parseFloat(amount), type });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-semibold text-white mb-4 flex">Add Transaction</h2>
      <div className="mb-4">
        <label className="text-white">Transaction type :</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 mt-2 rounded-lg"
        >
          <option value="income">Credit</option>
          <option value="expense">Debit</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-white">Amount in ₹</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 mt-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="text-white">Reference :</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mt-2 rounded-lg"
        />
      </div>
      
      
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg w-full">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
