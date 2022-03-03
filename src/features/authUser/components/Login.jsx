import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import InputField from "../../../components/Common/FormField/InputField";
import { authUserActions } from "../authUserSlice.";

const schema = yup
  .object()
  .shape({
    accountname: yup.string().required("Bạn phải nhập trường này"),
    password: yup.string().required("Bạn phải nhập trường này"),
  })
  .required();
Login.propTypes = {};

function Login(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      accountname: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleSubmitForm = (formValue) => {
    dispatch(authUserActions.login(formValue));
  };
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/product/aosomi");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}
        style={{ marginLeft: "600px"}}
      >
        <InputField name="accountname" label="Account Name" control={control} />
        <InputField
          name="password"
          label="Password"
          type="password"
          control={control}
        />
        <Button
          style={{ display: "block", marginTop: "15px",marginLeft: "30px"}}
          type="submit"
          variant="contained"
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default Login;
