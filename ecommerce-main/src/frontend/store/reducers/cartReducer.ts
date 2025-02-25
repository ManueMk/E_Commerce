import * as ACTION_TYPES from "../actions/actionTypes";
export const initialState: any = {
  cartItems: [],
};
export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_QUANTITY: {
      const newc = state.cartItems.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...newc],
      };
    }
    case ACTION_TYPES.DECREMENT_QUANTITY: {
      let newc = state.cartItems.map((item: any) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      if (action.payload.quantity === 0) {
        newc = state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        );
      }
      return {
        ...state,
        cartItems: [...newc],
      };
    }
    case ACTION_TYPES.ADD_TO_CART: {
      const chosenProd = state.cartItems.filter(
        (item: any) => item.id === action.payload.id
      )[0];
      if (!chosenProd) {
        action.payload["quantity"] = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        const newCartItems = state.cartItems.map((itm: any) => {
          if (itm.id === action.payload.id) {
            return { ...itm, quantity: itm.quantity + 1 };
          }
          return itm;
        });
        return {
          ...state,
          cartItems: [...newCartItems],
        };
      }
    }

    case ACTION_TYPES.REMOVE_FROM_CART: {
      const list = state.cartItems.filter(
        (ci: any) => ci.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...list],
      };
    }

    default:
      throw new Error("unknown action");
  }
}
