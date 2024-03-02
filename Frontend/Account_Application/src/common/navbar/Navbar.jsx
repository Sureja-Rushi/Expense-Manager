import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState("Login");

  const userId = localStorage.getItem("userId");

  const onClickHandle = () => {
    if(userId){
      localStorage.removeItem("userId");
      setButtonStatus("Login");
      navigate("/");
    }
    else{
      navigate("/login");
    }
  };

  

  useEffect(() => {
    if(userId){
      setButtonStatus("Logout");
    }
    else{
      setButtonStatus("Login");
    }
  }, [userId]);

  return (
    <header class="text-gray-600 body-font bg-blue-200">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl font-semibold font-serif">
            Money Keeper
          </span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/dashboard" class="mr-5 hover:text-gray-900 text-xl">Dashboard</Link>
          {/* <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <button onClick={onClickHandle} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg font-semibold mt-4 md:mt-0 ">
          {buttonStatus}
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
