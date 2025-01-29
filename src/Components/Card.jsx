import React from 'react';

const Card = ({ title, amount, color }) => {
  return (
    <div className={`bg-${color}-500 text-white p-6 rounded-lg shadow-lg mb-4 w-full max-w-xs`}>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-xl font-bold">₹{amount}</p>
    </div>
  );
};

export default Card;
