import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes/cart.types";

const initialState = {
  cartItems: [],
  quantityById: {},
  totalPrice: 0
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const shouldAddItem =
        state.cartItems.map((i) => i.id).indexOf(action.payload.id) !== -1;
      return {
        ...state,
        cartItems: shouldAddItem
          ? state.cartItems
          : [...state.cartItems, action.payload],
        quantityById: {
          ...state.quantityById,
          [action.payload.id]: (state.quantityById[action.payload.id] || 0) + 1,
        },
        totalPrice: state.totalPrice + action.payload.price
      };
    }
    case REMOVE_ITEM: {
      const shouldRemoveItem = state.quantityById[action.payload.id] === 1;
      return {
        ...state,
        cartItems: shouldRemoveItem
          ? state.cartItems.filter((i) => i !== action.payload)
          : state.cartItems,
        quantityById: {
          ...state.quantityById,
          [action.payload.id]: (state.quantityById[action.payload.id] || 0) - 1,
        },
        totalPrice: state.totalPrice - action.payload.price
      };
    }
    default:
      return state;
  }
}
