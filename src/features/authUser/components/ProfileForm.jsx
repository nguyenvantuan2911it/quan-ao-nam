import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../../components/Common/FormField/InputField";
import RadioField from "../../../components/Common/FormField/RadioField";
import SelectField from "../../../components/Common/FormField/SelectField";

ProfileForm.propTypes = {};

function ProfileForm(props) {
  const { initialValue, onSubmit } = props;
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  const handleSubmitForm = (FormValue) => {
    onSubmit(FormValue);
  };
  return (
    <>
      <form
        style={{ marginLeft: "700px" }}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <InputField
          name="accountname"
          disable="true"
          label="Tên đăng nhập"
          control={control}
        />
        <InputField name="name" label="Họ và Tên" control={control} />
        <InputField name="email" label="Email" control={control} />
        <InputField
          name="password"
          type="password"
          label="Password"
          control={control}
        />
        <InputField name="age" label="Tuổi" control={control} />
        <RadioField
          name="gender"
          label="Giới tính"
          control={control}
          options={[
            { value: "female", label: "Nam" },
            { value: "male", label: "Nữ" },
          ]}
        />
        <SelectField
          name="city"
          control={control}
          label="Quê Quán"
          options={[
            { value: "bn", label: "Bắc Ninh" },
            { value: "hn", label: "Hà Nội" },
            { value: "hcm", label: "Hồ Chí Minh" },
          ]}
        />
        <Button
          style={{ display: "block", marginTop: "15px", marginLeft: "0px" }}
          type="submit"
          variant="contained"
        >
          Lưu
        </Button>
      </form>
    </>
  );
}

export default ProfileForm;
