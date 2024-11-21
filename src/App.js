import React, { useState } from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';  

function App() {
  
  const [transactions, setTransactions] = useState([]);

  
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  
  const calculateNetBalance = () => {
    const totalIncome = transactions
      .filter((transaction) => transaction.type === 'Income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpenses = transactions
      .filter((transaction) => transaction.type === 'Expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return totalIncome - totalExpenses;
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      
      <AddTransaction addTransaction={addTransaction} />
      
      <h3>Transactions</h3>
      {transactions.length === 0 ? (
        <p>No transactions added yet.</p>
      ) : (
        <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>${transaction.amount.toFixed(2)}</td>
                <td>{transaction.description}</td>
                <td>{transaction.date}</td>
                <td>
                  <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}

      <h2>Net Balance: ${calculateNetBalance().toFixed(2)}</h2>
    </div>
  );
}

export default App;
