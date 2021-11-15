import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes/cart.types";

const initialState = {
  cartItems: [],
  quantityById: {},
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        cartItems:
          state.cartItems.map((i) => i.id).indexOf(action.payload.id) !== -1
            ? state.cartItems
            : [...state.cartItems, action.payload],
        quantityById: {
          ...state.quantityById,
          [action.payload.id]: (state.quantityById[action.payload.id] || 0) + 1,
        },
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i !== action.payload),
      };
    }
    default:
      return state;
  }
}
