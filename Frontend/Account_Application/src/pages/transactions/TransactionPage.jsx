import React, { useEffect, useRef, useState } from "react";
import Transactions from "./Transactions";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";


const TransactionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dateInputRef = useRef();

  const [transactions, setTransactions] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [account, setAccount] = useState([]);
  const [incomeTransaction, setIncomeTransaction] = useState(0);
  const [expenseTransaction, setExpenseTransaction] = useState(0);
  const [closeButton, setCloseButton] = useState(false);
  const [transactionDate, setTransactionDate] = useState();

  const getIdFromUrl = (url) => {
    const normalizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
    return normalizedUrl.split("/").pop();
  };

  const id = getIdFromUrl(location.pathname);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/account/${userId}/${id}`)
      .then((response) => {
        setAccount(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  console.log(account);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/transaction/${id}`)
      .then((response) => {
        setTransactions(response.data);
        setAllTransactions(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const totalTransaction = () => {
    let totalExpense = 0;
    let totalIncome = 0;

    for (let i = 0; i < allTransactions.length; i++) {
      if (allTransactions[i].type == 1) {
        totalIncome = totalIncome + allTransactions[i].amount;
      } else {
        totalExpense = totalExpense + allTransactions[i].amount;
      }
    }

    setExpenseTransaction(totalExpense);
    setIncomeTransaction(totalIncome);
  };

  useEffect(() => {
    totalTransaction();
  }, [allTransactions]);

  const transactionsComponent = transactions.map((transaction) => (
    <Transactions key={transaction.id} transaction={transaction} />
  ));

  const handleDateChange = (event) => {
    setTransactionDate(event.target.value);
    // console.log(transactionDate);
  };

  // useEffect(() => {
  //   console.log(transactionDate); // Log the updated value of transactionDate
  // }, [transactionDate]);

  const handleClick = () => {
    if (transactionDate) {
      const filteredTransaction = transactions.filter((transaction) => {
        return transaction.transactionDate == transactionDate;
      });
      console.log(filteredTransaction);
      setTransactions(filteredTransaction);
      setCloseButton(true);
    } else {
      alert("Enter date to search");
    }
  };

  const onCloseClick = () => {
    setTransactionDate("");
    setTransactions(allTransactions);
    setCloseButton(false);
    dateInputRef.current.value = "";
  };

  return (
    <div>
      <div class="container mx-auto h-full">
        {/* <a href="/dashboard" class="btn btn-default btn-lg mb-3">
          Back
        </a>
        <i class="fas fa-plus-circle"></i> Record new Transaction */}

        <div className="w-[90%] mx-auto">
          <div className="mt-4 flex justify-between">
            <button
              id="dropdownDefaultButton"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-sm text-base px-5 py-2.5 w-fit text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={() => {
                navigate("/addTransaction", { state: { account: account } });
              }}
            >
              Add New Transaction
              <IoIosAddCircle className="align-middle text-2xl ml-2" />
            </button>
            <div className="flex gap-4">
              <div className=" ">
                <input
                  type="date"
                  className=""
                  name="transactionDate"
                  ref={dateInputRef}
                  onChange={handleDateChange}
                />
              </div>
              <button
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-sm text-base px-5 py-2.5 w-fit text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                  closeButton ? "" : "hidden"
                } `}
                type="button"
                onClick={onCloseClick}
              >
                Cancle
              </button>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-sm text-base px-5 py-2.5 w-fit text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
          <div class="text-center flex justify-around p-2 py-4 my-5 border rounded-sm text-2xl bg-blue-300">
            <p>
              Account Name:{" "}
              <span className="font-semibold">{account.accountName}</span>
            </p>
            <p className="flex">
              {account.type === 1 ? (
                incomeTransaction - expenseTransaction < 0 ? (
                  <div>You have to take</div>
                ) : (
                  <div>You have to give</div>
                )
              ) : (
                <div>Total Expense: </div>
              )}
              <span className="font-semibold pl-2">
                {" "}
                Rs. {Math.abs(incomeTransaction - expenseTransaction)}
              </span>
            </p>
          </div>

          <div className="bg-[#bdb4b44a] mx-auto grid grid-cols-5 p-2 text-2xl font-serif mb-1">
            <p>Date</p>
            <p>Description</p>
            <p>Amount</p>
            <p>Spender</p>
          </div>
          <hr className="border-b border-b-black mb-1" />
          {/* <Transactions /> */}
          {transactionsComponent}
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
