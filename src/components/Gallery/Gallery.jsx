import scss from "./Gallery.module.scss"
import PropTypes from 'prop-types';
import { NavLink , useLocation } from "react-router-dom";
   

export const Gallery = ({items}) => {

  const location = useLocation();

return (
        <ul className={scss.ImageGallery}>
            {items.map(({id, title }) => (
        <li
        className={scss.ImageGalleryItem}
        key={id}>
        <NavLink  to={`/movies/${id}`} state={{from: location}}>{title}</NavLink >
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