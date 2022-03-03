import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { authUserActions } from "../../features/authUser/authUserSlice.";
import Menu from "./Menu";
Header.propTypes = {};

function Header(props) {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearch({ [name]: value.trim() });
  };
  const handleToSearch = () => {
    navigate(`/search/name_like=${search.name}`);
  };
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      navigate(`/search/name_like=${search.name}`);
    }
  };
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(authUserActions.logout());
      navigate("/login");
    } else {
      navigate("/signin");
    }
  };
  return (
    <header className="header">
      <div className="header__infor">
        <ul className="header__infor-list-left">
          <li className="header__infor__item-left">
            <i className="item__left-icon fas fa-phone-alt"></i>
            <span className="item__left-link">0869754622</span>
          </li>
          <li className="header__infor__item-left">
            <i className="item__left-icon far fa-envelope"></i>
            <span className="item__left-link">
              nguyenvantuan972.it@gmail.com
            </span>
          </li>
        </ul>
        <ul className="header__infor-list-right">
          <li className="item__right">
            <Link to="/info" className="item__right-link">
              Giới thiệu
            </Link>
          </li>
          <li className="item__right">
            <span
              style={{ backgroundColor: "transparent", border: "none" }}
              className="item__right-link"
            >
              Liên hệ
            </span>
          </li>
          {isLoggedIn ? (
            <li className="item__right item__right-link__hover">
              <span className="item__right-link ">
                {currentUser.accountname}
              </span>
              <div className="item__right-link-div">
                <ul className="item__right-link-list">
                  <li className="item__right-link-item">
                    <Link className="item__right-link-name" to="/user-profile">
                      {" "}
                      Thông tin của tôi{" "}
                    </Link>
                  </li>
                  <li className="item__right-link-item">
                    <Link className="item__right-link-name" to="/cart">
                      Giỏ hàng
                    </Link>
                  </li>
                  <li className="item__right-link-item">
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "16px",
                      }}
                      className="item__right-link-name"
                      onClick={handleLogout}
                    >
                      {" "}
                      Đăng xuất{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          ) : (
            <>
              <Link to="/signin" className="item__right-link ">
                Đăng ký
              </Link>
              <Link
                to="/login"
                style={{ marginLeft: "20px" }}
                className="item__right-link "
              >
                Đăng nhập
              </Link>
            </>
          )}
        </ul>
      </div>
      <div className="header__navbar">
        <div className="header__logo">
          <img
            src="https://4menshop.com/logo.png?v=1"
            alt=""
            className="header__logo-img"
          />
        </div>
        <div className="header-search">
          <input
            className="header__search-input"
            type="text"
            placeholder="Search..."
            name="name"
            onChange={handleSearch}
            onKeyUp={handleKeyUp}
          />
          <button onClick={handleToSearch} className="nav__item__seacrch">
            <SearchIcon />
          </button>
        </div>
        <div className="header__nav">
          <Menu />
        </div>
      </div>
    </header>
  );
}

export default Header;
