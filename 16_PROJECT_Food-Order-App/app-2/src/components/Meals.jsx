import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function loadMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();

      if (!response) {
        return;
      }
      setLoadedMeals(meals);
    }

    loadMeals();
  }, []);

  return (
    <>
      {loadedMeals && (
        <ul id="meals">
          {loadedMeals.map((m) => (
            <li className="meal-item" key={m.id}>
              <MealItem meal={m} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
