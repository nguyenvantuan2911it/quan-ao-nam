import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import cartApi from "../../api/cartApi";
import { cartActions } from "./CartSlice";
import CartItem from "./Components/CartItem";
import CartResult from "./Components/CartResult";

Cart.propTypes = {};

function Cart(props) {
  const dispatch = useDispatch();
  const ListCart = useSelector((state) => state.cart.list);
  const filter = useSelector((state) => state.cart.filter);
  useEffect(() => {
    dispatch(cartActions.fetchData(filter.endpoint));
  }, [dispatch, filter]);

  const handleChange = async (data) => {
    try {
      await cartApi.update(data);
      const newFilter = { ...filter };
      dispatch(cartActions.setFilter(newFilter));
      toast.success("Cập nhật giỏ hàng thành công");
    } catch (error) {
      toast.error("Cập nhật giỏ hàng thất bại");
    }
  };

  const handleRemove = async (data) => {
    try {
      await cartApi.remove(data.id);
      const newFilter = { ...filter };
      dispatch(cartActions.setFilter(newFilter));
      toast.success("Xoá sản phẩm thành công");
    } catch (error) {
      toast.error("Xoá sản phẩm thất bại");
    }
  };

  return (
    <div className="container">
      <div className="container__category">
        <div className="container__category-product">Sản phẩm</div>
        <ul className="container__category-list">
          <li className="container__category-item">Đơn giá</li>
          <li className="container__category-item">Số lượng</li>
          <li className="container__category-item">Thành tiền</li>
          <li className="container__category-item">Thao tác</li>
        </ul>
      </div>
      <div id="container__cart">
        <CartItem
          ListCart={ListCart}
          onChage={handleChange}
          onRemove={handleRemove}
        />
      </div>
      <div>
        <CartResult ListCart={ListCart} />
      </div>
    </div>
  );
}

export default Cart;
