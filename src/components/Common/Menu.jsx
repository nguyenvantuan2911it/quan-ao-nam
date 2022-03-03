import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
Menu.propTypes = {};
const Menus = [
  {
    label: "ÁO NAM",
    value: [
      {
        label: "Áo sơ mi",
        to: "/product/aosomi",
      },
      {
        label: "Áo khoác",
        to: "/product/aokhoac",
      },
      {
        label: "Áo thể thao",
        to: "/product/aothethao",
      },
      {
        label: "Áo tanktop",
        to: "/product/aotanktop",
      },
      {
        label: "Áo thun",
        to: "/product/aothun",
      },
    ],
  },
  {
    label: "QUẦN NAM",
    value: [
      {
        label: "Quần Jeans",
        to: "/product/quanjeans",
      },
      {
        label: "Quần thể thao",
        to: "/product/quanthethao",
      },
      {
        label: "Quần Tây",
        to: "/product/quantay",
      },
      {
        label: "Quần Kaki",
        to: "/product/quankaki",
      },
      {
        label: "Quần Baggy",
        to: "/product/quanbaggy",
      },
    ],
  },
  {
    label: "PHỤ KIỆN",
    value: [
      {
        label: "Ví Da",
        to: "/product/vida",
      },
      {
        label: "Thắt Lưng",
        to: "/product/thatlung",
      },
      {
        label: "Cà Vạt",
        to: "/product/cavat",
      },
      {
        label: "Đồng Hồ",
        to: "/product/dongho",
      },
      {
        label: "Mũ",
        to: "/product/mu",
      },
    ],
  },
  {
    label: "GIÀY DÉP",
    value: [
      {
        label: "Giày Thể Thao",
        to: "/product/giaythethao",
      },
      {
        label: "Giày Da",
        to: "/product/giayda",
      },
      {
        label: "Giày Nữ",
        to: "/product/giaynu",
      },
      {
        label: "Dép",
        to: "/product/dep",
      },
      {
        label: "Giày Hàng Hiệu",
        to: "/product/giayhanghieu",
      },
    ],
  },
];
function Menu(props) {
  const ListCart = useSelector((state) => state.cart.list)
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item">
        <span href="" className="nav__item-right-link">
          MỚI NHẤT
        </span>
        <div className="header__nav-hot">
          <span className="header__nav-hot-text"> Hot </span>
        </div>
        <div className="header__nav-hot-line"></div>
      </li>
      {Menus.map((menu, index) => {
        return (
          <li key={index} className="header__nav-item">
            <span className="nav__item-right-link">{menu.label}</span>
            <ul className="nav__item-list">
              {menu.value.map((item, index) => {
                return (
                  <li key={index} className="nav__item-item">
                    <Link to={item.to} className="nav__item-link">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
      <li className="header__nav-item">
        <Link to="/sale" className="nav__item-right-link">
          KHUYẾN MÃI
        </Link>
        <div className="header__nav-hot">
          <span className="header__nav-hot-text"> Hot </span>
        </div>
        <div className="header__nav-hot-line"></div>
      </li>
      <li className="header__nav-item">
        <Link to="/cart" exact="false" className="nav__item__cart">
          <ShoppingCartIcon color="primary" sx={{ fontSize: 25 }}/>
          <div className="nav__item__cart-span">
           <span className="nav__item__cart-title"> {ListCart.length === 0 ? 0 : ListCart.length} </span>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
