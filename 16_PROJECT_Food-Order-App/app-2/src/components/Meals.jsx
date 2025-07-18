import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch" message={error} />;
  }

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
