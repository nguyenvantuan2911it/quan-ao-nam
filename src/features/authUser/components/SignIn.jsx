import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import userApi from "../../../api/userApi";
import InputField from "../../../components/Common/FormField/InputField";
import RadioField from "../../../components/Common/FormField/RadioField";
import SelectField from "../../../components/Common/FormField/SelectField";
SignIn.propTypes = {};

const schema = yup
  .object({
    name: yup.string().required("Bạn phải phập trường này"),
    accountname: yup.string().required("Bạn phải phập trường này"),
    email: yup
      .string()
      .email("Bạn phải nhập email examp@gmail.com")
      .required("Bạn phải phập trường này"),
    password: yup.string().required("Bạn phải phập trường này"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(15, "Bạn phải trên 15 tuổi")
      .max(100, "Bạn không được nhập quá 100 tuổi")
      .required("Bạn phải phập trường này")
      .typeError("Bạn phải nhập số cho trường này"),
    gender: yup.string().required("Bạn phải phập trường này"),
    city: yup.string().required("Bạn phải phập trường này"),
  })
  .required();

function SignIn(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      accountname: "",
      email: "",
      password: "",
      age: "",
      gender: "female",
      birthday: "",
      city: "",
    },
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const handleSubmitForm = async (Formvalue) => {
    try {
      const data = await userApi.getAll();
      console.log(data);
      const isChecked = data.findIndex(
        (item) => item.accountname === Formvalue.accountname
      );
      if (isChecked !== -1) {
        toast.warning("Tài khoản đã tồn tại.");
      } else {
        await userApi.add(Formvalue);
        toast.success("Đăng ký tài khoản thành công.");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleToLogin = () => { 
    navigate("/login");
  }
  return (
    <div>
      <form
        style={{ display: "block", marginLeft: "700px" }}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <InputField name="name" label="Full Name" control={control} />
        <InputField name="accountname" label="Account Name" control={control} />
        <InputField name="email" label="Email" control={control} />
        <InputField
          name="password"
          label="Password"
          control={control}
          type="password"
        />
        <InputField name="age" label="Age" control={control} />
        <RadioField
          name="gender"
          label="Gender"
          control={control}
          options={[
            { value: "female", label: "Female" },
            { value: "male", label: "Male" },
          ]}
        />
        {/* <DateTimeField name="birthday" label="Birth Day" control={control}/> */}
        <SelectField
          name="city"
          label="City"
          control={control}
          options={[
            { value: "bn", label: "Bắc Ninh" },
            { value: "hn", label: "Hà Nội" },
            { value: "hcm", label: "Hồ Chí Minh" },
          ]}
        />
        <Button
          style={{ display: "block", marginTop: "15px" }}
          type="submit"
          variant="contained"
          disableElevation
        >
          Đăng ký
        </Button>
        <Button
          style={{ position: "relative", top: "-36px", left: "110px" }}
          variant="contained"
          onClick={handleToLogin}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
