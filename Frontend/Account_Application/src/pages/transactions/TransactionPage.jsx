import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import { useLocation } from "react-router-dom";
import axios from "axios";

const TransactionPage = () => {
  const location = useLocation();
  const [transactions, setTransactions] = useState([]);

  const getIdFromUrl = (url) => {
    const normalizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
    return normalizedUrl.split("/").pop();
  };

  const id = getIdFromUrl(location.pathname);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/transaction/${id}`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  },[]);

  const transactionsComponent = transactions.map((transaction) => (
    <Transactions key={transaction.id} transaction={transaction} />
  ));


  return (
    <div>
      <div class="container mx-auto h-full">
        {/* <a href="/dashboard" class="btn btn-default btn-lg mb-3">
          Back
        </a>
        <i class="fas fa-plus-circle"></i> Record new Transaction */}
        <div className="w-[90%] mx-auto">
          <div class="text-center flex justify-around p-2 py-4 my-5 border rounded-sm text-2xl bg-blue-300">
            <p>
              Account Name: <span className="font-semibold">Purv</span>
            </p>
            <p>
              Availabe Balance: <span className="font-semibold">Rs. 27000</span>
            </p>
          </div>

          <div className="bg-[#bdb4b44a] mx-auto grid grid-cols-4 p-2 text-2xl font-serif mb-1">
            <p>Date</p>
            <p>Description</p>
            <p>Amount</p>
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
