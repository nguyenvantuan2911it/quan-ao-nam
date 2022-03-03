import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import React from "react";
CartItem.propTypes = {};

function CartItem(props) {
  const { ListCart, onChage, onRemove } = props;

  const handleChange = (e, item) => {
    const { name, value } = e.target;
    onChage({
      ...item,
      [name]: value,
    });
  };

  const handleRemove = (item) => {
    onRemove(item);
  };

  return (
    <>
      {ListCart.length === 0
        ? "Khong co san pham trong gio hang"
        : ListCart.map((item, index) => (
            <div key={index} className="container__product">
              <div className="container__category-product">
                <img src={item.img} alt="" className="container__product-img" />
                <span className="container__product-name"> {item.name} </span>
                <select
                  defaultValue={item.size}
                  onChange={(e) => handleChange(e, item)}
                  className="container__product-size"
                  name="size"
                >
                  <option value="S" id="size" className="select__wrap-option ">
                    S
                  </option>
                  <option value="M" id="size" className="select__wrap-option ">
                    M
                  </option>
                  <option value="L" id="size" className="select__wrap-option ">
                    L
                  </option>
                </select>
              </div>
              <ul className="container__category-list">
                <li className="container__category-item">
                  <span className="container__product-price">
                    {item.price}$
                  </span>
                </li>
                <li className="container__category-item">
                  <select
                    onChange={(e) => handleChange(e, item)}
                    defaultValue={item.quantity}
                    className="select__wrap-sele select__wrap-selet"
                    name="quantity"
                    style={{ marginLeft: "40px" }}
                  >
                    <option value="1" className="select__wrap-option">
                      1
                    </option>
                    <option value="2" className="select__wrap-option">
                      2
                    </option>
                    <option value="3" className="select__wrap-option">
                      3
                    </option>
                  </select>
                </li>
                <li className="container__category-item">
                  <span className="container__product-total">
                    {item.price * item.quantity}$
                  </span>
                </li>
                <li className="container__category-item">
                  <Button
                    className="container__product-delete"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </Button>
                </li>
              </ul>
            </div>
          ))}
    </>
  );
}

export default CartItem;
