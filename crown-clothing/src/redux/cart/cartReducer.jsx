import { cartActionTypes } from "./cartTypes";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  signinState: true,
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.TOGGLE_SIGNIN:
      return {
        ...state,
        signinState: true,
      };
    case cartActionTypes.TOGGLE_SIGNOUT:
      return {
        ...state,
        signinState: false,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
