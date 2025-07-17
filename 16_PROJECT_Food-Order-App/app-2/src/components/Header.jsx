import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  console.log(55, cartCtx);
  const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
    return totalNumberofItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="Logo" />
          <h1>REACT FOOD</h1>
        </div>
        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </header>
    </>
  );
}
