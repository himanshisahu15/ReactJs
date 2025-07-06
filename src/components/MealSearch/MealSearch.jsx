/*
   Uses two state variables:
     - 'search' to track user input in real-time.
     - 'query' to trigger API fetch on form submission.

  On form submit, 'query' is set from 'search', triggering the useMeals hook.

  useMeals fetches data from the meal API and returns 'data' and 'loading' state.

  Extracts meals from 'data'; defaults to an empty array if no data exists.

  Displays:
     - A list of MealCard components if meals are found.
     - A "Loading..." message while fetching.
     - A "No Meal Found" message if search returns no results.
*/


import { useState } from "react";
import { useMeals } from "../../hooks/useMeal";
import MealCard from '../MealCard/MealCard';
import styles from './MealSearch.module.css';

const SEARCH_API=import.meta.env.VITE_MEAL_SEARCH_API;

const MealSearch = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const { data, loading } = useMeals(query ? `${SEARCH_API}${query}` : null);

  const meals = (data && data.meals) || [];

//   console.log("Search value:", search);
// console.log("Query value (used in API):", query);
// console.log("Meals fetched:", meals);
// console.log("Loading state:", loading);



  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Food Finder</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search an item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>

      <div className={styles.mealList}>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
        {loading && <p className={styles.message}>Loading...</p>}

        {!loading && !meals.length && query && (
          <p className={styles.message}>No Meal Found for "{query}"</p>
        )}

      </div>
    </div>
  );
};

export default MealSearch;
