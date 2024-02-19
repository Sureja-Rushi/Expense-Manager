import React, { useState } from "react"; // Import useState for managing dropdown state
import { Link } from "react-router-dom";
import Navbar from "../../common/navbar/Navbar";
import DashboardWallets from "./DashboardWallets";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false); // State for managing dropdown visibility

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen">
      {/* <Navbar /> */}
      <div className="pb-8">
        <div className="">
          <p className="text-5xl pt-4 text-black flex justify-center items-center font-thin">
            My Money Pouches
          </p>
        </div>
        <hr className="border-t border-gray-400 my-6 w-[94%] m-auto "/>
        <div className="flex flex-row">
          <div className="w-[30%] h-fit pb-8">
            <div className=" ms-[8%] my-2">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown} // Attach toggleDropdown function to onClick event
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-md text-base px-5 py-2.5 w-fit text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                New{" "}
                <svg
                  className={`w-2.5 h-2.5 ms-3 transform ${
                    isOpen ? "rotate-180" : ""
                  }`} // Rotate arrow icon when dropdown is open
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round" // Correct attribute name to strokeLinecap
                    strokeLinejoin="round" // Correct attribute name to strokeLinejoin
                    strokeWidth="2" // Correct attribute name to strokeWidth
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div
                id="dropdown"
                className={`z-10 ${
                  isOpen ? "absolute" : "hidden"
                } bg-white divide-y divide-gray-100 rounded-md shadow shadow-slate-800 dark:bg-gray-700 mt-2 w-52`}
              >
                <ul
                  className="py-2 text-base text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      to="/createwallet" // Change href to "to" for React Router Link
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Wallet
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings" // Change href to "to" for React Router Link
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Transaction
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center ">
              <div class="bg-blend-lighten bg-[#28a745] w-[85%] text-white text-center flex justify-center py-2 rounded-sm ">
                <div class="card-header">
                  <h4 class="text-2xl my-1">Pocket Money (Total)</h4>
                  <h1 class="text-4xl my-1">Rs. 30000</h1>
                </div>
              </div>
            </div>
          </div>

          {/* <hr className="border-t border-black my-6 w-[80%] m-auto " /> */}

          <div className="w-[70%] border-l border-l-gray-400">
            <DashboardWallets />
            <DashboardWallets />
            <DashboardWallets />
            <DashboardWallets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
