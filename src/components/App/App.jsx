import {Routes, Route } from "react-router-dom";
import Movies from 'components/pages/Movies/Movies';
import HomePage from "../pages/HomePage/HomePage";
import MovieDetails from "components/pages/MovieDetails/MovieDetails";
import Cast from "components/pages/Cast/Cast";
import Navbar from "components/Navbar/Navbar";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="//movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}/>
      
      </Route>
     </Routes>
    </div>
  );
};
