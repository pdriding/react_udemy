import { use, useActionState, useContext } from "react";
import Input from "./UI/Input";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./modal";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function calculateTotal() {
    const total = cartCtx.items.reduce((acc, cur) => {
      const amount = Number(cur.price) * cur.quantity;
      return (acc = acc + amount);
    }, 0);
    return total;
  }

  // -----------------------

  async function checkoutAction(prevFormState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const street = formData.get("street");
    const postCode = formData.get("postal-code");
    const city = formData.get("city");

    const order2 = {
      order: {
        customer: { name, email, street, ["postal-code"]: postCode, city },
        items: cart,
      },
    };

    await sendOrder(order2);

    if (!order?.error?.message) {
      orderSuccessPage();
    }

    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(checkoutAction, {
    errors: null,
  });

  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  return (
    <>
      <Modal open={userProgressCtx.progress === "checkout"}>
        <h2>Checkout</h2>
        <p>Your Tolal: {calculateTotal()}</p>
        <form action={formAction}>
          {/* Single-column controls */}
          <Input label="Full Name" type="text" id="name" />

          <div className="control">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={formState.enteredValues?.email}
            />
          </div>

          <div className="control">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              defaultValue={formState.enteredValues?.street}
            />
          </div>

          {/* A row of controls */}
          <div className="control-row">
            <div className="control">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postal-code"
                defaultValue={formState.enteredValues?.postCode}
              />
            </div>
            <div className="control">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
          </div>

          {/* Submit button */}
          <div className="modal-actions">
            <button className="text-button" onClick={handleClose}>
              Close
            </button>
            <button className="button" onClick={calculateTotal}>
              Submit Order
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
