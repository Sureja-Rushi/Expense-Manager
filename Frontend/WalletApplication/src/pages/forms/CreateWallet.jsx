import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWallet = () => {

    const navigate = useNavigate();

  const [walletAttributes, setWalletAttributes] = useState({
    walletName: "",
    walletNumber: "",
    description: "",
    priority: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setWalletAttributes({
      ...walletAttributes,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    axios.post("http://localhost:8080/wallet", walletAttributes).then((res) => {
        console.log("success");
        setTimeout(() => {
            navigate("/dashboard");
        })
    }).catch((error) => {   
        alert("fail");
    })
    event.preventDefault();
  }

  return (
    <div>
      <div className="project">
        <div className="container mx-auto py-4 pb-8 w-screen flex justify-center h-full">
          <div className="mx-4 w-[60%] ">
            <div className="col-span-2 md:col-span-1 mx-auto">
              <h5 className="text-4xl text-center">Create Wallet</h5>
              <hr className="border-t border-gray-400 my-6 w-[100%] m-auto " />
              <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 leading-tight bg-gray-200 border rounded-lg focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Account Name"
                    name="walletName"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full px-4 py-3 leading-tight bg-gray-200 border rounded-lg focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Account No"
                    name="walletNumber"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full px-4 py-3 leading-tight bg-gray-200 border rounded-lg focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Description"
                    name="description"
                    onChange={onChangeHandler}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <select
                    className="w-full  px-4 py-3 leading-tight bg-gray-200 border rounded-lg focus:outline-none focus:bg-white focus:border-gray-500"
                    name="priority"
                    onChange={onChangeHandler}
                  >
                    <option value="3">Display Priority</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className=" w-fit ml-[45%] text-2xl px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                  value="Create"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWallet;
