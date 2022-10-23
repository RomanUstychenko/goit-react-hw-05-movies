import  { useState, useEffect  } from 'react'

import { getImage } from 'components/API/fetch';
import { Gallery } from 'components/Gallery/Gallery';
import Loader from 'components/Loader/loader';

export default function HomePage() {

  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

 
  useEffect(() => {
    console.log("didMount")
    fetchImage();
  }, []);

  useEffect(() => {
    console.log("didUpdate")
    fetchImage();
  }, [page]);
    //     componentDidUpdate(__, prevState) {
    //         const {page} = this.state;
    //         if (prevState.page !== page) {
    //             this.fetchImage();
    //         }
    //     } 

 const fetchImage = async () => {
  setLoading(true)

try {
  const data = await getImage(page)
  console.log(data.results)
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

const LoadMore = () => {
  setPage((prev) => prev +1)
}
  const isImage = Boolean(items.length);
return (
  <div>
         {loading && <Loader />}
         {error && <p>Помилка</p>}
         {isImage && <Gallery items={items}/>}
{/* //           {isImage && <Button onClick={LoadMore} />} */}
       </div>
)
}
