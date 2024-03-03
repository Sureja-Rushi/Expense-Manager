import React, { useEffect, useState } from "react"; // Import useState for managing dropdown state
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../common/navbar/Navbar";
import Accounts from "./Accounts";
// import { useDispatch, useSelector } from "react-redux";
// import { getAccounts } from "../../actions/Actions";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0);
  const userId = localStorage.getItem("userId");


  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAccounts());
  // }, [dispatch]);

  // const accounts = useSelector((state) => state.account.accounts);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/account/${userId}`)
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        // alert(error);
      });
  }, []);


  const totalAmount = () => {
    let totalBalance = 0;
    for (let i = 0; i < accounts.length; i++) {
      totalBalance += accounts[i].currentBalance;
    }
    setBalance(totalBalance);
  };

  useEffect(() => {
    totalAmount();
  }, [accounts]);

  console.log(balance);

  const accountComponent = accounts.map((account) => (
    <Accounts key={account.id} account={account} />
  ));


  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId]);

  return (
    <div className="w-screen">
      {/* <Navbar /> */}
      <div className="pb-8">
        <div className="">
          <p className="text-5xl pt-4 text-black flex justify-center items-center font-thin">
            My Accounts
          </p>
        </div>
        <hr className="border-t border-gray-400 my-6 w-[94%] m-auto " />
        <div className=" ">
          <div className="w-full h-fit ml-5 ">
            <div className=" ms-[8%] my-2">
              <button
                id="dropdownDefaultButton"
                onClick={() => {
                  navigate("/createaccount")
                }} // Attach toggleDropdown function to onClick event
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-sm text-base px-5 py-2.5 w-fit text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Create new Account
              </button>

              
            </div>
          </div>

          <div className="w-full px-24 mx-auto border-l border-l-gray-400">
            {accountComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
