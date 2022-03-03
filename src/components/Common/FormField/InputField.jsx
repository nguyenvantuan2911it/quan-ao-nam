import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

InputField.propTypes = {
  name: PropTypes.string,
};

function InputField(props) {
  const { control, name, label,...inputProps } = props;
  const {
    field: { value, onChange, onBlur, ref }, // ref khi validate sai no se tu chi den
    fieldState: { invalid, error },
  } = useController({
    control,
    name,
  });
  return (
    <TextField
      style={{ display: "block", marginTop: "15px", width: "300px" }}
      id={`${name} standard-basic`}
      variant="standard"
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}

export default InputField;
