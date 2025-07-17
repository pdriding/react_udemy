import { use } from "react";
import { MealsContext } from "../store/meals-context";
import CartItem from "./CartItem";

export default function Cart({ closeCartModal, openCheckoutModal }) {
  const { cart } = use(MealsContext);

  function calculateTotal() {
    const total = cart.reduce((acc, cur) => {
      const amount = Number(cur.price) * cur.quantity;
      return (acc = acc + amount);
    }, 0);
    return total;
  }

  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cart.map((c) => (
            <li className="cart-item" key={c.id}>
              {<CartItem item={c} />}
            </li>
          ))}
        </ul>
        <div className="cart-total">{calculateTotal()}</div>

        <div className="modal-actions">
          <button className="text-button" onClick={() => closeCartModal()}>
            Close
          </button>
          <button className="button" onClick={() => openCheckoutModal()}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
