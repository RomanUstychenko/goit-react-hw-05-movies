import { useParams } from "react-router-dom"
import  { useState, useEffect } from 'react'
import { getCastsById } from "components/API/fetch";
import Loader from 'components/Loader/loader';

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
        console.log(result)
        console.log(cast)
      } catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
        // console.log(cast)
      }
    }
    fetchCasts()
  },[movieId])
  const isCast = Boolean(cast.length); 
// const elem = () => {
//   if (cast === null) {
//      return 
//   } else {
//     console.log(cast)
//     cast?.map(( {id, profile_path, character, name} ) => {
//     return (
//     <li key={id}>
//     {/* <img src={profile_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} loading="lazy" /> */}
//     <div>
//         <p><b>{name}</b></p>
//         <p>Character: {character}</p>
//     </div>
// </li>)}
// )
//   }
// }
  return (
    <>
    {loading && <Loader />}
    {error && <p>Помилка</p>}
    {isCast && <p>We don't have any actors information for this moment</p>}
    <ul>
    {cast?.map(({ id, profile_path, character, name }) => <li key={id}>
               <img src={profile_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} loading="lazy" />
               <div>
                   <p><b>{name}</b></p>
                   <p>Character: {character}</p>
               </div>
           </li>
           )}
 </ul>

    </>
  )
}


// export default function Cast() {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//       const getMovie = async () => {
//           setError(null)
//           setCast(null)

//           try {
//               const data = await getCastsById(movieId)

//               setCast(data.cast)
// console.log(data.cast)
//           } catch (error) {
//               setError(error)
//           }
//       }
//       getMovie();
//   }, [movieId]);

//   const isMovie = cast?.length === 0 || error;

//   return (
//       <div>
//           {isMovie && <p>We don't have any actors information for this moment</p>}
//           {cast?.map(({ id, profile_path, character, name }) => <li key={id}>
//               <img src={profile_path === null ? 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background-vector-illustration.jpg?ver=6' : `https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} loading="lazy" />
//               <div>
//                   <p><b>{name}</b></p>
//                   <p>Character: {character}</p>
//               </div>
//           </li>
//           )}
//       </div>
//   );
// }