import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

const Transactions = (props) => {
  const navigate = useNavigate();

  const transaction = props.transaction;
  console.log(transaction.account);

  const handleDelete = () => {
    if (confirm(`Are you sure to delete transaction?`)) {
      axios
        .delete(
          `http://localhost:8080/transaction/${transaction.account.id}/${transaction.id}`
        )
        .then((response) => {
          window.location.reload();
          // alert("deleted Successfully...");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleUpdate = () => {
    navigate(`/updatetransaction/${transaction.account.id}/${transaction.id}`, {
      state: { account: transaction.account },
    });
  };
  console.log(transaction.account);

  return (
    <div>
      <div
        className={`w-full grid grid-cols-5 p-2 text-xl my-1 ${
          transaction.type == 1 ? "bg-green-300" : "bg-red-300"
        } `}
      >
        <p>{transaction.transactionDate}</p>
        <p>{transaction.description}</p>
        <p>{transaction.amount}</p>
        <p>
          {transaction.type == 1 ? (
            <div>{transaction.account.accountName}</div>
          ) : (
            <div>You</div>
          )}
        </p>
        <div className="grid grid-cols-2">
          <button onClick={handleDelete}>
            <MdDeleteOutline className="align-middle text-3xl me-1 text-gray-800" />
          </button>
          <button onClick={handleUpdate}>
            <GrEdit className="align-middle text-2xl me-1 text-blue-800" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
