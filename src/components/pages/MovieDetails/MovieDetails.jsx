
import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieById } from 'components/API/fetch';

export default function MovieDetails() {

  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const { movieId } = useParams()



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

  return (
    <div>MovieDetails</div>
  )
}
