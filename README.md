# Amazon Prime Video Clone 

A full-featured clone of the Amazon Prime Video UI built using **React + TypeScript + Tailwind CSS + Vite** and powered by **TMDB API** for movie data. The app includes dynamic sliders, top 10 charts, responsive navbar, login/register with localStorage, and lazy-loaded movie sections — all designed for a smooth OTT-style experience.

---

##  Features

-  **Authentication**
  - Register/Login with email & password (stored in localStorage)
  - Conditional navbar (login, profile, logout)

-  **Search**
  - Full-screen search modal triggered from navbar
  - Real-time debounced search powered by TMDB
  - Poster cards with fallback for missing images

-  **Movie Display**
  - Featured carousel (slider) for popular movies
  - Movie categories like:
    - Top Rated
    - Kids & Family
    - Horror Movies
    - Top 10 chart (with numbering)
  - Lazy loading via `IntersectionObserver` (`LazySection`)

-  **Responsive Design**
  - Tailwind-powered mobile layout
  - Hidden sidebar/navbar menus on smaller screens

-  **Movie Details**
  - Clicking “More Details” opens a separate movie detail page
  - Shows spinner with black background during lazy-load

-  **Reusable Architecture**
  - Custom `useData` hook for TMDB fetching
  - Modular components (`Navbar`, `Slider`, `MovieSliderRow`, `Top10Movies`, etc.)

---

##  Tech Stack

- **React + TypeScript** (Vite)
- **Tailwind CSS**
- **TMDB API**
- **React Slick (carousel)**
- **LocalStorage** (auth state)
- **IntersectionObserver** (`LazySection`)

---


##  Logical Flow & Component Breakdown

###  `Navbar.tsx`
- Shows primary navigation
- Handles login/logout state from `localStorage`
- Includes a search icon → triggers `<SearchModal />`
- Responsive mobile hamburger menu with dropdown

---

###  `SearchModal.tsx`
- Fullscreen overlay modal triggered by navbar
- Uses `useRef` to focus input on open
- Debounced API calls (`setTimeout`)
- Results shown as responsive grid of movie cards

---

###  `Slider/Slider.tsx`
- Main featured movie slider using `react-slick`
- Dynamically styled headings via `fontStyles.ts`
- Buttons: “Watch Now” and “More Details” (routes to movie detail)

---

###  `MovieSliderRow.tsx`
- Reusable component for horizontal sliders like "Top Rated", "Kids", etc.
- Props:
  - `title`, `fetchUrl`, `tag`, `load` (for lazy)
- Uses `useData` hook
- Integrates slick carousel horizontally

---

###  `Top10Movies.tsx`
- Shows Top 10 movies with styled numbered cards
- Lazy-loaded via `LazySection`

---

###  `LazyComponent/LazyComponent.tsx`
- Wrapper component using `IntersectionObserver`
- Accepts `render={(visible) => JSX}` to conditionally render sliders only when visible

---

###  `MovieDetail.tsx`
- Uses `useParams()` to get movie ID
- Fetches full movie info from TMDB
- Displays loading spinner on initial load

---

###  `useData` Hook

const finalUrl = url.includes("page=")
  ? url
  : `${url}${url.includes("?") ? "&" : "?"}page=${page}`;
 
 //for pagination
Appends page parameter only if not already present

Supports:

append: true → infinite scroll
append: false → fresh fetch


---

 Search Logic
Debounced search after 3 seconds using setTimeout

inputRef.focus() ensures the field stays focused

Uses TMDB /search/movie?query= endpoint

Fallback image shown if no poster available

---

#  Set environment variables

# .env

VITE_TMDB_API_KEY=your_tmdb_key

VITE_TMDB_API_URL=https://api.themoviedb.org/3/movie/

VITE_KIDS_MOVIES_URL=https://api.themoviedb.org/3/discover/movie?with_genres=10751

VITE_HORROR_MOVIES_URL=https://api.themoviedb.org/3/discover/movie?with_genres=27

---

📸 UI Preview

 Amazon-style slider

 Full search modal

 Top 10 list

 Lazy-loaded rows

 Movie cards with detail page

 Mobile responsive

-------------------------
