import ContactService from "../../contactServices";
import Message from "src/view/shared/message";

const contactFormActions = {
  CREATE_STARTED: `CONTACT_FORM_INIT_STARTED`,
  CREATE_SUCCESS: `CONTACT_FORM_INIT_SUCCESS`,
  CREATE_ERROR: `CONTACT_FORM_INIT_ERROR`,

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({ type: contactFormActions.CREATE_STARTED });
      await ContactService.create(values);
      dispatch({ type: contactFormActions.CREATE_SUCCESS });
      Message.success("Your message has been sent. Thank you!");
    } catch (error) {
      dispatch({ type: contactFormActions.CREATE_ERROR });
    }
  },
};
export default contactFormActions;
