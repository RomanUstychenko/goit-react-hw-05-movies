import  { useState, useEffect  } from 'react'
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { searchMovie } from 'components/API/fetch';
import Searchbar from 'components/Searchbar/Searchbar';
import { Gallery } from 'components/Gallery/Gallery';
import { Button } from 'components/Button/Button';
// import scss from "./Movies.module.scss"

export default function Movies() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);


const [searchParams, setSearchParams] = useSearchParams();
const searchQuery = searchParams.get("searchQuery")

  useEffect(() => {
    if (!searchQuery) {
      return 
    }
            setLoading(true)
              const fetchMovie = async () => {
                try {
          const data = await searchMovie(searchQuery, page)
          data.results.length === 0
          ? Notify.failure('There is no photo with this name')
          : setItems(items => [...items, ...data.results]);
          
                } catch (error) {
                  setError(error)
                }
                finally {
                  setLoading(false)
                }
          };
          fetchMovie ()
          }, [searchQuery, page]);

 const onSearch = (inputSearch) => {

  if (inputSearch !== searchQuery) {
     setItems([]);
     setSearchParams({searchQuery: inputSearch});
    setPage(1);
      } else {
        setSearchParams({searchQuery: inputSearch});
      }
    
  }
  
  const LoadMore = () => {
    setPage((prev) => prev + 1)
};

const isImage = Boolean(items.length);
  return (
    <>
    <Searchbar 
      onSubmit={onSearch}/>
    <div>
    {loading && <Loader />}
    {error && <p>Помилка</p>}
    {isImage && <Gallery items={items}/>}
   {isImage && <Button onClick={LoadMore} />}
   
  </div>
  
  </>
  )
}


