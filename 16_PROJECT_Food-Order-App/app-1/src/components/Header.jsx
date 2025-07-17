import { use } from "react";
import logoImg from "../assets/logo.jpg";
import { MealsContext } from "../store/meals-context";

export default function Header({ openCartModal, closeModal }) {
  const { cart, addMeal } = use(MealsContext);

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="Logo" />
          <h1>REACT FOOD</h1>
        </div>
        <nav>
          <button className="text-button" onClick={() => openCartModal()}>
            Cart ({cart.length})
          </button>
        </nav>
      </header>
    </>
  );
}
