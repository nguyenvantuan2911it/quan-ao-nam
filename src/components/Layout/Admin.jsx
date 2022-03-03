import React from "react";
import { Route, Routes } from "react-router";
import AdminPage from "../../features/Admin";
import AdminLogin from "../../features/authAdmin/components/AdminLogin";

Admin.propTypes = {};

function Admin(props) {
  return (
    <div>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route path="/*" exact element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default Admin;
