import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import FormErrors from "../formErrors";
function InputFormItem(props) {
  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();
  const { name, placeholder, disabled, externalErrorMessage } = props;
  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage
  );
  return (
    <>
      <input
        name={name}
        id={name}
        ref={register}
        placeholder={placeholder}
        disabled={disabled}
        className={`form-control ${errorMessage ? "is-invalid" : ""}
            `}
      />
      <div className='invalid-feedback'>{errorMessage}</div>
    </>
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
