import { createContext } from "react";

export const CartContext = createContext({
  // so auto complete works (makes life easier)
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});
