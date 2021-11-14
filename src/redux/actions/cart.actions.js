import { ADD_DESCRIPTION, ADD_FILES } from "../types/uploadBook.types";
import { Api } from "../../api";

const setBookDescriptionActionCreator = (description) => {
  return { type: ADD_DESCRIPTION, payload: description };
};

export function setBookDescription(description) {
  return async (dispatch) => {
    try {
      await Api().createBook(description);
    } catch (e) {
      console.log(e);
    }
    return dispatch(setBookDescriptionActionCreator(description));
  };
}
