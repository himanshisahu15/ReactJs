import { useState } from "react";
import { useMeals } from "../../hooks/useMeal";
import styles from './MealCard.module.css';


/**
 * This component displays a single meal card from the search results.

 *  Props:
 * - Receives `meal` (basic meal info from the search result) as a prop.
 * 
 *  Logic:
 * - Uses `useState` to manage the toggle (show/hide) of full meal details.
 * - When the user clicks "View Details", it triggers a conditional fetch using the `useMeals` custom hook.
 * - The full meal details are fetched from the MealDB API using the meal ID.
 * - The API always returns the meal in an array, so we access the first element with `[0]`.
 * 
 * - Uses logical AND (`&&`) to avoid errors if data is not available yet.
 */


const LOOKUP_API = import.meta.env.VITE_MEAL_LOOKUP_API;

const MealCard = ({ meal }) => {
  const [showDetail, setShowDetail] = useState(false);
  const {data} = useMeals(showDetail ? `${LOOKUP_API}${meal.idMeal}` : null);
 const fullMeal = data && data.meals && data.meals[0];


  const toggleDetail = () => setShowDetail(prev => !prev);

  return (
    <div className={styles.card}>
      <img src={meal.strMealThumb} alt={meal.strMeal} className={styles.image} />
      <h4 className={styles.title}>{meal.strMeal}</h4>
      <p className={styles.category}>{meal.strCategory}</p>

      <button onClick={toggleDetail} className={styles.detailBtn}>
        {showDetail ? 'Hide Details' : 'View Details'}
      </button>

      {showDetail && fullMeal && (
        <div className={styles.details}>
          <p className={styles.instructions}>
            <strong>Instructions:</strong> {fullMeal.strInstructions.slice(0, 150)}...
          </p>
          {fullMeal.strYoutube && (
            <a
              href={fullMeal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className={styles.youtube}
            >
              Watch on YouTube
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default MealCard;
