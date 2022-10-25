import { useParams } from "react-router-dom"
import  { useState, useEffect } from 'react'
import { getCastsById } from "components/API/fetch";

export default function Cast() {

  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const {movieId} = useParams()
  // console.log(param)

  useEffect (() => {
    const fetchCasts = async () => {
      try {
        setLoading(true)
      setError(null)
        const result = await getCastsById(movieId)
        setCasts(result)
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchCasts()
  },[movieId])

  return (
    <>
    <div>Cast</div>

    </>
  )
}
