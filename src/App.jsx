import React, { useState, useEffect } from 'react';
import './Styles.css'; // Ensure your custom styles are correctly loaded
import Balance from './Components/Balance';
import { Header } from './Components/Header';
import IncomeExp from './Components/IncomeExp';
import TransactionHistory from './Components/TransactionHistory';
import AddTransaction from './Components/AddTransaction';
import Footer from './Components/Footer';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');  // Check local storage for theme preference

  useEffect(() => {
    // Store the theme preference in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const addTransaction = (txn) => {
    setTransactions([...transactions, txn]);

    if (txn.type === 'income') {
      setBalance(balance + txn.amount);
    } else if (txn.type === 'expense') {
      setBalance(balance - txn.amount);
    }
  };

  const totalIncome = transactions.filter(txn => txn.type === 'income').reduce((acc, txn) => acc + txn.amount, 0);
  const totalExpenses = transactions.filter(txn => txn.type === 'expense').reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-all`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div className="container mx-auto p-8 flex-grow">
        <Balance balance={balance} />
        <IncomeExp totalIncome={totalIncome} totalExpenses={totalExpenses} />
        <AddTransaction addTransaction={addTransaction} />
        <TransactionHistory transactions={transactions} />
      </div>
      <Footer />
    </div>
    
  );
};

export default App;
