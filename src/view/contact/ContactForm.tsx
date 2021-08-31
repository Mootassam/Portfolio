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
  const [initailValues] = useState(() => {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initailValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(values);
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
        <div className='my-3'>
          <div className='loading'>Loading</div>
          <div className='error-message'></div>
          <div className='sent-message'>
            Your message has been sent. Thank you!
          </div>
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
