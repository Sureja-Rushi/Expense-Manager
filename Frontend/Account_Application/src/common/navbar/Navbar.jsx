import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import Accounting from "../../assets/accounting.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState("Login");
  const [userDetails, setUserDetails] = useState();

  const userId = localStorage.getItem("userId");

  const onClickHandle = () => {
    if (userId) {
      localStorage.removeItem("userId");
      setButtonStatus("Login");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (userId) {
      setButtonStatus("Logout");
    } else {
      setButtonStatus("Login");
    }
  }, [userId]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/${userId}`)
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((error) => {
        // alert(error);
      });
  }, [userId]);

  console.log(userDetails);

  return (
    <header class="text-gray-600 body-font bg-blue-200">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src={Accounting}
            className="w-12 h-12 text-white p-1 bg-indigo-500 rounded-full"
          />
          {/* "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" */}
          <span class="ml-3 text-xl font-semibold font-serif">
            Money Tracker
          </span>
        </Link>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            to="/dashboard"
            class="mr-5 hover:text-gray-900 text-gray-700 text-xl"
          >
            Dashboard
          </Link>
          {/* <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        <div className="flex gap-8 items-center text-xl">
          {userId ? (
            <div className="flex items-center gap-2 ">
              <FaUserCircle className="text-4xl text-gray-500" />
              <div className="flex flex-col">
                <spna className="text-black font-semibold">
                  {userDetails?.name}
                </spna>
                <span className="text-sm text-gray-600">
                  {userDetails?.email}
                </span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <button
            onClick={onClickHandle}
            class="flex w-fit gap-2 items-center text-white bg-blue-800 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded-sm text-lg font-semibold mt-4 md:mt-0 transition-colors ease-in-out duration-300 "
          >
            {buttonStatus}
            {buttonStatus == "Login" ? (
              <MdOutlineLogin className="text-2xl" />
            ) : (
              <MdOutlineLogout className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
