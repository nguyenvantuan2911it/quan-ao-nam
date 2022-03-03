import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from "prop-types";
import React from "react";
ProductItem.propTypes = {
  ProductList: PropTypes.array,
};

function ProductItem(props) {
  const { ProductList, onShowModal } = props;
  const handleShowModal = (key) => {
    onShowModal(key);
  };
  return (
    <div className="products">
      {ProductList.length === 0
        ? "Sản phẩm chưa được cập nhật tại Store"
        : ProductList.map((product, index) => {
            return (
              <div key={index} className="products__item">
                <img
                  src={product.img}
                  alt=""
                  className="products__item-image"
                />
                <span className="products__item-content">{product.name}</span>
                <span className="products__item-price">{product.price}$</span>
                <div className="product__discount">
                  <span className="discount__number">{product.discount}</span>
                </div>
                <button
                  className="product__cart"
                  onClick={() => handleShowModal(product.id)}
                >
                  <ShoppingCartIcon color="secondary" sx={{ fontSize: 40 }} />
                </button>
              </div>
            );
          })}
    </div>
  );
}

export default ProductItem;
