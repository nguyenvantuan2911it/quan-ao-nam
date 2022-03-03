import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { authUserActions } from "../../features/authUser/authUserSlice.";
import Login from "../../features/authUser/components/Login";
import SignIn from "../../features/authUser/components/SignIn";
import ProfileUser from "../../features/authUser/pages/ProfileUser";
import Cart from "../../features/Cart";
import Details from "../../features/Details";
import Product from "../../features/Product";
import Search from "../../features/Search";
import ContainerStore from "../Common/ContainerStore";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import NoteFoundPage from "../Common/NoteFoundPage";

User.propTypes = {};

function User(props) {
  const checkLogin = localStorage.getItem("access_token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (checkLogin) {
      dispatch(authUserActions.loginSuccess(JSON.parse(checkLogin)));
    }
  }, [checkLogin, dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="product/:productkey" element={<Product />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="search/:name" element={<Search />} />
        <Route path="user-profile" element={<ProfileUser />} />
        <Route path="*" element={<NoteFoundPage />} />
      </Routes>
      <ContainerStore />
      <Footer />
    </>
  );
}

export default User;
