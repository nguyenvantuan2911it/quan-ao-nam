import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import productApi from "../../../api/productApi";
Modal.propTypes = {};

function Modal(props) {
  const { id, onHideModal, onAddToCart } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productkey } = useParams();
  const [cart, setCart] = useState();
  const cartref = useRef();
  const [formValue, setFormValue] = useState({
    size: "M",
    quantity: 1,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getById(productkey, id);
        setCart(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, id, productkey]);

  const hideModal = () => {
    onHideModal();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await onAddToCart({
        ...formValue,
        ...cart,
      });
      toast.success("Thêm vào giỏ hàng thành công");
    } catch (error) {
      toast.warning("Sản phẩm đã có trong giỏ hàng");
    }
    hideModal();
  };
  const handleToDetails = (cart) => {
    navigate(`/details/${cart.id}`);
  };
  useEffect(() => {
    if (cart) {
      cartref.current.style.top = `${window.scrollY}px`;
    }
  }, [cart]);
  return (
    <div>
      {cart && (
        <div className="cart">
          <div ref={cartref} id="cart__container" className="cart__container">
            <div className="cart__container-slidebar">
              <div className="cart__slidebar">
                <button id="pre" className="control control_pre">
                  <i className="fas fa-angle-left"></i>
                </button>
                <div className="slides__container">
                  <div className="slides">
                    <img alt="" src={cart.img} className="slide" />
                    <img alt="" src={cart.img} className="slide" />
                    <img alt="" className="slide" />
                    <img alt="" className="slide" />
                    <img alt="" className="slide" />
                  </div>
                </div>
                <button id="next" className="control control_next">
                  <i className="fas fa-angle-right"></i>
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmitForm} className="cart__infor">
              <span className="cart__infor-name">{cart.name}</span>
              <span className="cart__infor-price">{cart.price}</span>
              <span className="cart__infor-status">Tình trạng: Còn hàng </span>
              <div className="select__wrap">
                <div className="select__wrap-size">
                  <span className="select__wrap-heading">Size*</span>
                  <select
                    name="size"
                    defaultValue={formValue.size}
                    className="select__wrap-sele"
                    onChange={handleChange}
                  >
                    <option value="S" className="select__wrap-option">
                      S
                    </option>
                    <option value="M" className="select__wrap-option">
                      M
                    </option>
                    <option value="L" className="select__wrap-option">
                      L
                    </option>
                  </select>
                </div>
                <div className="select__wrap-size">
                  <span className="select__wrap-heading">Số lượng*</span>
                  <select
                    onChange={handleChange}
                    name="quantity"
                    defaultValue={formValue.quantity}
                    className="select__wrap-sele select__wrap-selet"
                  >
                    <option value={1} className="select__wrap-option">
                      1
                    </option>
                    <option value={2} className="select__wrap-option">
                      2
                    </option>
                    <option value={3} className="select__wrap-option">
                      3
                    </option>
                  </select>
                </div>
              </div>
              <button type="submit" className="cart__infor-addtocart">
                <span>Thêm vào giỏ hàng</span>
              </button>
              <button
                onClick={() => handleToDetails(cart)}
                className="cart__infor-detail"
              >
                <span>Xem chi tiết</span>
              </button>
              <button onClick={hideModal} className="cart__infor-close">
                <span>Đóng cửa sổ</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
