import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { FaRegListAlt } from "react-icons/fa";

const Accounts = (props) => {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [incomeTransaction, setIncomeTransaction] = useState(0);
  const [expenseTransaction, setExpenseTransaction] = useState(0);
  const [netBalance, setNetBalance] = useState(0);

  

  const account = props.account;
  console.log(account);

  const userId = localStorage.getItem("userId");

  const handleDelete = () => {
    if (confirm(`Are you sure to delete ${account.accountName} account?`)) {
      axios
        .delete(`http://localhost:8080/account/${userId}/${account.id}`)
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
    navigate(`/updateaccount/${account.id}`);
  };

  console.log(account.currentBalance);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/transaction/${account.id}`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const totalTransaction = () => {
    let totalExpense = 0;
    let totalIncome = 0;

    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].type == 1) {
        totalIncome = totalIncome + transactions[i].amount;
      } else {
        totalExpense = totalExpense + transactions[i].amount;
      }
    }

    setExpenseTransaction(totalExpense);
    setIncomeTransaction(totalIncome);
    setNetBalance(Math.abs(incomeTransaction - expenseTransaction));
  };

  useEffect(() => {
    totalTransaction();
  }, [transactions]);

  const [accountAttributes, setAccountAttributes] = useState({
    accountName: account.accountName,
    accountNumber: account.accountNumber,
    description: account.description,
    priority: account.priority,
    currentBalance: ''
  });



  
  // console.log(account.accountNumber === "")

  return (
    <div className="flex justify-center my-2">
      <div class=" border border-black w-full mx-8 rounded-sm bg-[#F6F6F6]">
        <div class="bg-light p-4 ">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 flex flex-col justify-center">
              <p className="text-3xl">{account.accountName}</p>
              <br />
            
              <p
                className={`text-base`}
              >
                <span className="font-semibold">Description: </span>
                <span className="">{account.description}</span>
              </p>
            </div>
            <div class="w-full md:w-1/3 text-center flex flex-col justify-center">
              <p className="text-xl">Transaction</p>
              <p class="text-3xl font-bold">Rs. {Math.abs(incomeTransaction - expenseTransaction)}</p>
            </div>
            <div class="w-full md:w-1/3 mt-4 md:mt-0 ">
              <ul class="list-group">
                <button class="bg-green-100 border border-green-300 text-green-700 p-2 mb-1 rounded-sm w-full flex items-center"
                onClick={() => {
                  navigate(`/transactions/${account.id}`)
                }}>
                  <FaRegListAlt className="align-middle text-xl me-2 text-green-700 " />
                  Transactions
                </button>
                {/* <Link href="walletForm.html"> */}
                <button
                  class="bg-blue-100 border border-blue-300 text-blue-700 p-2 mb-1 w-full flex rounded-sm items-center"
                  onClick={handleUpdate}
                >
                  <GrEdit className="align-middle text-xl me-2 text-blue-700 " />
                  Edit Account Details
                </button>
                {/* </Link> */}
                <Link href="/dashboard">
                  <button
                    class="bg-red-100 text-red-700 border border-red-300 p-2 mb-1 rounded-sm w-full flex items-center"
                    onClick={handleDelete}
                  >
                    <MdDeleteOutline className="align-middle text-2xl me-1 text-red-500" />
                    Delete Account
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
