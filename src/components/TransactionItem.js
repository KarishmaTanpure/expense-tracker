function TransactionItem({ transaction, deleteTransaction }) {
    return (
      <li className="my-2">
        <span>{transaction.description}</span> - ${transaction.amount.toFixed(2)} on{' '}
        {transaction.date} ({transaction.type})
        <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
      </li>
    );
  }
  
  export default TransactionItem;
  