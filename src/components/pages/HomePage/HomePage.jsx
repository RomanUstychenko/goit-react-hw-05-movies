import  { useState, useEffect  } from 'react'
import scss from "./HomePage.module.scss"
import { getMovie } from 'components/API/fetch';
import { Gallery } from 'components/Gallery/Gallery';
import Loader from 'components/Loader/loader';
import { Button } from 'components/Button/Button';


export default function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true)
    
    try {
      const data = await getMovie(page)
      setItems((items) => {
          return [...items, ...data.results]
              })
    } catch (error) {
      setError(error)
    }
    finally {
      setLoading(false)
    }
    };
    fetchMovie();
  }, [page]);

const LoadMore = () => {
  setPage((prev) => prev +1)
}
  const isImage = Boolean(items.length);
return (
  <header className={scss.headerHome}>
         {loading && <Loader />}
         {error && <p>Помилка</p>}
         {isImage && <Gallery items={items}/>}
        {isImage && <Button onClick={LoadMore} />}
       </header>
)
}
