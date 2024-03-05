import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateTransaction = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const account = location.state.account;
    console.log(account);

    const [transactionAttribute, setTransactionAttribute] = useState({
        amount: "",
        description: "",
        type : account.type == 2 ? "2" : "",
        transactionDate: "",
    });

    const onSubmitHandler = (event) => {
        // dispatch(createnewAccount(accountAttributes));
        axios
          .post(`http://localhost:8080/transaction/${account.id}`, transactionAttribute)
          .then((response) => {
              alert("success");
              navigate(-1);
            // console.log(newAccount);
          })
          .catch((error) => {
            alert(error);
          });
        event.preventDefault();
      };

      const onChangeHandler = (e) => {
        const { name, value, type, checked } = e.target;
        setTransactionAttribute({
          ...transactionAttribute,
          [name]: type === "checkbox" ? checked : value,
        });
      };

      console.log(transactionAttribute);

  return (
    <div>
      <div>
        <div className="project ">
          <div className="container mx-auto py-4 pb-8 w-screen flex justify-center h-full">
            <div className="mx-4 w-[60%] ">
              <div className="col-span-2 md:col-span-1 mx-auto">
                <h5 className="text-4xl text-center mb-2">New Transaction</h5>
                <h6 className="text-2xl text-center">
                  Account: <span>{account.accountName}</span>
                </h6>
                <hr className="border-t border-gray-400 my-6 w-[100%] m-auto " />
                <form onSubmit={onSubmitHandler}>
                  <div className="mb-4">
                    <input
                      type="number"
                      className=" w-full px-4 py-3 leading-tight bg-gray-200 border rounded-sm focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Amount"
                      name="amount"
                      onChange={onChangeHandler}
                    />
                  </div>
                  {/* <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 leading-tight bg-gray-200 border rounded-lg focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Amount"
                    name="accountNumber"
                  />
                </div> */}
                  <div className="mb-4">
                    <textarea
                      className="w-full px-4 py-3 leading-tight bg-gray-200 border rounded-sm focus:outline-none focus:bg-white focus:border-gray-500"
                      placeholder="Description"
                      name="description"
                      onChange={onChangeHandler}
                    ></textarea>
                  </div>

                  <div className={`text-xl mb-4 flex ${account.type == 2 ? "hidden" : "" } `} >
                    <label>Transaction type:</label>
                    <div className="px-2">
                      <label className="">
                        <input
                          type="radio"
                          value="1"
                          name="type"
                          className="mx-2"
                          onChange={onChangeHandler}
                        />
                        {account.accountName} spend for you
                      </label>
                      <label className="pl-4">
                        <input
                          type="radio"
                          value="2"
                          name="type"
                          className="mx-2"
                          onChange={onChangeHandler}
                        />
                        You spend for {account.accountName}
                      </label>
                    </div>
                  </div>

                  <div className="">
                    <div>
                        <p>Transaction Date: </p>
                    </div>
                    <div className="">
                        <input type="date" className="w-full" name="transactionDate" onChange={onChangeHandler} />
                        {/* <input type="time" /> */}
                    </div>
                  </div>

                  <input
                    type="submit"
                    className=" w-fit flex mx-auto text-xl my-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    value="Add transaction"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTransaction;
