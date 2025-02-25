import "../styles/globals.css";
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "@next/font/google";
import { useEffect } from "react";
import * as CartReducer from "../store/reducers/cartReducer";
import * as Actions from "../store/actions/actions";
import Context from "../store/utils/context";
import React from "react";

import PrimeReact from "primereact/api";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

PrimeReact.ripple = true;

export default function App({ Component, pageProps }: AppProps) {
  // the right way to add bootstrap javascript into nextjs
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [state, dispatch] = React.useReducer(
    CartReducer.reducer,
    CartReducer.initialState
  );
  // const Context = createContext();
  return (
    <Context.Provider
      value={{
        cartItems: state.cartItems,
        incrementQuantity: (product: any) =>
          dispatch(Actions.incrementQuantity(product)),
        addToCart: (product: any) => dispatch(Actions.addToCart(product)),
        removeFromCart: (product: any) =>
          dispatch(Actions.removeFromCart(product)),
        decrementQuantity: (product: any) =>
          dispatch(Actions.decrementQuantity(product)),
      }}
    >
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Context.Provider>
  );
}
