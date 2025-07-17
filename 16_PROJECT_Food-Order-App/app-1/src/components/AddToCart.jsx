import { use } from "react";
import { MealsContext } from "../store/meals-context";

export default function AddToCart({ meal }) {
  const { cart, addMeal } = use(MealsContext);

  function addMealToCart(meal) {
    addMeal(meal);
  }

  return (
    <div className="meal-item-actions">
      <button className="button" onClick={() => addMealToCart(meal)}>
        Add to Cart
      </button>
    </div>
  );
}
