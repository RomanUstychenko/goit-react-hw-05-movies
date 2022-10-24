
import  { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from 'components/API/fetch';
import Loader from 'components/Loader/loader';

export default function MovieDetails() {

  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const { movieId } = useParams();
const navigate = useNavigate();



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
const goBack = () => navigate(-1);
  return (
   
    <div>
      <button onClick={goBack}>Go back</button>
      {loading && <Loader />}
      {error && <p>Помилка</p>}
      {state && 
    <>
      <img 
      src={state.poster_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="" />
      <h1>{state.title}</h1>
      </>}
      </div>
    
  )
}
