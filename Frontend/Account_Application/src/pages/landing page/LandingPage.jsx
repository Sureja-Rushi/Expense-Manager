import React, { useState } from "react";
import HomeImage from "../../assets/Expense_Manager.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const onClickHandle = () => {
    if(userId){
      navigate("/dashboard");
    }
    else{
      navigate("/login");
    }
  }

  return (
    <div>
      <section className="text-gray-600 body-font h-[32.95rem]">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {/* Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten */}
              Money Tracker
            </h1>
            <p class="mb-8 leading-relaxed text-xl">
              Start Your Money Adventure: Manage Spending, Plan Budgets, and
              Reach Financial Goals - Your Simple Personal Expense Tracker. Take
              Charge of Your Finances: Easily Track Spending, Plan Budgets, and
              Reach Financial Goals - Your User-Friendly Personal Expense
              Manager
            </p>
            <div class="flex justify-center">
              <button onClick={onClickHandle} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
              </button>
              
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-cover object-center w-full h-full"
              src={HomeImage}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
