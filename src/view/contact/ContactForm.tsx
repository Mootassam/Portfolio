import React, { useState } from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import TextAreaFormItem from "src/view/shared/form/items/TextAreaFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupValidation from "src/view/shared/yup/yupValidation";
import ButtonSpinner from "../shared/ButtonSpinner";
const schema = yup.object().shape({
  name: yupValidation.string("name", {
    required: true,
  }),
  email: yupValidation.string("email", {
    required: true,
  }),
  subject: yupValidation.string("subject", {
    required: true,
  }),
  message: yupValidation.string("message", {
    required: true,
  }),
});
function ContactForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      email: record.email,
      subject: record.subject,
      message: record.message,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(values);
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='php-email-form'>
        <div className='row'>
          <div className='col-md-6 form-group'>
            <InputFormItem
              name={"name"}
              placeholder={"Name"}
              required={true}
              autoFocus
            />
          </div>
          <div className='col-md-6 form-group mt-3 mt-md-0'>
            <InputFormItem
              name={"email"}
              placeholder={"Your Email"}
              required={true}
              autoFocus
            />
          </div>
        </div>
        <div className='form-group mt-3'>
          <InputFormItem
            name={"subject"}
            placeholder={"Subject"}
            required={true}
            autoFocus
          />
        </div>
        <div className='form-group mt-3'>
          <TextAreaFormItem name={"message"} placeholder={"Message"} />
        </div>

        <div className='text-center'>
          <button type='submit' disabled={props.saveLoading}>
            <ButtonSpinner loading={props.saveLoading} />
            Send Message
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
