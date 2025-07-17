import { use, useContext } from "react";
import CartItem from "./CartItem";
import Modal from "./modal";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/CartContext";

export default function Cart({ closeCartModal, openCheckoutModal }) {
  const { items, addItem, removeItem } = use(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function calculateTotal() {
    const total = items.reduce((acc, cur) => {
      const amount = Number(cur.price) * cur.quantity;
      return (acc = acc + amount);
    }, 0);
    return total;
  }

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <>
      <Modal
        open={userProgressCtx.progress === "cart"}
        onClose={handleCloseCart}
      >
        {" "}
        <div className="cart">
          <h2>Your Cart</h2>
          <ul>
            {items.map((c) => (
              <li className="cart-item" key={c.id}>
                {
                  <CartItem
                    item={c}
                    onIncrease={() => addItem(c)}
                    onDecrease={() => removeItem(c)}
                  />
                }
              </li>
            ))}
          </ul>
          <div className="cart-total">{calculateTotal()}</div>

          <div className="modal-actions">
            <button className="text-button" onClick={handleCloseCart}>
              Close
            </button>
            {items.length && (
              <button className="button" onClick={handleGoToCheckout}>
                Checkout
              </button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
