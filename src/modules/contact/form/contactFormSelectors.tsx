import { createSelector } from "reselect";
const selectRaw = (state) => state.contact.form;
const selectSaveLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.saveLoading)
);
const contactFormSelectors = {
  selectSaveLoading,
};
export default contactFormSelectors;
