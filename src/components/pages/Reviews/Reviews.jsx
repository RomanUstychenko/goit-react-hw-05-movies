import { useParams } from "react-router-dom"
import  { useState, useEffect } from 'react'
import { getReviewsById } from "components/API/fetch";
import Loader from 'components/Loader/loader';

export default function Reviews() {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const {movieId} = useParams()
 

  useEffect (() => {
    const fetchCasts = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await getReviewsById(movieId)
        setReviews(result.results)
        console.log(result.results)
        
        
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
        
        
      }
    }
    fetchCasts()
  },[movieId])
  
  const isReviews = Boolean(reviews.length); 
  console.log(isReviews)
  return (
    <>
    {loading && <Loader />}
    {error && <p>Помилка</p>}
    {!isReviews && <p>We don't have any actors information for this moment</p>}
    {/* <ul>
    {cast?.map(({ id, profile_path, character, name }) => <li key={id}>
               <img src={profile_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} loading="lazy" />
               <div>
                   <p><b>{name}</b></p>
                   <p>Character: {character}</p>
               </div>
           </li>
           )}
 </ul> */}

    </>
  )
}