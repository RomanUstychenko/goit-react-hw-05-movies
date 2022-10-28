import {Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from 'components/Loader/loader';
// import Movies from 'components/pages/Movies/Movies';
// import HomePage from "../pages/HomePage/HomePage";
// import MovieDetails from "components/pages/MovieDetails/MovieDetails";
// import Cast from "components/pages/Cast/Cast";
// import Reviews from "components/pages/Reviews/Reviews";
// import Navbar from "components/Navbar/Navbar";
// import NotFound from "components/pages/NotFound/NotFound";

const Movies = lazy(() => import("components/pages/Movies/Movies"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MovieDetails = lazy(() => import("components/pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("components/pages/Cast/Cast"));
const Reviews = lazy(() => import("components/pages/Reviews/Reviews"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const NotFound = lazy(() => import("components/pages/NotFound/NotFound"));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        backgroundColor: '#e0dada',
        paddingTop: '15px'
      }}
    >
      <Suspense fallback={<Loader/>}>
      <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}/>
          <Route path="reviews" element={<Reviews />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
     </Routes>
     </Suspense>
    </div>
  );
};
