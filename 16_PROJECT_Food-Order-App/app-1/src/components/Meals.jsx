import { use } from "react";
import { MealsContext } from "../store/meals-context";
import Meal from "./meal";

export default function Meals() {
  const { meals } = use(MealsContext);
  console.log(meals);
  return (
    <>
      {meals && (
        <ul id="meals">
          {meals.map((m) => (
            <li key={m.id}>
              <Meal meal={m} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
