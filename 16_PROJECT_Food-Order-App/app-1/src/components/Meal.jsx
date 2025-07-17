import AddToCart from "./AddToCart";

export default function Meal({ meal }) {
  return (
    <>
      <div className="meal-item">
        <article>
          <img
            src={`http://localhost:3000/${meal.image}`}
            alt="Delicious Meal"
          />

          <div className="meal-item-description">
            <h3>{meal.name}</h3>
            <div>
              <span className="meal-item-price">{meal.price}</span>
            </div>
            <p>{meal.description}</p>
          </div>

          <AddToCart meal={meal} />
        </article>
      </div>
    </>
  );
}
