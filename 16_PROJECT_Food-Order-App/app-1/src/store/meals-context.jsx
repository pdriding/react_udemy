import { createContext, useEffect, useState, useCallback } from "react";

export const MealsContext = createContext({
  meals: null,
  cart: null,
  order: null,
  addMeal: (meal) => {},
  sendOrder: () => {},
});

export function MealsContextProvider({ children }) {
  const [meals, setMeals] = useState();
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState();

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();
      const mealsPlusQuantity = meals.map((meal) => ({
        ...meal,
        quantity: 0,
      }));
      setMeals(mealsPlusQuantity);
    }

    loadMeals();
  }, []);

  async function sendOrder(orderData) {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      console.log(33, errorMessage);
      setOrder({ error: errorMessage });
      return;
    }

    const order = await response.json();
    console.log(order);
    setOrder(order);
  }

  const addMeal = useCallback((meal) => {
    setCart((prev) => {
      let exists = false;
      const updated = prev.map((entry) => {
        if (entry.id === meal.id) {
          exists = true;
          return { ...entry, quantity: entry.quantity + 1 };
        }
        return entry;
      });
      meal.quantity = 1;
      return exists ? updated : [...updated, { ...meal }];
    });
  }, []);

  const contextValue = {
    meals,
    cart,
    order,
    addMeal,
    sendOrder,
  };

  return <MealsContext value={contextValue}>{children}</MealsContext>;
}
