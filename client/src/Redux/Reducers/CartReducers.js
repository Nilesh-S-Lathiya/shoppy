import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constant/CartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (items) => items.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((items) =>
            items.product === existItem.product ? item : items
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
