function NetBalance({ transactions }) {
    const income = transactions
      .filter((t) => t.type === 'Income')
      .reduce((acc, t) => acc + t.amount, 0);
  
    const expense = transactions
      .filter((t) => t.type === 'Expense')
      .reduce((acc, t) => acc + t.amount, 0);
  
    const netBalance = income - expense;
  
    return (
      <div className="my-4">
        <h2>Net Balance: ${netBalance.toFixed(2)}</h2>
      </div>
    );
  }
  
  export default NetBalance;
  