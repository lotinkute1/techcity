import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";
import "./style.css";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField({ form, name, label, disabled }) {
  const { control } = form;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <TextField
          // style={{
          //   marginBottom: "20px",
          // }}
          InputLabelProps={{ className: "textField" }}
          inputProps={{ className: "textField" }}
          InputProps={{ className: "textField" }}
          FormHelperTextProps={{ className: "helperText" }}
          size="medium"
          fullWidth
          label={label}
          variant="outlined"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          error={invalid}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default InputField;
