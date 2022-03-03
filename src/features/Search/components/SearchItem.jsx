import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from "prop-types";
import React from "react";

SearchItem.propTypes = {
  ProductList: PropTypes.array,
};

function SearchItem(props) {
  const { SearchList, onShowModal } = props;
  const handleShowModal = (key) => {
    onShowModal(key);
  };
  return (
    <div className="products">
      {SearchList.length <= 0 ? (
        <div className="notsearch">Không tìm thấy sản phẩm</div>
      ) : (
        SearchList.map((product, index) => {
          return (
            <div key={index} className="products__item">
              <img src={product.img} alt="" className="products__item-image" />
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
        })
      )}
    </div>
  );
}

export default SearchItem;
