import * as ACTION_TYPES from "./actionTypes";

export const incrementQuantity = (product: any) => {
  return {
    type: ACTION_TYPES.INCREMENT_QUANTITY,
    payload: product,
  };
};

export const decrementQuantity = (product: any) => {
  return {
    type: ACTION_TYPES.DECREMENT_QUANTITY,
    payload: product,
  };
};

export const addToCart = (product: any) => {
  return {
    type: ACTION_TYPES.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product: any) => {
  return {
    type: ACTION_TYPES.REMOVE_FROM_CART,
    payload: product,
  };
};
