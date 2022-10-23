import scss from "./Gallery.module.scss"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
   

export const Gallery = ({items}) => {
return (
        <ul className={scss.ImageGallery}>
            {items.map(({id, title }) => (
        <li
        className={scss.ImageGalleryItem}
        key={id} >
        <Link to={`/movies/${id}`}>  {title}  </Link>
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
};