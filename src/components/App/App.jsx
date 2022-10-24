import {Routes, Route } from "react-router-dom";
import Movies from 'components/pages/Movies/Movies';
import HomePage from "../pages/HomePage/HomePage";
import MovieDetails from "components/pages/MovieDetails/MovieDetails";
import Cast from "components/pages/Cast/Cast";
import Reviews from "components/pages/Reviews/Reviews";
import Navbar from "components/Navbar/Navbar";
import NotFound from "components/pages/NotFound/NotFound";


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
        flexDirection: 'column'
      }}
    >
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
    </div>
  );
};
