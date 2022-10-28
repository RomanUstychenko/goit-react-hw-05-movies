
import  { useState, useEffect } from 'react'
// import { , useSearchParams } from 'react-router-dom';
import { useParams, useNavigate, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'components/API/fetch';
import Loader from 'components/Loader/loader';
import scss from './MovieDetails.module.scss'

export default function MovieDetails() {

  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const { movieId } = useParams();
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  
  const fetchMovie = async () => {
   
    try { 
      setLoading(true)
      setError(null)
      const result = await getMovieById(movieId)
      setState(result)
      
    } catch (error) {
      setError(error)
    
    }
    finally {
      setLoading(false)
    }
  }
  fetchMovie()
}, [movieId]);
const from = location.state?.from || `/movies`;
const goBack = () => navigate(from);
const isCastPage = location.pathname.includes("cast")
const castLink = isCastPage ? `/movies/${movieId}` : `/movies/${movieId}/cast`;
const isReviewsPage = location.pathname.includes("reviews")
const reviewsLink = isReviewsPage ? `/movies/${movieId}` : `/movies/${movieId}/reviews`;
  return (
   <>
   {loading && <Loader />}
      {error && <p>Помилка</p>}
   <button onClick={goBack}>Go back</button>
    <div className={scss.movieDetails}>
      {state && 
    <>
      <img 
      src={state.poster_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="" />
      <div>
      <h1>{state.title} ({state.release_date})</h1>
      <p>User Score {state.vote_average} </p>
      <h2>Overview</h2>
      <p>{state.overview}</p>
      <h2>Genres</h2>
      <p>{state.genres.map(({ name }) => `${name}`).join(', ')}</p>
      </div>
      
      </>}
      </div>
      <div>
        <p>Additional information</p>
        <Link to={castLink} state={{ from: from }}>Cast</Link>
        <Link to={reviewsLink} state={{ from: from }}>Reviews</Link>
        <Outlet />
      </div>
      </>
  )
}
