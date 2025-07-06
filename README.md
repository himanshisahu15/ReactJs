# 🍽️ Meal Finder React App

The **Meal Finder** is a responsive React application that lets users search for meals and display results using a custom hook for API fetching. It uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch real-time meal data based on user search input.

---

## 🚀 Features

- 🔍 Search for meals by keyword
- 🧠 Uses a **custom hook** (`useMeals`) to fetch API data
- 🖼️ Meal cards with images and names
- 💅 Modular CSS for scoped styling
- ⚡ Responsive design and fast performance

---

🌐 API Used
-TheMealDB API
Endpoint used:

https://www.themealdb.com/api/json/v1/1/search.php?s=<searchTerm>


🔍 How It Works
MealSearch holds local state for search and query.

useMeals(query) is called to fetch data from TheMealDB API.

Results are displayed using the MealCard component (lazy-loaded).



📁 Custom Hook Logic
js
Copy
Edit
const useMeals = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(res => res.json())
      .then(json => {
        setData(json.meals || []);
        setLoading(false);
      });
  }, [query]);

  return { data, loading };
};



🖼️ Example UI
Input field to enter search term

Dynamically loaded cards showing:

Meal name

Thumbnail image