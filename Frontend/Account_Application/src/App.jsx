import React from "react";
// import "./App.css";
import Navbar from "./common/navbar/Navbar";
import LandingPage from "./pages/landing page/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateAccount from "./pages/forms/CreateAccount";
import NotFound from "./common/NotFound";
import UpdateAccount from "./pages/forms/UpdateAccount";
import Transactions from "./pages/transactions/Transactions";
import TransactionPage from "./pages/transactions/TransactionPage";
import CreateTransaction from "./pages/forms/CreateTransaction";
import UpdateTransaction from "./pages/forms/UpdateTransaction";
import Signup from "./pages/login/Signup";
import Login from "./pages/login/Login";
// import { Provider } from "react-redux";
// import store from "./Store.jsx";

function App() {
  const navigate = useNavigate();
  return (
    // <Provider store={store}>
      <div className="bg-blue-50 h-screen overflow-x-hidden">
        {/* <Route path="/" element={<Navbar />} /> */}
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/updateaccount/*" element={<UpdateAccount />} />
          <Route path="/transactions/*" element={<TransactionPage />} />
          <Route path="/addtransaction" element={<CreateTransaction />} />
          <Route path="/updatetransaction/:accountId/:transactionId" element={<UpdateTransaction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Navbar />
        <LandinPage /> */}
        {/* <Dashboard /> */}
      </div>
    // </Provider>
  );
}

export default App;
