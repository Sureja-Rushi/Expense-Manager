import React from "react";
// import "./App.css";
import Navbar from "./common/navbar/Navbar";
import LandingPage from "./pages/landing page/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateAccount from "./pages/forms/CreateAccount";
import NotFound from "./common/NotFound";

function App() {
  const navigate = useNavigate();
  return (
      <div className="bg-blue-50 overflow-x-hidden">
        {/* <Route path="/" element={<Navbar />} /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Navbar />
        <LandinPage /> */}
        {/* <Dashboard /> */}
      </div>
  );
}

export default App;
