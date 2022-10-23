import scss from "./Gallery.module.scss"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
// import GalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
   

export const Gallery = ({items}) => {
return (
        <ul className={scss.ImageGallery}>
            {items.map(({id, title }) => (
        <li
        className={scss.ImageGalleryItem}
        key={id} >
        <Link to={`/${id}`}>  {title}  </Link>
          
            
        </li>))}
        </ul>
    )};

    Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
//   onClick: PropTypes.func.isRequired,
};


// const ImageGalleryItem = ({ webformatURL, tags, onClick}) => {

//     return <img
//     className={scss.ImageGalleryItemImage}
//     src={webformatURL}
//      alt={tags}
//      onClick={onClick}
//     />
//     }