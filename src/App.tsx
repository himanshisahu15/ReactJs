import Navbar from './components/Navbar/Navbar'
import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Login from './pages/Login/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import Movie from './pages/Movie/Movie';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Suspense, lazy } from 'react';

const MovieDetail = lazy(() => import("./components/MovieDetail/MovieDetail"));

import Spinner from './components/Spinner/Spinner';
function App() {

  //get current url location
  const location = useLocation();

  return (
    <>
      {/* if current page is not login then show navbar */}
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/:id" element={
          <Suspense fallback={<Spinner></Spinner>}>
            <MovieDetail />
          </Suspense>
        } />
      </Routes>

    </>
  )
}

export default App
