import axios from "axios";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Accounts = (props) => {

  const navigate = useNavigate();

  const account = props.account;
  console.log(account);

  const handleDelete = () => {
    if (confirm(`Are you sure to delete ${account.accountName} account?`)) {
      axios
        .delete(`http://localhost:8080/account/${account.id}`)
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

  }

  console.log(account.currentBalance);

  // console.log(account.accountNumber === "")

  return (
    <div className="flex justify-center my-2">
      <div class=" border border-black w-full mx-8 rounded-sm bg-[#F6F6F6]">
        <div class="bg-light p-4 mb-3 ">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 flex flex-col justify-center">
              <p className="text-3xl">{account.accountName}</p>
              <br />
              <p
                className={`${
                  account.accountNumber === "" ? "hidden" : ""
                } text-base`}
              >
                <span className="font-semibold">Account Number:</span>
                <span className="">{account.accountNumber}</span>
              </p>
              <p
                className={`${
                  account.accountNumber === "" ? "" : "hidden"
                } text-base`}
              >
                <span className="font-semibold">Description: </span>
                <span className="">{account.description}</span>
              </p>
            </div>
            <div class="w-full md:w-1/3 text-center flex flex-col justify-center">
              <p className="text-xl">Balance</p>
              <p class="text-3xl font-bold">{account.currentBalance}</p>
            </div>
            <div class="w-full md:w-1/3 mt-4 md:mt-0 ">
              <ul class="list-group">
                <Link href="transactions.html">
                  <p class="bg-green-100 border border-green-300 text-green-700 p-2 mb-1 rounded-sm">
                    Transactions
                  </p>
                </Link>
                {/* <Link href="walletForm.html"> */}
                  <button class="bg-blue-100 border border-blue-300 text-blue-700 p-2 mb-1 rounded-sm" 
                  onClick={handleUpdate}>
                    Update Account
                  </button>
                {/* </Link> */}
                <Link href="/dashboard">
                  <button
                    class="bg-red-100 text-red-700 border border-red-300 p-2 mb-1 rounded-sm w-full flex"
                    onClick={handleDelete}
                  >
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
