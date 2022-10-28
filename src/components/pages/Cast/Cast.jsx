import { useParams } from "react-router-dom"
import  { useState, useEffect } from 'react'
import { getCastsById } from "components/API/fetch";
import Loader from 'components/Loader/loader';
import scss from "./Cast.module.scss"

export default function Cast() {

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

const {movieId} = useParams()
 

  useEffect (() => {
    const fetchCasts = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await getCastsById(movieId)
        setCast(result.cast)
        
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
        
      }
    }
    fetchCasts()
  },[movieId])
  const isCast = Boolean(cast.length);
  return (
    <>
    {loading && <Loader />}
    {error && <p>Помилка</p>}
    {!isCast && <p>We don't have any actors information for this moment</p>}
    <ul className={scss.list}>
    {cast?.map(({ id, profile_path, character, name }) =>
     <li className={scss.listItem} key={id}>
               <img 
                className={scss.img}
               src={profile_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} loading="lazy" />
               <div className={scss.actorDescription}>
                   <p className={scss.actorName}><b>{name}</b></p>
                   <p>Character: {character}</p>
               </div>
           </li>
           )}
 </ul>
    </>
  )
}