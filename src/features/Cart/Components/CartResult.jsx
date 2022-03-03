import React from "react";

CartResult.propTypes = {};

function CartResult(props) {
  const { ListCart } = props;
  return (
    <div class="container__product">
      <div class="container__category-product">
        <span>Tổng tiền: </span>
      </div>
      <ul class="container__category-list">
        <li class="container__category-item">
          <span class="container__product-price">
            {ListCart.length === 0
              ? "0"
              : ListCart.reduce((total, item) => {
                  return total + item.price * item.quantity;
                }, 0)}$
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CartResult;
