import { cartActionTypes } from "./cartTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const signinToggle = () => ({
  type: cartActionTypes.TOGGLE_SIGNIN,
});
export const signoutToggle = () => ({
  type: cartActionTypes.TOGGLE_SIGNOUT,
});

export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
