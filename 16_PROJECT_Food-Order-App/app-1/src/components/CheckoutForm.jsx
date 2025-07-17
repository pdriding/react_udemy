import { use, useActionState } from "react";
import { MealsContext } from "../store/meals-context";
import { isNotEmpty, hasMinLength } from "../util/validation";

export default function CheckoutForm({ closeCheckoutModal, orderSuccessPage }) {
  const { cart, sendOrder, order } = use(MealsContext);

  function calculateTotal() {
    const total = cart.reduce((acc, cur) => {
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

    // const errors = [];

    // if (!isNotEmpty(name)) {
    //   errors.push("Please provide a first name!");
    // }

    // if (!isNotEmpty(email)) {
    //   errors.push("Please provide a valid email");
    // }

    // if (!isNotEmpty(city)) {
    //   errors.push("Please provide a city");
    // }

    // if (!isNotEmpty(street)) {
    //   errors.push("Please provide a valid street address");
    // }

    // if (!isNotEmpty(postCode) || !hasMinLength(postCode, 6)) {
    //   errors.push("You must prove a valid post code.");
    // }

    // if (errors.length > 0) {
    //   return {
    //     errors,
    //     enteredValues: {
    //       name,
    //       email,
    //       street,
    //       ["postal-code"]: postCode,
    //       city,
    //     },
    //   };
    // }

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
  return (
    <>
      <h2>Checkout</h2>
      <p>Your Tolal: {calculateTotal()}</p>
      <form action={formAction}>
        {/* Single-column controls */}
        <div className="control">
          <label htmlFor="first-name">Full Name</label>
          <input
            type="text"
            id="first-name"
            name="name"
            defaultValue={formState.enteredValues?.name}
          />
        </div>

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

        {/* {formState.errors && (
          <ul>
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )} */}
        {console.log(44, order)}
        {order?.error?.message && <p>{order.error.message}</p>}

        {/* Submit button */}
        <div className="modal-actions">
          <button className="text-button" onClick={closeCheckoutModal}>
            Close
          </button>
          <button className="button" onClick={calculateTotal}>
            Submit Order
          </button>
        </div>
      </form>
    </>
  );
}
