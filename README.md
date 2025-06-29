## 📘 Project Theory & Key Concepts

This React-based e-commerce routing project demonstrates a wide range of **React ecosystem capabilities** including routing, lazy loading, Redux state management, dynamic API fetching, and responsive design. Below are the main concepts implemented in this application:

---

### 🔁 React Router v6

React Router is used for client-side navigation between components without reloading the page.

- `BrowserRouter`: Wraps the entire app for routing functionality.
- `Routes` and `Route`: Define which components render on each path.
- `Outlet`: Used for rendering child components in nested routes (e.g., pages inside a layout).
- `useNavigate`: Navigate programmatically (e.g., after login).
- `useParams`: Extract dynamic URL parameters (e.g., GitHub username).
- `index` route: Marks the default route under a parent path.

---

### ⏳ Lazy Loading

Implemented using `React.lazy()` and `Suspense`:


🌐 API Integration
Two APIs are integrated for dynamic content:

GitHub API: https://api.github.com/users/username

Used on About page to fetch and display user profile.

Picsum API: https://picsum.photos/v2/list

Used on Home page to display a list of random images.
