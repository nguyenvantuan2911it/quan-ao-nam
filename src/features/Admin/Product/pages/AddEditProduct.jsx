import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productApi from "../../../../api/productApi";
import ProductForm from "../components/ProductForm";
import {toast} from "react-toastify"
import { useNavigate } from "react-router";
AddEditProduct.propTypes = {};

function AddEditProduct(props) {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      try {
        const data = await productApi.getById(
          id.substring(0, id.length - 1),
          id
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id, isEdit]);
  const handleSubmit = async (data) => {
    if (!isEdit) {
      await productApi.add("aosomi",data);
      toast.success("Thêm sản phẩm thành công");
    } else {
      await productApi.update(id.substring(0, id.length - 1),data);
      toast.success("Cập nhật sản phẩm thành công");
    }
    navigate("/admin/product");
  }
  const initialValue = {
    name: "",
    img: "",
    price: "",
    discount: "",
    type: "aosomi",
    ...product,
  };
  return (
    <div>
      {(!isEdit || Boolean(product)) && (
        <ProductForm initialValue={initialValue} onSubmit={handleSubmit}/>
      )}
    </div>
  );
}

export default AddEditProduct;
