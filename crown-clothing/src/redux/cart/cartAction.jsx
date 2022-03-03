import { cartActionTypes } from "./cartTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const signinToggle = () => ({
  type: cartActionTypes.TOGGLE_SIGNIN,
});
export const signoutToggle = () => ({
  type: cartActionTypes.TOGGLE_SIGNOUT,
});
