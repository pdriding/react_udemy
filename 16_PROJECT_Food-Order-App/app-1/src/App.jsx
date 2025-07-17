import Header from "./components/Header";
import Meals from "./components/Meals";
import { MealsContextProvider } from "./store/meals-context";
import Modal from "./components/Modal";
import { useState } from "react";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import OrderComplete from "./components/OrderComplete";

function App() {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  function closeModal() {
    setModalType(null);
  }
  return (
    <>
      <MealsContextProvider>
        <Modal open={modalType !== null} onClose={closeModal}>
          {modalType === "cart" ? (
            <Cart
              closeCartModal={closeModal}
              openCheckoutModal={() => setModalType("checkout")}
            />
          ) : modalType === "checkout" ? (
            <CheckoutForm
              closeCheckoutModal={closeModal}
              orderSuccessPage={() => setModalType("orderSuccess")}
            />
          ) : modalType === "orderSuccess" ? (
            <OrderComplete closeSuccessModal={closeModal} />
          ) : null}
        </Modal>
        <Header
          openCartModal={() => setModalType("cart")}
          closeCartModal={closeModal}
        />
        <main>
          <Meals />
        </main>
      </MealsContextProvider>
    </>
  );
}

export default App;
