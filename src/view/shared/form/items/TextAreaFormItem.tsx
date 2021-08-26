import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import FormErrors from "../formErrors";

function TextAreaFormItem(props) {
  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();
  const { name, placeholder, required, externalErrorMessage } = props;
  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage
  );
  return (
    <>
      <textarea
        id={name}
        name={name}
        ref={register}
        placeholder={placeholder || undefined}
        className={`form-control ${errorMessage ? "is-invalid" : ""}
        `}
      />
      <div className='invalid-feedback'>{errorMessage}</div>
    </>
  );
}
TextAreaFormItem.defaultProps = {
  required: false,
};
TextAreaFormItem.prototype = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};
export default TextAreaFormItem;
