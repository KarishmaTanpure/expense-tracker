import React, { useState } from 'react';

function AddTransaction({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('Income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      date,
      type,
    };
    addTransaction(newTransaction);
  
    setAmount('');
    setDescription('');
    setDate('');
    setType('Income');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-4">
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
