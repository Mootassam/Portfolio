/* eslint-disable import/no-anonymous-default-export */
import { connectRouter } from "connected-react-router";
import contact from "src/modules/contact/contactReducers";
import { combineReducers } from "redux";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    contact,
  });
