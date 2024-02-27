import React from "react";

const Transactions = (props) => {

    const transaction = props.transaction;
    console.log(transaction);

  return (
    <div>
        <div className="w-full bg-red-400 grid grid-cols-4 p-2 text-xl">
            <p>{transaction.transactionDate}</p>
            <p>{transaction.description}</p>
            <p>{transaction.amount}</p>
            <p>Delete</p>
        </div>
    </div>
  );
};

export default Transactions;
