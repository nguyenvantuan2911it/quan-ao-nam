import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "../../../../components/Common/FormField/InputField";
import SelectField from "../../../../components/Common/FormField/SelectField";
ProductForm.propTypes = {};

function ProductForm(props) {
  const { initialValue, onSubmit } = props;
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });
  const handleSubmitForm = async (formValue) => {
    try {
      await onSubmit(formValue);
    } catch (error) {
      console.log(error);
      toast.error("Lỗi");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <InputField control={control} name="name" label="Name" />
        <img src={initialValue.img} alt=" " width="100px" />
        <InputField control={control} name="price" label="Price" />
        <InputField control={control} name="discount" label="Discount" />
        <SelectField
          control={control}
          name="type"
          label="Type"
          options={[
            { value: "aosomi", label: "Áo sơ mi" },
            { value: "aokhoac", label: "Áo khoác" },
            { value: "aothun", label: "Áo thun" },
          ]}
        />
        <Button type="submit">Lưu</Button>
      </form>
    </div>
  );
}

export default ProductForm;
