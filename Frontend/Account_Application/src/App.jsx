import React from "react";
// import "./App.css";
import Navbar from "./common/navbar/Navbar";
import LandingPage from "./pages/landing page/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateAccount from "./pages/forms/CreateAccount";
import NotFound from "./common/NotFound";
import UpdateAccount from "./pages/forms/UpdateAccount";
// import { Provider } from "react-redux";
// import store from "./Store.jsx";

function App() {
  const navigate = useNavigate();
  return (
    // <Provider store={store}>
      <div className="bg-blue-50 overflow-x-hidden">
        {/* <Route path="/" element={<Navbar />} /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/updateaccount/*" element={<UpdateAccount />} />
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
