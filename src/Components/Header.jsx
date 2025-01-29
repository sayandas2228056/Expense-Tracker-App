import React from 'react';

export const Header = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-6 ">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition-all"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};
