import * as yup from "yup";

const yupValidation = {
  string(label, config?) {
    config = config || {};
    let yupChain = yup.string().nullable(true).trim().label(label);
    if (config.required) {
      yupChain = yupChain.required();
    }
    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }
    if (config.max) {
      yupChain = yupChain.max(config.max);
    }
    return yupChain;
  },
};
export default yupValidation;
