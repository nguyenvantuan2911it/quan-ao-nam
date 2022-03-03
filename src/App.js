import React from "react";
import { Navigate } from "react-router";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./components/Layout/Admin";
import User from "./components/Layout/User";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="admin/*" element={<Admin />} />
        <Route path="/*" element={<User />} />
        <Route path="/" element={<Navigate to="/product/aosomi" />} />
        <Route
          path="/shop-quan-ao"
          element={<Navigate to="/product/aosomi" />}
        />
        <Route
          path="/shop-quan-ao/"
          element={<Navigate to="/product/aosomi" />}
        />
      </Routes>
    </div>
  );
}
export default App;
