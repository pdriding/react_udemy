import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <>
      <div className="meal-item">
        <article>
          <img
            src={`http://localhost:3000/${meal.image}`}
            alt="Delicious Meal"
          />

          <div>
            <h3>{meal.name}</h3>
            <div>
              <span className="meal-item-price">
                {currencyFormatter.format(meal.price)}
              </span>
            </div>
            <p className="meal-item-description">{meal.description}</p>
          </div>

          <p className="meal-item-actions">
            <Button onClick={handleAddMealToCart}>Add to Cart</Button>
          </p>

          {/* <AddToCart meal={meal} /> */}
        </article>
      </div>
    </>
  );
}
