import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes/cart.types";

export const addItemActionCreator = (item) => {
  return { type: ADD_ITEM, payload: item };
};

export const removeItemActionCreator = (item) => {
  return { type: REMOVE_ITEM, payload: item };
};