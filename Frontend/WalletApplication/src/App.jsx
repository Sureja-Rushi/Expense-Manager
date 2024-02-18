import React from "react";
// import "./App.css";
import Navbar from "./common/navbar/Navbar";
import LandinPage from "./pages/landing page/LandinPage";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
      <div className="bg-blue-50 overflow-hidden ">
        {/* <Route path="/" element={<Navbar />} /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Navbar />
        <LandinPage /> */}
        {/* <Dashboard /> */}
      </div>
  );
}

export default App;
