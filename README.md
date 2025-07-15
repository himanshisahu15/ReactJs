
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
=======
React Protected Routing App with JWT and Lazy Loading

This is a React application demonstrating protected routes, JWT token-based authentication, dynamic routing using URL parameters, lazy loading, and basic API integration. It includes login functionality with route protection and user-specific content loading.

--------------------------------------------------------------------------
Features-
Login authentication using a locally generated JWT

ProtectedRoute component to restrict access to private pages

Dynamic routing using useParams for filtering data by author

Lazy loading (React.lazy + Suspense) for better performance

API integration with https://picsum.photos and GitHub API

Organized layout using nested routes

Reusable Navbar with navigation and logout

Modular CSS for scoped styling

----------------------------------------------------------------------------
Project Structure-

src/
├── App.jsx
├── Layout/
│   └── Layout.jsx           // Contains Navbar and <Outlet />
├── pages/
│   ├── About.jsx            // GitHub profile fetch
│   ├── Contact.jsx          // Contact form with static data
│   ├── Home.jsx             // Image grid with author search
│   ├── Login.jsx            // Login page with form
│   └── Logout.jsx           // Logout button component
├── components/
│   ├── Navbar.jsx
│   └── ProtectedRoute/
│       └── ProtectedRoute.jsx
│   └── Token/
│       └── Token.js         // JWT generator using 'jose'
├── App.css

-----------------------------------------------------------------------------
Installation & Setup-

Clone the repository:

git clone https://github.com/your-username/react-routing-auth-app.git
cd react-routing-auth-app

Install dependencies:

npm install

Start the development server:

npm run dev
# or
npm start

----------------------------------------------------------------------------
Usage-
Login Credentials

To log in:
Email: himanshi@gmail.com
Password: 12345

Once authenticated, a JWT token is stored in localStorage. This token is validated on every protected route access.

Protected Routes
All /app/* routes are protected. If an unauthenticated user tries to access them, they are redirected to the login page.

Routes Overview
Route	Description
/	Login page
/app	Home page (lazy loaded)
/app/about	GitHub profile fetch (lazy loaded)
/app/contact	Static contact page
/app/author/:name	Filters image list by author name

------------------------------------------------------------------------------------
Key Concepts Used-

1. ProtectedRoute
A custom component that checks if a valid JWT exists and has not expired. If invalid, redirects the user back to the login page.

if (!token || tokenExpired(decoded)) {
  return <Navigate to="/" replace />;
}

2. JWT Token Handling
Uses jose library to generate a signed JWT on login

Validates expiration using jwt-decode

3. Lazy Loading
Pages like About and Home are loaded using React.lazy() to improve performance:

const Page1 = lazy(() => import('./pages/About.jsx'));

4. Dynamic Routing
The Home page accepts a URL parameter /app/author/:authorName to pre-filter authors in the image gallery using useParams.

5. API Integration
About page fetches GitHub user data using fetch

Home fetches image data from https://picsum.photos

---------------------------------------------------------------------------------
Styling-
All components use CSS Modules (e.g. About.module.css, Login.module.css) to prevent style conflicts and scope styles to each component.

Token Details-
Generated using SignJWT from jose package

Stored in localStorage with a 2-hour expiry

ProtectedRoute decodes and validates expiration

How to Add a New Page-
Create a new .jsx file in pages/

Add it to App.jsx inside the <Route> tree

If it's private, place it under /app with <ProtectedRoute>

Future Improvements-
Add signup/register page

Use refresh tokens and secure HTTP-only cookie storage

Display a user dashboard after login

Add form validation with libraries like Formik or Yup
>>>>>>> ae9f540 (committed updated files)
