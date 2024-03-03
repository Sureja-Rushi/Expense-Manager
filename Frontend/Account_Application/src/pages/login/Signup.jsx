import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [signUpAttributes, setSignUpAttributes] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    // Check if the user ID exists in local storage
    const userId = localStorage.getItem("userId");
    if (userId) {
        // Redirect to dashboard if user is already logged in
        navigate("/dashboard");
    }
}, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpAttributes({
      ...signUpAttributes,
      [name]: value,
    });

    if(name == "confirmPassword"){
      setConfirmPassword(value);
    }

  };

  const onSubmitHandler = (event) => {
    // dispatch(createnewAccount(accountAttributes));
    if(confirmPassword == signUpAttributes.password){
      axios
      .post("http://localhost:8080/user", signUpAttributes)
      .then((response) => {
        alert("success");
        const userId = response.data.id;
        localStorage.setItem("userId", userId);
        navigate("/dashboard");
        // console.log(newAccount);
      })
      .catch((error) => {
        alert(error);
      });
    event.preventDefault();
    }
    else{
      alert("Password and Confirm Password are must be same.")
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 border border-gray-400 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full">
            <h2 className="text-gray-900 mx-auto text-3xl font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="name"
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="userName" className="leading-7 text-sm text-gray-600">
                User Name
              </label>
              <input
                type="text"
                id="full-name"
                name="userName"
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="full-name"
                name="password"
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Confirmation Password
              </label>
              <input
                type="password"
                id="full-name"
                name="confirmPassword"
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={onSubmitHandler } className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              SIGN UP
            </button>
            <p className="text-lg text-gray-500 mt-3">
              Already have account?{" "}
              <Link to="/login" className="text-blue-700 font-semibold">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
