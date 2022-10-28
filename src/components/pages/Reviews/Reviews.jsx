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
  return (
    <>
    {loading && <Loader />}
    {error && <p>Помилка</p>}
    {!isReviews && <p>We don't have any actors information for this moment</p>}
    <ul>
    {reviews?.map(({ id, author, content }) => <li key={id}>    
                   <p><b>Author: {author}</b></p>
                   <p> {content}</p>
           </li>
           )}
 </ul>
    </>
  )
}