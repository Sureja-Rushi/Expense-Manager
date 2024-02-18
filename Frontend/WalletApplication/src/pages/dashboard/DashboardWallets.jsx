import React from "react";
import { Link } from "react-router-dom";

const DashboardWallets = () => {
  return (
    <div className="flex justify-center my-2">
      <div class=" border border-black w-full mx-8 rounded-sm bg-[#F6F6F6]">
        <div class="bg-light p-4 mb-3 ">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 flex flex-col justify-center">
              <p className="text-3xl">UBL Account</p><br />
              <p className="text-base">
                <span className="font-semibold">Account Number:</span>
                <span className="">1234-1234-1234-1234</span>
              </p>
            </div>
            <div class="w-full md:w-1/3 text-center flex flex-col justify-center">
              <p className="text-xl">Balance</p>
              <p class="text-3xl font-bold">Rs. 27000</p>
            </div>
            <div class="w-full md:w-1/3 mt-4 md:mt-0 ">
              <ul class="list-group">
                <Link href="transactions.html">
                  <p class="bg-green-100 border border-green-300 text-green-700 p-2 mb-1 rounded-sm">
                    Transactions
                  </p>
                </Link>
                <Link href="walletForm.html">
                  <p class="bg-blue-100 border border-blue-300 text-blue-700 p-2 mb-1 rounded-sm">
                    Update Account
                  </p>
                </Link>
                <Link href="/">
                  <p class="bg-red-100 text-red-700 border border-red-300 p-2 mb-1 rounded-sm">
                    Delete Account
                  </p>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWallets;
