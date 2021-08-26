import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

function TextAreaFormItem(props) {
  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();
  const { name, placeholder, required } = props;
  return (
    <textarea
      id={name}
      name={name}
      ref={register}
      placeholder={placeholder || undefined}
      className={`form-control`}
    />
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
