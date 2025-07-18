import { use, useActionState, useContext } from "react";
import Input from "./UI/Input";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./modal";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import Button from "./UI/Button";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  function calculateTotal() {
    const total = cartCtx.items.reduce((acc, cur) => {
      const amount = Number(cur.price) * cur.quantity;
      return (acc = acc + amount);
    }, 0);
    return total;
  }

  // -----------------------

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }
  let actions = (
    <>
      <button className="text-button" onClick={handleClose}>
        Close
      </button>
      <button className="button">Submit Order</button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success...</h2>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }
  return (
    <>
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleClose}
      >
        <h2>Checkout</h2>
        <p>Your Tolal: {calculateTotal()}</p>
        <form onSubmit={handleSubmit}>
          {/* Single-column controls */}
          <Input label="Full Name" type="text" id="name" />

          <div className="control">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              // defaultValue={formState.enteredValues?.email}
            />
          </div>

          <div className="control">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              // defaultValue={formState.enteredValues?.street}
            />
          </div>

          {/* A row of controls */}
          <div className="control-row">
            <div className="control">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postal-code"
                name="postal-code"
                // defaultValue={formState.enteredValues?.postCode}
              />
            </div>
            <div className="control">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" />
            </div>
          </div>
          {error && <Error title="Failed to submit..." message={error} />}
          {/* Submit button */}
          <div className="modal-actions">{actions}</div>
        </form>
      </Modal>
    </>
  );
}
