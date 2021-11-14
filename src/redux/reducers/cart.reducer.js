import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes/cart.types";

const initialState = {
  cartItems: [],
};

export function cartReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(i => i !== action.payload),
      };
    }
    default:
      return state;
  }
}
