import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
function InputFormItem(props) {
  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();
  const { name, placeholder, disabled } = props;
  return (
    <input
      name={name}
      id={name}
      ref={register}
      placeholder={placeholder}
      disabled={disabled}
      className={`form-control`}
    />
  );
}
InputFormItem.defaultProps = {
  type: "text",
  required: false,
};
InputFormItem.prototype = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};
export default InputFormItem;
