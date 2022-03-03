import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";
RadioField.propTypes = {
  name: PropTypes.string,
};

function RadioField(props) {
  const { name, label, control, options } = props;
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({ control, name });
  return (
    <FormControl
      component="fieldset"
      error={invalid}
      style={{ display: "block", marginTop: "15px", width: "800px" }}
    >
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        aria-label="gender"
        name="row-radio-buttons-group"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
}

export default RadioField;
