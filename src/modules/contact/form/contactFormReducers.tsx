/* eslint-disable import/no-anonymous-default-export */
import actions from "src/modules/contact/form/contactFormActions";

const initialData = {
  initLoading: false,
  saveLoading: false,
  record: null,
};

export default (state = initialData, { type }) => {
  if (type === actions.CREATE_STARTED) {
    return { ...state, saveLoading: true };
  }
  if (type === actions.CREATE_SUCCESS) {
    return { ...state, saveLoading: false };
  }
  if (type === actions.CREATE_ERROR) {
    return { ...state, saveLoading: false };
  }

  return state;
};
