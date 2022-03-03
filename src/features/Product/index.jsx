import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import productApi from "../../api/productApi";
import FilterProduct from "./components/FilterProduct";
import Modal from "./components/Modal";
import ProductItem from "./components/ProductItem";
import { productActions } from "./ProductSlice";

Product.propTypes = {};

function Product() {
  const dispatch = useDispatch();
  const { productkey } = useParams();
  const [key, setKey] = useState();
  const ProductList = useSelector((state) => state.product.list);
  const loading = useSelector((state) => state.product.loading);
  const filter = useSelector((state) => state.product.filter);

  useEffect(() => {
    dispatch(productActions.fetchProductList({ productkey, filter }));
  }, [dispatch, productkey, filter]);
  
  const handleChange = (newFilter) => {
    dispatch(productActions.setFilter(newFilter));
  };
  const handleShowModal = (id) => {
    setKey(id);
  };

  const handleHideModal = () => {
    setKey();
  };
  const title = {
    aosomi: "Áo sơ mi nam",
    aokhoac: "Áo khoác",
    aothun: "Áo thun",
    aothethao: "Áo thể thao",
    aotanktop: "Áo Tanktop",
    quanjeans: "Quần Jeans",
    quanthethao: "Quần Thể Thao",
    quantay: "Quần Tây",
    quankaki: "Quần Kaki",
    quanbaggy: "Quần Baggy",
    vida: "Ví da",
    thatlung: "Thắt lưng",
    cavat: "Cà vạt",
    dongho: "Đồng hồ",
    mu: "Mũ",
    giaythethao: "Giày thể thao",
    giayda: "Giày da",
    giaynu: "Giày nữ",
    dep: "Dép",
    giayhanghieu: "Giày hàng hiệu",
  };
  const handleAddToCart = async (data) => {
    await productApi.add("cart", data);
  };
  
  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="loading"> </div>
        </div>
      ) : (
        <div className="container">
          <div className="bcrumbs"></div>
          <div id="action" className="action">
            {productkey && (
              <h2 className="action_heading"> {title[productkey]} </h2>
            )}

            {/* filter product */}
            <FilterProduct filter={filter} onChange={handleChange} />
            <div className="acction__convert">
              <div className="action_grid">
                <i className="fas fa-th-large"></i>
              </div>
              <div className="action_list">
                <i className="fas fa-list"></i>
              </div>
            </div>
          </div>
          {/* list product */}
          {ProductList && (
            <ProductItem
              ProductList={ProductList}
              onShowModal={handleShowModal}
            />
          )}
          {key && (
            <>
              <Modal
                id={key}
                onHideModal={handleHideModal}
                onAddToCart={handleAddToCart}
              />
              
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Product;
